import React from "react";

export default function Badges({ earnedBadges }) {
  if (!earnedBadges || earnedBadges.length === 0) {
    return <p className="p-4">No badges earned yet. Keep digging!</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🎖 Badges</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-4 py-2">
          {earnedBadges.map((b) => (
            <div
              key={b}
              className="min-w-[160px] bg-white text-black rounded-lg shadow p-4 flex-shrink-0 text-center"
            >
              <img
                src={`/game-assets/badge-${b.toLowerCase().replace(/\s+/g, "-")}.png`}
                alt={b}
                className="w-20 h-20 mx-auto mb-2 object-contain"
              />
              <h3 className="font-bold">{b}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
