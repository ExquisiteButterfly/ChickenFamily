import React from "react";

const terms = [
  { word: "Archaeology", def: "The study of human history through digging and artifacts.", img: "/game-assets/temple.png" },
  { word: "Artifact",    def: "An object made or used by people in the past.",             img: "/game-assets/papyrus.png" },
  { word: "Excavation",  def: "The process of digging to find ancient remains.",          img: "/game-assets/pyramid-stone.png" },
  { word: "Fossil",      def: "The preserved remains of ancient animals or plants.",      img: "/game-assets/obsidian.png" },
  { word: "Dynasty",     def: "A line of rulers from the same family.",                   img: "/game-assets/jade.png" },
  { word: "Pyramid",     def: "A giant stone tomb built in ancient Egypt.",               img: "/game-assets/pyramid-stone.png" },
];

export default function Glossary() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📖 Archaeology Glossary</h2>
      <div className="grid gap-3 md:grid-cols-2">
        {terms.map((t, i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-white text-black rounded shadow">
            <img src={t.img} alt="" className="w-10 h-10 rounded" />
            <div>
              <div className="font-bold">{t.word}</div>
              <div className="text-sm">{t.def}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
