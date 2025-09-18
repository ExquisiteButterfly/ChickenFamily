export default function Family() {
  const chickens = [
    { name: "Suncrest", img: "/Suncrest.png", desc: "Golden rooster in armor or cloak — the proud leader and most eye-catching figure." },
    { name: "Moonfeather", img: "/Moonfeather.png", desc: "Silver hen, calm and smaller, standing near Suncrest and guiding the market’s harmony." },
    { name: "Fluff-Ball", img: "/FluffBall.png", desc: "A small, round chick — bolder and mid-movement, curious about everything." },
    { name: "Fluffy", img: "/Fluffy.png", desc: "Darker brown chick with a little crest — dreamy and observant of the world." },
    { name: "Brambleshine", img: "/Brambleshine.png", desc: "Colorful rooster with a dramatic crest — a born storyteller holding crowds in awe." }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Meet the Family</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {chickens.map(c => (
            <div key={c.name} className="text-center">
              <img src={c.img} alt={c.name} className="rounded-2xl shadow-lg mb-4 w-full h-72 object-cover" />
              <h3 className="text-2xl font-bold">{c.name}</h3>
              <p className="text-gray-300 mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-20 bg-gray-800 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Fluff-Ball</h2>
        <img src="/FluffBall.png" alt="Fluff-Ball" className="rounded-2xl shadow-lg mx-auto mb-4 w-full max-w-md object-cover" />
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          Fluff-Ball is the adventurous little chick of the family — bold, curious, and always mid-movement.
          Whether chasing river gems or sneaking peeks into cargo baskets, Fluff-Ball brings energy and mischief
          to the Reed Docks.
        </p>
      </div>

      <div className="py-20 bg-gray-900 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Fluffy</h2>
        <img src="/Fluffy.png" alt="Fluffy" className="rounded-2xl shadow-lg mx-auto mb-4 w-full max-w-md object-cover" />
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          Fluffy is the dreamer — darker brown in color with a small crest on the head. Often found sketching reed boats
          or watching the shimmering water, Fluffy offers a gentle, observant presence that balances Fluff-Ball’s
          boldness.
        </p>
      </div>
    </div>
  );
}
