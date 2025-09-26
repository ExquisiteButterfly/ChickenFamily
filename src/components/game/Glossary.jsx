import React from "react";

export default function Glossary() {
  const terms = [
    { word: "Archaeology", def: "The study of human history through artifacts." },
    { word: "Artifact", def: "An object made or used by people in the past." },
    { word: "Excavation", def: "The process of digging up historical remains." },
    { word: "Hieroglyphics", def: "The writing system of ancient Egypt." },
  ];

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold text-center">📖 Glossary</h2>
      <ul className="space-y-3">
        {terms.map((t, idx) => (
          <li
            key={idx}
            className="bg-white text-black px-4 py-2 rounded-lg shadow"
          >
            <b>{t.word}:</b> {t.def}
          </li>
        ))}
      </ul>
    </div>
  );
}
