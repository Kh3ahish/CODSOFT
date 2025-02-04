import MenVideoSlideshow from "../components/MenVideoSlideshow"
import ShopByCategory from "../components/ShopByCategory"
import ProductGrid from "../components/ProductGrid"

const products = [
  {
    id: "1",
    name: "Wool Blend Overshirt",
    brand: "Kushwah Éclat",
    price: 24900,
    category: "Jackets",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3M5hUavdBLIKo4Gxn9oJUVjfvvHzKF.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9POuZguJ9tAHr3A0WEozGGIzWr8TgD.png",
    ],
    isNew: true,
    colors: 2,
    matchingSet: true,
  },
  {
    id: "2",
    name: "Logo Cotton Polo",
    brand: "Kushwah Éclat",
    price: 12900,
    category: "Polo Shirts",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HQVVrdX0MBz4xsAYsSvS9xLgcPLY9n.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EK61PD55ZdCsWMA4wQmDoztfOTJAgH.png",
    ],
    isNew: true,
    colors: 3,
  },
  {
    id: "3",
    name: "Pinstripe Suit Set",
    brand: "Kushwah Éclat",
    price: 89900,
    category: "Suits",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KctFXYo9yYQAr59DDy9t5TzwkjvfcH.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kBq4EId2QzImZQ0KeNSgyGPj5QklBf.png",
    ],
    isNew: true,
    colors: 1,
    matchingSet: true,
  },
  {
    id: "4",
    name: "Embroidered Kurta Set",
    brand: "Kushwah Éclat",
    price: 45900,
    category: "Indian Wear",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-04%20220016-LaH3BchFiTvEFPeYCORqqUAbU2YHvm.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-04%20220034-z7TltevyWr7tnswmCgXpZraVW7wmGP.png",
    ],
    isNew: true,
    colors: 1,
    matchingSet: true,
  },
  {
    id: "5",
    name: "Fusion Art Shirt",
    brand: "Kushwah Éclat",
    price: 32900,
    category: "Shirts",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edit-p-42-768x1152.jpg-5eLnRxMf0s3qi0qqnsJEMN5RG2pvRI.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edit-p-57-768x1152.jpg-n7Y60BPkDscv2Wns9tQmqcB2ZMpdC2.jpeg",
    ],
    isNew: true,
    colors: 1,
    matchingSet: false,
  },
  {
    id: "6",
    name: "Sequined Evening Suit",
    brand: "Kushwah Éclat",
    price: 125000,
    category: "Formal Wear",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0xkdfZZQVA6Nxj8V7blyihmwCd5wBw.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RINhISdNs8P4vSJ9R8ufnJFs47CEaD.png",
    ],
    isNew: true,
    colors: 1,
    matchingSet: true,
  },
  {
    id: "7",
    name: "Timex Luxury Chronograph",
    brand: "Kushwah Éclat",
    price: 185000,
    category: "Accessories",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wf9L99yuFTr8gKE4fcgzudTOu4ZTog.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q6xYh8P9hDLty2FtuRQIBs5zm9ggNn.png",
    ],
    isNew: true,
    colors: 1,
    matchingSet: false,
  },
  {
    id: "8",
    name: "Navy Business Suit",
    brand: "Kushwah Éclat",
    price: 78900,
    category: "Suits",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lD4WmkGRU9fsw02Sx5wrRHsBvo7PEj.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hiisbG8NVvjbwqwKmIrqw9VT2yibhn.png",
    ],
    isNew: true,
    colors: 1,
    matchingSet: true,
  },
  {
    id: "9",
    name: "Cable Knit Sweater",
    brand: "Kushwah Éclat",
    price: 42900,
    category: "Knitwear",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n524Ol5b6kza29eWNTJw4oemllXNh5.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8Ygenv9N8sCu36tljgfkIhXPQkdkws.png",
    ],
    isNew: true,
    colors: 2,
    matchingSet: false,
  },
]

const categories = [
  {
    name: "FORMALWEAR",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product-jpeg.jpg-vopDTPCPPwBiy1m0HQ8vVI11rfdgDo.jpeg",
    link: "/men/formalwear",
    description: "Timeless suits and formal attire for the modern gentleman",
  },
  {
    name: "CASUAL WEAR",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/46ef1e59d28ad1aeed02c78c1efe779a.jpg-ImbaqDTu3SB6NC22by71R4V5DkdOuU.jpeg",
    link: "/men/casual",
    description: "Contemporary casual pieces for everyday sophistication",
  },
  {
    name: "OUTERWEAR",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NjjyHPJjduQWYV4ns9I3wg4qWvAtic.png",
    link: "/men/outerwear",
    description: "Classic coats and jackets for distinguished style",
  },
  {
    name: "SPORTSWEAR",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bog_post_photo_2-i2A6Q02esB6Hyt0701s53BIV46aCbl.webp",
    link: "/men/sportswear",
    description: "Performance meets style in our athletic collection",
  },
  {
    name: "DENIM",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/best-men-jeans-tommy-hilfiger-luxe-digital.jpg-9kaDx5wNxJJRWZ8HMWFRa2FPTFqeYk.jpeg",
    link: "/men/denim",
    description: "Premium denim essentials for the modern wardrobe",
  },
  {
    name: "LOUNGEWEAR",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6123PoNjYUL._AC_UY350_.jpg-1mIH1UPT0ZSfjHUr9C0taOCI3HKuTo.jpeg",
    link: "/men/loungewear",
    description: "Comfort and style for your downtime",
  },
  {
    name: "ACCESSORIES",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/77ca7c5d55f71853868248e7c37ab756.jpg-jt1UueqMA46N1P4MBb2QJURaQbdWbp.jpeg",
    link: "/men/accessories",
    description: "Refined accessories to complete your signature look",
  },
  {
    name: "FOOTWEAR",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The-most-expensive-mens-dress-shoes-in-2024.jpg-cS2VcpzIR0WBinkRIWea5n0DZ96hrf.jpeg",
    link: "/men/shoes",
    description: "Luxury footwear crafted for style and comfort",
  },
]

export default function MenPage() {
  return (
    <div className="min-h-screen">
      <MenVideoSlideshow />

      <ShopByCategory categories={categories} title="Men: Shop by Category" />

      <div className="container mx-auto px-6 py-16">
        <ProductGrid products={products} title="New Arrivals" />
      </div>
    </div>
  )
}

