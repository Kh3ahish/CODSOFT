const highlights = [
  {
    title: "Live Workshop",
    description: "Unity Game Development: From Concept to Launch",
    date: "May 15, 2025",
    time: "2:00 PM EST",
  },
  {
    title: "Expert Talk",
    description: "The Future of AR/VR in Education",
    date: "May 18, 2025",
    time: "1:00 PM EST",
  },
  {
    title: "Community Event",
    description: "AI Projects Showcase & Networking",
    date: "May 20, 2025",
    time: "3:00 PM EST",
  },
]

export default function WeeklyHighlights() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-purple-900 mb-8">This Week at Learnado</h2>
      <div className="grid gap-6">
        {highlights.map((event, index) => (
          <div
            key={index}
            className="bg-purple-50 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6 hover:bg-purple-100 transition-colors"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex flex-col items-center justify-center text-white">
                <span className="text-sm font-medium">MAY</span>
                <span className="text-xl font-bold">{event.date.split(",")[0].split(" ")[1]}</span>
              </div>
            </div>
            <div className="flex-grow">
              <span className="text-purple-600 font-medium text-sm">{event.title}</span>
              <h3 className="text-xl font-bold text-purple-900 mb-1">{event.description}</h3>
              <p className="text-gray-600">{event.time}</p>
            </div>
            <button className="px-6 py-2 bg-white text-purple-600 rounded-full shadow-sm hover:shadow-md transition-shadow">
              Register Now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

