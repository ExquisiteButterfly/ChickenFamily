import React from "react";

const digSites = [
  { id: 1, name: "Egypt", img: "/game-assets/egypt.png" },
  { id: 2, name: "China", img: "/game-assets/china.png" },
  { id: 3, name: "Maya", img: "/game-assets/maya.png" },
  { id: 4, name: "Greece", img: "/game-assets/greece.png" },
  { id: 5, name: "Mesopotamia", img: "/game-assets/mesopotamia.png" },
];

export default function Map({ setActiveTab, setCurrentSite, unlockedSites }) {
  const handleClick = (siteName, locked) => {
    if (locked) {
      alert("🔒 This site is locked. Finish the previous site first!");
      return;
    }
    setCurrentSite(siteName);
    setActiveTab("dig");
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
        <img
          src="/Suncrest.png"
          alt="guide"
          className="w-16 h-16 md:w-20 md:h-20"
        />
        <h2 className="text-xl md:text-2xl font-bold">🗺️ Choose a Dig Site</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {digSites.map((site, idx) => {
          const locked = !(unlockedSites || ["Egypt"]).includes(site.name);
          return (
            <div
              key={site.id}
              onClick={() => handleClick(site.name, locked)}
              className={`p-4 text-center shadow rounded-lg cursor-pointer transition ${
                locked
                  ? "bg-gray-200 text-gray-400"
                  : "bg-white text-black hover:bg-yellow-50"
              }`}
            >
              <img
                src={site.img}
                alt={site.name}
                className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-2"
              />
              <h3 className="font-bold">
                {site.name} {locked && "🔒"}
              </h3>
              {idx > 0 && locked && (
                <p className="text-xs mt-1">
                  Finish {digSites[idx - 1].name} to unlock
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
