import React, { useState } from "react";

export default function CreativeMode({ customArtifacts, setCustomArtifacts }) {
  const [name, setName] = useState("");
  const [fact, setFact] = useState("");

  const handleAdd = () => {
    if (!name || !fact) return;
    setCustomArtifacts([...customArtifacts, { id: Date.now(), name, fact }]);
    setName("");
    setFact("");
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold text-center">🎨 Creative Mode</h2>
      <div className="bg-white text-black p-4 rounded-lg shadow space-y-3">
        <input
          type="text"
          placeholder="Artifact name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
        <textarea
          placeholder="Fun fact"
          value={fact}
          onChange={(e) => setFact(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
        <button
          onClick={handleAdd}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-lg shadow-md"
        >
          ➕ Add Artifact
        </button>
      </div>

      {customArtifacts.length > 0 && (
        <div>
          <h3 className="text-xl font-bold mb-2">Your Artifacts</h3>
          <ul className="space-y-2">
            {customArtifacts.map((a) => (
              <li
                key={a.id}
                className="bg-yellow-100 text-black px-3 py-2 rounded-lg shadow"
              >
                <b>{a.name}</b>: {a.fact}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
