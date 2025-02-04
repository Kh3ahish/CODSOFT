"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Package2, Truck, CheckCircle2, MapPin, Clock } from "lucide-react"
import Image from "next/image"

interface OrderDetails {
  orderId: string
  items: any[]
  shipping: {
    firstName: string
    lastName: string
    address: string
    city: string
    postalCode: string
  }
  payment: {
    method: string
    total: number
  }
  status: string
  estimatedDelivery: string
}

const steps = [
  { icon: CheckCircle2, label: "Order Confirmed" },
  { icon: Package2, label: "Processing" },
  { icon: Truck, label: "Shipped" },
  { icon: MapPin, label: "Out for Delivery" },
]

export default function ConfirmationPage({ params }: { params: { orderId: string } }) {
  const [order, setOrder] = useState<OrderDetails | null>(null)

  useEffect(() => {
    const savedOrder = localStorage.getItem("lastOrder")
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder))
    }
  }, [])

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-light mb-4">Order not found</h1>
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-light mb-2">Thank You for Your Order!</h1>
        <p className="text-gray-600">Order #{order.orderId}</p>
      </div>

      <div className="grid gap-8">
        {/* Order Status */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-medium mb-6">Order Status</h2>
          <div className="relative">
            <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200" />
            <div className="relative z-10 flex justify-between">
              {steps.map((step, index) => {
                const isActive = index === 0 // Currently only first step is active
                return (
                  <div key={step.label} className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isActive ? "bg-green-600" : "bg-gray-200"
                      }`}
                    >
                      <step.icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-500"}`} />
                    </div>
                    <p className="mt-2 text-sm font-medium">{step.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Estimated Delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-medium mb-4">Order Details</h2>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="w-20 h-20 relative flex-shrink-0">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover rounded" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    Size: {item.size} | Color: {item.color}
                  </p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹ {(item.price * item.quantity).toLocaleString()}.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping and Payment */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-medium mb-4">Shipping Address</h2>
            <p className="text-gray-600">
              {order.shipping.firstName} {order.shipping.lastName}
              <br />
              {order.shipping.address}
              <br />
              {order.shipping.city}, {order.shipping.postalCode}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-medium mb-4">Payment Details</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Method</span>
                <span className="font-medium">
                  {order.payment.method === "cod" ? "Cash on Delivery" : order.payment.method}
                </span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-gray-600">Total Amount</span>
                <span className="font-medium">₹ {order.payment.total.toLocaleString()}.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4 mt-8">
          <Link href="/">
            <Button variant="outline">Continue Shopping</Button>
          </Link>
          <Button>Track Order</Button>
        </div>
      </div>
    </div>
  )
}

