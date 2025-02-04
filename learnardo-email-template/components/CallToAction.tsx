import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="mb-20">
      <div className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 rounded-3xl overflow-hidden relative">
        <div className="relative z-10 p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Start Your Success Story Today</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join over 15,000 successful graduates who transformed their careers with Learnado
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-400 text-purple-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center justify-center">
              Enroll Now with 50% OFF <ArrowRight className="ml-2" />
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-purple-700 transition-colors">
              Schedule a Demo
            </button>
          </div>
          <p className="text-purple-200 mt-6 text-sm">*Limited time offer. Terms and conditions apply.</p>
        </div>
      </div>
    </section>
  )
}

