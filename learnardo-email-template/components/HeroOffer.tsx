import { useState, useEffect } from "react"
import { ArrowRight, Clock, Check } from "lucide-react"
import Image from "next/image"

export default function HeroOffer() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60) // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  const recentCustomers = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/662c092880a6d18c31995dfd_66236531e8288ee0657ae7a7_Business_20Professional-IJdIbVtxLn7Gz0HCmFMw5p9lqADbtU.webp",
      alt: "Recent customer",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PROFILE-PICTURE-FOR-FACEBOOK.jpg-QjjlYxFa7e54gJIHbKQKF2H1f7qSBm.jpeg",
      alt: "Recent customer",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai_generated_female_model_profile_shoot_by_ghostygrm_dfdrrlx-pre.jpg-D8FZiyh7suN1R7O12gSIhaj646GDEo.jpeg",
      alt: "Recent customer",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blank-profile-picture-973460_1280-casY7h6I8fkeRMtYf8MzNIWAk9Pj9c.webp",
      alt: "Recent customer",
    },
  ]

  return (
    <section className="mb-16 relative overflow-hidden">
      <div className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 rounded-3xl p-8 md:p-12 relative">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10">
          <div className="inline-block bg-yellow-400 text-purple-900 rounded-full px-4 py-2 text-sm font-bold mb-4 animate-pulse">
            Exclusive Offer - Save up to $2,000!
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Flash Sale: 70% OFF + 6 Months Free Mentorship
          </h2>
          <p className="text-xl text-purple-100 mb-6 max-w-2xl">
            Unlock your potential with our biggest discount ever! Get 70% off on all courses and receive 6 months of
            free mentorship (worth $1,199) with industry experts.
          </p>
          <div className="bg-white/10 rounded-lg p-4 mb-6">
            <h3 className="text-xl font-bold text-white mb-2">What you'll get:</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-purple-100">
                <Check className="mr-2 text-green-400" /> Access to all 200+ premium courses
              </li>
              <li className="flex items-center text-purple-100">
                <Check className="mr-2 text-green-400" /> 6 months of personalized mentorship
              </li>
              <li className="flex items-center text-purple-100">
                <Check className="mr-2 text-green-400" /> Exclusive job placement assistance
              </li>
              <li className="flex items-center text-purple-100">
                <Check className="mr-2 text-green-400" /> Certificate of completion for each course
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
            <div className="flex items-center bg-red-500 text-white rounded-full px-6 py-3 animate-pulse">
              <Clock className="mr-2" />
              <span className="font-bold">Ends in: {formatTime(timeLeft)}</span>
            </div>
            <button className="bg-yellow-400 text-purple-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center">
              Claim Your 70% OFF Now <ArrowRight className="ml-2" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-3">
              {recentCustomers.map((customer, index) => (
                <div key={index} className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image src={customer.image || "/placeholder.svg"} alt={customer.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
            <p className="text-purple-100 text-sm">
              <span className="font-bold">137 people</span> claimed this offer in the last hour
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  )
}

