import { motion } from "framer-motion";

export default function MedievalChickens() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Banner Section */}
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
            Welcome to the floating markets of Reed-Dock. Explore their world or
            visit the HERO, FAMILY, CHICKEN EMULATOR, and TUTORIAL tabs to meet your favorite chickens!
          </motion.p>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-gray-800 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">The Story of the Reed-Dock Chickens</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          In the twilight marsh where reeds whisper to the river, the Reed-Dock
          Chickens built floating markets that shimmer on the water like lanterns.
          They traded stories, river gems, and marsh grains under glowing skies,
          building a community bound by courage, craftsmanship, and kinship.
        </p>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed mt-6">
          Suncrest’s proud crow would greet the dawn, Brambleshine’s tales would
          fill the evenings, and Moonfeather guided the bustling docks with calm
          wisdom. Meanwhile, Fluff-Ball and Fluffy turned every crate and reed
          raft into an adventure. Their legacy still hums through the marsh,
          where water meets sky.
        </p>
      </div>
    </div>
  );
}
