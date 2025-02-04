export default function ResourceSection() {
  const resources = [
    {
      title: "Free Workshop",
      description: "Building Scalable APIs with GraphQL",
      type: "video",
      duration: "45 min",
    },
    {
      title: "New Article",
      description: "10 Tips for Better Code Reviews",
      type: "article",
      duration: "5 min read",
    },
    {
      title: "Podcast Episode",
      description: "Career Growth in Tech: Senior to Lead",
      type: "podcast",
      duration: "30 min",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "video":
        return "🎥"
      case "article":
        return "📚"
      case "podcast":
        return "🎧"
      default:
        return "📌"
    }
  }

  return (
    <section className="py-16 px-4 bg-purple-50">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-purple-800 mb-8">Additional Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <span className="text-2xl">{getIcon(resource.type)}</span>
                <div>
                  <span className="text-sm font-medium text-purple-600">{resource.title}</span>
                  <h4 className="text-lg font-semibold text-purple-900 mt-1 mb-2">{resource.description}</h4>
                  <span className="text-sm text-purple-600">{resource.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

