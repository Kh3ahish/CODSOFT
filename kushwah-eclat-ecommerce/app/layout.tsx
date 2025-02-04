import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"
import { ShopProvider } from "./contexts/ShopContext"
import { Toaster } from "@/components/ui/toaster"
import RootLayoutClient from "./RootLayoutClient"

export const metadata: Metadata = {
  title: "Kushwah Éclat | Luxury Fashion",
  description: "Experience timeless elegance and contemporary luxury fashion at Kushwah Éclat.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ShopProvider>
          <RootLayoutClient>{children}</RootLayoutClient>
          <Toaster />
        </ShopProvider>
      </body>
    </html>
  )
}

