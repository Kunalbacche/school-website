import FaqSection from '../components/faq/FaqSection'
import CounterUpCard from '../components/counterUpCard/CounterUpCard'
import Carousel from '../components/Carousel/Carousel'
import Data from '../components/Carousel/ImageGalleryData'
import HeroSection from '../components/hero-section/hero-section'
function HomePage() {
  return (
    <div className='dark:bg-darkmode '>
      <HeroSection />
      <CounterUpCard />
      {/* Our Benefits */}
      <Carousel images={Data} />
      {/* Testimonials */}
      <FaqSection />
    </div>
  )
}

export default HomePage
