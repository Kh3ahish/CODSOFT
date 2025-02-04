export default function WeeklyProgress() {
  const progress = {
    coursesProgress: 75,
    weeklyGoals: 3,
    totalGoals: 4,
    streakDays: 12,
  }

  return (
    <section className="py-8 px-4 bg-white">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">Your Weekly Progress</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-purple-600">Course Progress</span>
                <span className="text-lg font-bold text-purple-800">{progress.coursesProgress}%</span>
              </div>
              <div className="w-full bg-purple-100 rounded-full h-2">
                <div
                  className="bg-purple-600 rounded-full h-2 transition-all duration-500 ease-out"
                  style={{ width: `${progress.coursesProgress}%` }}
                />
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-purple-600">Weekly Goals</span>
                <span className="text-lg font-bold text-purple-800">
                  {progress.weeklyGoals}/{progress.totalGoals}
                </span>
              </div>
              <div className="flex gap-2">
                {[...Array(progress.totalGoals)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full ${
                      i < progress.weeklyGoals ? "bg-purple-600" : "bg-purple-100"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-purple-600">Learning Streak</span>
                <span className="text-lg font-bold text-purple-800">{progress.streakDays} days</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-6 w-6 rounded-full flex items-center justify-center ${
                      i < (progress.streakDays % 7) ? "bg-purple-600 text-white" : "bg-purple-100"
                    }`}
                  >
                    <span className="text-xs">●</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

