"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  Home,
  MenuIcon,
  Gift,
  Calendar,
  User,
  Facebook,
  Twitter,
  Instagram,
  ShoppingCart,
  Plus,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function MunchiniHomepage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("Starters")

  return (
    <div className="bg-gradient-to-br from-orange-50 to-red-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Delicious food spread"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white backdrop-blur-sm bg-black/30">
          <motion.h1
            className="text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Munchini
          </motion.h1>
          <div className="flex space-x-4">
            <Button
              variant="default"
              className="bg-orange-500 hover:bg-orange-600 text-lg px-6 py-3 rounded-full shadow-lg"
            >
              Order Now
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-orange-500 text-lg px-6 py-3 rounded-full shadow-lg"
            >
              Dine In
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="bg-white shadow-md py-3 sticky top-0 z-10">
        <ul className="flex justify-around items-center">
          <li>
            <Home className="text-orange-500 w-6 h-6" />
          </li>
          <li>
            <MenuIcon className="text-gray-600 w-6 h-6" />
          </li>
          <li>
            <Gift className="text-gray-600 w-6 h-6" />
          </li>
          <li>
            <Calendar className="text-gray-600 w-6 h-6" />
          </li>
          <li>
            <User className="text-gray-600 w-6 h-6" />
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="p-6">
        {/* Search Bar */}
        <section className="mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 w-full rounded-full border-2 border-orange-300 focus:border-orange-500 focus:ring focus:ring-orange-200 text-lg shadow-md"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 w-6 h-6" />
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-8 overflow-x-auto">
          <div className="flex space-x-4 pb-2">
            {["Starters", "Main Course", "Desserts", "Beverages"].map((category) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-lg font-medium ${
                  activeCategory === category ? "bg-orange-500 text-white" : "bg-white text-orange-500"
                } shadow-md transition-all duration-300 ease-in-out`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </section>

        {/* Featured Dishes */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Featured Dishes</h2>
          <div className="space-y-6">
            {["Spicy Chicken Tacos", "Vegetarian Pizza", "Chocolate Lava Cake"].map((dish, index) => (
              <motion.div
                key={dish}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Image
                  src={`/placeholder.svg?height=180&width=180&text=${dish}`}
                  alt={dish}
                  width={180}
                  height={180}
                  className="object-cover"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">{dish}</h3>
                    <p className="text-gray-600">Delicious {dish.toLowerCase()} prepared with fresh ingredients.</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-orange-500">$12.99</span>
                    <Button className="bg-orange-500 hover:bg-orange-600 rounded-full p-2">
                      <Plus className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Special Offers */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Special Offers</h2>
          <motion.div
            className="bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl shadow-lg p-6 text-white"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-2">Weekend Special: 20% OFF</h3>
            <p className="text-lg">Use code WEEKEND20 at checkout</p>
            <Button className="mt-4 bg-white text-orange-500 hover:bg-orange-100 rounded-full px-6 py-2 text-lg font-bold">
              Claim Offer
            </Button>
          </motion.div>
        </section>

        {/* User Actions */}
        <section className="mb-8 flex justify-center space-x-4">
          <Button className="bg-orange-500 hover:bg-orange-600 text-lg px-6 py-3 rounded-full shadow-lg">
            Order Now
          </Button>
          <Button
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-lg px-6 py-3 rounded-full shadow-lg"
          >
            Reserve a Table
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6 rounded-t-3xl">
        <div className="flex justify-center space-x-6 mb-6">
          <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Facebook className="w-8 h-8" />
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Twitter className="w-8 h-8" />
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Instagram className="w-8 h-8" />
          </motion.a>
        </div>
        <div className="text-center mb-6">
          <p className="text-lg">Contact: +1 (555) 123-4567</p>
          <p className="text-lg">Email: info@munchini.com</p>
        </div>
        <div className="text-center text-sm text-gray-400">
          <p>© 2023 Munchini Restaurant. All rights reserved.</p>
          <p className="mt-2">Privacy Policy | Terms of Service</p>
        </div>
      </footer>

      {/* Floating Cart Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Button className="bg-orange-500 hover:bg-orange-600 rounded-full p-4 shadow-lg">
          <ShoppingCart className="w-6 h-6" />
        </Button>
      </motion.div>
    </div>
  )
}

