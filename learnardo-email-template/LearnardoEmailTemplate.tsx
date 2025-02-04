import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import FeatureHighlights from "./components/FeatureHighlights"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"

export default function LearnardoEmailTemplate() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Header />
      <HeroSection />
      <FeatureHighlights />
      <CallToAction />
      <Footer />
    </div>
  )
}

