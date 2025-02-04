import { Suspense } from "react"
import ProductGrid from "../components/ProductGrid"

// This would typically come from your database or API
const searchProducts = (query: string) => {
  // Simulated search results
  return [
    {
      id: "1",
      name: "Silk Evening Dress",
      brand: "Kushwah Éclat",
      price: 89900,
      category: "Dresses",
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XkYZsQMmY4fwfjtlyJqIQygmjyxUPH.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XkYZsQMmY4fwfjtlyJqIQygmjyxUPH.png",
      ],
      isNew: true,
      colors: 2,
    },
    // Add more products as needed
  ]
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const query = typeof searchParams.q === "string" ? searchParams.q : ""
  const products = searchProducts(query)

  return (
    <div className="min-h-screen pt-8">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-light mb-2">Search Results</h1>
        <p className="text-gray-600 mb-8">
          {products.length} results for &quot;{query}&quot;
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <ProductGrid products={products} title="" />
        </Suspense>
      </div>
    </div>
  )
}

