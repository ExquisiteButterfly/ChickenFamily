import React from "react";

export default function Achievements({ earnedAchievements }) {
  if (!earnedAchievements || earnedAchievements.length === 0) {
    return <p className="text-center">🌟 No achievements unlocked yet.</p>;
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold text-center">🌟 Achievements</h2>
      <ul className="space-y-2 text-center">
        {earnedAchievements.map((ach) => (
          <li
            key={ach}
            className="bg-yellow-100 text-black px-4 py-2 rounded-lg shadow font-bold"
          >
            {ach}
          </li>
        ))}
      </ul>
    </div>
  );
}
