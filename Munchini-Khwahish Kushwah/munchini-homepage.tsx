"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, Home, Menu, Gift, Calendar, User, Facebook, Twitter, Instagram } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function MunchiniHomepage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="bg-orange-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <Image
          src="/placeholder.svg?height=720&width=1280"
          alt="Delicious food spread"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Munchini
          </motion.h1>
          <div className="flex space-x-4">
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600">
              Order Now
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-orange-500">
              Dine In
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="bg-white shadow-md py-2 sticky top-0 z-10">
        <ul className="flex justify-around items-center">
          <li>
            <Home className="text-orange-500" />
          </li>
          <li>
            <Menu className="text-gray-600" />
          </li>
          <li>
            <Gift className="text-gray-600" />
          </li>
          <li>
            <Calendar className="text-gray-600" />
          </li>
          <li>
            <User className="text-gray-600" />
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="p-4">
        {/* Categories Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            {["Starters", "Main Course", "Desserts", "Beverages"].map((category, index) => (
              <motion.div
                key={category}
                className="bg-white rounded-lg shadow-md p-4 text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Image
                  src={`/placeholder.svg?height=100&width=100&text=${category}`}
                  alt={category}
                  width={100}
                  height={100}
                  className="mx-auto mb-2 rounded-full"
                />
                <h3 className="font-medium">{category}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Dishes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Dishes</h2>
          <div className="space-y-4">
            {["Spicy Chicken Tacos", "Vegetarian Pizza", "Chocolate Lava Cake"].map((dish, index) => (
              <motion.div
                key={dish}
                className="bg-white rounded-lg shadow-md overflow-hidden flex"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Image
                  src={`/placeholder.svg?height=120&width=120&text=${dish}`}
                  alt={dish}
                  width={120}
                  height={120}
                  className="object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium mb-2">{dish}</h3>
                  <p className="text-sm text-gray-600">
                    Delicious {dish.toLowerCase()} prepared with fresh ingredients.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Special Offers */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Special Offers</h2>
          <motion.div
            className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-md p-4 text-white"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold mb-2">Weekend Special: 20% OFF</h3>
            <p>Use code WEEKEND20 at checkout</p>
          </motion.div>
        </section>

        {/* Search Bar */}
        <section className="mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-full border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </section>

        {/* User Actions */}
        <section className="mb-8 flex justify-center space-x-4">
          <Button className="bg-orange-500 hover:bg-orange-600">Order Now</Button>
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
            Reserve a Table
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 px-4">
        <div className="flex justify-center space-x-4 mb-4">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
        <div className="text-center mb-4">
          <p>Contact: +1 (555) 123-4567</p>
          <p>Email: info@munchini.com</p>
        </div>
        <div className="text-center text-sm text-gray-400">
          <p>© 2023 Munchini Restaurant. All rights reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  )
}

