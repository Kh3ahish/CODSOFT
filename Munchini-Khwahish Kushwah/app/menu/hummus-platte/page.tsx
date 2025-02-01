"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Star, Clock, Plus, Minus, Leaf } from "lucide-react"
import { motion } from "framer-motion"

const customizationOptions = [
  { name: "Hummus-Variante", options: ["Klassisch", "Rote Bete", "Avocado"] },
  { name: "Beilage", options: ["Pita-Brot", "Gemüsesticks", "Falafel"] },
  { name: "Topping", options: ["Pinienkerne", "Paprikapulver", "Olivenöl"] },
]

const similarItems = [
  {
    name: "Vegane Frühlingsrollen",
    price: 7.99,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shan-shi-rezepte-vegane-fruehlingsrollen.jpg-IlnXbJXwCjqkQ3MZOzepAmQ9kQ4AZH.jpeg",
  },
  {
    name: "Bruschetta",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500&h=500&fit=crop&q=60",
  },
  {
    name: "Caprese Salat",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1608032077018-c9aad9565d29?w=500&h=500&fit=crop&q=60",
  },
]

export default function HummusPlattePage() {
  const [quantity, setQuantity] = useState(1)
  const [selections, setSelections] = useState({
    "Hummus-Variante": "Klassisch",
    Beilage: "Pita-Brot",
    Topping: [],
  })

  const handleCustomization = (category: string, option: string) => {
    setSelections((prev) => {
      if (category === "Topping") {
        const newToppings = prev["Topping"].includes(option)
          ? prev["Topping"].filter((item) => item !== option)
          : [...prev["Topping"], option]
        return { ...prev, [category]: newToppings }
      }
      return { ...prev, [category]: option }
    })
  }

  const totalPrice = 9.99 * quantity + selections["Topping"].length * 0.5

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/menu" className="text-gray-600 hover:text-gray-900">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold">Hummus-Platte</h1>
          <div className="w-6 h-6" /> {/* Placeholder for symmetry */}
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="relative h-64 sm:h-80">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Loaded-Hummus-5-683x1024.jpg-iCwh6iCy5wGmjBT7jvnkIRGVOBY2YP.jpeg"
              alt="Hummus-Platte"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold">Hummus-Platte</h2>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center">
                <Leaf className="w-4 h-4 mr-1" />
                Vegan
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Cremiger hausgemachter Hummus, garniert mit Olivenöl, Paprikapulver und frischer Petersilie. Serviert mit
              warmen Pita-Brot und Gemüsesticks.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 text-sm font-semibold">4.8</span>
              </div>
              <div className="flex items-center text-gray-500">
                <Clock className="w-5 h-5 mr-1" />
                <span className="text-sm">5-10 Min</span>
              </div>
              <span className="text-2xl font-bold text-green-600">{totalPrice.toFixed(2)}€</span>
            </div>

            {/* Customization Options */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Anpassungen</h3>
              {customizationOptions.map((category) => (
                <div key={category.name} className="mb-4">
                  <h4 className="font-medium mb-2">{category.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.options.map((option) => (
                      <motion.button
                        key={option}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          category.name === "Topping"
                            ? selections[category.name].includes(option)
                              ? "bg-orange-500 text-white"
                              : "bg-gray-200 text-gray-800"
                            : selections[category.name] === option
                              ? "bg-orange-500 text-white"
                              : "bg-gray-200 text-gray-800"
                        }`}
                        onClick={() => handleCustomization(category.name, option)}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-semibold">Menge</span>
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4 text-gray-600" />
                </motion.button>
                <span className="font-semibold text-lg">{quantity}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4 text-gray-600" />
                </motion.button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-orange-500 text-white py-3 px-4 rounded-full font-semibold hover:bg-orange-600 transition duration-300"
            >
              Zum Warenkorb hinzufügen - {totalPrice.toFixed(2)}€
            </motion.button>
          </div>
        </div>

        {/* Similar Items */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Das könnte Ihnen auch gefallen</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {similarItems.map((item) => (
              <Link href={`/menu/${item.name.toLowerCase().replace(/\s+/g, "-")}`} key={item.name}>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-32 sm:h-40">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} layout="fill" objectFit="cover" />
                  </div>
                  <div className="p-2">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <span className="text-orange-500 font-semibold">{item.price.toFixed(2)}€</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

