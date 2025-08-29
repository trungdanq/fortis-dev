import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation'

const HeroSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ delay: 200 })
  const { elementRef: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation<HTMLParagraphElement>({ delay: 400 })
  const { elementRef: buttonRef, isVisible: buttonVisible } = useScrollAnimation<HTMLDivElement>({ delay: 600 })

  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{
        backgroundImage: "url('https://fortis-asia.com/wp-content/uploads/2023/10/incense-sticks-6537298_1280.jpg')"
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-4 h-4 bg-yellow-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-yellow-400/30 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-60 left-40 w-3 h-3 bg-yellow-400/25 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-32 right-20 w-5 h-5 bg-yellow-400/20 rounded-full animate-pulse delay-700"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 sm:py-40 lg:px-8 lg:py-48 flex items-center min-h-screen">
        <div className="text-center w-full">
          <h1 
            ref={titleRef}
            className={`text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl ${fadeInUp(titleVisible)}`}
          >
            <span className="block text-yellow-400 mb-4 drop-shadow-lg">Connoisseurs of Quality</span>
          </h1>
          <p 
            ref={subtitleRef}
            className={`mx-auto mt-6 max-w-2xl text-xl text-gray-100 sm:text-2xl lg:text-3xl drop-shadow-md ${fadeInUp(subtitleVisible)}`}
          >
            <span className="font-semibold">Importer | Distributor | Brand Builder</span>
          </p>
          <div 
            ref={buttonRef}
            className={`mt-12 ${fadeInUp(buttonVisible)}`}
          >
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/about-us">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
