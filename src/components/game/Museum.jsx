import React from "react";
import ArtifactCarousel from "./ArtifactCarousel";

export default function Museum({ revealedArtifacts }) {
  const sites = Object.keys(revealedArtifacts || {});

  if (sites.length === 0) {
    return <p className="text-center">🏛️ No artifacts discovered yet. Start digging!</p>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-4">🏛️ Museum Collection</h2>
      {sites.map((site) => (
        <div key={site} className="bg-white text-black p-4 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2">{site}</h3>
          <ArtifactCarousel artifacts={revealedArtifacts[site]} />
        </div>
      ))}
    </div>
  );
}
