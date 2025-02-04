"use client"

import { useEffect } from "react"
import ProductDetails from "../components/ProductDetails"

// This would typically come from your database or API
const getProductById = (id: string) => {
  const products = [
    {
      id: "1",
      name: "Wool Blend Overshirt",
      brand: "Kushwah Éclat",
      price: 24900,
      category: "Jackets",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3M5hUavdBLIKo4Gxn9oJUVjfvvHzKF.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9POuZguJ9tAHr3A0WEozGGIzWr8TgD.png",
        "/placeholder.svg?height=800&width=600",
        "/placeholder.svg?height=800&width=600",
      ],
      description: "Luxurious wool blend overshirt with a modern silhouette. Perfect for layering in cooler weather.",
      details: [
        "80% wool, 20% polyester blend",
        "Button-up front",
        "Two chest pockets",
        "Relaxed fit",
        "Dry clean only",
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Charcoal", "Navy", "Camel"],
      isNew: true,
      inStock: true,
    },
    // Add more products as needed
  ]

  return products.find((p) => p.id === id)
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  if (!product) {
    return null
  }

  return <ProductDetails product={product} />
}

