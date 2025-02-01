"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronLeft, Minus, Plus, Clock, Star, ChevronRight, Heart } from "lucide-react"
import Link from "next/link"

const customizations = [
  { name: "Pasta-Typ", options: ["Fettuccine", "Penne", "Spaghetti"] },
  { name: "Trüffel-Intensität", options: ["Leicht", "Mittel", "Extra"] },
  { name: "Protein hinzufügen", options: ["Huhn", "Garnelen", "Keins"] },
]

const relevantItems = [
  {
    name: "Pilz-Risotto",
    price: 22.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Knoblauch-Parmesan-Pasta",
    price: 19.99,
    rating: 4.5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Garlic-Parmesan-Chicken-Pasta-Sq.jpg-uoCfmQuXHkHrduZyXXRErKRbDfCj9s.jpeg",
  },
  {
    name: "Meeresfrüchte-Linguine",
    price: 24.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Gemüse-Lasagne",
    price: 20.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&auto=format&fit=crop&q=60",
  },
]

export default function TrufflePastaDetail() {
  const [quantity, setQuantity] = useState(1)
  const [selections, setSelections] = useState({
    "Pasta-Typ": "Fettuccine",
    "Trüffel-Intensität": "Mittel",
    "Protein hinzufügen": "Keins",
  })
  const [isFavorite, setIsFavorite] = useState(false)

  const handleCustomization = (category: string, option: string) => {
    setSelections((prev) => ({ ...prev, [category]: option }))
  }

  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur-md sticky top-0 z-10"
      >
        <Link href="/menu">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </motion.div>
        </Link>
        <h1 className="text-xl font-bold">Trüffel-Pasta</h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsFavorite(!isFavorite)}
          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
        >
          <Heart className={`w-6 h-6 ${isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"}`} />
        </motion.button>
      </motion.header>

      {/* Main Content */}
      <main className="px-4">
        {/* Image */}
        <motion.div
          ref={scrollRef}
          style={{ opacity, scale }}
          className="relative h-[300px] rounded-2xl overflow-hidden mb-6"
        >
          <Image
            src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=800&auto=format&fit=crop&q=60"
            alt="Trüffel-Pasta"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h2 className="text-3xl font-bold mb-2">Trüffel-Pasta</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-medium">4.8</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-5 h-5" />
                <span>20-25 Min</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-2xl font-bold text-orange-500">18,99€</span>
          </div>
          <p className="text-gray-600">
            Genießen Sie unsere exquisite Trüffel-Pasta, eine perfekte Mischung aus reichhaltigen Aromen und
            aromatischer Trüffelessenz. Hergestellt aus hochwertigen Zutaten und zur Perfektion zubereitet.
          </p>
        </motion.div>

        {/* Customizations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-lg font-semibold mb-4">Passen Sie Ihr Gericht an</h3>
          {customizations.map((category, index) => (
            <div key={category.name} className="mb-6">
              <h4 className="font-medium mb-2">{category.name}</h4>
              <div className="flex flex-wrap gap-2">
                {category.options.map((option) => (
                  <motion.button
                    key={option}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      selections[category.name] === option ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-800"
                    }`}
                    onClick={() => handleCustomization(category.name, option)}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Quantity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-between mb-8"
        >
          <span className="font-semibold">Menge</span>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="w-4 h-4 text-gray-600" />
            </motion.button>
            <span className="font-semibold text-lg">{quantity}</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </motion.button>
          </div>
        </motion.div>

        {/* Relevant Items */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Das könnte Ihnen auch gefallen</h3>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4">
            {relevantItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="min-w-[200px] bg-white rounded-xl shadow-md"
              >
                <div className="relative h-32 rounded-t-xl overflow-hidden">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-3">
                  <h4 className="font-medium text-sm mb-1">{item.name}</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-500 font-bold">{item.price}€</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs font-medium">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Add to Cart Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t"
      >
        <button className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold text-lg shadow-lg flex items-center justify-center">
          <span>Zum Warenkorb - {(18.99 * quantity).toFixed(2)}€</span>
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </motion.div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

