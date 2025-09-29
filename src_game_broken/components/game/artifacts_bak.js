const artifacts = {
  Egypt: [...], // keep existing
  China: [...],
  Maya: [...],
  Greece: [
    {
      id: "gr-amphora",
      name: "Amphora",
      fact: "A tall jar used to store wine or olive oil.",
      trivia: "Often decorated with myths and heroes.",
      img: "/game-assets/amphora.png",
    },
    {
      id: "gr-coin",
      name: "Ancient Coin",
      fact: "Greek coins showed gods, animals, and rulers.",
      trivia: "The owl coin of Athens symbolized wisdom.",
      img: "/game-assets/coin.png",
    },
    {
      id: "gr-statue",
      name: "Statue Fragment",
      fact: "Greek statues celebrated gods and athletes.",
      trivia: "Many were painted in bright colors.",
      img: "/game-assets/statue.png",
    },
    {
      id: "gr-column",
      name: "Temple Column",
      fact: "Columns supported temples like the Parthenon.",
      trivia: "Three main styles: Doric, Ionic, Corinthian.",
      img: "/game-assets/column.png",
    },
  ],
  Mesopotamia: [
    {
      id: "me-tablet",
      name: "Cuneiform Tablet",
      fact: "Clay tablets recorded laws, trade, and stories.",
      trivia: "The Epic of Gilgamesh was written in cuneiform.",
      img: "/game-assets/tablet.png",
    },
    {
      id: "me-seal",
      name: "Cylinder Seal",
      fact: "Seals rolled across clay to sign documents.",
      trivia: "Each seal had unique carvings.",
      img: "/game-assets/seal.png",
    },
    {
      id: "me-brick",
      name: "Ziggurat Brick",
      fact: "Ziggurats were temples built from mud bricks.",
      trivia: "Bricks were often stamped with king’s names.",
      img: "/game-assets/brick.png",
    },
    {
      id: "me-figurine",
      name: "Clay Figurine",
      fact: "Small figurines represented gods or spirits.",
      trivia: "Often placed in homes for protection.",
      img: "/game-assets/figurine.png",
    },
  ],
};

export const quizzes = {
  Egypt: [...],
  China: [...],
  Maya: [...],
  Greece: [
    { q: "What was an amphora used for?", options: ["Wine/oil", "Weapons", "Jewelry"], a: 0 },
    { q: "Greek coins often showed…", options: ["Gods & animals", "Castles", "Cars"], a: 0 },
    { q: "How many main column styles?", options: ["1", "2", "3"], a: 2 },
  ],
  Mesopotamia: [
    { q: "Cuneiform was written on…", options: ["Clay tablets", "Paper", "Wood"], a: 0 },
    { q: "Cylinder seals were used for…", options: ["Cooking", "Signing", "Building"], a: 1 },
    { q: "Ziggurats were…", options: ["Temples", "Houses", "Markets"], a: 0 },
  ],
};

export default artifacts;
