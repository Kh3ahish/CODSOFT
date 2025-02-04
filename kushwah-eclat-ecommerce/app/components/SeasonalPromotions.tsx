"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

interface Promotion {
  title: string
  subtitle: string
  description: string
  buttonText: string
  buttonLink: string
  bgColor: string
  image: string
  textColor: string
}

const promotions: Promotion[] = [
  {
    title: "Valentine's Collection",
    subtitle: "LOVE & LUXURY",
    description:
      "Celebrate the season of love with our curated selection of romantic pieces, featuring elegant designs in passionate hues and luxurious fabrics.",
    buttonText: "Explore Collection",
    buttonLink: "/collections/valentines",
    bgColor: "bg-rose-50",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M24YD5f1m2bQf2GGbO0JGBuNAvAQdA.png",
    textColor: "text-gray-900",
  },
  {
    title: "Lunar New Year",
    subtitle: "YEAR OF THE DRAGON",
    description:
      "Welcome prosperity and elegance with our exclusive Lunar New Year collection, featuring traditional motifs reimagined with contemporary sophistication.",
    buttonText: "Discover More",
    buttonLink: "/collections/lunar-new-year",
    bgColor: "bg-red-50",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KgldsYUzqcNxYJtq68IF37KvgsYx89.png",
    textColor: "text-red-900",
  },
  {
    title: "Spring Preview 2025",
    subtitle: "SEASONAL RENEWAL",
    description:
      "Embrace the changing season with our latest Spring collection, where timeless elegance meets fresh, contemporary design.",
    buttonText: "Shop Now",
    buttonLink: "/collections/spring-2025",
    bgColor: "bg-stone-50",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nzlrPKRfuznY4NXHGb93t7cacMYN8U.png",
    textColor: "text-gray-900",
  },
]

export default function SeasonalPromotions() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % promotions.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full">
      {promotions.map((promo, index) => (
        <div
          key={promo.title}
          className={`w-full transition-all duration-1000 absolute ${
            index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
          style={{ pointerEvents: index === currentIndex ? "auto" : "none" }}
        >
          <div className={`w-full ${promo.bgColor}`}>
            <div className="container mx-auto">
              <div className="grid md:grid-cols-2 items-center min-h-[600px]">
                <div className="p-12 md:p-24 text-center md:text-left">
                  <h3 className={`text-lg uppercase tracking-widest mb-4 ${promo.textColor}`}>{promo.title}</h3>
                  <h2 className={`font-light text-4xl md:text-5xl lg:text-6xl mb-6 ${promo.textColor}`}>
                    {promo.subtitle}
                  </h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0">{promo.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Link
                      href={promo.buttonLink}
                      className="inline-block bg-gray-900 text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-gray-800 transition duration-300"
                    >
                      {promo.buttonText}
                    </Link>
                    <Link
                      href="/collections"
                      className="inline-block border border-gray-900 text-gray-900 px-8 py-3 text-sm uppercase tracking-wider hover:bg-gray-900 hover:text-white transition duration-300"
                    >
                      View All Collections
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block h-[600px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10 z-10" />
                  <Image
                    src={promo.image || "/placeholder.svg"}
                    alt={promo.title}
                    fill
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {promotions.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-gray-900 w-4" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

