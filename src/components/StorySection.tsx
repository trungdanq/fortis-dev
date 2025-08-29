import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import AnimatedSection from './AnimatedSection'

const StorySection = () => {
  const stats = [
    {
      number: '+6000',
      label: 'Distribution Outlets'
    },
    {
      number: '+30',
      label: 'Years of FMCG experience across Asia'
    },
    {
      number: '+12',
      label: 'Years of operating in Vietnam'
    },
    {
      number: '+70%',
      label: 'Average Sales Growth % in the past 5 years'
    }
  ]

  return (
    <section className="py-16 bg-white" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <AnimatedSection animation="fadeInLeft">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Fortis is a young and fast growing import and distribution company with its Head Office in Ho Chi Minh City and a branch office and distribution centre in Hanoi, Vietnam.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We partner with international fast moving consumer goods brands to build a long-term business in the Vietnam market.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our distribution network is nation wide and covers all modern trade channels (hypermarkets, supermarket, convenience store chains, healthy & beauty retailers) as well as the independent and general trade.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/about-us">Read More</Link>
            </Button>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInRight" delay={200}>
            <div className="relative">
              <div 
                className="aspect-square bg-cover bg-center bg-no-repeat rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden transform hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage: "url('https://fortis-asia.com/wp-content/uploads/2023/09/New-Project-3.jpg')"
                }}
              >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
                <div className="text-center text-white relative z-10">
                  <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Our Story</h3>
                  <p className="text-lg opacity-90 drop-shadow-md">Building Vietnam's Future</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Statistics */}
        <AnimatedSection animation="fadeInUp" delay={400}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center transform hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 hover:text-yellow-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default StorySection
