import React from "react";

const messages = {
  map: { name: "Suncrest", img: "/Suncrest.png", text: "Choose a civilization to explore!" },
  museum: { name: "Moonfeather", img: "/Moonfeather.png", text: "Artifacts hold the secrets of the past…" },
  achievements: { name: "Brambleshine", img: "/Brambleshine.png", text: "You’ve unlocked something special!" },
  timeline: { name: "Rushwater", img: "/Rushwater.png", text: "History flows like a river…" },
  glossary: { name: "Rushwater", img: "/Rushwater.png", text: "Need help? I’ll explain these terms!" },
  dig: { name: "FluffBall", img: "/FluffBall.png", text: "Let’s dig for treasures!" },
  default: { name: "Fluffy", img: "/Fluffy.png", text: "I’ll be cheering you on!" }
};

export default function ChickenGuide({ activeTab }) {
  const guide = messages[activeTab] || messages.default;
  return (
    <div className="flex items-center gap-3 my-4 max-w-md mx-auto">
      <img src={guide.img} alt={guide.name} className="w-14 h-14 rounded-full object-contain" />
      <div className="speech-bubble left text-sm">
        <div className="font-bold">{guide.name}</div>
        <div>{guide.text}</div>
      </div>
    </div>
  );
}
