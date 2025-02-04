"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Search, X } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isExpanded])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
      setIsExpanded(false)
    }
  }

  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="flex items-center">
        <div
          className={`flex items-center transition-all duration-500 ease-in-out border-b ${
            isExpanded ? "w-64 border-gray-200" : "w-8 border-transparent"
          }`}
        >
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 text-gray-500 hover:text-gray-900 transition-colors duration-300"
            aria-label={isExpanded ? "Close search" : "Open search"}
          >
            <Search size={18} strokeWidth={1} />
          </button>
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className={`w-full bg-transparent border-none outline-none px-2 py-1 text-sm font-light tracking-wide placeholder:text-gray-400 transition-all duration-500 ${
              isExpanded ? "opacity-100 max-w-full" : "opacity-0 max-w-0 p-0"
            }`}
          />
          {isExpanded && searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
              aria-label="Clear search"
            >
              <X size={16} strokeWidth={1} />
            </button>
          )}
        </div>
      </form>

      {isExpanded && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm shadow-lg rounded-sm overflow-hidden border border-gray-100 z-50">
          <div className="p-4 text-sm text-gray-500">
            <p className="text-xs uppercase tracking-wider mb-2 font-medium">Suggestions</p>
            <div className="space-y-2">
              {["Evening Suits", "Cashmere Knitwear", "Luxury Watches"].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => {
                    setSearchQuery(suggestion)
                    inputRef.current?.focus()
                  }}
                  className="block w-full text-left px-2 py-1 hover:bg-gray-50 rounded transition-colors duration-200 text-gray-700"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

