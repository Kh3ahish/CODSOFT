"use client"

import { Home, Search, ShoppingBag, Heart, User, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useShop } from "@/app/contexts/ShopContext"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function MobileNavigation() {
  const pathname = usePathname()
  const { cart } = useShop()
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Search, label: "Search", href: "/search" },
    { icon: ShoppingBag, label: "Cart", href: "/cart", badge: cartItemsCount },
    { icon: Heart, label: "Wishlist", href: "/wishlist" },
    { icon: User, label: "Account", href: "/account" },
  ]

  return (
    <>
      {/* Menu Button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed top-4 right-4 z-50 lg:hidden bg-white shadow-md"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold mb-4">Menu</h2>
            {["Men", "Women", "Collections", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-lg py-2 hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 lg:hidden">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center justify-center w-full h-full py-1 text-gray-600 hover:text-gray-900",
                pathname === item.href && "text-primary",
              )}
            >
              <span className="relative inline-flex items-center justify-center h-6">
                <item.icon className="w-5 h-5" />
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -top-2 -right-3 bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-medium">
                    {item.badge}
                  </span>
                )}
              </span>
              <span className="text-[10px] font-medium mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}

