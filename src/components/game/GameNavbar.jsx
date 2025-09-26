import React from "react";

export default function GameNavbar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "map", label: "Map" },
    { id: "dig", label: "Dig Site" },
    { id: "museum", label: "Museum" },
    { id: "badges", label: "Badges" },
    { id: "achievements", label: "Achievements" },
    { id: "timeline", label: "Timeline" },
    { id: "glossary", label: "Glossary" },
    { id: "miniGame", label: "Mini-Game" },
    { id: "creative", label: "Creative Mode" },
  ];

  return (
    <div className="flex flex-wrap gap-2 p-3 md:p-4 bg-yellow-100 shadow-md rounded-xl">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => setActiveTab(t.id)}
          className={`px-3 md:px-4 py-2 rounded-lg font-bold text-sm md:text-base transition ${
            activeTab === t.id
              ? "bg-yellow-500 text-black"
              : "bg-white text-gray-800 hover:bg-yellow-200"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
