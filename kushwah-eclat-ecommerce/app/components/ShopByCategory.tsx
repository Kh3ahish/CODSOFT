"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Category {
  name: string
  image: string
  link: string
  description?: string
}

interface ShopByCategoryProps {
  categories: Category[]
  title: string
}

export default function ShopByCategory({ categories = [], title = "Shop by Category" }: ShopByCategoryProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-light mb-12 text-center">{title}</h2>

        <div className="relative group">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth pb-4 -mx-2 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.link}
                className="relative flex-none w-[300px] group/item overflow-hidden rounded-lg"
              >
                <div className="flex flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/item:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 opacity-50 transition-opacity duration-300 group-hover/item:opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-primary/0 opacity-0 transition-opacity duration-300 group-hover/item:opacity-100" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 transform transition-transform duration-300 group-hover/item:translate-y-0">
                      <h3 className="text-xl font-light tracking-wider text-center mb-2 transform transition-transform duration-300 group-hover/item:-translate-y-2">
                        {category.name}
                      </h3>
                      {category.description && (
                        <p className="text-sm text-center text-white/90 opacity-0 transform translate-y-4 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-y-0">
                          {category.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-lg hover:bg-white"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-lg hover:bg-white"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

