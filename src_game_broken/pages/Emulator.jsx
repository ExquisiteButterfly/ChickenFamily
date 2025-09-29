import { useEffect, useMemo, useRef, useState } from "react";

const CHARACTERS = {
  Suncrest: { pitch: 0.8, rate: 0.9, vocab: ["KOKORIKO", "KRAH", "BOK-AAA"] },
  "Fluff-Ball": { pitch: 1.8, rate: 1.4, vocab: ["cheep", "peep-peep", "chirp-chirp!"] },
  Fluffy: { pitch: 1.6, rate: 1.3, vocab: ["bawk", "cluuck…", "bok-bok"] },
  Moonfeather: { pitch: 1.1, rate: 0.95, vocab: ["peep", "chirrr", "cluuuck"] },
};

function toChicken(text, vocab, intensity) {
  const words = text.split(/(\s+)/);
  return words.map((w) => {
    if (/^\s+$/.test(w)) return w;
    const base = vocab[Math.floor(Math.random() * vocab.length)];
    let result = base;
    const m = w.match(/([.!?]+)$/);
    const punct = m ? m[1] : "";
    for (let i = 0; i < intensity; i++) {
      if (Math.random() < 0.5) result += "-" + base.toLowerCase();
      if (Math.random() < 0.5) {
        result = result.replace(/[aeiouAEIOU]([^aeiou]*$)/, (m, tail) => {
          const v = m[0][0];
          return v + v + v + tail;
        });
      }
    }
    return result + punct;
  }).join("");
}

export default function ChickenEmulator() {
  const [input, setInput] = useState(
    "Once upon a dusk-lit market, the Reed-Dock Chickens traded stories and river gems."
  );
  const [character, setCharacter] = useState("Suncrest");
  const [intensity, setIntensity] = useState(1);
  const [speaking, setSpeaking] = useState(false);
  const synthRef = useRef(window.speechSynthesis || null);

  const chickenText = useMemo(
    () => toChicken(input, CHARACTERS[character].vocab, intensity),
    [input, character, intensity]
  );

  const speak = () => {
    if (!synthRef.current) return;
    if (speaking) {
      synthRef.current.cancel();
      setSpeaking(false);
      return;
    }
    const { pitch, rate } = CHARACTERS[character];
    const utter = new SpeechSynthesisUtterance(chickenText);

    const voices = synthRef.current.getVoices();
    let pick;

    if (character === "Suncrest") {
      // Prefer male/deep voices
      pick = voices.find(v => /male|daniel|fred|google us/i.test(v.name)) || voices.find(v => /en|US|GB/i.test(v.lang));
    } else if (character === "Moonfeather") {
      // Prefer female/mother-like voices
      pick = voices.find(v => /female|samantha|victoria|google uk/i.test(v.name)) || voices.find(v => /en|US|GB/i.test(v.lang));
    } else {
      // For Fluffy & Fluff-Ball, use any English voice but rely on pitch/rate for "child-like"
      pick = voices.find(v => /en|US|GB/i.test(v.lang)) || voices[0];
    }

    if (pick) utter.voice = pick;
    utter.pitch = pitch;
    utter.rate = rate;

    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);

    setSpeaking(true);
    synthRef.current.speak(utter);
  };

  useEffect(() => {
    return () => {
      if (synthRef.current) synthRef.current.cancel();
    };
  }, []);

  const copyOut = async () => {
    try {
      await navigator.clipboard.writeText(chickenText);
      alert("Chicken text copied! 🐔");
    } catch {
      alert("Unable to copy. You can select and copy manually.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-6">
          Chicken Emulator
        </h1>
        <p className="text-gray-300 mb-8">
          Choose a character voice, adjust intensity, and convert your text into Reed-Dock chicken speech!
        </p>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-800 rounded-xl p-4">
            <label className="block text-sm text-gray-300 mb-2">Character</label>
            <select
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
              className="w-full bg-gray-700 rounded-lg px-3 py-2 focus:outline-none"
            >
              {Object.keys(CHARACTERS).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="bg-gray-800 rounded-xl p-4">
            <label className="block text-sm text-gray-300 mb-2">
              Intensity: <span className="font-semibold">{intensity}</span>
            </label>
            <input
              type="range"
              min="0"
              max="3"
              value={intensity}
              onChange={(e) => setIntensity(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="text-xs text-gray-400 mt-2">
              0 = calm, 3 = maximum chicken drama
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 flex items-end justify-between gap-2">
            <button
              onClick={speak}
              className={`flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-4 py-2 rounded-lg shadow hover:scale-105 transition
                ${speaking ? "ring-2 ring-yellow-300" : ""}`}
            >
              {speaking ? "🛑 Stop Speech" : "🔊 Speak Chicken"}
            </button>
            <button
              onClick={copyOut}
              className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Input / Output */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-gray-300 mb-2">Your Text</label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-48 bg-gray-800 rounded-xl p-4 focus:outline-none"
              placeholder="Type your message to the flock…"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-2">Chicken Output</label>
            <textarea
              readOnly
              value={chickenText}
              className="w-full h-48 bg-gray-800 rounded-xl p-4 select-all"
            />
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          Tip: Actual voices vary by browser and system. Try Chrome or Safari with extra voices installed in System Settings → Accessibility → Spoken Content for best results.
        </p>
      </div>
    </div>
  );
}
