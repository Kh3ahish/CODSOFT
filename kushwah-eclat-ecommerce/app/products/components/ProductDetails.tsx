"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useShop } from "@/app/contexts/ShopContext"
import { useToast } from "@/components/ui/use-toast"

interface Product {
  id: string
  name: string
  brand: string
  price: number
  category: string
  images: string[]
  description: string
  details: string[]
  sizes: string[]
  colors: string[]
  isNew: boolean
  inStock: boolean
}

const euSizes = ["EU 44", "EU 46", "EU 48", "EU 50", "EU 52", "EU 54", "EU 56", "EU 58", "EU 60", "EU 62"]

const lengths = ["SHORT", "REGULAR", "LONG"]

const completeLookItems = [
  {
    name: "Premium Cotton T-Shirt",
    brand: "Kushwah Éclat",
    price: 4800,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1695457335_2236257.jpg-Z8eIySrYEruJgS2JjYUS05oZNmjOVH.jpeg",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    name: "Sterling Silver Curb Chain",
    brand: "Kushwah Éclat",
    price: 12500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/V-19925148_1_800-Pkp1Wttbfxe7gUkwLCC1HEo04IeGnG.webp",
    length: "20 inches",
  },
  {
    name: "Wide-Leg Pleated Trousers",
    brand: "Kushwah Éclat",
    price: 26200,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6955-3GEu6gm7ZzNS8zQJxd8ceDvaMsJzEO.webp",
    sizes: ["EU 44", "EU 46", "EU 48", "EU 50", "EU 52"],
  },
]

const similarProducts = [
  {
    id: "1",
    name: "Tweed Check Overcoat",
    brand: "Kushwah Éclat",
    price: 89500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brunello-cuccinelli-luxury-menswear-brand-616x924.jpg-VjcYjd0IbXn7rkS0rfhqAKdH3FvjNV.jpeg",
    description: "Classic tweed overcoat in brown check pattern",
  },
  {
    id: "2",
    name: "Minimalist Wool Overcoat",
    brand: "Kushwah Éclat",
    price: 78500,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reiss-Brown-Gable-Chocolate-Wool-Blend-Single-Breasted-Epsom-Overcoat-IYtzrgobLiD32YAzYI1vTqOQlFi2ag.jpeg",
    description: "Clean-lined overcoat in chocolate brown",
  },
  {
    id: "3",
    name: "Luxury Fur Coat",
    brand: "Kushwah Éclat",
    price: 245000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s-l1200.jpg-0yVRUbEOHXXmRcOOv8DEGuV2bNt23W.jpeg",
    description: "Premium silver fox fur coat",
  },
  {
    id: "4",
    name: "Classic Trench Coat",
    brand: "Kushwah Éclat",
    price: 68500,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/966750309_01-K6YHjzt6pL9ofxb2WNVWYqrvhzeOkp.webp",
    description: "Double-breasted trench coat in navy",
  },
]

export default function ProductDetails({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedLength, setSelectedLength] = useState<string | null>("REGULAR")
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { addToCart, addMultipleToCart, likedItems, toggleLike } = useShop()
  const { toast } = useToast()

  const handleAddToBag = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You must choose a size before adding to bag.",
        variant: "destructive",
      })
      return
    }
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      size: selectedSize,
      color: selectedColor,
    })
    toast({
      title: "Added to bag",
      description: `${product.name} has been added to your bag.`,
    })
  }

  const isLiked = likedItems.includes(product.id)

  const productImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-02%20012538-YmHsSx1tVnrBFbXpTY9jBHsLkpJx4W.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-02%20012603-yV9bofcUo0ca8xUAGfFTlEXBnUqM5C.png",
  ]

  const totalLookPrice = product.price + completeLookItems.reduce((sum, item) => sum + item.price, 0)

  const handleAddCompleteLook = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You must choose a size for the main product before adding the complete look.",
        variant: "destructive",
      })
      return
    }

    const mainProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      size: selectedSize,
      color: selectedColor,
      image: productImages[0],
    }

    const completeLookItemsToAdd = [
      mainProduct,
      ...completeLookItems.map((item) => ({
        id: item.name.toLowerCase().replace(/\s+/g, "-"),
        name: item.name,
        price: item.price,
        quantity: 1,
        size: item.sizes ? item.sizes[0] : undefined,
        color: "Default",
        image: item.image,
      })),
    ]

    addMultipleToCart(completeLookItemsToAdd)
    toast({
      title: "Complete look added to bag",
      description: "The complete look has been added to your shopping bag.",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-[3/4] bg-[#F5F5F5]">
            <Image
              src={productImages[currentImageIndex] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {productImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative aspect-[3/4] bg-[#F5F5F5] ${
                  currentImageIndex === index ? "ring-2 ring-black" : ""
                }`}
              >
                <Image src={img || "/placeholder.svg"} alt={`View ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/men" className="hover:underline">
              MEN
            </Link>
            <span>/</span>
            <Link href="/men/clothing" className="hover:underline">
              CLOTHING
            </Link>
            <span>/</span>
            <Link href="/men/clothing/blazers" className="hover:underline">
              BLAZERS
            </Link>
          </nav>

          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-light mb-1">{product.name}</h1>
              <p className="text-gray-600">{product.brand}</p>
            </div>
            <Button variant="ghost" size="icon" className="hover:bg-transparent" onClick={() => toggleLike(product.id)}>
              <Heart className={`h-6 w-6 ${isLiked ? "fill-current text-red-500" : ""}`} />
            </Button>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <p className="text-xl">₹ {product.price.toLocaleString()}.00</p>
            {product.isNew && <span className="text-xs font-semibold tracking-wide">NEW ARRIVAL</span>}
          </div>

          <Separator />

          {/* Color Selection */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">COLOUR:</span>
              <span className="text-sm">{selectedColor}</span>
            </div>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-12 h-12 rounded-sm relative ${selectedColor === color ? "ring-1 ring-black" : ""}`}
                  style={{ backgroundColor: color.toLowerCase() }}
                >
                  <span className="sr-only">{color}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">SIZE:</span>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link" className="text-sm p-0 h-auto font-normal underline">
                    Size Chart
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-light">Size Guide</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    {/* Size Chart Table */}
                    <div className="rounded-lg border overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-center">Size (EU)</TableHead>
                            <TableHead className="text-center">Chest (cm)</TableHead>
                            <TableHead className="text-center">Waist (cm)</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {[
                            { size: "44", chest: "88", waist: "72" },
                            { size: "46", chest: "92", waist: "76" },
                            { size: "48", chest: "96", waist: "80" },
                            { size: "50", chest: "100", waist: "84" },
                            { size: "52", chest: "104", waist: "88" },
                            { size: "54", chest: "108", waist: "92" },
                            { size: "56", chest: "112", waist: "96" },
                            { size: "58", chest: "116", waist: "100" },
                          ].map((row) => (
                            <TableRow key={row.size}>
                              <TableCell className="text-center font-medium">{row.size}</TableCell>
                              <TableCell className="text-center">{row.chest}</TableCell>
                              <TableCell className="text-center">{row.waist}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    {/* Measurement Guide */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">How to Measure</h3>
                      <div className="grid grid-cols-1 gap-4 text-sm">
                        <div className="space-y-2">
                          <p className="font-medium">Chest</p>
                          <p className="text-gray-600">
                            Measure around the fullest part of your chest, keeping the tape horizontal.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="font-medium">Waist</p>
                          <p className="text-gray-600">
                            Measure around your natural waistline, keeping the tape comfortably loose.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fit Guide */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Fit Guide</h3>
                      <div className="grid grid-cols-1 gap-4 text-sm">
                        <p className="text-gray-600">
                          <span className="font-medium">Slim Fit:</span> Close-fitting through chest and waist.
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Regular Fit:</span> Classic cut with comfortable room.
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Relaxed Fit:</span> Generous cut throughout.
                        </p>
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                      <p>
                        If you're between sizes, we recommend choosing the larger size. Our expert tailoring service is
                        available for precise adjustments.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {euSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 text-sm border ${
                    selectedSize === size ? "border-black bg-black text-white" : "border-gray-200 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Length Selection */}
          <div className="space-y-4">
            <span className="text-sm font-medium">LENGTH:</span>
            <div className="grid grid-cols-3 gap-2">
              {lengths.map((length) => (
                <button
                  key={length}
                  onClick={() => setSelectedLength(length)}
                  className={`py-2 text-sm border ${
                    selectedLength === length
                      ? "border-black bg-black text-white"
                      : "border-gray-200 hover:border-black"
                  }`}
                >
                  {length}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Bag Button */}
          <Button className="w-full h-12 text-base font-normal" onClick={handleAddToBag}>
            <ShoppingBag className="mr-2 h-5 w-5" />
            ADD TO BAG
          </Button>
        </div>
      </div>

      {/* Enhanced Complete the Look Section */}
      <section className="mt-16 bg-gray-50 p-8 rounded-lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light mb-2">Complete the Look</h2>
          <p className="text-gray-600 mb-8">Style this piece with our curated selection</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {completeLookItems.map((item) => (
              <Card key={item.name} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="relative aspect-[3/4] bg-[#F5F5F5] rounded-sm overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h3 className="font-light text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.brand}</p>
                      <p className="text-lg">₹ {item.price.toLocaleString()}.00</p>
                    </div>
                    <Button variant="outline" className="w-full">
                      Quick Add
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-white p-8 rounded-lg">
            <div className="max-w-md mx-auto text-center space-y-4">
              <h3 className="text-xl font-light">Complete Look Price</h3>
              <p className="text-3xl">
                ₹ {(product.price + completeLookItems.reduce((sum, item) => sum + item.price, 0)).toLocaleString()}.00
              </p>
              <p className="text-sm text-gray-600 mb-4">Save 10% when buying the complete look</p>
              <Button size="lg" className="w-full" onClick={handleAddCompleteLook}>
                Add Complete Look to Bag
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced You May Also Like Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-light mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {similarProducts.map((item) => (
            <Link key={item.id} href={`/products/${item.id}`} className="group">
              <div className="relative aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-light">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.brand}</p>
                <p className="text-lg">₹ {item.price.toLocaleString()}.00</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

