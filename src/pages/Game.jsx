import React, { useState, useRef } from "react";
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
import ChickenGuide from "../components/game/ChickenGuide";

export default function Game() {
  const [activeTab, setActiveTab] = useState("map");
  const [currentSite, setCurrentSite] = useState(null);
  const [revealedArtifacts, setRevealedArtifacts] = useState({});
  const [earnedBadges, setEarnedBadges] = useState([]);
  const [earnedAchievements, setEarnedAchievements] = useState([]);
  const [customArtifacts, setCustomArtifacts] = useState([]);

  const audioRef = useRef(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (musicPlaying) {
      audioRef.current.pause();
      setMusicPlaying(false);
    } else {
      const p = audioRef.current.play();
      if (p !== undefined) {
        p.catch(err => console.log("Play blocked:", err));
      }
      setMusicPlaying(true);
    }
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="/game-audio/happy-day.wav"
        loop
        preload="auto"
      />

      <ChickenGuide activeTab={activeTab} />

      <div className="p-4 max-w-5xl mx-auto">
        {/* Music toggle button */}
        <div className="flex justify-end mb-2">
          <button
            onClick={toggleMusic}
            className="px-3 py-1 bg-blue-600 text-white rounded-md shadow"
          >
            {musicPlaying ? "🔊 Music On" : "🔇 Music Off"}
          </button>
        </div>

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

        {/* Timeline + glossary */}
        {activeTab === "timeline" && <Timeline />}
        {activeTab === "glossary" && <Glossary />}

        {/* Creative mode */}
        {activeTab === "creative" && (
          <CreativeMode
            customArtifacts={customArtifacts}
            setCustomArtifacts={setCustomArtifacts}
          />
        )}

        {/* Mini game */}
        {activeTab === "miniGame" && (
          <MiniGameCarbonDating setActiveTab={setActiveTab} />
        )}
      </div>
    </>
  );
}
