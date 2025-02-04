const topics = [
  { name: "AI Development", count: 2453, growth: "+127%" },
  { name: "Game Design", count: 1876, growth: "+85%" },
  { name: "AR/VR", count: 1544, growth: "+92%" },
  { name: "Web3", count: 1232, growth: "+73%" },
]

export default function TrendingTopics() {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-purple-900">Trending This Week</h2>
        <p className="text-purple-600">Based on student enrollments</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {topics.map((topic, index) => (
          <div key={index} className="bg-purple-50 rounded-xl p-6 hover:bg-purple-100 transition-colors">
            <h3 className="text-lg font-bold text-purple-900 mb-2">{topic.name}</h3>
            <p className="text-purple-600 text-sm">{topic.count.toLocaleString()} students</p>
            <p className="text-green-600 text-sm font-medium">{topic.growth} growth</p>
          </div>
        ))}
      </div>
    </section>
  )
}

