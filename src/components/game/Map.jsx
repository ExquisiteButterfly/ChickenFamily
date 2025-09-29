import React, { useState } from "react";

export default function Map({ setCurrentSite, setActiveTab }) {
  const [hovered, setHovered] = useState(null);

  const sites = [
    {
      name: "Maya",
      x: "23%",
      y: "62%",
      desc: "The Maya built pyramids and played the famous ball game.",
    },
    {
      name: "Egypt",
      x: "50%",
      y: "58%",
      desc: "Egypt is home of pyramids, pharaohs, and hieroglyphs.",
    },
    {
      name: "Greece",
      x: "52%",
      y: "50%",
      desc: "Ancient Greece gave us amphorae, theater, and democracy.",
    },
    {
      name: "Mesopotamia",
      x: "55%",
      y: "55%",
      desc: "Mesopotamia is the cradle of writing and ziggurats.",
    },
    {
      name: "China",
      x: "70%",
      y: "52%",
      desc: "China built the Terracotta Army and created silk and bronze vessels.",
    },
  ];

  const selectSite = (site) => {
    setCurrentSite(site);
    setActiveTab("dig");
  };

  return (
    <div className="relative p-4 flex justify-center">
      {/* Background world map */}
      <img
        src="/game-assets/world-map.png"
        alt="World Map"
        className="max-w-full rounded-lg shadow-lg"
      />

      {/* Site markers */}
      {sites.map((s) => (
        <div
          key={s.name}
          className="absolute"
          style={{ left: s.x, top: s.y, transform: "translate(-50%, -50%)" }}
          onMouseEnter={() => setHovered(s.name)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => selectSite(s.name)}
        >
          {/* City button (fixed in place) */}
          <button className="relative bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-2 py-1 rounded-full text-xs shadow-lg animate-pulse">
            {s.name}
          </button>

          {/* Tooltip absolutely positioned above the button */}
          {hovered === s.name && (
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-44 bg-black text-white text-xs p-2 rounded-lg shadow-lg text-center z-50">
              {s.desc}
              {/* Arrow */}
              <div className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-8 border-transparent border-t-black"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
