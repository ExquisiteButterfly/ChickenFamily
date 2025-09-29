import React, { useState } from "react";

export default function CreativeMode({ customArtifacts, setCustomArtifacts }) {
  const [name, setName] = useState("");
  const [fact, setFact] = useState("");
  const [img, setImg] = useState("");

  const handleAdd = () => {
    if (!name || !fact) return;
    const newItem = { id: Date.now(), name, fact, img: img || "/game-assets/custom.png" };
    setCustomArtifacts([...customArtifacts, newItem]);
    setName(""); setFact(""); setImg("");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🎨 Creative Mode</h2>
      <p className="mb-4">Design your own artifact and add it to the museum!</p>

      <div className="mb-4 space-y-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Artifact Name"
          className="p-2 border rounded w-full text-black"
        />
        <input
          value={fact}
          onChange={(e) => setFact(e.target.value)}
          placeholder="Fun Fact"
          className="p-2 border rounded w-full text-black"
        />
        <input
          value={img}
          onChange={(e) => setImg(e.target.value)}
          placeholder="Image URL (optional)"
          className="p-2 border rounded w-full text-black"
        />
        <button
          onClick={handleAdd}
          className="bg-yellow-500 px-4 py-2 rounded font-bold"
        >
          Add Artifact
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {customArtifacts.map((a) => (
          <div key={a.id} className="p-3 bg-white rounded shadow text-black">
            <img src={a.img} alt={a.name} className="w-20 h-20 mx-auto mb-2" />
            <h3 className="font-bold">{a.name}</h3>
            <p className="text-sm">{a.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
