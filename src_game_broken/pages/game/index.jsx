import React, { useState, useEffect } from "react";
import GameNavbar from "@/components/game/GameNavbar";
import DigSite from "@/components/game/DigSite";
import Museum from "@/components/game/Museum";
import Map from "@/components/game/Map";
import Badges from "@/components/game/Badges";

export default function GamePage() {
  const [activeTab, setActiveTab] = useState("map");
  const [earnedBadges, setEarnedBadges] = useState([]);
  const [revealedArtifacts, setRevealedArtifacts] = useState([]);

  // Load saved progress
  useEffect(() => {
    const savedBadges = JSON.parse(localStorage.getItem("earnedBadges")) || [];
    const savedArtifacts = JSON.parse(localStorage.getItem("revealedArtifacts")) || [];
    setEarnedBadges(savedBadges);
    setRevealedArtifacts(savedArtifacts);
  }, []);

  // Save progress when it changes
  useEffect(() => {
    localStorage.setItem("earnedBadges", JSON.stringify(earnedBadges));
  }, [earnedBadges]);

  useEffect(() => {
    localStorage.setItem("revealedArtifacts", JSON.stringify(revealedArtifacts));
  }, [revealedArtifacts]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        🐔 Chicken Archaeologists – Digging Through Time
      </h1>
      <GameNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-6">
        {activeTab === "map" && <Map />}
        {activeTab === "dig" && (
          <DigSite
            earnedBadges={earnedBadges}
            setEarnedBadges={setEarnedBadges}
            revealedArtifacts={revealedArtifacts}
            setRevealedArtifacts={setRevealedArtifacts}
          />
        )}
        {activeTab === "museum" && <Museum revealedArtifacts={revealedArtifacts} />}
        {activeTab === "badges" && <Badges earnedBadges={earnedBadges} />}
      </div>
    </div>
  );
}
