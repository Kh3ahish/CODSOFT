import Header from "./components/Header"
import HeroOffer from "./components/HeroOffer"
import TrendingTopics from "./components/TrendingTopics"
import FeaturedCourses from "./components/FeaturedCourses"
import LearningPath from "./components/LearningPath"
import SuccessMetrics from "./components/SuccessMetrics"
import WeeklyHighlights from "./components/WeeklyHighlights"
import WeeklyProgress from "./components/WeeklyProgress"
import PersonalizedPath from "./components/PersonalizedPath"
import ResourceSection from "./components/ResourceSection"
import SpecialOffers from "./components/SpecialOffers"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"

export default function LearnardoWeeklyNewsletter() {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Header />
        <HeroOffer />
        <TrendingTopics />
        <FeaturedCourses />
        <LearningPath />
        <SuccessMetrics />
        <WeeklyProgress />
        <WeeklyHighlights />
        <PersonalizedPath />
        <ResourceSection />
        <SpecialOffers />
        <CallToAction />
        <Footer />
      </div>
    </div>
  )
}

