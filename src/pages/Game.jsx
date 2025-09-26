import React, { useState } from "react";
import GameNavbar from "../components/game/GameNavbar";
import Map from "../components/game/Map";
import DigSite from "../components/game/DigSite";
import Museum from "../components/game/Museum";
import Badges from "../components/game/Badges";
import Achievements from "../components/game/Achievements";
import Timeline from "../components/game/Timeline";
import Glossary from "../components/game/Glossary";
import CreativeMode from "../components/game/CreativeMode";
import MiniGameCarbonDating from "../components/game/MiniGameCarbonDating";

export default function Game() {
  const [activeTab, setActiveTab] = useState("map");
  const [currentSite, setCurrentSite] = useState(null);
  const [revealedArtifacts, setRevealedArtifacts] = useState({});
  const [earnedBadges, setEarnedBadges] = useState([]);
  const [earnedAchievements, setEarnedAchievements] = useState([]);
  const [customArtifacts, setCustomArtifacts] = useState([]);

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* 🐔 How to Play Guide */}
      <div className="bg-yellow-50 text-gray-800 p-4 rounded-xl shadow">
        <div className="flex items-start gap-3">
          <img
            src="/Suncrest.png"
            alt="guide"
            className="w-14 h-14 md:w-16 md:h-16 rounded-full"
          />
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-bold">🐔 How to Play</h1>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-sm md:text-base">
              <li>Tap a site on the <b>Map</b> to start digging.</li>
              <li>Press <b>Dig Here</b> to uncover artifacts and learn facts.</li>
              <li>Earn <b>badges</b> and <b>achievements</b> as you progress.</li>
              <li>Take a quick <b>quiz</b> when you finish a site.</li>
              <li>Visit the <b>Museum</b> to view your collection.</li>
              <li>Try the <b>Mini-Game</b> for extra fun!</li>
              <li>Use <b>Creative Mode</b> to design your own artifact.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navbar for game sections */}
      <GameNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Active Tab Content */}
      {activeTab === "map" && (
        <Map
          setActiveTab={setActiveTab}
          setCurrentSite={setCurrentSite}
          unlockedSites={["Egypt", "China", "Maya", "Greece", "Mesopotamia"]}
        />
      )}
      {activeTab === "dig" && (
        <DigSite
          currentSite={currentSite}
          revealedArtifacts={revealedArtifacts}
          setRevealedArtifacts={setRevealedArtifacts}
          earnedBadges={earnedBadges}
          setEarnedBadges={setEarnedBadges}
          earnedAchievements={earnedAchievements}
          setEarnedAchievements={setEarnedAchievements}
        />
      )}
      {activeTab === "museum" && (
        <Museum revealedArtifacts={revealedArtifacts} />
      )}
      {activeTab === "badges" && <Badges earnedBadges={earnedBadges} />}
      {activeTab === "achievements" && (
        <Achievements earnedAchievements={earnedAchievements} />
      )}
      {activeTab === "timeline" && <Timeline />}
      {activeTab === "glossary" && <Glossary />}
      {activeTab === "creative" && (
        <CreativeMode
          customArtifacts={customArtifacts}
          setCustomArtifacts={setCustomArtifacts}
        />
      )}
      {activeTab === "miniGame" && (
        <MiniGameCarbonDating setActiveTab={setActiveTab} />
      )}
    </div>
  );
}
