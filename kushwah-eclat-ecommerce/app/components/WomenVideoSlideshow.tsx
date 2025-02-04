"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

const slides = [
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design(20)-y53DihKkNI6eByFjvvgQwp0sYAeyLt.mp4",
    title: "SUMMER ELEGANCE",
    subtitle: "KUSHWAH ÉCLAT",
    cta: "SHOP NOW",
    link: "/women/summer",
  },
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design(17)-oMx5Q4A6Ce8TdfvArFtVe1tLijuDGC.mp4",
    title: "EVENING GLAMOUR",
    subtitle: "KUSHWAH ÉCLAT",
    cta: "EXPLORE COLLECTION",
    link: "/women/evening",
  },
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design(21)-mZymYM8SuceHDY4fZP3OOLb9F2seEe.mp4",
    title: "URBAN CHIC",
    subtitle: "KUSHWAH ÉCLAT",
    cta: "DISCOVER NOW",
    link: "/women/urban",
  },
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design(18)-gOSiH192n8rvTKk4fBNsoJXMIkwetf.mp4",
    title: "CASUAL LUXE",
    subtitle: "KUSHWAH ÉCLAT",
    cta: "VIEW COLLECTION",
    link: "/women/casual",
  },
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design(19)-MzfMHtM7D4Z1LPJCwFJLi7PzxXCACO.mp4",
    title: "BOHEMIAN RHAPSODY",
    subtitle: "KUSHWAH ÉCLAT",
    cta: "SHOP BOHO",
    link: "/women/boho",
  },
  {
    type: "video",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design(16)-kKlG6XyyUIRA873cobUN6FwyoOO3lk.mp4",
    title: "WINTER ROMANCE",
    subtitle: "KUSHWAH ÉCLAT",
    cta: "EXPLORE WINTER",
    link: "/women/winter",
  },
]

export default function WomenVideoSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.type === "video" && (
            <video
              src={slide.src}
              autoPlay
              muted
              loop
              playsInline
              poster="/placeholder.svg?height=1080&width=1920"
              className="h-full w-full object-cover"
            />
          )}
        </div>
      ))}

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl tracking-[0.2em] mb-2">{slides[currentIndex].subtitle}</h2>
          <h1 className="text-6xl md:text-7xl font-light mb-8">{slides[currentIndex].title}</h1>
          <Link
            href={slides[currentIndex].link}
            className="inline-block border border-white px-8 py-3 text-sm tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
          >
            {slides[currentIndex].cta}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlayPause}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <div className="text-white text-sm tracking-wider">
                {(currentIndex + 1).toString().padStart(2, "0")} / {slides.length.toString().padStart(2, "0")}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handlePrevious}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

