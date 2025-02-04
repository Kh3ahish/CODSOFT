"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useShop } from "../contexts/ShopContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, Trash2, ArrowLeft, Gift, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"

export default function CartPage() {
  const { cart, addToCart, removeFromCart, clearCart } = useShop()
  const { toast } = useToast()
  const [promoCode, setPromoCode] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 100000 ? 0 : 5000 // Free shipping over ₹100,000
  const [discount, setDiscount] = useState(0)
  const total = subtotal + shipping - discount

  const handleQuantityChange = (id: string, change: number) => {
    const item = cart.find((cartItem) => cartItem.id === id)
    if (item) {
      if (item.quantity + change === 0) {
        removeFromCart(id)
        toast({
          title: "Item removed",
          description: `${item.name} has been removed from your cart.`,
        })
      } else {
        addToCart({ ...item, quantity: change })
      }
    }
  }

  const handleRemoveItem = (id: string) => {
    const item = cart.find((cartItem) => cartItem.id === id)
    if (item) {
      removeFromCart(id)
      toast({
        title: "Item removed",
        description: `${item.name} has been removed from your cart.`,
      })
    }
  }

  const handleApplyPromoCode = () => {
    if (promoCode === "SUMMER25") {
      const newDiscount = subtotal * 0.25
      setDiscount(newDiscount)
      toast({
        title: "Promo code applied",
        description: "25% discount has been applied to your order.",
      })
    } else if (promoCode === "KHWAHISH70") {
      const newDiscount = subtotal * 0.7
      setDiscount(newDiscount)
      toast({
        title: "Promo code applied",
        description: "70% discount has been applied to your order.",
      })
    } else {
      toast({
        title: "Invalid promo code",
        description: "Please enter a valid promo code.",
        variant: "destructive",
      })
    }
  }

  const handleProceedToCheckout = () => {
    router.push("/checkout/payment")
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-light mb-8">Your Shopping Bag</h1>
      {cart.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl mb-4">Your bag is empty</p>
          <Link href="/">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {cart.map((item) => (
              <div key={item.id} className="flex items-start space-x-4 border-b pb-6">
                <div className="w-24 h-32 relative flex-shrink-0">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-medium mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Size: {item.size}, Color: {item.color}
                  </p>
                  <p className="text-lg font-medium mb-4">₹ {item.price.toLocaleString()}.00</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border rounded">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="h-8 w-8"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="h-8 w-8"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => handleRemoveItem(item.id)}>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Link>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-medium mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹ {subtotal.toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `₹ ${shipping.toLocaleString()}.00`}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>- ₹ {discount.toLocaleString()}.00</span>
                  </div>
                )}
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between text-lg font-medium mb-6">
                <span>Total</span>
                <span>₹ {total.toLocaleString()}.00</span>
              </div>
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    type="text"
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button onClick={handleApplyPromoCode}>Apply</Button>
                </div>
                <Button className="w-full" onClick={handleProceedToCheckout}>
                  Proceed to Checkout
                </Button>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center text-sm text-gray-600">
                <Truck className="h-5 w-5 mr-2" />
                Free shipping on orders over ₹100,000
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Gift className="h-5 w-5 mr-2" />
                Gift wrapping available at checkout
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

