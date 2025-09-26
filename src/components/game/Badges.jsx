import React from "react";

export default function Badges({ earnedBadges }) {
  if (!earnedBadges || earnedBadges.length === 0) {
    return <p className="text-center">🏅 No badges yet. Keep digging!</p>;
  }

  return (
    <div className="p-4 space-y-4">
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
