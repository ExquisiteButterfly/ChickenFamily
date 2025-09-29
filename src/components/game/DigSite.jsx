import React, { useEffect, useRef, useState } from "react";
import artifacts from "./artifacts";
import useSound from "./useSound";

export default function DigSite({
  currentSite,
  revealedArtifacts,
  setRevealedArtifacts,
  earnedBadges,
  setEarnedBadges,
  earnedAchievements,
  setEarnedAchievements,
}) {
  const [grid, setGrid] = useState(Array(25).fill(false)); // 5x5 dig grid
  const [currentArtifact, setCurrentArtifact] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [lastAnswer, setLastAnswer] = useState(null); // ✅ track last choice
  const [siteComplete, setSiteComplete] = useState(null);
  const clickCountRef = useRef(0);

  // Sounds
  const playDig = useSound("/game-audio/dig.wav");
  const playDiscovery = useSound("/game-audio/discovery.wav");
  const playBadge = useSound("/game-audio/badge.wav");
  const playAchievement = useSound("/game-audio/achievement.wav");
  const playCorrect = useSound("/game-audio/correct.wav"); // ✅ new
  const playWrong = useSound("/game-audio/wrong.wav");     // ✅ new

  // Reset listener
  useEffect(() => {
    const onReset = () => {
      setGrid(Array(25).fill(false));
      setCurrentArtifact(null);
      setShowQuiz(false);
      setQuizAnswered(false);
      setLastAnswer(null);
      setSiteComplete(null);
      clickCountRef.current = 0;
    };
    window.addEventListener("game-reset", onReset);
    return () => window.removeEventListener("game-reset", onReset);
  }, []);

  const handleDig = (idx) => {
    playDig();
    clickCountRef.current += 1;

    setGrid((g) => {
      if (g[idx]) return g; // already dug
      const ng = [...g];
      ng[idx] = true;
      return ng;
    });

    // Chance to reveal an artifact
    if (Math.random() < 0.18 && currentSite) {
      const siteArtifacts = artifacts[currentSite] || [];
      const revealed = revealedArtifacts[currentSite] || [];
      const next = siteArtifacts.find((a) => !revealed.includes(a.id));
      if (next) {
        setCurrentArtifact(next);
        setShowQuiz(true);
        setQuizAnswered(false);
        setLastAnswer(null);
        playDiscovery();

        // Quick Digger achievement: artifact within first 3 digs
        if (clickCountRef.current <= 3 && !earnedAchievements.includes("Quick Digger")) {
          setEarnedAchievements([...earnedAchievements, "Quick Digger"]);
          playAchievement();
        }
      }
    }
  };

  const onAnswer = (opt) => {
    if (!currentArtifact) return;
    const correct = currentArtifact.quiz?.answer === opt;
    setLastAnswer(opt);
    setQuizAnswered(true);

    if (correct) {
      playCorrect();
    } else {
      playWrong();
      return; // ❌ wrong answers don’t progress, keep quiz open
    }

    // ✅ Only if correct → record artifact
    const site = currentSite;
    if (!site) return;
    const prev = revealedArtifacts[site] || [];
    if (!prev.includes(currentArtifact.id)) {
      const updated = { ...revealedArtifacts, [site]: [...prev, currentArtifact.id] };
      setRevealedArtifacts(updated);

      // Persist global progress
      try {
        const flat = Object.values(updated).flat();
        localStorage.setItem("cf_game_revealed", JSON.stringify(flat));
      } catch {}

      // Site badge when all artifacts found
      const total = artifacts[site]?.length || 0;
      if (updated[site].length === total && total > 0) {
        const badgeName = `${site} Explorer`;
        if (!earnedBadges.includes(badgeName)) {
          setEarnedBadges([...earnedBadges, badgeName]);
          playBadge();
        }
        setSiteComplete(site);
      }

      // Completionist: all artifacts in all sites
      const allTotal = Object.values(artifacts).reduce((s, arr) => s + arr.length, 0);
      const allFound = Object.values(updated).reduce((s, arr) => s + arr.length, 0);
      if (allFound === allTotal && allTotal > 0 && !earnedAchievements.includes("Completionist")) {
        setEarnedAchievements([...earnedAchievements, "Completionist"]);
        playAchievement();
      }
    }
  };

  if (!currentSite) {
    return <p className="text-center">Select a site on the Map to begin digging.</p>;
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold text-center">{currentSite} Dig Site</h2>
      <div className="grid grid-cols-5 gap-2 justify-center max-w-sm mx-auto">
        {grid.map((dug, idx) => (
          <button
            key={idx}
            onClick={() => handleDig(idx)}
            className={`w-14 h-14 md:w-16 md:h-16 rounded-lg shadow ${
              dug ? "bg-yellow-200" : "bg-yellow-400 hover:bg-yellow-300"
            }`}
            aria-label={`Dig tile ${idx + 1}`}
          >
            {dug ? "🟫" : "⛏️"}
          </button>
        ))}
      </div>

      {showQuiz && currentArtifact && (
        <div className="bg-white text-black p-4 rounded-lg shadow-md max-w-xl mx-auto">
          <h3 className="font-bold">{currentArtifact.name}</h3>
          <img
            src={currentArtifact.img}
            alt={currentArtifact.name}
            className="w-32 h-32 md:w-40 md:h-40 my-2 object-contain"
          />
          {currentArtifact.quiz && (
            <div className="space-y-2">
              <p className="font-semibold">{currentArtifact.quiz.question}</p>
              <div className="flex flex-wrap gap-2">
                {currentArtifact.quiz.options.map((o) => (
                  <button
                    key={o}
                    onClick={() => onAnswer(o)}
                    className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ✅ Feedback section */}
          {quizAnswered && lastAnswer && (
            <>
              {lastAnswer === currentArtifact.quiz?.answer ? (
                <p className="text-green-700 mt-2">
                  ✅ Nice digging! Check the Museum to see your collection.
                </p>
              ) : (
                <p className="text-red-600 mt-2">
                  ❌ Try again!
                </p>
              )}
            </>
          )}
        </div>
      )}

      {siteComplete && (
        <div className="bg-green-100 border border-green-500 text-green-700 p-4 rounded-lg shadow text-center">
          ✅ You finished digging in <b>{siteComplete}</b>!<br />
          Please pick another city on the <b>Map</b> or check your <b>Museum</b> / <b>Badges</b>.
        </div>
      )}
    </div>
  );
}
