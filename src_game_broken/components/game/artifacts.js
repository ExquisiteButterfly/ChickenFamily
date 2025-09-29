const artifacts = {
  Egypt: [
    { id: 'eg-scarab', name: 'Scarab Amulet', fact: 'Symbolized rebirth in ancient Egypt.', trivia: 'Used as seals by officials.', img: '/game-assets/scarab.png' },
    { id: 'eg-papyrus', name: 'Papyrus Scroll', fact: 'One of the world’s first papers.', trivia: 'Scribes used reed pens and ink.', img: '/game-assets/papyrus.png' },
    { id: 'eg-mummy-mask', name: 'Mummy Mask', fact: 'Identified and protected the deceased.', trivia: 'Gold for royalty, painted for others.', img: '/game-assets/mummy-mask.png' },
    { id: 'eg-pyramid-stone', name: 'Pyramid Stone', fact: 'Limestone blocks formed exteriors.', trivia: 'Blocks moved on sleds across wet sand.', img: '/game-assets/pyramid-stone.png' },
  ],
  China: [
    { id: 'cn-jade', name: 'Jade Carving', fact: 'Symbolized purity and beauty.', trivia: 'Phrase: “as precious as jade”.', img: '/game-assets/jade.png' },
    { id: 'cn-bronze', name: 'Bronze Vessel', fact: 'Used in ancestor rituals.', trivia: 'Decorated with animals and beasts.', img: '/game-assets/bronze.png' },
    { id: 'cn-terracotta', name: 'Terracotta Warrior', fact: 'Guarded the First Emperor.', trivia: 'No two warriors are exactly the same.', img: '/game-assets/terracotta.png' },
    { id: 'cn-compass', name: 'Early Compass', fact: 'Used lodestone to point north.', trivia: 'First used for feng shui.', img: '/game-assets/compass.png' },
  ],
  Maya: [
    { id: 'my-obsidian', name: 'Obsidian Blade', fact: 'Volcanic glass for sharp tools.', trivia: 'Traded widely across Mesoamerica.', img: '/game-assets/obsidian.png' },
    { id: 'my-glyph', name: 'Glyph Tablet', fact: 'Writing system with symbols.', trivia: 'Recorded history, kings, events.', img: '/game-assets/glyph.png' },
    { id: 'my-calendar', name: 'Calendar Stone', fact: 'Tracked solar and ritual cycles.', trivia: 'Could predict eclipses.', img: '/game-assets/calendar.png' },
    { id: 'my-temple', name: 'Temple Carving', fact: 'Decorated temples and palaces.', trivia: 'Originally brightly painted.', img: '/game-assets/temple.png' },
  ],
  Greece: [
    { id: 'gr-amphora', name: 'Amphora', fact: 'Tall jar for wine or oil.', trivia: 'Decorated with myths and heroes.', img: '/game-assets/amphora.png' },
    { id: 'gr-coin', name: 'Ancient Coin', fact: 'Coins showed gods and animals.', trivia: 'Athens used the owl for wisdom.', img: '/game-assets/coin.png' },
    { id: 'gr-statue', name: 'Statue Fragment', fact: 'Celebrated gods and athletes.', trivia: 'Statues were once painted.', img: '/game-assets/statue.png' },
    { id: 'gr-column', name: 'Temple Column', fact: 'Supported temples like the Parthenon.', trivia: 'Doric, Ionic, Corinthian styles.', img: '/game-assets/column.png' },
  ],
  Mesopotamia: [
    { id: 'me-tablet', name: 'Cuneiform Tablet', fact: 'Clay tablets recorded laws & trade.', trivia: 'Epic of Gilgamesh used cuneiform.', img: '/game-assets/tablet.png' },
    { id: 'me-seal', name: 'Cylinder Seal', fact: 'Rolled across clay to sign.', trivia: 'Each seal had unique carvings.', img: '/game-assets/seal.png' },
    { id: 'me-brick', name: 'Ziggurat Brick', fact: 'Temples built from mud bricks.', trivia: 'Bricks stamped with kings’ names.', img: '/game-assets/brick.png' },
    { id: 'me-figurine', name: 'Clay Figurine', fact: 'Represented gods or spirits.', trivia: 'Kept at home for protection.', img: '/game-assets/figurine.png' },
  ],
}

export const quizzes = {
  Egypt: [
    { q: 'What was papyrus used for?', options: ['Building houses','Making paper','Cooking'], a: 1 },
    { q: 'Scarab amulets symbolized…', options: ['Music','Rebirth','Farming'], a: 1 },
    { q: 'What covered pyramid exteriors?', options: ['Wood','Limestone','Sand'], a: 1 },
  ],
  China: [
    { q: 'Jade symbolized…', options: ['Purity and beauty','Anger','Fear'], a: 0 },
    { q: 'Ritual vessels were made of…', options: ['Iron','Bronze','Silver'], a: 1 },
    { q: 'Terracotta warriors guarded…', options: ['A temple','An emperor','A city'], a: 1 },
  ],
  Maya: [
    { q: 'Obsidian is…', options: ['Stone','Glass','Metal'], a: 1 },
    { q: 'Maya used glyphs for…', options: ['Games','Writing','Clothing'], a: 1 },
    { q: 'The Maya calendar tracked…', options: ['Weather only','Solar & ritual cycles','Just the moon'], a: 1 },
  ],
  Greece: [
    { q: 'What was an amphora used for?', options: ['Wine/oil','Weapons','Jewelry'], a: 0 },
    { q: 'Greek coins often showed…', options: ['Gods & animals','Castles','Cars'], a: 0 },
    { q: 'How many main column styles?', options: ['1','2','3'], a: 2 },
  ],
  Mesopotamia: [
    { q: 'Cuneiform was written on…', options: ['Clay tablets','Paper','Wood'], a: 0 },
    { q: 'Cylinder seals were used for…', options: ['Cooking','Signing','Building'], a: 1 },
    { q: 'Ziggurats were…', options: ['Temples','Houses','Markets'], a: 0 },
  ],
}

export default artifacts
