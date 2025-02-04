import { useState } from "react"
import { Clock, Gift, Copy, Check, Zap } from "lucide-react"

const offers = [
  {
    title: "Early Bird Special",
    description: "Be among the first 100 to enroll and get an additional 10% off on top of the 70% discount!",
    code: "EARLYBIRD10",
    expires: "24 hours",
    icon: Zap,
    bonus: "Free access to our 'Tech Career Accelerator' program (worth $499)",
  },
  {
    title: "Bundle & Save Extra",
    description:
      "Enroll in any 2 courses and get the third one absolutely free. Triple your skills, triple your value!",
    code: "BUNDLE3FREE",
    expires: "3 days",
    icon: Gift,
    bonus: "Exclusive 1-hour session with a tech industry leader",
  },
]

export default function SpecialOffers() {
  const [copiedCodes, setCopiedCodes] = useState<string[]>([])

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCodes([...copiedCodes, code])
    setTimeout(() => {
      setCopiedCodes(copiedCodes.filter((c) => c !== code))
    }, 3000)
  }

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-purple-900 mb-8">Exclusive Limited-Time Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="border-2 border-purple-200 rounded-xl p-6 hover:border-purple-300 transition-colors bg-gradient-to-br from-purple-50 to-white"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-purple-900 flex items-center">
                <offer.icon className="w-6 h-6 mr-2 text-purple-600" />
                {offer.title}
              </h3>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                Expires in {offer.expires}
              </span>
            </div>
            <p className="text-gray-600 mb-4 text-lg">{offer.description}</p>
            <div className="bg-purple-100 p-4 rounded-lg mb-4">
              <h4 className="text-purple-800 font-bold mb-2">Bonus:</h4>
              <p className="text-purple-700">{offer.bonus}</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg flex justify-between items-center">
              <span className="font-mono text-purple-800 font-bold text-xl">{offer.code}</span>
              <button
                onClick={() => handleCopyCode(offer.code)}
                className={`flex items-center justify-center px-4 py-2 rounded-full transition-colors ${
                  copiedCodes.includes(offer.code)
                    ? "bg-green-500 text-white"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
              >
                {copiedCodes.includes(offer.code) ? (
                  <>
                    <Check className="w-5 h-5 mr-2" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 mr-2" /> Copy Code
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

