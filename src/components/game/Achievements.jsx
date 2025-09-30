import React, { useEffect, useState } from "react";
import useSound from "./useSound";
import ConfettiBurst from "./ConfettiBurst";

const ICONS = {
  "Lucky Digger": "🍀",
  "Quick Digger": "⚡",
  "Quiz Master": "🧠",
  "World Explorer": "🌍",
  "Completionist": "🏆",
};

export default function Achievements({ earnedAchievements }) {
  const playAchievement = useSound("/game-audio/achievement.wav");
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const prev = parseInt(localStorage.getItem("cf_game_ach_count") || "0", 10);
    const cur = (earnedAchievements || []).length;
    if (cur > prev) {
      playAchievement();
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2500);
      localStorage.setItem("cf_game_ach_count", String(cur));
    }
  }, [earnedAchievements, playAchievement]);

  if (!earnedAchievements?.length) {
    return <p className="text-center">No achievements yet. Keep digging and quizzing!</p>;
  }

  return (
    <div className="p-4 space-y-4 relative">
      {showConfetti && <ConfettiBurst />}
      <h2 className="text-2xl font-bold text-center">🌟 Achievements</h2>
      <ul className="space-y-2 max-w-md mx-auto">
        {earnedAchievements.map((ach) => (
          <li
            key={ach}
            className="bg-yellow-100 text-black px-4 py-2 rounded-lg shadow font-bold flex items-center gap-2"
          >
            <span className="text-xl">{ICONS[ach] || "✨"}</span>
            <span>{ach}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
