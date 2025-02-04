import Image from "next/image"
import { Star, Clock, Users, ArrowRight, Check } from "lucide-react"

const courses = [
  {
    title: "Unity Game Development Masterclass",
    subtitle: "From Beginner to Pro",
    description: "Create stunning games and launch your career in the gaming industry.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-4-2eGhtjWDSS35CLRdaMa78kJXrXY4jT.jpeg",
    tag: "BEST SELLER",
    price: "$199",
    originalPrice: "$999",
    duration: "12 weeks",
    features: ["50+ Hours of Video", "10 Real-World Projects", "1-on-1 Mentoring", "Job Placement Support"],
    rating: 4.9,
    students: 15420,
  },
  {
    title: "AR/VR Development Bootcamp",
    subtitle: "Master the Future of Tech",
    description: "Build immersive experiences and stay ahead in the AR/VR revolution.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-3-yGlRGQtlrd58ImqwSxq8YuJg6Ph9XM.jpeg",
    tag: "HOT & NEW",
    price: "$249",
    originalPrice: "$1399",
    duration: "16 weeks",
    features: ["60+ Hours of Content", "5 Industry Projects", "AR/VR Kit Included", "Certification"],
    rating: 4.8,
    students: 9876,
  },
  {
    title: "AI + Web Development Specialization",
    subtitle: "The Ultimate Tech Combo",
    description: "Combine AI with modern web development to build next-gen applications.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-2-JuvKnoXEvqlG17T3xIPoKlEAqpfyjK.jpeg",
    tag: "TRENDING",
    price: "$299",
    originalPrice: "$1599",
    duration: "20 weeks",
    features: ["80+ Hours of Learning", "15 AI-Powered Projects", "Expert Code Reviews", "Career Coaching"],
    rating: 4.7,
    students: 12543,
  },
]

export default function FeaturedCourses() {
  return (
    <section className="mb-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-purple-900">Featured Courses</h2>
        <span className="text-purple-600 font-medium">70% OFF - Limited Time</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-purple-100"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-yellow-400 text-purple-900 text-xs font-bold rounded-full animate-pulse">
                  {course.tag}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-1">{course.title}</h3>
              <p className="text-purple-600 text-sm mb-3">{course.subtitle}</p>
              <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl font-bold text-purple-900">{course.price}</span>
                <span className="text-gray-500 line-through text-lg">{course.originalPrice}</span>
                <span className="bg-green-100 text-green-700 text-sm font-bold px-2 py-1 rounded animate-pulse">
                  SAVE{" "}
                  {Math.round(
                    (1 - Number.parseInt(course.price.slice(1)) / Number.parseInt(course.originalPrice.slice(1))) * 100,
                  )}
                  %
                </span>
              </div>
              <ul className="space-y-2 mb-4">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <Check className="mr-2 text-green-500 w-4 h-4" /> {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Star className="text-yellow-400 w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">
                    {course.rating} ({course.students.toLocaleString()} students)
                  </span>
                </div>
                <div className="flex items-center text-sm text-purple-600">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </div>
              </div>
              <button className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center">
                Enroll Now - 70% OFF <ArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

