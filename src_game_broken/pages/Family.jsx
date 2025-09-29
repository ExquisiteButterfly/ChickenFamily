import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const members = [
  {
    name: "Suncrest",
    img: "/Suncrest.png",
    desc:
      "Suncrest is the golden rooster in armor, the proud leader of the Reed-Dock Chicken Family. His courage and commanding presence inspire every trader at the floating markets.",
  },
  {
    name: "Moonfeather",
    img: "/Moonfeather.png",
    desc:
      "Moonfeather, the calm silver hen, is the guiding heart of the family. She tends to the market goods, ensuring harmony among the bustling docks and fellow traders.",
  },
  {
    name: "Fluff-Ball",
    img: "/FluffBall.png",
    desc:
      "Fluff-Ball is the bold, adventurous chick. Always mid-movement, Fluff-Ball turns every crate, basket, and reed raft into a new adventure on the shimmering water.",
  },
  {
    name: "Fluffy",
    img: "/Fluffy.png",
    desc:
      "Fluffy is the dreamy brown chick with a tiny crest on the head. Quiet and observant, Fluffy watches the markets and sketches the boats, balancing Fluff-Ball’s boundless energy.",
  },
  {
    name: "Brambleshine",
    img: "/Brambleshine.png",
    desc:
      "Brambleshine, the colorful rooster with a dramatic crest, is the storyteller of the docks. His tales weave courage, laughter, and wisdom, captivating all who gather at the markets.",
  },
];

export default function Family() {
  return (
    <div className="py-20 bg-gray-900 px-6 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Meet the Family</h2>

      {/* 3D Coverflow Carousel */}
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="max-w-3xl mx-auto"
      >
        {members.map((m) => (
          <SwiperSlide
            key={m.name}
            className="bg-gray-800 rounded-2xl shadow-lg text-center p-6 max-w-xs"
          >
            <img
              src={m.img}
              alt={m.name}
              className="rounded-2xl shadow-lg mb-4 w-64 h-64 object-cover mx-auto"
            />
            <h3 className="text-2xl font-bold">{m.name}</h3>
            <p className="text-gray-300 mt-2 text-base leading-relaxed">{m.desc}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Highlights: Fluff-Ball & Fluffy */}
      <section id="highlights" className="mt-16 max-w-5xl mx-auto">
        <h3 className="text-3xl font-extrabold tracking-wide text-center mb-8">
          Highlights
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Fluff-Ball */}
          <article className="bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col md:flex-row items-center gap-6">
            <img
              src="/FluffBall.png"
              alt="Fluff-Ball portrait"
              className="w-56 h-56 object-cover rounded-xl shadow-lg"
            />
            <div>
              <h4 className="text-2xl font-bold">Fluff-Ball</h4>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Adventurous, bold, and always mid-movement — Fluff-Ball turns crates, baskets,
                and reed rafts into quests. If there’s a shimmer on the water or a curious
                rattle in a cargo box, Fluff-Ball is already on the case.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                <li className="bg-yellow-600/30 border border-yellow-500/40 px-3 py-1 rounded-full">
                  Explorer
                </li>
                <li className="bg-blue-600/30 border border-blue-500/40 px-3 py-1 rounded-full">
                  Quick Feet
                </li>
                <li className="bg-pink-600/30 border border-pink-500/40 px-3 py-1 rounded-full">
                  Market Scout
                </li>
              </ul>
            </div>
          </article>

          {/* Fluffy */}
          <article className="bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col md:flex-row items-center gap-6">
            <img
              src="/Fluffy.png"
              alt="Fluffy portrait"
              className="w-56 h-56 object-cover rounded-xl shadow-lg"
            />
            <div>
              <h4 className="text-2xl font-bold">Fluffy</h4>
              <p className="text-gray-300 mt-2 leading-relaxed">
                Dreamy, thoughtful, and observant — Fluffy (a darker brown chick with a little crest)
                sketches boats and watches the river’s sparkle. Fluffy keeps the family steady, offering
                quiet ideas that turn into big adventures.
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                <li className="bg-emerald-600/30 border border-emerald-500/40 px-3 py-1 rounded-full">
                  Dreamer
                </li>
                <li className="bg-purple-600/30 border border-purple-500/40 px-3 py-1 rounded-full">
                  Keen Observer
                </li>
                <li className="bg-cyan-600/30 border border-cyan-500/40 px-3 py-1 rounded-full">
                  River Artist
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
