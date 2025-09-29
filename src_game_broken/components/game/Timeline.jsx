import React from "react";

export default function Timeline() {
  // Simple visual timeline (approximate ranges)
  const items = [
    { label: "Ancient Egypt", range: "c. 3100–30 BCE", width: "40%", offset: "5%" },
    { label: "Ancient China", range: "c. 1600–221 BCE", width: "30%", offset: "30%" },
    { label: "Maya Civilization", range: "c. 2000 BCE–1500 CE", width: "80%", offset: "10%" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-1">🧭 World Timeline</h2>
      <p className="text-sm text-gray-600 mb-6">Approximate dates to show when each civilization existed.</p>

      <div className="relative w-full h-2 bg-gray-300 rounded-full mb-8" />

      <div className="space-y-4">
        {items.map((it) => (
          <div key={it.label}>
            <div className="flex justify-between">
              <div className="font-bold">{it.label}</div>
              <div className="text-sm text-gray-600">{it.range}</div>
            </div>
            <div className="relative h-3 bg-gray-200 rounded">
              <div
                className="absolute h-3 bg-yellow-400 rounded"
                style={{ width: it.width, left: it.offset }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
