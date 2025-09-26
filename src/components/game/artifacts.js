const artifacts = {
  Egypt: [
    {
      id: "scarab",
      name: "Scarab Amulet",
      img: "/game-assets/scarab.png",
      fact: "The scarab beetle was a symbol of rebirth in ancient Egypt.",
      quiz: {
        question: "What did the scarab beetle symbolize?",
        options: ["Wealth", "Rebirth", "War"],
        answer: "Rebirth",
      },
    },
    {
      id: "papyrus",
      name: "Papyrus Scroll",
      img: "/game-assets/papyrus.png",
      fact: "Papyrus was one of the world’s first forms of paper.",
      quiz: {
        question: "What was papyrus mainly used for?",
        options: ["Building", "Writing", "Clothing"],
        answer: "Writing",
      },
    },
    {
      id: "mask",
      name: "Mummy Mask",
      img: "/game-assets/mummy-mask.png",
      fact: "Mummy masks were crafted to honor the dead in the afterlife.",
      quiz: {
        question: "What were mummy masks for?",
        options: ["Decoration", "Honoring the dead", "Disguise"],
        answer: "Honoring the dead",
      },
    },
  ],
  China: [
    {
      id: "jade",
      name: "Jade Pendant",
      img: "/game-assets/jade.png",
      fact: "Jade symbolized purity and moral integrity in China.",
      quiz: {
        question: "What did jade represent?",
        options: ["Strength", "Purity", "War"],
        answer: "Purity",
      },
    },
    {
      id: "bronze",
      name: "Bronze Vessel",
      img: "/game-assets/bronze.png",
      fact: "Bronze vessels were used in rituals and ceremonies.",
      quiz: {
        question: "What were bronze vessels mainly used for?",
        options: ["Cooking", "Rituals", "Trade"],
        answer: "Rituals",
      },
    },
  ],
  Maya: [
    {
      id: "calendar",
      name: "Maya Calendar Stone",
      img: "/game-assets/maya-calendar.png",
      fact: "The Maya created a highly accurate calendar system.",
      quiz: {
        question: "What did the Maya calendar track?",
        options: ["Rainfall", "Time & Astronomy", "Crops"],
        answer: "Time & Astronomy",
      },
    },
  ],
  Greece: [
    {
      id: "vase",
      name: "Greek Pottery",
      img: "/game-assets/pottery.png",
      fact: "Greek pottery often depicted scenes of daily life and mythology.",
      quiz: {
        question: "What was commonly painted on Greek pottery?",
        options: ["Animals", "Daily life & myths", "Maps"],
        answer: "Daily life & myths",
      },
    },
  ],
  Mesopotamia: [
    {
      id: "tablet",
      name: "Cuneiform Tablet",
      img: "/game-assets/tablet.png",
      fact: "The world’s first written language, cuneiform, was on clay tablets.",
      quiz: {
        question: "What was the first written language called?",
        options: ["Hieroglyphics", "Cuneiform", "Latin"],
        answer: "Cuneiform",
      },
    },
  ],
};

export default artifacts;
