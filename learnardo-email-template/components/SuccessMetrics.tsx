const metrics = [
  { label: "Graduates", value: "15,000+", growth: "+45% YoY" },
  { label: "Avg. Salary Hike", value: "127%", growth: "+12% YoY" },
  { label: "Job Placement", value: "91%", growth: "+8% YoY" },
  { label: "Course Rating", value: "4.8/5", growth: "+0.3 YoY" },
]

export default function SuccessMetrics() {
  return (
    <section className="mb-20">
      <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-3xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Impact in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
                {metric.value}
              </p>
              <p className="text-purple-200 mb-1 text-sm">{metric.label}</p>
              <p className="text-green-400 text-sm font-medium">{metric.growth}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

