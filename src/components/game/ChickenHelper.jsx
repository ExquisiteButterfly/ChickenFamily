import React from "react";

export default function ChickenHelper({ character, message }) {
  if (!character || !message) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2 max-w-sm">
      <img src={`/${character}.png`} alt={character} className="w-12 h-12 rounded-full object-contain" />
      <div className="speech-bubble right">
        <div className="font-bold">{character}</div>
        <div className="text-sm">{message}</div>
      </div>
    </div>
  );
}
