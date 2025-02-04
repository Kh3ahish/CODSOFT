import type React from "react"
import Link from "next/link"
import Image from "next/image"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  isNew?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, isNew }) => {
  return (
    <div className="group relative">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        {isNew && <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-xs font-semibold">New</div>}
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/products/${id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">${price.toFixed(2)}</p>
      </div>
      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="w-full bg-black text-white py-2 text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors duration-300">
          Quick View
        </button>
      </div>
    </div>
  )
}

export default ProductCard

