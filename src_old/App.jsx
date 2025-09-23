import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import MedievalChickens from "./pages/MedievalChickens.jsx";
import Hero from "./pages/Hero.jsx";
import Family from "./pages/Family.jsx";
import Emulator from "./pages/Emulator.jsx";
import Tutorial from "./pages/Tutorial.jsx";

export default function App() {
  const navLinkClasses = ({ isActive }) =>
    `hover:text-yellow-400 ${
      isActive ? "text-yellow-400 underline underline-offset-4" : "text-white"
    }`;

  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <nav className="bg-gray-800 py-4 shadow-md">
          <ul className="flex justify-center space-x-8 text-lg font-bold">
            <li><NavLink to="/" className={navLinkClasses}>HOME</NavLink></li>
            <li><NavLink to="/hero" className={navLinkClasses}>HERO</NavLink></li>
            <li><NavLink to="/family" className={navLinkClasses}>FAMILY</NavLink></li>
            <li><NavLink to="/emulator" className={navLinkClasses}>CHICKEN EMULATOR</NavLink></li>
            <li><NavLink to="/tutorial" className={navLinkClasses}>TUTORIAL</NavLink></li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<MedievalChickens />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/family" element={<Family />} />
            <Route path="/emulator" element={<Emulator />} />
            <Route path="/tutorial" element={<Tutorial />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 py-6 text-center text-gray-400">
          <p>© 2025 The Reed-Dock Chicken Family. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}
