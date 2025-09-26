import React from "react";

export default function ArtifactCarousel({ artifacts }) {
  if (!artifacts || artifacts.length === 0) {
    return <p>No artifacts yet.</p>;
  }

  return (
    <div className="flex gap-4 overflow-x-auto p-2">
      {artifacts.map((artifact) => (
        <div
          key={artifact.id}
          className="flex-shrink-0 w-40 bg-yellow-50 rounded-lg shadow p-3 text-center"
        >
          <img
            src={artifact.img}
            alt={artifact.name}
            className="w-24 h-24 mx-auto mb-2"
          />
          <h4 className="font-bold">{artifact.name}</h4>
          <p className="text-sm mt-1">{artifact.fact}</p>
        </div>
      ))}
    </div>
  );
}
