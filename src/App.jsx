import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import MedievalChickens from "./pages/MedievalChickens.jsx";
import Hero from "./pages/Hero.jsx";
import Family from "./pages/Family.jsx";
import Emulator from "./pages/Emulator.jsx";
import Tutorial from "./pages/Tutorial.jsx";
import Game from "./pages/Game.jsx"; // ✅ NEW
import { useRef } from "react";

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
              ▶ Play Music
            </button>
            <audio ref={audioRef} src="/happy-day.mp3" loop />
          </div>

          {/* Navigation Tabs */}
          <ul className="flex space-x-8 text-lg font-bold">
            <li><NavLink to="/" className={navLinkClasses}>HOME</NavLink></li>
            <li><NavLink to="/hero" className={navLinkClasses}>HERO</NavLink></li>
            <li><NavLink to="/family" className={navLinkClasses}>FAMILY</NavLink></li>
            <li><NavLink to="/emulator" className={navLinkClasses}>CHICKEN EMULATOR</NavLink></li>
            <li><NavLink to="/tutorial" className={navLinkClasses}>TUTORIAL</NavLink></li>
            <li><NavLink to="/game" className={navLinkClasses}>GAME</NavLink></li> {/* ✅ NEW */}
            <li>
              <a
                href="https://docs.google.com/spreadsheets/d/1LQifEwH0oG13cJHlnnGzQM8-9SckD9c0aU4kF56R5CI/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 text-white font-bold"
              >
                KANBAN
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<MedievalChickens />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/family" element={<Family />} />
            <Route path="/emulator" element={<Emulator />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/game" element={<Game />} /> {/* ✅ NEW */}
          </Routes>
        </div>

        <footer className="bg-gray-800 py-6 text-center text-gray-400">
          <p>© 2025 The Reed-Dock Chicken Family. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}
