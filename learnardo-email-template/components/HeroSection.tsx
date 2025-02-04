export default function HeroSection() {
  return (
    <section className="mb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-75 rounded-3xl" />
      <div className="relative z-10 p-8 text-white">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">Unlock Your Potential in Tech</h1>
        <p className="text-xl mb-6">Discover the latest trends, courses, and insights to fuel your growth</p>
        <button className="bg-white text-purple-800 font-bold py-3 px-8 rounded-full hover:bg-purple-100 transition duration-300">
          Explore Now
        </button>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400 rounded-full opacity-50 transform translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-400 rounded-full opacity-50 transform -translate-x-1/2 -translate-y-1/2" />
    </section>
  )
}

