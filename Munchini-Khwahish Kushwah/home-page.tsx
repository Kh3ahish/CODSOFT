"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Star,
  Clock,
  Home,
  MenuIcon,
  Gift,
  Calendar,
  UserCircle,
  ChevronRight,
  Heart,
  Utensils,
  Coffee,
  IceCream,
  Wine,
} from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

const MotionImage = motion(Image)

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Vorspeisen")
  const router = useRouter()

  const categories = [
    {
      icon: Utensils,
      name: "Vorspeisen",
      gradient: "from-orange-400 to-red-500",
      iconColor: "text-yellow-100",
    },
    {
      icon: Coffee,
      name: "Hauptgerichte",
      gradient: "from-red-400 to-pink-500",
      iconColor: "text-red-100",
    },
    {
      icon: IceCream,
      name: "Desserts",
      gradient: "from-pink-400 to-purple-500",
      iconColor: "text-pink-100",
    },
    {
      icon: Wine,
      name: "Getränke",
      gradient: "from-purple-400 to-indigo-500",
      iconColor: "text-purple-100",
    },
  ]

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex justify-between items-center px-5 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50"
      >
        <motion.div
          className="flex items-center gap-2 hover:bg-gray-50 rounded-full px-3 py-1.5 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <MapPin className="w-5 h-5 text-orange-500" />
          <span className="text-sm font-medium">München</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </motion.div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design(14)-16tmkGGBS8hJI3ZjMBo1cLhVZtrGBl.png"
          alt="Munchini"
          width={120}
          height={40}
          className="h-8 w-auto"
        />
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-[300px] mb-8">
        <MotionImage
          src="https://images.unsplash.com/photo-1543353071-087092ec393a?w=800&auto=format&fit=crop&q=60"
          alt="Köstliches Essen"
          fill
          priority
          className="object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-white text-4xl font-bold mb-2 leading-tight">
            Köstliches Essen <br />
            geliefert
          </h2>
          <p className="text-white/90 text-lg mb-6">Jetzt bestellen oder einen Tisch reservieren</p>
          <div className="flex gap-4">
            <motion.button
              className="bg-orange-500 text-white px-6 py-3.5 rounded-full font-medium flex-1 shadow-lg shadow-orange-500/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Jetzt bestellen
            </motion.button>
            <motion.button
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-white px-6 py-3.5 rounded-full font-medium flex-1"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.98 }}
            >
              Tisch buchen
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="px-5 mb-10">
        <div className="flex justify-between">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              className="flex flex-col items-center gap-2"
              whileHover={{ y: -2 }}
              onClick={() => setActiveCategory(category.name)}
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center shadow-lg
                  ${activeCategory === category.name ? "ring-2 ring-orange-500 ring-offset-2" : ""}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className={`w-8 h-8 ${category.iconColor}`} />
              </motion.div>
              <span className="text-sm font-medium">{category.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="mb-10">
        <div className="flex justify-between items-center px-5 mb-4">
          <h3 className="text-xl font-bold">Sonderangebote</h3>
          <motion.button
            className="bg-orange-100 text-orange-500 text-xs font-medium rounded-full px-3 py-1 flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Mehr <ChevronRight className="w-3 h-3" />
          </motion.button>
        </div>
        <div className="flex gap-4 overflow-x-auto px-5 hide-scrollbar pb-2">
          <motion.div
            className="min-w-[300px] bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-5 text-white shadow-lg shadow-orange-500/20"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-2xl font-bold mb-2">20% Rabatt auf die erste Bestellung</h4>
            <p className="mb-4 text-white/90">Verwenden Sie den Code: FIRST20</p>
            <motion.button
              className="bg-white text-orange-500 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Jetzt einlösen
            </motion.button>
          </motion.div>
          <motion.div
            className="min-w-[300px] bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-5 text-white shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-2xl font-bold mb-2">Kostenlose Lieferung</h4>
            <p className="mb-4 text-white/90">Bei Bestellungen über 30€</p>
            <motion.button
              className="bg-white text-slate-700 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Jetzt bestellen
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Popular Now */}
      <section className="mb-10">
        <div className="flex justify-between items-center px-5 mb-4">
          <h3 className="text-xl font-bold">Beliebte deutsche Gerichte</h3>
          <motion.button
            className="bg-orange-100 text-orange-500 text-xs font-medium rounded-full px-3 py-1 flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Mehr <ChevronRight className="w-3 h-3" />
          </motion.button>
        </div>
        <div className="flex gap-4 overflow-x-auto px-5 hide-scrollbar pb-2">
          {[
            {
              name: "Schnitzel",
              rating: "4.9",
              time: "20-25 Min",
              price: "16.99",
              image: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=800&auto=format&fit=crop&q=60",
            },
            {
              name: "Currywurst",
              rating: "4.7",
              time: "15-20 Min",
              price: "8.99",
              image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&auto=format&fit=crop&q=60",
            },
            {
              name: "Spätzle",
              rating: "4.8",
              time: "18-22 Min",
              price: "12.99",
              image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&auto=format&fit=crop&q=60",
            },
            {
              name: "Rouladen",
              rating: "4.9",
              time: "25-30 Min",
              price: "18.99",
              image: "https://images.unsplash.com/photo-1617873653071-5f4f1c24c5e7?w=800&auto=format&fit=crop&q=60",
            },
            {
              name: "Sauerbraten",
              rating: "4.8",
              time: "30-35 Min",
              price: "19.99",
              image: "https://images.unsplash.com/photo-1617873653071-5f4f1c24c5e7?w=800&auto=format&fit=crop&q=60",
            },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              className="min-w-[220px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -2 }}
            >
              <div
                className="relative cursor-pointer"
                onClick={() => {
                  router.push(`/menu/${item.name.toLowerCase().replace(/\s+/g, "-")}`)
                }}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={220}
                  height={150}
                  className="w-full h-[150px] object-cover rounded-t-2xl"
                />
                <motion.button
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className="w-4 h-4 text-gray-400" />
                </motion.button>
              </div>
              <div className="p-4">
                <h4 className="font-medium mb-2">{item.name}</h4>
                <div className="flex justify-between items-center text-sm mb-3">
                  <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                    <span className="font-medium">{item.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{item.time}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{item.price}€</span>
                  <motion.button
                    className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md shadow-orange-500/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Hinzufügen
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Browse Categories */}
      <section className="px-5">
        <h3 className="text-xl font-bold mb-4">Kategorien durchsuchen</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              name: "Frühstück",
              items: "42 Gerichte",
              image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&auto=format&fit=crop&q=60",
            },
            {
              name: "Mittagessen",
              items: "67 Gerichte",
              image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60",
            },
            {
              name: "Abendessen",
              items: "51 Gerichte",
              image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&auto=format&fit=crop&q=60",
            },
            {
              name: "Getränke",
              items: "29 Getränke",
              image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=60",
            },
          ].map((category) => (
            <motion.div
              key={category.name}
              className="relative h-[160px] rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <h4 className="text-white font-bold text-lg">{category.name}</h4>
                <p className="text-white/80 text-sm">{category.items}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <motion.nav
        className="fixed bottom-0 left-0 right-0 bg-white border-t px-8 py-4 shadow-lg"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex justify-between items-center max-w-md mx-auto">
          {[
            { icon: Home, label: "Startseite", active: true, href: "/" },
            { icon: MenuIcon, label: "Menü", active: false, href: "/menu" },
            { icon: Gift, label: "Angebote", active: false, href: "/offers" },
            { icon: Calendar, label: "Buchungen", active: false, href: "/buchungen" },
            { icon: UserCircle, label: "Profil", active: false, href: "/profile" },
          ].map((item) => (
            <Link href={item.href} key={item.label}>
              <motion.button className="flex flex-col items-center gap-1" whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <item.icon className={`w-6 h-6 ${item.active ? "text-orange-500" : "text-gray-400"}`} />
                <span className={`text-xs ${item.active ? "text-orange-500" : "text-gray-400"}`}>{item.label}</span>
              </motion.button>
            </Link>
          ))}
        </div>
      </motion.nav>

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

