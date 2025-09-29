import React, { useState, useEffect } from "react";
import GameNavbar from "../components/game/GameNavbar";
import DigSite from "../components/game/DigSite";
import Museum from "../components/game/Museum";
import Map from "../components/game/Map";
import Badges from "../components/game/Badges";
import Achievements from "../components/game/Achievements";
import Glossary from "../components/game/Glossary";
import Timeline from "../components/game/Timeline";
import artifacts from "../components/game/artifacts";
import CreativeMode from "../components/game/CreativeMode";
import MiniGameCarbonDating from "../components/game/MiniGameCarbonDating";

export default function Game() {
  const [activeTab, setActiveTab] = useState("map");
  const [currentSite, setCurrentSite] = useState(null);

  const [earnedBadges, setEarnedBadges] = useState([]);
  const [earnedAchievements, setEarnedAchievements] = useState([]);
  const [revealedArtifacts, setRevealedArtifacts] = useState({});
  const [unlockedSites, setUnlockedSites] = useState(["Egypt"]);
  const [siteStartTimes, setSiteStartTimes] = useState({});

  const [score, setScore] = useState(0);
  const [lastQuizPerfect, setLastQuizPerfect] = useState(false);
  const [dailyChallenge, setDailyChallenge] = useState(null);
  const [customArtifacts, setCustomArtifacts] = useState([]);

  // Load saved progress
  useEffect(() => {
    setEarnedBadges(JSON.parse(localStorage.getItem("earnedBadges")) || []);
    setEarnedAchievements(JSON.parse(localStorage.getItem("earnedAchievements")) || []);
    setRevealedArtifacts(JSON.parse(localStorage.getItem("revealedArtifacts")) || {});
    setUnlockedSites(JSON.parse(localStorage.getItem("unlockedSites")) || ["Egypt"]);
    setSiteStartTimes(JSON.parse(localStorage.getItem("siteStartTimes")) || {});
    setScore(JSON.parse(localStorage.getItem("score")) || 0);

    // Daily challenge
    const todayKey = new Date().toISOString().slice(0, 10);
    const savedKey = localStorage.getItem("dc_key");
    const savedData = localStorage.getItem("dc_data");
    if (savedKey === todayKey && savedData) {
      setDailyChallenge(JSON.parse(savedData));
    } else {
      const siteNames = Object.keys(artifacts);
      const site = siteNames[Math.floor(Math.random() * siteNames.length)];
      const items = artifacts[site];
      const chosen = items[Math.floor(Math.random() * items.length)];
      const dc = { dateKey: todayKey, site, artifactId: chosen.id };
      setDailyChallenge(dc);
      localStorage.setItem("dc_key", todayKey);
      localStorage.setItem("dc_data", JSON.stringify(dc));
    }
  }, []);

  // Save progress
  useEffect(() => { localStorage.setItem("earnedBadges", JSON.stringify(earnedBadges)); }, [earnedBadges]);
  useEffect(() => { localStorage.setItem("earnedAchievements", JSON.stringify(earnedAchievements)); }, [earnedAchievements]);
  useEffect(() => { localStorage.setItem("revealedArtifacts", JSON.stringify(revealedArtifacts)); }, [revealedArtifacts]);
  useEffect(() => { localStorage.setItem("unlockedSites", JSON.stringify(unlockedSites)); }, [unlockedSites]);
  useEffect(() => { localStorage.setItem("siteStartTimes", JSON.stringify(siteStartTimes)); }, [siteStartTimes]);
  useEffect(() => { localStorage.setItem("score", JSON.stringify(score)); }, [score]);

  // Master Archaeologist + Collector
  useEffect(() => {
    const siteBadges = ["Egypt Explorer", "China Explorer", "Maya Explorer", "Greece Explorer", "Mesopotamia Explorer"];
    const hasAllSites = siteBadges.every((b) => earnedBadges.includes(b));

    if (hasAllSites && !earnedBadges.includes("Master Archaeologist")) {
      setEarnedBadges([...earnedBadges, "Master Archaeologist"]);
      alert("🌟 You earned the Master Archaeologist badge!");
    }
    if (hasAllSites && !earnedAchievements.includes("Collector")) {
      setEarnedAchievements([...earnedAchievements, "Collector"]);
    }
    if (earnedBadges.includes("Egypt Explorer") && !unlockedSites.includes("China")) {
      setUnlockedSites([...unlockedSites, "China"]);
    }
    if (earnedBadges.includes("China Explorer") && !unlockedSites.includes("Maya")) {
      setUnlockedSites([...unlockedSites, "Maya"]);
    }
    if (earnedBadges.includes("Maya Explorer") && !unlockedSites.includes("Greece")) {
      setUnlockedSites([...unlockedSites, "Greece"]);
    }
    if (earnedBadges.includes("Greece Explorer") && !unlockedSites.includes("Mesopotamia")) {
      setUnlockedSites([...unlockedSites, "Mesopotamia"]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [earnedBadges]);

  // Called by DigSite when a site is fully done
  const handleSiteComplete = (siteName, durationMs, quizPerfect) => {
    if (durationMs <= 60000 && !earnedAchievements.includes("Speed Digger")) {
      setEarnedAchievements([...earnedAchievements, "Speed Digger"]);
    }
    if (quizPerfect && !earnedAchievements.includes("Quiz Master")) {
      setEarnedAchievements([...earnedAchievements, "Quiz Master"]);
    }
  };

  const resetProgress = () => {
    if (window.confirm("Reset all progress?")) {
      setEarnedBadges([]);
      setEarnedAchievements([]);
      setRevealedArtifacts({});
      setUnlockedSites(["Egypt"]);
      setSiteStartTimes({});
      setCurrentSite(null);
      setScore(0);
      localStorage.removeItem("earnedBadges");
      localStorage.removeItem("earnedAchievements");
      localStorage.removeItem("revealedArtifacts");
      localStorage.removeItem("unlockedSites");
      localStorage.removeItem("siteStartTimes");
      localStorage.removeItem("score");
      localStorage.removeItem("dc_key");
      localStorage.removeItem("dc_data");
      setDailyChallenge(null);
    }
  };

  return (
    <div className="p-6">
      {/* 🎵 Background music only for Game page */}
      <audio src="/happy-day.wav" autoPlay loop />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <h1 className="text-3xl font-bold">🐔 Chicken Archaeologists – Digging Through Time</h1>
        <div className="flex items-center gap-4">
          {dailyChallenge && (
            <span className="text-sm bg-yellow-200 text-black px-3 py-1 rounded">
              🎯 Daily: {dailyChallenge.site}
            </span>
          )}
          <span className="text-lg font-bold">⭐ Score: {score}</span>
          <button
            onClick={resetProgress}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition"
          >
            🔄 Reset
          </button>
        </div>
      </div>

      <GameNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-6">
        {activeTab === "map" && (
          <Map
            setActiveTab={setActiveTab}
            setCurrentSite={setCurrentSite}
            unlockedSites={unlockedSites}
          />
        )}

        {activeTab === "dig" && (
          <DigSite
            currentSite={currentSite}
            earnedBadges={earnedBadges}
            setEarnedBadges={setEarnedBadges}
            revealedArtifacts={revealedArtifacts}
            setRevealedArtifacts={setRevealedArtifacts}
            score={score}
            setScore={setScore}
            onSiteComplete={handleSiteComplete}
            siteStartTimes={siteStartTimes}
            setSiteStartTimes={setSiteStartTimes}
            setLastQuizPerfect={setLastQuizPerfect}
            dailyChallenge={dailyChallenge}
          />
        )}

        {activeTab === "museum" && <Museum revealedArtifacts={revealedArtifacts} />}
        {activeTab === "badges" && <Badges earnedBadges={earnedBadges} />}
        {activeTab === "achievements" && (
          <Achievements earnedAchievements={earnedAchievements} />
        )}
        {activeTab === "timeline" && <Timeline />}
        {activeTab === "glossary" && <Glossary />}
        {activeTab === "miniGame" && (
          <MiniGameCarbonDating setActiveTab={setActiveTab} />
        )}
        {activeTab === "creative" && (
          <CreativeMode
            customArtifacts={customArtifacts}
            setCustomArtifacts={setCustomArtifacts}
          />
        )}
      </div>
    </div>
  );
}
