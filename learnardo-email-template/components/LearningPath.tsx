const paths = [
  {
    role: "Full Stack Developer",
    courses: ["Web Fundamentals", "Backend Development", "DevOps Essentials"],
    duration: "6 months",
    salary: "$95,000",
  },
  {
    role: "Game Developer",
    courses: ["Unity Basics", "3D Modeling", "Game Design"],
    duration: "8 months",
    salary: "$85,000",
  },
  {
    role: "AR/VR Engineer",
    courses: ["3D Development", "AR Fundamentals", "VR Applications"],
    duration: "7 months",
    salary: "$105,000",
  },
]

export default function LearningPath() {
  return (
    <section className="mb-20">
      <div className="bg-purple-50 rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-purple-900 mb-8">Career Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-purple-900 mb-2">{path.role}</h3>
              <p className="text-purple-600 mb-4">Avg. Salary: {path.salary}</p>
              <div className="space-y-2 mb-4">
                {path.courses.map((course, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    <span className="text-gray-600 text-sm">{course}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-purple-600">{path.duration}</span>
                <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                  View Path →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

