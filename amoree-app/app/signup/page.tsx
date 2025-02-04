"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowLeft, Calendar, Mail, Lock, User, Camera, Heart } from "lucide-react"

export default function SignUpPage() {
  const [step, setStep] = useState(1)
  const totalSteps = 3

  return (
    <div className="min-h-screen gradient-bg flex flex-col items-center justify-center p-6 relative">
      {/* Animated Background */}
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
      <div className="w-full max-w-md space-y-6 z-10">
        {/* Header with Progress */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Link
              href={step === 1 ? "/" : "#"}
              onClick={() => step > 1 && setStep(step - 1)}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design(10)-8D3TcnfLRU2DzvThTq4htbl5R7p2MA.png"
              alt="Amoree Logo"
              width={130}
              height={40}
              className="mx-auto"
            />
            <div className="w-6" />
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center space-x-2">
            {[...Array(totalSteps)].map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i + 1 <= step ? "w-8 bg-red-400" : "w-4 bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Sign Up Form Card */}
        <div className="glass-card rounded-3xl p-8 space-y-8">
          {step === 1 && (
            <>
              <div className="space-y-2 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">Start Your Love Story</h2>
                <p className="text-gray-600">Your perfect match is just a few steps away</p>
              </div>

              <div className="space-y-4">
                <div className="relative group">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="input-style pl-10 py-6 transition-all duration-300 border-gray-200 focus:border-red-400"
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                </div>
                <div className="relative group">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="input-style pl-10 py-6 transition-all duration-300 border-gray-200 focus:border-red-400"
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                </div>
                <div className="relative group">
                  <Input
                    type="password"
                    placeholder="Create Password"
                    className="input-style pl-10 py-6 transition-all duration-300 border-gray-200 focus:border-red-400"
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-2 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">Tell Us About Yourself</h2>
                <p className="text-gray-600">Let's find your perfect match</p>
              </div>

              <div className="space-y-6">
                <div className="relative group">
                  <Input
                    type="date"
                    placeholder="Your Birthday"
                    className="input-style pl-10 py-6 transition-all duration-300 border-gray-200 focus:border-red-400"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">I identify as:</label>
                  <div className="grid grid-cols-2 gap-4">
                    {["Woman", "Man", "Non-binary", "Other"].map((gender) => (
                      <Button
                        key={gender}
                        variant="outline"
                        className="py-6 border-2 hover:bg-red-50 hover:border-red-300 transition-all duration-300"
                      >
                        {gender}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">I'm interested in:</label>
                  <div className="grid grid-cols-2 gap-4">
                    {["Women", "Men", "Non-binary", "Everyone"].map((preference) => (
                      <Button
                        key={preference}
                        variant="outline"
                        className="py-6 border-2 hover:bg-red-50 hover:border-red-300 transition-all duration-300"
                      >
                        {preference}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="space-y-2 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">Show Your Best Self</h2>
                <p className="text-gray-600">Add a photo that captures your essence</p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-32 h-32 rounded-full bg-red-50 flex items-center justify-center border-2 border-dashed border-red-300 relative group cursor-pointer hover:bg-red-100 transition-colors">
                    <Camera className="h-8 w-8 text-red-400 group-hover:scale-110 transition-transform" />
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                  </div>
                  <p className="text-sm text-gray-500">Upload your best photo</p>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">I'm looking for:</label>
                  <div className="grid grid-cols-2 gap-4">
                    {["Romance", "Friendship", "Long-term", "Casual"].map((type) => (
                      <Button
                        key={type}
                        variant="outline"
                        className="py-6 border-2 hover:bg-red-50 hover:border-red-300 transition-all duration-300"
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          <Button
            onClick={() => (step < totalSteps ? setStep(step + 1) : null)}
            className="w-full bg-gradient-to-r from-[#E31B54] to-[#FF4B6E] hover:from-[#C41747] hover:to-[#E31B54] text-white font-medium py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border-none"
          >
            {step === totalSteps ? (
              <span className="flex items-center">
                Find Your Match
                <Heart className="ml-2 h-5 w-5" />
              </span>
            ) : (
              "Continue"
            )}
          </Button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/signin" className="text-red-500 hover:text-red-700 font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

