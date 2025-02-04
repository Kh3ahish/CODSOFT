"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

interface Category {
  title: string
  items: {
    name: string
    href: string
  }[]
}

interface MegaMenuProps {
  isOpen: boolean
  activeMenu: string | null
  categories: {
    [key: string]: Category[]
  }
}

export default function MegaMenu({ isOpen, activeMenu, categories }: MegaMenuProps) {
  const activeCategories = activeMenu ? categories[activeMenu as keyof typeof categories] : []
  const isMenuVisible = isOpen && activeMenu !== null

  return (
    <div
      className={cn(
        "absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ease-out transform shadow-lg z-50",
        isMenuVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none",
      )}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    >
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-5 gap-x-12">
          {activeCategories.map((category) => (
            <div key={category.title} className="space-y-6">
              <h3 className="text-sm font-medium tracking-wider text-primary uppercase">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group flex items-center text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute left-0 bottom-0 w-full h-px bg-primary scale-x-0 transition-transform duration-200 origin-left group-hover:scale-x-100" />
                      </span>
                      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

