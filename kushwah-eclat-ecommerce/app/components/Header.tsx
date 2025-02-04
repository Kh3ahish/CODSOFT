"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import SearchBar from "./SearchBar"
import { useShop } from "@/app/contexts/ShopContext"
import { User, ShoppingBag } from "lucide-react"
import MegaMenu from "./MegaMenu"
import { categories } from "@/app/data/categories"
import { cn } from "@/lib/utils"

export default function Header() {
  const { cart } = useShop()
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null) // Update 1
  const headerRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [closeTimer, setCloseTimer] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (menu: string) => {
    // Update 2
    setHoveredMenu(menu)
    setIsMenuOpen(true)
  }

  const handleMouseLeave = () => {
    // Update 2
    setHoveredMenu(null)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      if (closeTimer) clearTimeout(closeTimer)
    }
  }, [closeTimer])

  return (
    <>
      <header ref={headerRef} className="bg-white fixed w-full z-50 overflow-visible">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[72px] relative">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group transition-all duration-500 mx-auto lg:mx-0">
              <div className="relative w-10 h-10 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amoree(1)-zqTkD1zMupMXEnq5eS1zS6dkYCVtqu.png"
                  alt="Kushwah Éclat Logo"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-light tracking-[0.2em] text-gray-800">KUSHWAH</span>
                <span className="text-sm tracking-[0.5em] text-gray-600">ÉCLAT</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-12">
              {" "}
              {/* Update 4 */}
              <div className="relative" onMouseEnter={() => handleMouseEnter("men")} onMouseLeave={() => {}}>
                <Link
                  href="/men"
                  className="text-sm tracking-[0.15em] text-gray-600 hover:text-gray-900 transition-colors duration-300 py-2 elegant-hover"
                >
                  MEN
                </Link>
              </div>
              <div className="relative" onMouseEnter={() => handleMouseEnter("women")} onMouseLeave={() => {}}>
                <Link
                  href="/women"
                  className="text-sm tracking-[0.15em] text-gray-600 hover:text-gray-900 transition-colors duration-300 py-2 elegant-hover"
                >
                  WOMEN
                </Link>
              </div>
              <div className="relative" onMouseEnter={() => handleMouseEnter("collections")} onMouseLeave={() => {}}>
                <Link
                  href="/collections"
                  className="text-sm tracking-[0.15em] text-gray-600 hover:text-gray-900 transition-colors duration-300 py-2 elegant-hover"
                >
                  COLLECTIONS
                </Link>
              </div>
              <div className="relative" onMouseEnter={() => handleMouseEnter("beauty")} onMouseLeave={() => {}}>
                <Link
                  href="/beauty"
                  className="text-sm tracking-[0.15em] text-gray-600 hover:text-gray-900 transition-colors duration-300 py-2 elegant-hover"
                >
                  BEAUTY
                </Link>
              </div>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-8">
              <SearchBar />
              <Link
                href="/account"
                aria-label="Account"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <User size={18} strokeWidth={1.5} />
              </Link>
              <Link
                href="/cart"
                aria-label="Cart"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mega Menu */}
          <div
            ref={menuRef}
            className="absolute left-0 right-0"
            onMouseEnter={() => setIsMenuOpen(true)} // Update 3
            onMouseLeave={handleMouseLeave}
          >
            <MegaMenu isOpen={isMenuOpen} activeMenu={hoveredMenu} categories={categories} /> {/* Update 3 */}
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/5 backdrop-blur-sm transition-opacity duration-300",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        style={{ zIndex: 40 }}
      />
    </>
  )
}

