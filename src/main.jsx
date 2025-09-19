import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import MedievalChickens from "./MedievalChickens.jsx";
import Hero from "./pages/Hero.jsx";
import Family from "./pages/Family.jsx";
import ChickenEmulator from "./pages/ChickenEmulator.jsx";
import "./index.css";

const tabClass =
  "px-4 py-2 rounded-md transition hover:bg-gray-700 font-semibold tracking-wide";
const activeClass =
  "bg-green-600 hover:bg-green-600 text-white";

function Navbar() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Play Music Button on the Left */}
      <button
        onClick={toggleAudio}
        className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-5 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transform transition duration-300 ease-in-out font-bold"
        style={{ border: "2px solid white" }}
      >
        {isPlaying ? "⏸ Pause Music" : "▶ Play Music"}
      </button>
      <audio ref={audioRef} src="/happy-day.mp3" preload="auto" />

      {/* Tabs aligned to the right */}
      <div className="flex gap-4">
        <NavLink to="/" end className={({ isActive }) => `${tabClass} ${isActive ? activeClass : ""}`}>
          HOME
        </NavLink>
        <NavLink to="/hero" className={({ isActive }) => `${tabClass} ${isActive ? activeClass : ""}`}>
          HERO
        </NavLink>
        <NavLink to="/family" className={({ isActive }) => `${tabClass} ${isActive ? activeClass : ""}`}>
          FAMILY
        </NavLink>
        <NavLink to="/emulator" className={({ isActive }) => `${tabClass} ${isActive ? activeClass : ""}`}>
          CHICKEN&nbsp;EMULATOR
        </NavLink>
      </div>
    </nav>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<MedievalChickens />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/family" element={<Family />} />
      <Route path="/emulator" element={<ChickenEmulator />} />
    </Routes>
  </Router>
);
