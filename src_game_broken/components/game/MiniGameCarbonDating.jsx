import React, { useState } from "react";

const timeRanges = [
  { label: "3000 BCE", id: "egypt" },
  { label: "500 BCE", id: "greece" },
  { label: "200 BCE", id: "china" },
  { label: "600 CE", id: "maya" },
];

const items = [
  { name: "Scarab Amulet", correct: "egypt" },
  { name: "Amphora", correct: "greece" },
  { name: "Terracotta Warrior", correct: "china" },
  { name: "Glyph Tablet", correct: "maya" },
];

export default function MiniGameCarbonDating({ setActiveTab }) {
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const handleDrop = (item, target) => {
    if (item.correct === target.id) {
      setScore((s) => s + 1);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🧪 Carbon Dating Puzzle</h2>
      <p className="mb-4">Drag each artifact into the correct time range.</p>

      <div className="grid grid-cols-2 gap-6">
        <div>
          {items.map((i) => (
            <div
              key={i.name}
              draggable
              onDragStart={(e) => e.dataTransfer.setData("item", JSON.stringify(i))}
              className="p-3 mb-2 bg-yellow-100 rounded shadow cursor-grab"
            >
              {i.name}
            </div>
          ))}
        </div>

        <div>
          {timeRanges.map((t) => (
            <div
              key={t.id}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                const data = JSON.parse(e.dataTransfer.getData("item"));
                handleDrop(data, t);
              }}
              className="p-6 mb-4 bg-gray-200 rounded shadow text-center"
            >
              {t.label}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 font-bold">Score: {score}/{items.length}</p>

      {score === items.length && !done && (
        <div className="mt-4">
          <p className="text-green-600">🎉 Perfect! You mastered carbon dating.</p>
          <button
            onClick={() => setActiveTab("map")}
            className="mt-2 bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded"
          >
            Back to Map
          </button>
        </div>
      )}
    </div>
  );
}
