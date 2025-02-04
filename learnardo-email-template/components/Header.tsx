import Image from "next/image"

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-12 pt-4">
      <div className="relative h-12 w-[180px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250129_024538_0000-z8mB2PNbLZFsGqGjJ1QFFk859ljJAc.png"
          alt="Learnado Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="text-right">
        <h1 className="text-xl font-bold text-purple-900">Weekly Tech Digest</h1>
        <p className="text-purple-600">May 15 - May 21, 2025</p>
      </div>
    </header>
  )
}

