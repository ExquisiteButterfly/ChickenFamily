import React, { useEffect, useState } from "react";
import useSound from "./useSound";
import ConfettiBurst from "./ConfettiBurst";

export default function Badges({ earnedBadges }) {
  const playBadge = useSound("/game-audio/badge.wav");
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    const prev = parseInt(localStorage.getItem("cf_game_badges_count") || "0", 10);
    const cur = (earnedBadges || []).length;
    if (cur > prev) {
      playBadge();
      setConfetti(true);
      setTimeout(() => setConfetti(false), 1500);
      localStorage.setItem("cf_game_badges_count", String(cur));
    }
  }, [earnedBadges]);

  if (!earnedBadges || earnedBadges.length === 0) {
    return <p className="text-center">🏅 No badges yet. Keep digging!</p>;
  }

  return (
    <div className="p-4 space-y-4 relative">
      {confetti && <ConfettiBurst duration={1500} count={40} />}
      <h2 className="text-2xl font-bold text-center">🏅 Earned Badges</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {earnedBadges.map((badge) => (
          <div
            key={badge}
            className="bg-white text-black px-4 py-2 rounded-lg shadow font-bold"
          >
            {badge}
          </div>
        ))}
      </div>
    </div>
  );
}
