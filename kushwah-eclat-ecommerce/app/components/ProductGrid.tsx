"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

function getColorForIndex(index: number): string {
  const colors = ["#000000", "#A52A2A", "#0000FF", "#808080", "#008000"]
  return colors[index] || "#000000"
}

interface Product {
  id: string
  name: string
  brand: string
  price: number
  images: string[]
  isNew?: boolean
  colors?: number
  category: string
  matchingSet?: boolean
}

interface ProductGridProps {
  products: Product[]
  title: string
}

export default function ProductGrid({ products, title }: ProductGridProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-light tracking-wide">{title}</h2>
        <div className="flex items-center gap-4">
          <button className="text-sm uppercase tracking-wider hover:underline">Filter</button>
          <span className="text-gray-300">|</span>
          <button className="text-sm uppercase tracking-wider hover:underline">Sort</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            <Link href={`/products/${product.id}`}>
              <div
                className="relative aspect-[3/4] overflow-hidden bg-[#f6f6f6]"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Image
                  src={hoveredProduct === product.id && product.images[1] ? product.images[1] : product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1">
                    <span className="text-xs tracking-wider">New Season</span>
                  </div>
                )}
              </div>
            </Link>

            <div className="mt-4 space-y-1">
              <div className="flex items-start justify-between">
                <h3 className="font-light text-lg tracking-wide">{product.name}</h3>
                <button
                  className="p-1 hover:scale-110 transition-transform"
                  onClick={(e) => {
                    e.preventDefault()
                    // Add to wishlist functionality
                  }}
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-gray-600">{product.brand}</p>
              <p className="font-medium">₹{product.price.toLocaleString()}</p>
              {product.colors && product.colors > 0 && (
                <div className="flex items-center space-x-1 mt-2">
                  {Array.from({ length: Math.min(product.colors, 5) }).map((_, index) => (
                    <div
                      key={index}
                      className="w-2 h-2 rounded-full bg-gray-300"
                      style={{ backgroundColor: getColorForIndex(index) }}
                    />
                  ))}
                  {product.colors > 5 && <span className="text-xs text-gray-500 ml-1">+{product.colors - 5}</span>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

