import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MedievalChickens() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

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
            Meet Suncrest, Moonfeather, Fluff-Ball, Fluffy, and Brambleshine in
            their floating market world.
          </motion.p>
        </div>
      </div>

      {/* Happy Day Music Player */}
      <div className="text-center my-6">
        <button
          onClick={toggleAudio}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          {isPlaying ? "Pause Music" : "Play Music"}
        </button>
        <audio ref={audioRef} src="/happy-day.mp3" preload="auto" />
        <p className="text-xs text-gray-400 mt-2">
          Music: “Happy Day” (Pixabay — Royalty Free)
        </p>
      </div>

      {/* Rushwater Hero Section */}
      <div className="py-20 bg-gray-800 px-6 flex flex-col items-center text-center">
        <img
          src="/Rushwater.png"
          alt="Rushwater"
          className="rounded-2xl shadow-lg mb-6 w-full max-w-md object-cover"
        />
        <h2 className="text-4xl font-bold mb-4">Rushwater</h2>
        <p className="max-w-3xl text-lg text-gray-300 leading-relaxed">
          Born among the swaying reeds of the twilight marsh, Rushwater was
          cousin to the famed golden rooster, Suncrest. Where Suncrest carried
          the gleam of dawn, Rushwater bore the calm resilience of the river. He
          was known for his patience, standing still as the cattails when
          hunting fish or guarding the floating markets at dusk.
        </p>
        <p className="max-w-3xl text-lg text-gray-300 leading-relaxed mt-4">
          When raiders once tried to set fire to the reed-docks, it was
          Rushwater who leapt into the water with shield and spear, dousing
          flames and driving the enemy back with fearless charges from the
          shallows. His tactics, using the marsh itself as both shield and
          weapon, became legendary. Villagers sang of the “Knight of the
          Current” who could fight as easily waist-deep in water as he could
          upon dry planks.
        </p>
        <p className="max-w-3xl text-lg text-gray-300 leading-relaxed mt-4">
          Recognizing his valor, the elders of Reed-Dock bestowed upon him a
          helm crested with woven reeds and a title of knighthood. Unlike the
          polished shine of courtly knights, his armor carried the stains of
          river water and the scent of marsh grass. Yet to the market folk, he
          was their unshakable wall — a cousin of Suncrest, but very much a hero
          in his own right.
        </p>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-gray-800 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          The Story of the Reed-Dock Chickens
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          In the twilight marsh where reeds whisper to the river, the Reed-Dock
          Chickens built floating markets that shimmer on the water like
          lanterns.
        </p>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed mt-6">
          Suncrest, the golden rooster in armor, stands proudly at the center.
          Moonfeather, the calm silver hen, tends to the market goods. The two
          playful chicks, Fluff-Ball and Fluffy, explore the crates and baskets.
          Brambleshine, the colorful storyteller rooster, gestures animatedly as
          he shares tales with onlookers.
        </p>
      </div>

      {/* Meet the Family Section */}
      <div className="py-20 bg-gray-900 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Meet the Family</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Suncrest",
              img: "/Suncrest.png",
              desc: "Golden rooster in armor or cloak, the proud leader and most eye-catching figure.",
            },
            {
              name: "Moonfeather",
              img: "/Moonfeather.png",
              desc: "Silver hen, calm and smaller, standing near Suncrest, guiding the market’s harmony.",
            },
            {
              name: "Fluff-Ball",
              img: "/FluffBall.png",
              desc: "A small, round chick—bolder and mid-movement, curious about everything.",
            },
            {
              name: "Fluffy",
              img: "/Fluffy.png",
              desc: "Darker brown chick with a little crest, dreamy and observant of the world.",
            },
            {
              name: "Brambleshine",
              img: "/Brambleshine.png",
              desc: "Colorful rooster with a dramatic crest, telling stories to the market crowd.",
            },
          ].map((c) => (
            <div key={c.name} className="text-center">
              <img
                src={c.img}
                alt={c.name}
                className="rounded-2xl shadow-lg mb-4 w-full h-72 object-cover"
              />
              <h3 className="text-2xl font-bold">{c.name}</h3>
              <p className="text-gray-300 mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fluff-Ball Section */}
      <div className="py-20 bg-gray-800 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Fluff-Ball</h2>
        <img
          src="/FluffBall.png"
          alt="Fluff-Ball"
          className="rounded-2xl shadow-lg mx-auto mb-4 w-full max-w-md object-cover"
        />
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          Fluff-Ball is the adventurous little chick of the family—bold,
          curious, and always mid-movement. Whether chasing river gems or
          sneaking peeks into cargo baskets, Fluff-Ball brings energy and
          mischief to the Reed Docks.
        </p>
      </div>

      {/* Fluffy Section */}
      <div className="py-20 bg-gray-900 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Fluffy</h2>
        <img
          src="/Fluffy.png"
          alt="Fluffy"
          className="rounded-2xl shadow-lg mx-auto mb-4 w-full max-w-md object-cover"
        />
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          Fluffy is the dreamer—darker brown in color with a small crest on the
          head. Often found sketching reed boats or watching the shimmering
          water, Fluffy offers a gentle, observant presence that balances
          Fluff-Ball’s boldness.
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-10 text-center text-gray-400">
        <p>© 2025 The Reed-Dock Chicken Family. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
