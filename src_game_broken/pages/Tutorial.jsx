export default function Tutorial() {
  return (
    <div className="py-20 bg-gray-900 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">How We Made This Website</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-6">
        Watch this step-by-step tutorial where we explain how we built the magical Chicken Family website
        using ChatGPT, React, Tailwind, and Vercel.
      </p>
      <video controls width="720" className="mx-auto rounded-2xl shadow-lg">
        <source src="/tutorial.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
