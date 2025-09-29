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
    <div className="p-4 max-w-5xl mx-auto">
      {/* Top navbar with tabs, reset, how-to, and progress bar */}
      <GameNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Map → pick a site */}
      {activeTab === "map" && (
        <Map setCurrentSite={setCurrentSite} setActiveTab={setActiveTab} />
      )}

      {/* Dig site → uncover artifacts */}
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

      {/* Museum view */}
      {activeTab === "museum" && (
        <Museum revealedArtifacts={revealedArtifacts} />
      )}

      {/* Badges and achievements */}
      {activeTab === "badges" && <Badges earnedBadges={earnedBadges} />}
      {activeTab === "achievements" && (
        <Achievements earnedAchievements={earnedAchievements} />
      )}

      {/* Timeline + glossary (simple stubs for now) */}
      {activeTab === "timeline" && <Timeline />}
      {activeTab === "glossary" && <Glossary />}

      {/* Creative mode (add custom artifacts) */}
      {activeTab === "creative" && (
        <CreativeMode
          customArtifacts={customArtifacts}
          setCustomArtifacts={setCustomArtifacts}
        />
      )}

      {/* Mini game (carbon dating stub) */}
      {activeTab === "miniGame" && (
        <MiniGameCarbonDating setActiveTab={setActiveTab} />
      )}
    </div>
  );
}
