import React, { useEffect, useRef } from "react";

const COLORS = ["#FFC700", "#FF85A1", "#4ADE80", "#60A5FA", "#F472B6", "#FBBF24"];

export default function ConfettiBurst({ duration = 2000, count = 80 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const nodes = [];
    for (let i = 0; i < count; i++) {
      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.top = "-10px";
      div.style.left = Math.random() * 100 + "vw";
      div.style.width = "8px";
      div.style.height = "14px";
      div.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
      div.style.opacity = "0.9";
      div.style.transform = `rotate(${Math.random() * 360}deg)`;
      div.style.borderRadius = "2px";
      const fall = 60 + Math.random() * 40;
      const delay = Math.random() * 200;
      div.animate(
        [
          { transform: div.style.transform, opacity: 1 },
          { transform: `translateY(${fall}vh) rotate(${Math.random() * 360}deg)`, opacity: 0.9 },
          { transform: `translateY(${fall + 10}vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ],
        { duration: duration + delay, easing: "ease-out", fill: "forwards" }
      );
      nodes.push(div);
      c.appendChild(div);
    }
    const t = setTimeout(() => nodes.forEach((n) => n.remove()), duration + 500);
    return () => clearTimeout(t);
  }, [duration, count]);

  return <div ref={containerRef} className="pointer-events-none fixed inset-0 z-[9999]" />;
}
