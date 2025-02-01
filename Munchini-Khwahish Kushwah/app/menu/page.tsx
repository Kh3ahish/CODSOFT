"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Star, Clock, ChevronLeft, X, Salad, UtensilsCrossed, IceCream2, Wine, Pizza, Leaf } from "lucide-react"
import { Input } from "@/components/ui/input"

const categories = [
  {
    name: "Vorspeisen",
    icon: Salad,
    items: 12,
    gradient: "from-green-400/80 to-emerald-500/80",
    iconColor: "text-white",
    bgImage: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Hauptgerichte",
    icon: UtensilsCrossed,
    items: 18,
    gradient: "from-orange-400/80 to-red-500/80",
    iconColor: "text-white",
    bgImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Desserts",
    icon: IceCream2,
    items: 8,
    gradient: "from-pink-400/80 to-rose-500/80",
    iconColor: "text-white",
    bgImage: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Getränke",
    icon: Wine,
    items: 15,
    gradient: "from-purple-400/80 to-indigo-500/80",
    iconColor: "text-white",
    bgImage: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Spezialitäten",
    icon: Star,
    items: 5,
    gradient: "from-yellow-400/80 to-amber-500/80",
    iconColor: "text-white",
    bgImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60",
  },
]

const popularItems = [
  {
    category: "Vorspeisen",
    icon: Salad,
    items: [
      {
        name: "Bruschetta",
        price: 8.99,
        rating: 4.6,
        time: "10-15 Min",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500&h=500&fit=crop&q=60",
        vegan: true,
      },
      {
        name: "Caprese Salat",
        price: 10.99,
        rating: 4.7,
        time: "5-10 Min",
        image: "https://images.unsplash.com/photo-1608032077018-c9aad9565d29?w=500&h=500&fit=crop&q=60",
        vegan: false,
      },
      {
        name: "Garnelen Cocktail",
        price: 12.99,
        rating: 4.8,
        time: "10-15 Min",
        image: "https://images.unsplash.com/photo-1609183590563-7710ba1f90a9?w=500&h=500&fit=crop&q=60",
        vegan: false,
      },
      {
        name: "Französische Zwiebelsuppe",
        price: 9.99,
        rating: 4.5,
        time: "15-20 Min",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=500&fit=crop&q=60",
        vegan: false,
      },
      {
        name: "Vegane Frühlingsrollen",
        price: 7.99,
        rating: 4.7,
        time: "10-15 Min",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shan-shi-rezepte-vegane-fruehlingsrollen.jpg-IlnXbJXwCjqkQ3MZOzepAmQ9kQ4AZH.jpeg",
        vegan: true,
      },
      {
        name: "Hummus-Platte",
        price: 9.99,
        rating: 4.8,
        time: "5-10 Min",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Loaded-Hummus-5-683x1024.jpg-iCwh6iCy5wGmjBT7jvnkIRGVOBY2YP.jpeg",
        vegan: true,
      },
    ],
  },
  {
    category: "Salate",
    icon: Salad,
    items: [
      {
        name: "Caesar Salat",
        price: 12.99,
        rating: 4.7,
        time: "10-15 Min",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&h=500&fit=crop&q=60",
        vegan: false,
      },
      {
        name: "Griechischer Salat",
        price: 11.99,
        rating: 4.6,
        time: "10-15 Min",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop&q=60",
        vegan: false,
      },
      {
        name: "Waldorf Salat",
        price: 13.99,
        rating: 4.5,
        time: "10-15 Min",
        image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=500&h=500&fit=crop&q=60",
        vegan: false,
      },
      {
        name: "Veganer Quinoa-Salat",
        price: 14.99,
        rating: 4.8,
        time: "10-15 Min",
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=500&h=500&fit=crop&q=60",
        vegan: true,
      },
      {
        name: "Kale und Avocado Salat",
        price: 13.99,
        rating: 4.7,
        time: "10-15 Min",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop&q=60",
        vegan: true,
      },
    ],
  },
  {
    category: "Hauptgerichte",
    icon: UtensilsCrossed,
    items: [
      {
        name: "Trüffel-Pasta",
        price: 18.99,
        rating: 4.8,
        time: "20-25 Min",
        image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500&h=500&fit=crop&q=60",
        vegan: false,
      },
      {
        name: "Wagyu Burger",
        price: 24.99,
        rating: 4.9,
        time: "15-20 Min",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop&q=60",
        vegan: false,
      },
      {
        name: "Lachs mit Gemüse",
        price: 22.99,
        rating: 4.7,
        time: "20-25 Min",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=500&fit=crop&q=60",
        vegan: false,
      },
      {
        name: "Rinderfilet",
        price: 28.99,
        rating: 4.9,
        time: "25-30 Min",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=500&h=500&fit=crop&q=60",
        vegan: false,
      },
      {
        name: "Vegetarische Lasagne",
        price: 16.99,
        rating: 4.6,
        time: "20-25 Min",
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&h=500&fit=crop&q=60",
        vegan: false,
      },
      {
        name: "Veganes Curry",
        price: 15.99,
        rating: 4.7,
        time: "20-25 Min",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=500&fit=crop&q=60",
        vegan: true,
      },
      {
        name: "Gefüllte Paprika mit Quinoa",
        price: 14.99,
        rating: 4.6,
        time: "25-30 Min",
        image: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=500&h=500&fit=crop&q=60",
        vegan: true,
      },
    ],
  },
  {
    category: "Pizza",
    icon: Pizza,
    items: [
      {
        name: "Margherita",
        price: 14.99,
        rating: 4.5,
        time: "15-20 Min",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&h=500&fit=crop&q=60",
        vegan: false,
      },
      {
        name: "Quattro Formaggi",
        price: 16.99,
        rating: 4.7,
        time: "15-20 Min",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=500&fit=crop&q=60",
        vegan: false,
      },
      {
        name: "Prosciutto e Funghi",
        price: 17.99,
        rating: 4.6,
        time: "15-20 Min",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=500&fit=crop&q=60",
        vegan: false,
      },
      {
        name: "Vegane Gemüse-Pizza",
        price: 15.99,
        rating: 4.5,
        time: "15-20 Min",
        image: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?w=500&h=500&fit=crop&q=60",
        vegan: true,
      },
    ],
  },
  {
    category: "Desserts",
    icon: IceCream2,
    items: [
      {
        name: "Tiramisu",
        price: 8.99,
        rating: 4.8,
        time: "5-10 Min",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=500&fit=crop&q=60",
        vegan: false,
      },
      {
        name: "Schokoladen Soufflé",
        price: 10.99,
        rating: 4.9,
        time: "15-20 Min",
        image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=500&h=500&fit=crop&q=60",
        vegan: false,
      },
      {
        name: "Crème Brûlée",
        price: 9.99,
        rating: 4.7,
        time: "10-15 Min",
        image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=500&h=500&fit=crop&q=60",
        vegan: false,
      },
      {
        name: "Veganes Schokoladenmousse",
        price: 8.99,
        rating: 4.6,
        time: "5-10 Min",
        image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=500&h=500&fit=crop&q=60",
        vegan: true,
      },
      {
        name: "Obstsalat mit Kokosmilch",
        price: 7.99,
        rating: 4.5,
        time: "5-10 Min",
        image: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=500&h=500&fit=crop&q=60",
        vegan: true,
      },
    ],
  },
  {
    category: "Getränke",
    icon: Wine,
    items: [
      {
        name: "Frucht Smoothie",
        price: 6.99,
        rating: 4.6,
        time: "5-10 Min",
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=500&h=500&fit=crop&q=60",
        vegan: true,
      },
      {
        name: "Eiskalter Latte",
        price: 5.99,
        rating: 4.7,
        time: "5-10 Min",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=500&fit=crop&q=60",
        vegan: false,
      },
      {
        name: "Hausgemachte Limonade",
        price: 4.99,
        rating: 4.5,
        time: "5-10 Min",
        image: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=500&h=500&fit=crop&q=60",
        vegan: true,
      },
      {
        name: "Mandelmilch Chai Latte",
        price: 5.99,
        rating: 4.6,
        time: "5-10 Min",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&h=500&fit=crop&q=60",
        vegan: true,
      },
    ],
  },
]

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredItems, setFilteredItems] = useState(popularItems)
  const router = useRouter()
  const [isVegan, setIsVegan] = useState(false)

  useEffect(() => {
    let filtered
    if (isVegan) {
      const veganItems = popularItems.flatMap((category) => category.items.filter((item) => item.vegan))
      filtered = [
        {
          category: "Vorspeisen",
          icon: Salad,
          items: veganItems,
        },
      ]
    } else {
      filtered = popularItems
        .map((category) => ({
          ...category,
          items: category.items.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase())),
        }))
        .filter((category) => category.items.length > 0)
    }
    setFilteredItems(filtered)
  }, [searchQuery, isVegan])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4 relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center z-10"
              onClick={() => router.push("/")}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </motion.button>
            <h1 className="text-2xl font-bold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Menü
            </h1>
            <div className="flex items-center z-10">
              <motion.div
                className="flex items-center space-x-1 bg-gray-100 rounded-full px-2 py-1 cursor-pointer"
                onClick={() => setIsVegan(!isVegan)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    isVegan ? "bg-green-500" : "bg-gray-300"
                  }`}
                  animate={{ backgroundColor: isVegan ? "#10B981" : "#D1D5DB" }}
                >
                  {isVegan && <Leaf className="w-3 h-3 text-white" />}
                </motion.div>
                <span className="text-xs font-medium text-gray-700">Vegan</span>
              </motion.div>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Gerichte suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 py-2 w-full rounded-full border-gray-200 focus:border-orange-500 focus:ring focus:ring-orange-200"
            />
            {searchQuery && (
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() => setSearchQuery("")}
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-2">
        {/* Popular Items */}
        <section className="mt-0 pt-0">
          {!isVegan && (
            <div className="mb-4 overflow-x-auto hide-scrollbar">
              <div className="flex space-x-3 py-2">
                {popularItems.map((category, index) => (
                  <motion.button
                    key={category.category}
                    className={`relative flex items-center justify-center px-3 py-4 rounded-2xl text-sm font-medium transition-all duration-300 overflow-hidden ${
                      filteredItems[0]?.category === category.category
                        ? "ring-2 ring-orange-500 text-white shadow-lg"
                        : "text-white shadow-md"
                    }`}
                    style={{
                      minWidth: "130px",
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.items[0].image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    onClick={() => setFilteredItems([popularItems[index]])}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className={`absolute inset-0 ${
                        filteredItems[0]?.category === category.category
                          ? "bg-gradient-to-br from-orange-500/80 to-red-500/80"
                          : "bg-gradient-to-br from-gray-900/70 to-gray-800/70 hover:from-orange-500/70 hover:to-red-500/70"
                      }`}
                    ></div>
                    <div className="flex flex-col items-center z-10">
                      <category.icon className="w-5 h-5 mb-1" />
                      <span className="text-xs font-medium text-center">{category.category}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          )}
          <AnimatePresence mode="wait">
            {filteredItems.map((category) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-8"
              >
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <Link href={`/menu/${item.name.toLowerCase().replace(/\s+/g, "-")}`} key={item.name}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white rounded-xl shadow-sm overflow-hidden flex h-full"
                      >
                        <div className="w-1/3 relative">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-l-xl"
                          />
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium">{item.name}</h3>
                            {item.vegan && (
                              <span className="p-1 bg-green-100 text-green-800 rounded-full flex items-center justify-center">
                                <Leaf className="w-3 h-3" />
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                            <div className="flex items-center">
                              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 mr-0.5" />
                              <span>{item.rating}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-0.5" />
                              <span>{item.time}</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-orange-500 font-bold">{item.price}€</span>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                            >
                              Zum Warenkorb
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </section>
      </main>
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

