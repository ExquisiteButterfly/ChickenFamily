import React, { useEffect, useMemo, useState } from "react";
import artifacts from "./artifacts";

export default function GameNavbar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "map", label: "Map" },
    { id: "dig", label: "Dig Site" },
    { id: "museum", label: "Museum" },
    { id: "badges", label: "Badges" },
    { id: "achievements", label: "Achievements" },
    { id: "timeline", label: "Timeline" },
    { id: "glossary", label: "Glossary" },
    { id: "miniGame", label: "Mini-Game" },
    { id: "creative", label: "Creative Mode" },
  ];

  const totalArtifacts = useMemo(() => {
    try {
      return Object.values(artifacts).reduce((sum, arr) => sum + arr.length, 0);
    } catch {
      return 0;
    }
  }, []);

  const [howToOpen, setHowToOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  // Auto-open how-to on first visit
  useEffect(() => {
    const seen = localStorage.getItem("cf_game_intro_seen");
    if (!seen) setHowToOpen(true);
  }, []);

  // Progress bar updates
  useEffect(() => {
    const update = () => {
      const raw = localStorage.getItem("cf_game_revealed");
      let count = 0;
      if (raw) {
        try {
          count = JSON.parse(raw).length || 0;
        } catch {}
      }
      setProgress(
        totalArtifacts ? Math.round((count / totalArtifacts) * 100) : 0
      );
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, [totalArtifacts]);

  const resetGame = () => {
    localStorage.removeItem("cf_game_revealed");
    localStorage.removeItem("cf_game_badges_count");
    localStorage.removeItem("cf_game_ach_count");
    localStorage.removeItem("cf_game_intro_seen");
    window.dispatchEvent(new Event("game-reset"));
    alert("Game progress reset!");
  };

  const closeHowTo = () => {
    localStorage.setItem("cf_game_intro_seen", "1");
    setHowToOpen(false);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Tabs + Controls */}
      <div className="flex flex-wrap items-center gap-2 justify-center md:justify-between">
        <div className="flex flex-wrap gap-2 justify-center">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-3 md:px-4 py-2 rounded-lg font-bold text-sm md:text-base transition ${
                activeTab === t.id
                  ? "bg-yellow-500 text-black"
                  : "bg-white text-gray-800 hover:bg-yellow-200"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setHowToOpen(true)}
            className="px-3 py-2 rounded-lg bg-blue-600 text-white font-bold"
          >
            How to Play
          </button>
          <button
            onClick={resetGame}
            className="px-3 py-2 rounded-lg bg-red-600 text-white font-bold"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-green-500 h-3 rounded-full transition-all"
          style={{ width: `${progress}%` }}
          title={`${progress}% complete`}
        />
      </div>

      {/* How-to modal */}
      {howToOpen && (
        <div className="fixed inset-0 bg-black/50 z-[10000] flex items-center justify-center p-4">
          <div className="bg-white text-black max-w-lg w-full rounded-2xl p-6 shadow-2xl">
            <h2 className="text-2xl font-extrabold mb-2">Welcome, Explorer! 🗺️</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Go to <b>Map</b> and pick a site.</li>
              <li>In <b>Dig Site</b>, tap tiles to dig. Listen for sounds!</li>
              <li>Answer quizzes to learn about each artifact.</li>
              <li>Check the <b>Museum</b> to see your collection and progress.</li>
              <li>Unlock <b>Badges</b> and <b>Achievements</b>. Finish all for <b>Completionist</b>!</li>
              <li>Use <b>Reset</b> any time to start fresh.</li>
            </ul>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeHowTo}
                className="px-4 py-2 bg-yellow-500 rounded-lg font-bold"
              >
                Start
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
