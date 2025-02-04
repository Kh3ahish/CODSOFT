"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselItem {
  leftImage: string
  rightImage: string
  leftTitle: string
  rightTitle: string
  leftSubtitle: string
  rightSubtitle: string
  leftDescription: string
  rightDescription: string
  leftLink: string
  rightLink: string
}

const carouselItems: CarouselItem[] = [
  {
    leftImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XkYZsQMmY4fwfjtlyJqIQygmjyxUPH.png",
    rightImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NsgguY3glNahByLADJbowEiU1kJyDm.png",
    leftTitle: "Heritage Collection",
    rightTitle: "Modern Essentials",
    leftSubtitle: "TRADITIONAL ELEGANCE",
    rightSubtitle: "CONTEMPORARY STYLE",
    leftDescription: "Hand-crafted luxury pieces featuring traditional artisanal techniques",
    rightDescription: "Premium essentials designed for the modern wardrobe",
    leftLink: "/collections/heritage",
    rightLink: "/collections/essentials",
  },
  {
    leftImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KNla2ASwQaLcTSlU4PSxl7fWp4zITl.png",
    rightImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zdoCcztKwY6VwsYvyqCkZJq5aYMnKW.png",
    leftTitle: "Denim Collection",
    rightTitle: "Casual Comfort",
    leftSubtitle: "REFINED DENIM",
    rightSubtitle: "LUXE CASUAL",
    leftDescription: "Premium denim pieces with contemporary silhouettes",
    rightDescription: "Elevated basics crafted from premium materials",
    leftLink: "/collections/denim",
    rightLink: "/collections/casual",
  },
  {
    leftImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xAOOHwae3PvWT6ofDc0V0JsUiflFtl.png",
    rightImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NsgguY3glNahByLADJbowEiU1kJyDm.png",
    leftTitle: "Street Style",
    rightTitle: "Winter Collection",
    leftSubtitle: "URBAN LUXE",
    rightSubtitle: "SEASONAL WARMTH",
    leftDescription: "Contemporary streetwear with a luxury twist",
    rightDescription: "Premium outerwear and cold-weather essentials",
    leftLink: "/collections/street",
    rightLink: "/collections/winter",
  },
]

export default function SplitCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)

  const nextSlide = () => {
    if (!isTransitioning) {
      setDirection("right")
      setIsTransitioning(true)
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
    }
  }

  const prevSlide = () => {
    if (!isTransitioning) {
      setDirection("left")
      setIsTransitioning(true)
      setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
    }
  }

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setDirection(null)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  const getSlideClass = (index: number) => {
    if (index === currentIndex) return "opacity-100 translate-x-0 z-10"
    if (direction === "right" && index === (currentIndex - 1 + carouselItems.length) % carouselItems.length)
      return "opacity-0 -translate-x-full z-0"
    if (direction === "left" && index === (currentIndex + 1) % carouselItems.length)
      return "opacity-0 translate-x-full z-0"
    return "opacity-0 translate-x-0 z-0"
  }

  return (
    <section className="relative h-screen bg-[#f5f5f5] overflow-hidden">
      <div className="absolute inset-0">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 grid grid-cols-2 transition-all duration-1000 ease-in-out ${getSlideClass(index)}`}
          >
            {/* Left Side */}
            <div className="relative overflow-hidden group">
              <Image
                src={item.leftImage || "/placeholder.svg"}
                alt={item.leftTitle}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-12 left-12 right-12">
                <p className="text-white/80 text-sm tracking-[0.3em] mb-2">{item.leftSubtitle}</p>
                <h2 className="text-white text-5xl font-light mb-4">{item.leftTitle}</h2>
                <p className="text-white/90 text-lg mb-8 max-w-md">{item.leftDescription}</p>
              </div>
              <div className="absolute bottom-12 left-12">
                <Link
                  href={item.leftLink}
                  className="inline-block border border-white text-white px-8 py-3 text-sm tracking-[0.2em] 
                           hover:bg-white hover:text-black transition-colors group-hover:bg-white group-hover:text-black"
                >
                  DISCOVER MORE
                </Link>
              </div>
            </div>

            {/* Right Side */}
            <div className="relative overflow-hidden group">
              <Image
                src={item.rightImage || "/placeholder.svg"}
                alt={item.rightTitle}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-12 left-12 right-12">
                <p className="text-white/80 text-sm tracking-[0.3em] mb-2">{item.rightSubtitle}</p>
                <h2 className="text-white text-5xl font-light mb-4">{item.rightTitle}</h2>
                <p className="text-white/90 text-lg mb-8 max-w-md">{item.rightDescription}</p>
              </div>
              <div className="absolute bottom-12 left-12">
                <Link
                  href={item.rightLink}
                  className="inline-block border border-white text-white px-8 py-3 text-sm tracking-[0.2em] 
                           hover:bg-white hover:text-black transition-colors group-hover:bg-white group-hover:text-black"
                >
                  DISCOVER MORE
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-8">
        <div className="flex flex-col gap-6">
          <button
            onClick={prevSlide}
            className="p-4 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/30 transition-all transform hover:-translate-y-1"
            disabled={isTransitioning}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="p-4 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/30 transition-all transform hover:-translate-y-1"
            disabled={isTransitioning}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="text-white text-sm tracking-wider rotate-90 origin-center mb-8">
            {(currentIndex + 1).toString().padStart(2, "0")} / {carouselItems.length.toString().padStart(2, "0")}
          </div>
          <div className="flex flex-col gap-3">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => !isTransitioning && setCurrentIndex(index)}
                className={`w-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white h-8" : "bg-white/50 h-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

