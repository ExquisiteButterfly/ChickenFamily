import React, { useMemo, useState, useEffect } from "react";
import artifacts from "./artifacts";

/**
 * Museum Enhancements
 * - Filter by civilization
 * - Show facts under found artifact images
 * - "Did you know?" rotating fact box
 */
export default function Museum({ revealedArtifacts }) {
  const sites = Object.keys(artifacts);
  const [filter, setFilter] = useState("All");
  const [factIndex, setFactIndex] = useState(0);

  const allFacts = useMemo(() => {
    // Flatten all facts, keep unique by text
    const facts = [];
    sites.forEach((site) => {
      (artifacts[site] || []).forEach((a) => {
        if (a.fact) facts.push({ site, id: a.id, text: a.fact, name: a.name });
      });
    });
    // dedupe by text
    const seen = new Set();
    return facts.filter((f) => {
      const key = f.text.trim();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [sites]);

  useEffect(() => {
    if (!allFacts.length) return;
    const t = setInterval(() => {
      setFactIndex((i) => (i + 1) % allFacts.length);
    }, 5000);
    return () => clearInterval(t);
  }, [allFacts.length]);

  if (!sites.length) {
    return <p className="text-center">No artifacts defined yet.</p>;
  }

  const sitesToShow = filter === "All" ? sites : [filter];

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold text-center">🏛️ Museum Collection</h2>

      {/* Filter */}
      <div className="flex items-center justify-center gap-3">
        <label className="font-semibold">Filter:</label>
        <select
          className="border rounded-lg px-3 py-1 text-black"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          {sites.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Did you know */}
      {allFacts.length > 0 && (
        <div className="mx-auto max-w-2xl bg-blue-50 border border-blue-200 text-blue-900 p-4 rounded-xl shadow">
          <div className="text-sm uppercase tracking-wide font-bold mb-1">Did you know?</div>
          <div className="text-base">
            {allFacts[factIndex].text}{" "}
            <span className="text-xs text-blue-700">
              — {allFacts[factIndex].name} ({allFacts[factIndex].site})
            </span>
          </div>
        </div>
      )}

      {sitesToShow.map((site) => {
        const siteArtifacts = artifacts[site] || [];
        const revealed = revealedArtifacts[site] || [];

        return (
          <div key={site} className="space-y-3">
            <h3 className="text-xl font-semibold">{site}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {siteArtifacts.map((a) => {
                const found = revealed.includes(a.id);
                return (
                  <div
                    key={a.id}
                    className="flex flex-col items-center gap-2 bg-white text-black p-3 rounded-xl shadow"
                  >
                    <div className="w-28 h-28 md:w-32 md:h-32 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                      {found ? (
                        <img
                          src={a.img}
                          alt={a.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <span className="text-gray-500 text-2xl">?</span>
                      )}
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">{a.name}</div>
                      {found ? (
                        <p className="text-sm text-gray-700 mt-1">{a.fact}</p>
                      ) : (
                        <p className="text-sm text-gray-400 mt-1">Dig to discover this artifact.</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
