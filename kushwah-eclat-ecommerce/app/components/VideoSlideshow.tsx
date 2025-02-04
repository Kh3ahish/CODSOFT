"use client"

import { useState, useEffect } from "react"

const videos = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design(9)-X3BWoKYBwWSV3ynvm6gZVQdAIDhOdm.mp4",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design(10)-hywU7rrtj2jDd5dOzw0Hm8q5qXWcLj.mp4",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design(13)-uXLaH75Jgdq74nh0U8RbjkR0C8t9wh.mp4",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design(11)-e0Rnrms9fo91aGjqqziPbuXqpk434U.mp4",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design(14)-LM6ZLa9u7umPZCwqEWj91HxrbGzj4a.mp4", // Added new video
]

export default function VideoSlideshow() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    }, 5000) // Change video every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {videos.map((video, index) => (
        <video
          key={video}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentVideoIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  )
}

