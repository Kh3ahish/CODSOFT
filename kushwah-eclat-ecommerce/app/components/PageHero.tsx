import type React from "react"

interface PageHeroProps {
  title: string
  subtitle: string
  backgroundImage: string
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <section
      className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative z-20 text-center fade-in">
        <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-wider">{title}</h1>
        <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  )
}

export default PageHero

