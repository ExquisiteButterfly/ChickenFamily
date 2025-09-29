import React from "react";

export default function ArtifactCarousel({ artifacts }) {
  if (!artifacts || artifacts.length === 0) {
    return <p>No artifacts yet.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4 py-2">
        {artifacts.map((a) => (
          <div
            key={a.id}
            className="min-w-[200px] bg-white text-black rounded-lg shadow p-4 flex-shrink-0"
          >
            <img
              src={a.img}
              alt={a.name}
              className="w-32 h-32 mx-auto mb-2 object-contain"
            />
            <h3 className="font-bold text-center">{a.name}</h3>
            <p className="text-sm text-center">{a.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
