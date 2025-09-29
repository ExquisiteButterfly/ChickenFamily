import { useState } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

export default function MedievalChickens() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src="/An_oil_painting_depicts_an_anthropomorphic_chicken.png"
          alt="Reed-Dock Chicken Family Landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            The Reed-Dock Chicken Family
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-2xl max-w-2xl mb-8"
          >
            Meet Suncrest, Moonfeather, Fluff-Ball, Fluffy, and Brambleshine in their floating market world.
          </motion.p>
        </div>
      </div>

      {/* Soundtrack Player */}
      <div className="text-center my-6">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          {isPlaying ? "Pause Soundtrack" : "Play Soundtrack"}
        </button>
        <ReactPlayer
          url="https://youtu.be/UXlo7Z8Cqh8?si=S24hkli_REPkKcOr"
          playing={isPlaying}
          controls={false}
          width="0"
          height="0"
        />
      </div>

      {/* Story Section */}
      <div className="py-20 bg-gray-800 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">The Story of the Reed-Dock Chickens</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          In the twilight marsh where reeds whisper to the river, the Reed-Dock Chickens built floating markets that shimmer on the water like lanterns.
        </p>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed mt-6">
          Suncrest, the golden rooster in armor, stands proudly at the center. Moonfeather, the calm silver hen, tends to the market goods. The two playful chicks, Fluff-Ball and Fluffy, explore the crates and baskets. Brambleshine, the colorful storyteller rooster, gestures animatedly as he shares tales with onlookers.
        </p>
      </div>

      {/* Meet the Family Section */}
      <div className="py-20 bg-gray-900 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Meet the Family</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <img src="/Suncrest.png" alt="Suncrest" className="rounded-2xl shadow-lg mb-4 w-full h-72 object-cover" />
            <h3 className="text-2xl font-bold">Suncrest</h3>
            <p className="text-gray-300 mt-2">Golden rooster in armor or cloak, the proud leader and most eye-catching figure.</p>
          </div>
          <div className="text-center">
            <img src="/Moonfeather.png" alt="Moonfeather" className="rounded-2xl shadow-lg mb-4 w-full h-72 object-cover" />
            <h3 className="text-2xl font-bold">Moonfeather</h3>
            <p className="text-gray-300 mt-2">Silver hen, calm and smaller, standing near Suncrest, guiding the market’s harmony.</p>
          </div>
          <div className="text-center">
            <img src="/FluffBall.png" alt="Fluff-Ball" className="rounded-2xl shadow-lg mb-4 w-full h-72 object-cover" />
            <h3 className="text-2xl font-bold">Fluff-Ball</h3>
            <p className="text-gray-300 mt-2">A small, round chick—bolder and mid-movement, curious about everything.</p>
          </div>
          <div className="text-center">
            <img src="/Fluffy.png" alt="Fluffy" className="rounded-2xl shadow-lg mb-4 w-full h-72 object-cover" />
            <h3 className="text-2xl font-bold">Fluffy</h3>
            <p className="text-gray-300 mt-2">Darker brown chick with a little crest, dreamy and observant of the world.</p>
          </div>
          <div className="text-center">
            <img src="/Brambleshine.png" alt="Brambleshine" className="rounded-2xl shadow-lg mb-4 w-full h-72 object-cover" />
            <h3 className="text-2xl font-bold">Brambleshine</h3>
            <p className="text-gray-300 mt-2">Colorful rooster with a dramatic crest, telling stories to the market crowd.</p>
          </div>
        </div>
      </div>

      {/* Individual Sections for Fluff-Ball and Fluffy */}
      <div className="py-20 bg-gray-800 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Fluff-Ball</h2>
        <img src="/FluffBall.png" alt="Fluff-Ball" className="rounded-2xl shadow-lg mx-auto mb-4 w-full max-w-md object-cover" />
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          Fluff-Ball is the adventurous little chick of the family—bold, curious, and always mid-movement. Whether chasing river gems or sneaking peeks into cargo baskets, Fluff-Ball brings energy and mischief to the Reed Docks.
        </p>
      </div>

      <div className="py-20 bg-gray-900 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Fluffy</h2>
        <img src="/Fluffy.png" alt="Fluffy" className="rounded-2xl shadow-lg mx-auto mb-4 w-full max-w-md object-cover" />
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          Fluffy is the dreamer—darker brown in color with a small crest on the head. Often found sketching reed boats or watching the shimmering water, Fluffy offers a gentle, observant presence that balances Fluff-Ball’s boldness.
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-10 text-center text-gray-400">
        <p>© 2025 The Reed-Dock Chicken Family. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
