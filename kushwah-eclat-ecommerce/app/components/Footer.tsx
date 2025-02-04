"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <footer className="bg-gray-100 text-gray-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <button
              className="flex items-center justify-between w-full font-semibold uppercase tracking-wider md:cursor-default"
              onClick={() => toggleSection("about")}
            >
              About Us
              <ChevronDown className="w-5 h-5 md:hidden" />
            </button>
            <div className={`${openSection === "about" ? "block" : "hidden"} md:block`}>
              <p className="text-sm">
                Kushwah Éclat embodies timeless elegance in every stitch, offering a curated collection of luxury
                clothing that speaks to the discerning individual.
              </p>
            </div>
          </div>

          {/* Customer Care Section */}
          <div className="space-y-4">
            <button
              className="flex items-center justify-between w-full font-semibold uppercase tracking-wider md:cursor-default"
              onClick={() => toggleSection("customer")}
            >
              Customer Care
              <ChevronDown className="w-5 h-5 md:hidden" />
            </button>
            <ul className={`space-y-2 text-sm ${openSection === "customer" ? "block" : "hidden"} md:block`}>
              <li>
                <Link href="/contact" className="elegant-hover">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="elegant-hover">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/care" className="elegant-hover">
                  Product Care
                </Link>
              </li>
              <li>
                <Link href="/faq" className="elegant-hover">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <button
              className="flex items-center justify-between w-full font-semibold uppercase tracking-wider md:cursor-default"
              onClick={() => toggleSection("links")}
            >
              Quick Links
              <ChevronDown className="w-5 h-5 md:hidden" />
            </button>
            <ul className={`space-y-2 text-sm ${openSection === "links" ? "block" : "hidden"} md:block`}>
              <li>
                <Link href="/new-arrivals" className="elegant-hover">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/collections" className="elegant-hover">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="elegant-hover">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="elegant-hover">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <button
              className="flex items-center justify-between w-full font-semibold uppercase tracking-wider md:cursor-default"
              onClick={() => toggleSection("connect")}
            >
              Connect
              <ChevronDown className="w-5 h-5 md:hidden" />
            </button>
            <ul className={`space-y-2 text-sm ${openSection === "connect" ? "block" : "hidden"} md:block`}>
              <li>
                <Link href="#" className="elegant-hover">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="elegant-hover">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="elegant-hover">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="elegant-hover">
                  Pinterest
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <button
              className="flex items-center justify-between w-full font-semibold uppercase tracking-wider md:cursor-default"
              onClick={() => toggleSection("contact")}
            >
              Contact Us
              <ChevronDown className="w-5 h-5 md:hidden" />
            </button>
            <div className={`space-y-4 ${openSection === "contact" ? "block" : "hidden"} md:block`}>
              <div className="flex flex-col">
                <span className="text-sm">Khwahish Kushwah</span>
                <a href="tel:+917235200125" className="text-sm hover:text-gray-900 transition-colors">
                  +91 7235 2000 125
                </a>
                <a
                  href="https://instagram.com/kh3ahish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-gray-900 transition-colors"
                >
                  @kh3ahish
                </a>
              </div>
              <div className="w-32">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Khwahish-dNVyqqKuvm8DXbIEYo9KOlK9RHHZJ4.png"
                  alt="Khwahish Kushwah Signature"
                  width={128}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-sm">
          <p>© 2025 Kushwah Éclat. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy-policy" className="elegant-hover mr-4">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="elegant-hover">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

