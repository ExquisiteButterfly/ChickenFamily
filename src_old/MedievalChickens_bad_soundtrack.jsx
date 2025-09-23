import { useState } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';


function Soundtrack() {
const [isPlaying, setIsPlaying] = useState(false);


return (
<div className="text-center my-6">
<button
onClick={() => setIsPlaying(!isPlaying)}
className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
{isPlaying ? 'Pause Soundtrack' : 'Play Soundtrack'}
</button>
<ReactPlayer
url="https://youtu.be/UXlo7Z8Cqh8?si=S24hkli_REPkKcOr"
playing={isPlaying}
controls={false}
width="0"
height="0"
/>
</div>
);
}


export default function MedievalChickens() {
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


{/* Add soundtrack player below hero */}
<Soundtrack />


{/* Rest of your sections remain unchanged */}
</div>
);
}