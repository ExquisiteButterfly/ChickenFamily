import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const members = [
  {
    name: "Suncrest",
    img: "/Suncrest.png",
    desc: "Suncrest is the golden rooster in armor, the proud leader of the Reed-Dock Chicken Family. His courage and commanding presence inspire every trader at the floating markets.",
  },
  {
    name: "Moonfeather",
    img: "/Moonfeather.png",
    desc: "Moonfeather, the calm silver hen, is the guiding heart of the family. She tends to the market goods, ensuring harmony among the bustling docks and fellow traders.",
  },
  {
    name: "Fluff-Ball",
    img: "/FluffBall.png",
    desc: "Fluff-Ball is the bold, adventurous chick. Always mid-movement, Fluff-Ball turns every crate, basket, and reed raft into a new adventure on the shimmering water.",
  },
  {
    name: "Fluffy",
    img: "/Fluffy.png",
    desc: "Fluffy is the dreamy brown chick with a tiny crest on its head. Quiet and observant, Fluffy watches the markets and sketches the boats, bringing balance to Fluff-Ball’s boundless energy.",
  },
  {
    name: "Brambleshine",
    img: "/Brambleshine.png",
    desc: "Brambleshine, the colorful rooster with a dramatic crest, is the storyteller of the docks. His tales weave courage, laughter, and wisdom, captivating all who gather at the markets.",
  },
];

export default function Family() {
  return (
    <div className="py-20 bg-gray-900 px-6 text-center text-white">
      <h2 className="text-4xl font-bold mb-10">Meet the Family</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true} // Ensures infinite rotation
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
            <p className="text-gray-300 mt-2 text-base leading-relaxed">
              {m.desc}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
