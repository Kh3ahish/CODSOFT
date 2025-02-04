const features = [
  { title: "New AI Course", description: "Master the basics of Artificial Intelligence" },
  { title: "Updated Python Tools", description: "Enhance your coding with our latest Python suite" },
  { title: "Data Science Workshop", description: "Join our live workshop on data analysis" },
  { title: "Mobile App Launch", description: "Learn on-the-go with our new mobile app" },
]

export default function FeatureHighlights() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-purple-800 mb-8 text-center">Latest Updates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-purple-800 mb-2 text-center">{feature.title}</h4>
              <p className="text-purple-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

