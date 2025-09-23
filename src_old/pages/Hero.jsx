 export default function Hero() {
  return (
    <div className="bg-gray-800 text-white py-20 px-6 flex flex-col items-center text-center min-h-screen">
      <img src="/Rushwater.png" alt="Rushwater"
        className="rounded-2xl shadow-lg mb-6 w-full max-w-md object-cover" />
      <h2 className="text-4xl font-bold mb-4">Rushwater</h2>

      <p className="max-w-3xl text-lg text-gray-300 leading-relaxed">
        Born among the swaying reeds of the twilight marsh, Rushwater was cousin to the famed golden rooster, Suncrest.
        Where Suncrest carried the gleam of dawn, Rushwater bore the calm resilience of the river. He was known for his
        patience, standing still as the cattails when hunting fish or guarding the floating markets at dusk.
      </p>

      <p className="max-w-3xl text-lg text-gray-300 leading-relaxed mt-4">
        When raiders once tried to set fire to the reed-docks, it was Rushwater who leapt into the water with shield and spear,
        dousing flames and driving the enemy back with fearless charges from the shallows. His tactics, using the marsh itself
        as both shield and weapon, became legendary. Villagers sang of the “Knight of the Current” who could fight as easily
        waist-deep in water as he could upon dry planks.
      </p>

      <p className="max-w-3xl text-lg text-gray-300 leading-relaxed mt-4">
        Recognizing his valor, the elders of Reed-Dock bestowed upon him a helm crested with woven reeds and a title of
        knighthood. Unlike the polished shine of courtly knights, his armor carried the stains of river water and the scent of
        marsh grass. Yet to the market folk, he was their unshakable wall — a cousin of Suncrest, but very much a hero in his
        own right.
      </p>
    </div>
  );
}
