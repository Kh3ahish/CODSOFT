import Image from "next/image"
import Link from "next/link"
import VideoSlideshow from "./components/VideoSlideshow"
import SeasonalPromotions from "./components/SeasonalPromotions"
import SplitCarousel from "./components/SplitCarousel"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <VideoSlideshow />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-light mb-6">Timeless Elegance</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">Discover the art of refined style</p>
          <Link
            href="/collections"
            className="inline-block border border-white text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-white hover:text-gray-900 transition duration-300"
          >
            Explore Collections
          </Link>
        </div>
      </section>

      {/* Split Carousel Section */}
      <SplitCarousel />

      {/* Luxury Bedding Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <video
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design(25)-xZfdO7wMvUUOlil03mkwqUuvRIyxes.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <div className="space-y-6 max-w-3xl">
            <h2 className="text-2xl tracking-[0.2em] font-light">KUSHWAH ÉCLAT</h2>
            <h3 className="text-5xl md:text-6xl font-light tracking-wide">Bedding Collection</h3>
            <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
              Our signature collection of luxury linens: The Heritage Icons are simple, sophisticated, and designed in
              an array of hues for artful layering
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="/collections/bedding"
                className="border border-white hover:bg-white hover:text-black transition-colors duration-300 px-8 py-3 min-w-[200px] text-sm tracking-[0.2em]"
              >
                SHOP NOW
              </Link>
              <Link
                href="/collections"
                className="border border-white hover:bg-white hover:text-black transition-colors duration-300 px-8 py-3 min-w-[200px] text-sm tracking-[0.2em]"
              >
                EXPLORE HOME
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Promotions - Added new section */}
      <section className="relative h-[600px]">
        <SeasonalPromotions />
      </section>

      {/* Featured Product */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Featured Product"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-light mb-6">The Essence of Luxury</h2>
              <p className="text-gray-600 mb-8">
                Experience unparalleled craftsmanship in every piece. Our latest collection embodies the perfect balance
                of comfort and sophistication.
              </p>
              <Link
                href="/products/featured"
                className="inline-block bg-gray-900 text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-gray-800 transition duration-300"
              >
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Join Our World of Elegance</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to experience our new collections, exclusive offers, and the
            latest in luxury fashion.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-2 text-sm uppercase tracking-wider hover:bg-gray-800 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

