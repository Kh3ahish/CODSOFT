"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useShop } from "@/app/contexts/ShopContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Lock, ShieldCheck, CreditCard } from "lucide-react"
import Image from "next/image"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const countries = ["India", "USA", "UK", "Canada", "Australia"]

const paymentMethods = [
  {
    name: "Visa",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-3l2pcknKfDv9okBseVzu5Desx4Ew4n.png",
    width: 65,
    height: 40,
  },
  {
    name: "American Express",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-ZTaYu6bVqmQv2KfyHjV3I9tAuyEDzk.png",
    width: 65,
    height: 40,
  },
  {
    name: "Mastercard",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-waRUhoi5q1irxiJ5r9ValRrriDEbV5.png",
    width: 65,
    height: 40,
  },
  {
    name: "RuPay",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-5zZRzdW0WINu654lJeFMiyLSD4EBIY.png",
    width: 65,
    height: 40,
  },
]

export default function PaymentPage() {
  const { cart, clearCart } = useShop()
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [country, setCountry] = useState("India")
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
  })

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 100000 ? 0 : 5000
  const total = subtotal + shipping

  const handlePayment = () => {
    // Validate shipping info
    if (!Object.values(shippingInfo).every((value) => value)) {
      toast({
        title: "Missing Information",
        description: "Please fill in all shipping details",
        variant: "destructive",
      })
      return
    }

    // Simulate order processing
    toast({
      title: "Processing your order",
      description: "Please wait...",
    })

    setTimeout(() => {
      const orderDetails = {
        orderId: `KE${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        items: cart,
        shipping: shippingInfo,
        payment: {
          method: paymentMethod,
          total: total,
        },
        status: "confirmed",
        estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      }

      // Store order details in localStorage for the confirmation page
      localStorage.setItem("lastOrder", JSON.stringify(orderDetails))
      clearCart()
      router.push(`/checkout/confirmation/${orderDetails.orderId}`)
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-3xl font-light mb-8">Secure Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-medium mb-4">Shipping Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="First Name"
                value={shippingInfo.firstName}
                onChange={(e) => setShippingInfo((prev) => ({ ...prev, firstName: e.target.value }))}
              />
              <Input
                placeholder="Last Name"
                value={shippingInfo.lastName}
                onChange={(e) => setShippingInfo((prev) => ({ ...prev, lastName: e.target.value }))}
              />
              <Input
                placeholder="Address"
                className="col-span-2"
                value={shippingInfo.address}
                onChange={(e) => setShippingInfo((prev) => ({ ...prev, address: e.target.value }))}
              />
              <Input
                placeholder="City"
                value={shippingInfo.city}
                onChange={(e) => setShippingInfo((prev) => ({ ...prev, city: e.target.value }))}
              />
              <Input
                placeholder="Postal Code"
                value={shippingInfo.postalCode}
                onChange={(e) => setShippingInfo((prev) => ({ ...prev, postalCode: e.target.value }))}
              />
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-medium mb-4">Payment Method</h2>
            <RadioGroup defaultValue="credit-card" onValueChange={setPaymentMethod}>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="credit-card" id="credit-card" />
                  <Label htmlFor="credit-card">Credit/Debit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod">Cash on Delivery</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="upi" id="upi" />
                  <Label htmlFor="upi">UPI</Label>
                </div>
              </div>
            </RadioGroup>

            {paymentMethod === "credit-card" && (
              <div className="mt-4 space-y-4">
                <Input placeholder="Card Number" />
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="MM/YY" />
                  <Input placeholder="CVV" />
                </div>
                <Input placeholder="Cardholder Name" />
              </div>
            )}

            <div className="mt-6 border-t pt-4">
              <p className="text-sm text-gray-600 mb-3">Accepted payment methods:</p>
              <div className="flex flex-wrap gap-4 items-center">
                {paymentMethods.map((method) => (
                  <div key={method.name} className="relative bg-white p-2 rounded-md border border-gray-100">
                    <Image
                      src={method.image || "/placeholder.svg"}
                      alt={method.name}
                      width={method.width}
                      height={method.height}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>₹ {(item.price * item.quantity).toLocaleString()}.00</span>
                </div>
              ))}
            </div>
            <Separator className="my-4" />
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹ {subtotal.toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `₹ ${shipping.toLocaleString()}.00`}</span>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between text-lg font-medium mb-6">
              <span>Total</span>
              <span>₹ {total.toLocaleString()}.00</span>
            </div>
            <Button className="w-full" onClick={handlePayment}>
              {paymentMethod === "cod" ? "Place Order" : "Complete Payment"}
            </Button>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-center text-sm text-gray-600">
              <Lock className="h-5 w-5 mr-2 text-green-600" />
              <span>Secure 256-bit SSL encryption</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <ShieldCheck className="h-5 w-5 mr-2 text-green-600" />
              <span>100% Payment Protection</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CreditCard className="h-5 w-5 mr-2 text-green-600" />
              <span>Trusted by over 1 million customers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

