import type React from "react"
import Link from "next/link"
import Image from "next/image"

interface CategoryCardProps {
  name: string
  image: string
  link: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, link }) => {
  return (
    <Link href={link} className="group relative overflow-hidden">
      <div className="aspect-w-1 aspect-h-1 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h3 className="text-white text-2xl font-light tracking-wider text-center px-6">{name}</h3>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-white text-black px-6 py-2 text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </Link>
  )
}

export default CategoryCard

