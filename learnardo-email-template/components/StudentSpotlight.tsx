export default function StudentSpotlight() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-purple-800 mb-8 text-center">Student Spotlight</h3>
        <div className="bg-purple-50 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <img src="/placeholder.svg" alt="Sarah Johnson" className="w-32 h-32 rounded-full" />
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-purple-800 mb-2">Sarah Johnson</h4>
              <p className="text-purple-700 mb-4">Full Stack Developer</p>
              <p className="text-purple-600 mb-4">
                "Learnado's courses helped me transition from a marketing career to a full-stack developer role. The
                practical projects and supportive community were game-changers in my learning journey."
              </p>
              <a href="#" className="text-purple-700 hover:text-purple-900 font-semibold">
                Read Sarah's full story →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

