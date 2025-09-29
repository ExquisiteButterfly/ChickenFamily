import React from "react";

export default function Achievements({ earnedAchievements }) {
  if (!earnedAchievements || earnedAchievements.length === 0) {
    return <p className="p-4">No achievements yet. Complete challenges to earn them!</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🏆 Achievements</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-4 py-2">
          {earnedAchievements.map((a) => (
            <div
              key={a}
              className="min-w-[160px] bg-white text-black rounded-lg shadow p-4 flex-shrink-0 text-center"
            >
              <img
                src={`/game-assets/achieve-${a.toLowerCase().replace(/\s+/g, "-")}.png`}
                alt={a}
                className="w-20 h-20 mx-auto mb-2 object-contain"
              />
              <h3 className="font-bold">{a}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
