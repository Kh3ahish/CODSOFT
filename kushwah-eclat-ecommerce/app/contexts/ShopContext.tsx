"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  size?: string
  color?: string
  image?: string
}

interface ShopContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  updateCartItemQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  likedItems: string[]
  toggleLike: (id: string) => void
  addMultipleToCart: (items: CartItem[]) => void
}

const ShopContext = createContext<ShopContextType | undefined>(undefined)

export const useShop = () => {
  const context = useContext(ShopContext)
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider")
  }
  return context
}

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [likedItems, setLikedItems] = useState<string[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    const savedLikedItems = localStorage.getItem("likedItems")
    if (savedCart) setCart(JSON.parse(savedCart))
    if (savedLikedItems) setLikedItems(JSON.parse(savedLikedItems))
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
    localStorage.setItem("likedItems", JSON.stringify(likedItems))
  }, [cart, likedItems])

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem,
        )
      }
      return [...prevCart, item]
    })
  }

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const updateCartItemQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item)),
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const toggleLike = (id: string) => {
    setLikedItems((prevLikedItems) =>
      prevLikedItems.includes(id) ? prevLikedItems.filter((itemId) => itemId !== id) : [...prevLikedItems, id],
    )
  }

  const addMultipleToCart = (items: CartItem[]) => {
    setCart((prevCart) => {
      const newCart = [...prevCart]
      items.forEach((item) => {
        const existingItemIndex = newCart.findIndex((cartItem) => cartItem.id === item.id)
        if (existingItemIndex !== -1) {
          newCart[existingItemIndex].quantity += item.quantity
        } else {
          newCart.push(item)
        }
      })
      return newCart
    })
  }

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
        likedItems,
        toggleLike,
        addMultipleToCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

