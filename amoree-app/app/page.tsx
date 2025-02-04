import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Sparkles, Shield, Users } from "lucide-react"

export default function WelcomePage() {
  return (
    <div className="min-h-screen gradient-bg flex flex-col items-center justify-center p-6 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 text-pink-200 opacity-50 floating-heart">
          <Heart size={48} />
        </div>
        <div
          className="absolute bottom-1/4 right-1/4 text-pink-200 opacity-50 floating-heart"
          style={{ animationDelay: "1s" }}
        >
          <Heart size={32} />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md space-y-8 z-10">
        {/* Logo Section */}
        <div className="text-center space-y-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design(10)-8D3TcnfLRU2DzvThTq4htbl5R7p2MA.png"
            alt="Amoree Logo"
            width={220}
            height={70}
            className="mx-auto"
          />
          <p className="text-gray-600 font-light text-lg tracking-wide">Where Love Stories Begin</p>
        </div>

        {/* Main Card */}
        <div className="glass-card rounded-3xl p-8 space-y-8">
          {/* Action Buttons */}
          <div className="space-y-4">
            <Link href="/signup" className="block">
              <Button className="w-full bg-gradient-to-r from-[#E31B54] to-[#FF4B6E] hover:from-[#C41747] hover:to-[#E31B54] text-white font-medium py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border-none">
                Start Your Journey
                <Heart className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/signin" className="block">
              <Button
                variant="outline"
                className="w-full bg-white/80 text-[#E31B54] font-medium py-6 rounded-full border-2 border-[#E31B54] transition-all duration-300 hover:bg-[#E31B54] hover:text-white"
              >
                Welcome Back
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mx-auto">
                <Heart className="h-6 w-6 text-red-400" />
              </div>
              <p className="text-sm text-gray-600">Meaningful Matches</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-red-400" />
              </div>
              <p className="text-sm text-gray-600">Safe Connections</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-red-400" />
              </div>
              <p className="text-sm text-gray-600">Real Relationships</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="text-center">
          <p className="text-sm text-gray-600 italic">"I found my soulmate on Amoree!" - Sarah, 28</p>
        </div>

        {/* Footer */}
        <div className="flex justify-center space-x-6 text-sm">
          <Link href="/about" className="text-gray-500 hover:text-red-600 transition-colors">
            About
          </Link>
          <Link href="/safety" className="text-gray-500 hover:text-red-600 transition-colors">
            Safety
          </Link>
          <Link href="/privacy" className="text-gray-500 hover:text-red-600 transition-colors">
            Privacy
          </Link>
        </div>
      </div>
    </div>
  )
}

