{!currentSite ? (
  <p>Please select a site from the map.</p>
) : (
  <>
    {/* Moonfeather intro */}
    <div className="bg-white/80 p-3 rounded shadow mb-4 flex gap-3 items-start">
      <img src="/Moonfeather.png" alt="guide" className="w-12 h-12" />
      <p>
        {currentSite === "Greece" &&
          "Welcome to Greece! Let’s explore temples, statues, and amphorae."}
        {currentSite === "Mesopotamia" &&
          "Welcome to Mesopotamia! The land of cuneiform and ziggurats awaits."}
      </p>
    </div>

    {/* existing dig/quiz UI here */}

    {/* Mini-game unlock after site complete */}
    {foundCount === totalCount && !quizMode && (
      <button
        onClick={() => setActiveTab("miniGame")}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        🎮 Play Carbon Dating Mini-Game
      </button>
    )}
  </>
)}
