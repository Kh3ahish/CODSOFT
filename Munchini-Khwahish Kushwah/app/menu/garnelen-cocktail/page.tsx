"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Star, Clock, Plus, Minus } from "lucide-react"
import { motion } from "framer-motion"

const customizationOptions = [
  { name: "Garnelen-Größe", options: ["Klein", "Mittel", "Groß"] },
  { name: "Sauce", options: ["Klassisch", "Pikant", "Knoblauch-Dill"] },
  { name: "Beilage", options: ["Zitronenschnitz", "Avocado", "Gurkenscheiben"] },
]

const similarItems = [
  {
    name: "Lachs mit Gemüse",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=500&fit=crop&q=60",
  },
  {
    name: "Caprese Salat",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1608032077018-c9aad9565d29?w=500&h=500&fit=crop&q=60",
  },
  {
    name: "Französische Zwiebelsuppe",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop&q=60",
  },
]

export default function GarnelenCocktailPage() {
  const [quantity, setQuantity] = useState(1)
  const [selections, setSelections] = useState({
    "Garnelen-Größe": "Mittel",
    Sauce: "Klassisch",
    Beilage: ["Zitronenschnitz"],
  })

  const handleCustomization = (category: string, option: string) => {
    setSelections((prev) => {
      if (category === "Beilage") {
        const newBeilage = prev["Beilage"].includes(option)
          ? prev["Beilage"].filter((item) => item !== option)
          : [...prev["Beilage"], option]
        return { ...prev, [category]: newBeilage }
      }
      return { ...prev, [category]: option }
    })
  }

  const totalPrice = 12.99 * quantity + (selections["Garnelen-Größe"] === "Groß" ? 2 : 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/menu" className="text-gray-600 hover:text-gray-900">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold">Garnelen Cocktail</h1>
          <div className="w-6 h-6" /> {/* Placeholder for symmetry */}
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="relative h-64 sm:h-80">
            <Image
              src="https://images.unsplash.com/photo-1609183590563-7710ba1f90a9?w=800&auto=format&fit=crop&q=60"
              alt="Garnelen Cocktail"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold">Garnelen Cocktail</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Zarte Garnelen auf einem Bett aus knackigem Salat, serviert mit einer cremigen Cocktailsauce und
              Zitronenschnitz.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 text-sm font-semibold">4.8</span>
              </div>
              <div className="flex items-center text-gray-500">
                <Clock className="w-5 h-5 mr-1" />
                <span className="text-sm">10-15 Min</span>
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
                          category.name === "Beilage"
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

