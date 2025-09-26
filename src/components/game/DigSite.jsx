import React, { useState } from "react";
import artifacts from "./artifacts";

export default function DigSite({
  currentSite,
  revealedArtifacts,
  setRevealedArtifacts,
  earnedBadges,
  setEarnedBadges,
  earnedAchievements,
  setEarnedAchievements,
}) {
  const [progress, setProgress] = useState(0);
  const [currentArtifact, setCurrentArtifact] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswered, setQuizAnswered] = useState(false);

  if (!currentSite) {
    return <p className="text-center">Select a site from the Map first.</p>;
  }

  const siteArtifacts = artifacts[currentSite] || [];
  const discovered = revealedArtifacts[currentSite] || [];

  const handleDig = () => {
    if (progress >= 100) return;

    const step = 100 / siteArtifacts.length;
    const newProgress = Math.min(100, progress + step);
    setProgress(newProgress);

    if (newProgress % step === 0) {
      const nextArtifact = siteArtifacts[discovered.length];
      if (nextArtifact) {
        setCurrentArtifact(nextArtifact);
        setShowQuiz(true);
      }
    }
  };

  const handleAnswer = (choice) => {
    if (!currentArtifact) return;
    if (choice === currentArtifact.quiz.answer) {
      const updated = {
        ...revealedArtifacts,
        [currentSite]: [...discovered, currentArtifact],
      };
      setRevealedArtifacts(updated);

      // Badge unlock
      if (
        updated[currentSite].length === siteArtifacts.length &&
        !earnedBadges.includes(currentSite + " Explorer")
      ) {
        setEarnedBadges([...earnedBadges, currentSite + " Explorer"]);
      }

      // Master badge unlock
      const totalSites = Object.keys(artifacts).length;
      const completedSites = Object.keys(updated).filter(
        (s) => updated[s].length === artifacts[s].length
      ).length;

      if (
        completedSites === totalSites &&
        !earnedAchievements.includes("Master Archaeologist")
      ) {
        setEarnedAchievements([
          ...earnedAchievements,
          "Master Archaeologist",
        ]);
      }

      setQuizAnswered(true);
    } else {
      alert("❌ Try again!");
    }
  };

  return (
    <div className="p-4 md:p-6 space-y-4">
      <h2 className="text-xl md:text-2xl font-bold text-center">
        Dig Site: {currentSite}
      </h2>

      <div className="w-full bg-gray-300 rounded-full h-6 md:h-8">
        <div
          className={`h-6 md:h-8 rounded-full transition-all ${
            progress >= 100 ? "bg-green-500" : "bg-yellow-500"
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>

      <button
        onClick={handleDig}
        disabled={progress >= 100}
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-lg shadow-md"
      >
        {progress < 100 ? "⛏️ Dig Here" : "✅ Site Complete"}
      </button>

      {showQuiz && currentArtifact && !quizAnswered && (
        <div className="bg-white text-black p-4 rounded-lg shadow-md">
          <h3 className="font-bold mb-2">{currentArtifact.quiz.question}</h3>
          <div className="flex flex-col gap-2">
            {currentArtifact.quiz.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className="bg-yellow-100 hover:bg-yellow-300 px-3 py-2 rounded"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {quizAnswered && currentArtifact && (
        <div className="bg-green-100 text-black p-4 rounded-lg shadow-md">
          <h3 className="font-bold">{currentArtifact.name}</h3>
          <img
            src={currentArtifact.img}
            alt={currentArtifact.name}
            className="w-32 h-32 md:w-40 md:h-40 my-2"
          />
          <p>{currentArtifact.fact}</p>
        </div>
      )}
    </div>
  );
}
