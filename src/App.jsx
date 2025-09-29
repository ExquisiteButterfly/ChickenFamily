import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import MedievalChickens from "./pages/MedievalChickens.jsx";
import Hero from "./pages/Hero.jsx";
import Family from "./pages/Family.jsx";
import Emulator from "./pages/Emulator.jsx";
import Tutorial from "./pages/Tutorial.jsx";
import { useRef } from "react";
import Game from "./pages/Game.jsx";   // ✅ NEW

export default function App() {
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const navLinkClasses = ({ isActive }) =>
    `hover:text-yellow-400 ${
      isActive ? "text-yellow-400 underline underline-offset-4" : "text-white"
    }`;

  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        <nav className="bg-gray-800 py-4 shadow-md flex justify-between items-center px-6">
          {/* Play Music Button */}
          <div>
            <button
              onClick={toggleMusic}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg shadow-md transition"
            >
              🎵 Play Music
            </button>
            <audio ref={audioRef} loop>
              <source src="/happy-day.mp3" type="audio/mpeg" />
            </audio>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/hero" className={navLinkClasses}>
              Hero
            </NavLink>
            <NavLink to="/family" className={navLinkClasses}>
              Family
            </NavLink>
            <NavLink to="/emulator" className={navLinkClasses}>
              Emulator
            </NavLink>
            <NavLink to="/tutorial" className={navLinkClasses}>
              Tutorial
            </NavLink>
            <NavLink to="/game" className={navLinkClasses}>
              Game   {/* ✅ NEW TAB */}
            </NavLink>
          </div>
        </nav>

        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<MedievalChickens />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/family" element={<Family />} />
            <Route path="/emulator" element={<Emulator />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/game" element={<Game />} />  {/* ✅ NEW ROUTE */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}
