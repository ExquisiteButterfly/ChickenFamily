import React from "react";
import artifacts from "./artifacts";

export default function Museum({ revealedArtifacts }) {
  const sites = Object.keys(artifacts);

  if (!sites.length) {
    return <p className="text-center">No artifacts defined yet.</p>;
  }

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold text-center">🏛️ Museum Collection</h2>

      {sites.map((site) => {
        const siteArtifacts = artifacts[site];
        const found = revealedArtifacts[site] || [];
        const pct = Math.round((found.length / siteArtifacts.length) * 100);

        return (
          <div key={site} className="bg-white text-black p-4 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">
              {site} ({found.length}/{siteArtifacts.length}) – {pct}%
            </h3>
            <div className="flex flex-wrap gap-4">
              {siteArtifacts.map((a) => (
                <div
                  key={a.id}
                  className={`w-28 h-28 border rounded-lg flex items-center justify-center ${
                    found.includes(a.id)
                      ? "bg-green-100 border-green-500"
                      : "bg-gray-200 border-gray-400"
                  }`}
                >
                  {found.includes(a.id) ? (
                    <img
                      src={a.img}
                      alt={a.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <span className="text-gray-500">?</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
