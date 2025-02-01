"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Clock, Star, Heart, MenuIcon, Home, Receipt, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

const categories = ["All", "Breakfast", "Lunch", "Treats", "Dessert", "Dinner"]

const menuItems = [
  {
    name: "Eggs Benedict",
    time: "20 min",
    rating: 4.8,
    price: 25.0,
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&auto=format&fit=crop&q=60",
    description: "Poached eggs, hollandaise sauce",
  },
  {
    name: "Grilled Salmon",
    time: "30 min",
    rating: 5.0,
    price: 37.0,
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=800&auto=format&fit=crop&q=60",
    description: "Fresh salmon, herbs, lemon",
  },
  {
    name: "Avocado Toast",
    time: "10 min",
    rating: 4.7,
    price: 25.0,
    image: "https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?w=800&auto=format&fit=crop&q=60",
    description: "Sourdough, avocado, eggs",
  },
  {
    name: "French Toast",
    time: "15 min",
    rating: 4.5,
    price: 18.0,
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop&q=60",
    description: "Brioche, maple syrup, berries",
  },
  {
    name: "Mushroom Pasta",
    time: "25 min",
    rating: 4.9,
    price: 28.0,
    image: "https://images.unsplash.com/photo-1637361874063-e5e415d7bcf7?w=800&auto=format&fit=crop&q=60",
    description: "Fresh pasta, wild mushrooms",
  },
  {
    name: "Berry Pancakes",
    time: "20 min",
    rating: 4.6,
    price: 22.0,
    image: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?w=800&auto=format&fit=crop&q=60",
    description: "Fluffy pancakes, mixed berries",
  },
]

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [favorites, setFavorites] = useState<Set<number>>(new Set())

  const toggleFavorite = (index: number) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(index)) {
      newFavorites.delete(index)
    } else {
      newFavorites.add(index)
    }
    setFavorites(newFavorites)
  }

  return (
    <div className="min-h-screen bg-[#F8FAF9] pb-20">
      {/* Header */}
      <header className="px-5 pt-12 pb-4 bg-white shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Menu</h1>
            <p className="text-sm text-gray-500 mt-1">Select your favorite dishes</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 bg-teal-600 rounded-full flex items-center justify-center shadow-lg"
          >
            <Receipt className="w-5 h-5 text-white" />
          </motion.button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for dishes..."
            className="w-full pl-11 pr-4 py-3.5 bg-gray-50 rounded-2xl border-0 focus-visible:ring-1 focus-visible:ring-teal-500 text-gray-600 placeholder:text-gray-400"
          />
        </div>

        {/* Categories */}
        <div className="overflow-x-auto -mx-5 px-5">
          <div className="flex space-x-3 min-w-max">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 text-sm rounded-full whitespace-nowrap transition-all
                  ${
                    activeCategory === category
                      ? "bg-teal-600 text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100"
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </header>

      {/* Menu Grid */}
      <main className="px-5 py-6">
        <div className="grid grid-cols-2 gap-5">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-3 shadow-sm border border-gray-100"
            >
              <div className="relative mb-3">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover rounded-2xl"
                />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleFavorite(index)}
                  className={`absolute top-2 right-2 w-9 h-9 rounded-full flex items-center justify-center shadow-md
                    ${favorites.has(index) ? "bg-rose-500" : "bg-white"}`}
                >
                  <Heart className={`w-4 h-4 ${favorites.has(index) ? "text-white fill-white" : "text-gray-400"}`} />
                </motion.button>
              </div>

              <div className="px-1">
                <h3 className="font-medium text-gray-800 mb-1">{item.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{item.description}</p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <div className="flex items-center bg-gray-50 px-2 py-1 rounded-full">
                    <Clock className="w-3 h-3 mr-1" />
                    {item.time}
                  </div>
                  <div className="flex items-center bg-gray-50 px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 mr-1 text-yellow-400 fill-yellow-400" />
                    {item.rating}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="font-semibold text-gray-800">${item.price.toFixed(2)}</div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="bg-teal-600 text-white text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    Add
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t px-6 py-4 shadow-lg">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <motion.button whileTap={{ scale: 0.95 }} className="text-teal-600">
            <Home className="w-6 h-6" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} className="text-gray-400">
            <MenuIcon className="w-6 h-6" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} className="text-gray-400">
            <Heart className="w-6 h-6" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} className="text-gray-400">
            <User className="w-6 h-6" />
          </motion.button>
        </div>
      </nav>
    </div>
  )
}

