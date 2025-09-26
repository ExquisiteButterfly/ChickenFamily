import React from "react";

export default function Timeline() {
  const events = [
    { year: "3000 BCE", text: "First cities in Mesopotamia" },
    { year: "2600 BCE", text: "Pyramids built in Egypt" },
    { year: "1200 BCE", text: "Greek city-states rise" },
    { year: "200 CE", text: "Maya calendar system created" },
  ];

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold text-center">📜 Civilization Timeline</h2>
      <ul className="space-y-3">
        {events.map((e, idx) => (
          <li
            key={idx}
            className="bg-white text-black px-4 py-2 rounded-lg shadow"
          >
            <b>{e.year}</b>: {e.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
