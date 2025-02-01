"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronLeft, CreditCard, Lock, Check, ShoppingCartIcon as PaypalIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export default function PaymentPage() {
  const router = useRouter()
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically process the payment
    // For now, we'll just show an alert
    alert("Zahlung erfolgreich! Ihre Reservierung wurde bestätigt.")
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 pb-20">
      <header className="bg-white shadow-sm sticky top-0 z-10 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500"
            onClick={() => router.back()}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <h1 className="text-2xl font-bold text-gray-800">Zahlung</h1>
          <div className="w-10 h-10" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-6"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Reservierungsdetails</h2>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold text-gray-700">Datum:</span> 15. Juli 2023
            </p>
            <p>
              <span className="font-semibold text-gray-700">Uhrzeit:</span> 19:30
            </p>
            <p>
              <span className="font-semibold text-gray-700">Gäste:</span> 2 Personen
            </p>
            <p>
              <span className="font-semibold text-gray-700">Tisch:</span> Fensterplatz
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-6"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Zahlungsmethode</h2>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="credit-card" id="credit-card" className="border-orange-200 text-orange-500" />
              <Label htmlFor="credit-card" className="flex items-center space-x-2">
                <CreditCard className="w-5 h-5 text-orange-500" />
                <span>Kreditkarte</span>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paypal" id="paypal" className="border-orange-200 text-orange-500" />
              <Label htmlFor="paypal" className="flex items-center space-x-2">
                <PaypalIcon className="w-5 h-5 text-blue-500" />
                <span>PayPal</span>
              </Label>
            </div>
          </RadioGroup>
        </motion.div>

        {paymentMethod === "credit-card" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-6"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Kreditkarteninformationen</h2>
            <form onSubmit={handlePayment} className="space-y-4">
              <div>
                <Label htmlFor="card-number" className="text-gray-700">
                  Kartennummer
                </Label>
                <div className="relative mt-1">
                  <Input
                    type="text"
                    id="card-number"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="pl-10 w-full border-orange-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                    required
                  />
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400" />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Label htmlFor="expiry-date" className="text-gray-700">
                    Ablaufdatum
                  </Label>
                  <Input
                    type="text"
                    id="expiry-date"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="w-full mt-1 border-orange-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                    required
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="cvv" className="text-gray-700">
                    CVV
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      type="text"
                      id="cvv"
                      placeholder="123"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="pl-10 w-full border-orange-200 focus:border-orange-500 focus:ring-orange-500 rounded-xl"
                      required
                    />
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400" />
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        )}

        <Separator className="my-6" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-6"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Zusammenfassung</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-700">Reservierungsgebühr</span>
              <span className="font-semibold">10,00 €</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className="text-gray-700">Gesamtbetrag</span>
              <span className="text-orange-500">10,00 €</span>
            </div>
          </div>
        </motion.div>
      </main>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t"
      >
        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold text-lg shadow-lg flex items-center justify-center"
          onClick={handlePayment}
        >
          <span>Jetzt bezahlen</span>
          <Check className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>
    </div>
  )
}

