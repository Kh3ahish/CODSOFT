import WomenVideoSlideshow from "../components/WomenVideoSlideshow"
import ShopByCategory from "../components/ShopByCategory"
import ProductGrid from "../components/ProductGrid"

const products = [
  {
    id: "1",
    name: "Silk Wrap Dress",
    brand: "Kushwah Éclat",
    price: 34900,
    category: "Dresses",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XkYZsQMmY4fwfjtlyJqIQygmjyxUPH.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XkYZsQMmY4fwfjtlyJqIQygmjyxUPH.png",
    ],
    isNew: true,
    colors: 3,
  },
  {
    id: "2",
    name: "Tailored Blazer",
    brand: "Kushwah Éclat",
    price: 42900,
    category: "Jackets",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NsgguY3glNahByLADJbowEiU1kJyDm.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NsgguY3glNahByLADJbowEiU1kJyDm.png",
    ],
    isNew: true,
    colors: 2,
    matchingSet: true,
  },
  {
    id: "3",
    name: "Embroidered Blouse",
    brand: "Kushwah Éclat",
    price: 18900,
    category: "Tops",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KNla2ASwQaLcTSlU4PSxl7fWp4zITl.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KNla2ASwQaLcTSlU4PSxl7fWp4zITl.png",
    ],
    isNew: true,
    colors: 4,
  },
]

const categories = [
  {
    name: "EVENING WEAR",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/evening%20wear-n6if5xTzkfUr6jpyW7cosdCFDoeG0H.webp",
    link: "/women/evening-wear",
    description: "Elegant gowns and sophisticated evening attire",
  },
  {
    name: "CASUAL WEAR",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casual%20wear.jpg-iimGnw4X9ZavoQdrvYEoMCDq47BJFs.jpeg",
    link: "/women/casual",
    description: "Contemporary pieces for effortless style",
  },
  {
    name: "OUTERWEAR",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KOYrdHH5b4Gi9s7TxBIrt1qaXawSYv.png",
    link: "/women/outerwear",
    description: "Luxurious coats and jackets for every season",
  },
  {
    name: "ACTIVEWEAR",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kN8KnLowHseY2EPptJdhY0gU0wuMn8.png",
    link: "/women/activewear",
    description: "Performance meets elegance in our athletic collection",
  },
  {
    name: "DENIM",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E3cm0yJd15IhHjpwx6Rko8iLe05Ews.png",
    link: "/women/denim",
    description: "Premium denim pieces for the modern woman",
  },
  {
    name: "LOUNGEWEAR",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sku86OkSBx7hA1dTYKnyIEViiJnkFk.png",
    link: "/women/loungewear",
    description: "Luxurious comfort for your moments of relaxation",
  },
  {
    name: "ACCESSORIES",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/accessories-make-or-break-1100x733.jpg-uCLlE6ln4VbJXjkJ3vZZBExmVFrnm9.jpeg",
    link: "/women/accessories",
    description: "Curated accessories to perfect your ensemble",
  },
  {
    name: "FOOTWEAR",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global-Womens-Luxury-Footwear-Market-Surges-to-305-Billion-in-2023-wDzUp1hWxCtWFES77MP1NcoMgq9Rak.png",
    link: "/women/shoes",
    description: "Sophisticated footwear for every occasion",
  },
]

export default function WomenPage() {
  return (
    <div className="min-h-screen">
      <WomenVideoSlideshow />

      <ShopByCategory categories={categories} title="Women: Shop by Category" />

      <div className="container mx-auto px-6 py-16">
        <ProductGrid products={products} title="New Arrivals" />
      </div>
    </div>
  )
}

