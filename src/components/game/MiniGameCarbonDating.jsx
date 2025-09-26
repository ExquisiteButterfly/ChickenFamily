import React, { useState } from "react";

export default function MiniGameCarbonDating({ setActiveTab }) {
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (guess === "3000 BCE") {
      setFeedback("✅ Correct! Mesopotamian cities began around 3000 BCE.");
    } else {
      setFeedback("❌ Not quite. Try again!");
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold text-center">🧪 Mini-Game: Carbon Dating</h2>
      <p className="text-center">
        Archaeologists found an artifact. When do you think it’s from?
      </p>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="e.g. 3000 BCE"
        className="w-full border rounded px-2 py-1 text-black"
      />
      <button
        onClick={handleSubmit}
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-2 rounded-lg shadow-md"
      >
        Submit Guess
      </button>
      {feedback && (
        <p className="mt-3 font-bold text-center">{feedback}</p>
      )}
    </div>
  );
}
