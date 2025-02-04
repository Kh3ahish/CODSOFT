"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowLeft, Mail, Lock, Phone, Heart } from "lucide-react"

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }

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
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors">
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

        {/* Sign In Form */}
        <div className="glass-card rounded-3xl p-8 space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Welcome Back</h2>
            <p className="text-gray-600">Ready to continue your love story?</p>
          </div>

          <div className="space-y-6">
            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="py-6 border-2 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google__G__logo.svg-maCCK1cLPswSkLgnHE2dTfpgyemQwV.webp"
                  alt="Google"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <span>Google</span>
              </Button>
              <Button
                variant="outline"
                className="py-6 border-2 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/facebook-png-icon-follow-us-facebook-1-mrUw4eLTZX8pUI2xgw9Ka8EuVp7TEu.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <span>Facebook</span>
              </Button>
            </div>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent h-[1px]" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium tracking-wide animate-fade-in">
                  or continue with
                </span>
              </div>
            </div>

            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="email" className="text-sm">
                  Email
                </TabsTrigger>
                <TabsTrigger value="phone" className="text-sm">
                  Phone Number
                </TabsTrigger>
              </TabsList>

              <TabsContent value="email" className="space-y-4">
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
                    placeholder="Password"
                    className="input-style pl-10 py-6 transition-all duration-300 border-gray-200 focus:border-red-400"
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                </div>
              </TabsContent>

              <TabsContent value="phone" className="space-y-4">
                <div className="relative group">
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="input-style pl-10 py-6 transition-all duration-300 border-gray-200 focus:border-red-400"
                  />
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                </div>
                <div className="relative group">
                  <Input
                    type="password"
                    placeholder="Password"
                    className="input-style pl-10 py-6 transition-all duration-300 border-gray-200 focus:border-red-400"
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-red-500 focus:ring-red-500 transition-colors"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-red-500 hover:text-red-600 transition-colors">
                Forgot Password?
              </Link>
            </div>

            <Button
              onClick={handleSignIn}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#E31B54] to-[#FF4B6E] hover:from-[#C41747] hover:to-[#E31B54] text-white font-medium py-6 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-70 border-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Signing In...
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="space-y-4">
          <p className="text-center text-sm text-gray-600">
            New to Amoree?{" "}
            <Link href="/signup" className="text-red-500 hover:text-red-600 font-medium transition-colors">
              Create Account
            </Link>
          </p>
          <p className="text-center text-xs text-gray-500">
            By signing in, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-gray-700 transition-colors">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-gray-700 transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

