import Image from "next/image"

export default function Footer() {
  return (
    <footer className="text-center pt-8 border-t border-purple-100">
      <div className="mb-6">
        <div className="relative h-10 w-[140px] mx-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250129_024538_0000-z8mB2PNbLZFsGqGjJ1QFFk859ljJAc.png"
            alt="Learnado Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex justify-center space-x-6 mb-6">
        <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
          Courses
        </a>
        <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
          Resources
        </a>
        <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
          Community
        </a>
        <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">
          Support
        </a>
      </div>
      <div className="text-gray-500 text-sm">
        <p className="mb-2">&copy; {new Date().getFullYear()} Learnado. All rights reserved.</p>
        <p>
          <a href="#" className="hover:text-purple-600 transition-colors">
            Update Preferences
          </a>
          {" • "}
          <a href="#" className="hover:text-purple-600 transition-colors">
            Unsubscribe
          </a>
        </p>
      </div>
    </footer>
  )
}

