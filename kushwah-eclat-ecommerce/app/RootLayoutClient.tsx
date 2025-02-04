"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MobileNavigation from "./components/MobileNavigation"

export default function RootLayoutClient({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top on route changes
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <main className="flex-grow pt-[72px] pb-[64px] lg:pb-0">{children}</main>
      <MobileNavigation />
      <Footer />
    </>
  )
}

