import React from "react";
import ArtifactCarousel from "./ArtifactCarousel";

export default function Museum({ revealedArtifacts }) {
  const sites = Object.keys(revealedArtifacts || {});

  if (sites.length === 0) {
    return <p className="p-4">No artifacts discovered yet. Start digging!</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🏛 Museum of Discoveries</h2>
      {sites.map((site) => (
        <div key={site} className="mb-8">
          <h3 className="text-xl font-bold mb-2">{site}</h3>
          <ArtifactCarousel artifacts={revealedArtifacts[site]} />
        </div>
      ))}
    </div>
  );
}
