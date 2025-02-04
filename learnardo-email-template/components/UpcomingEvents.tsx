const events = [
  { title: "Webinar: Future of JavaScript", date: "May 15" },
  { title: "Workshop: Building AI-Powered Apps", date: "May 18" },
  { title: "Live Q&A: Career in Tech", date: "May 20" },
]

export default function UpcomingEvents() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-8">Upcoming Events</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              {event.date}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{event.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

