import PageHero from "../components/PageHero"
import Link from "next/link"

const collections = [
  { name: "Spring/Summer 2025", image: "/placeholder.svg?height=600&width=800" },
  { name: "Autumn/Winter 2024", image: "/placeholder.svg?height=600&width=800" },
  { name: "Resort Collection", image: "/placeholder.svg?height=600&width=800" },
  { name: "Bridal Collection", image: "/placeholder.svg?height=600&width=800" },
]

export default function CollectionsPage() {
  return (
    <div>
      <PageHero
        title="OUR COLLECTIONS"
        subtitle="Immerse yourself in the world of Kushwah Éclat's exquisite seasonal collections"
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      />

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {collections.map((collection) => (
              <Link
                href={`/collections/${collection.name.toLowerCase().replace(/\s+/g, "-")}`}
                key={collection.name}
                className="group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h3 className="text-white text-3xl font-light tracking-wider text-center px-6">
                      {collection.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

