import { Link } from 'react-router-dom'
import { Candy, ArrowLeft, Star, Award, Globe } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const Confectionery = () => {
  const features = [
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Only the finest confectionery brands that meet our strict quality standards'
    },
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Many of our confectionery partners have received international recognition'
    },
    {
      icon: Globe,
      title: 'Global Favorites',
      description: 'Bringing beloved international treats to Vietnamese consumers'
    }
  ]

  const brandLogos = Array(12).fill(null).map((_, i) => ({
    id: i + 1,
    name: `Confectionery Brand ${i + 1}`,
    description: 'Premium confectionery products'
  }))

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1514517220017-8ce97d9e6244?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')"
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 flex items-center min-h-[60vh]">
          <div className="w-full">
            {/* Breadcrumb */}
            <AnimatedSection animation="fadeInUp">
            <nav className="mb-8">
              <Link 
                to="/brands" 
                className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Brands
              </Link>
            </nav>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={100}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mr-6">
                  <Candy className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="text-yellow-400">Confectionery</span>
                </h1>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={200}>
              <p className="max-w-3xl text-xl text-gray-200 sm:text-2xl">
                Discover the taste of pure delight as we bring you the world's finest treats, carefully sourced and delivered to your doorstep.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Confectionery Brands</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We partner with the world's most beloved confectionery brands to bring sweet moments to Vietnamese families.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Confectionery Partners</h2>
              <p className="text-lg text-gray-600">
                Trusted brands that bring sweetness and joy to Vietnamese consumers
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {brandLogos.map((brand, index) => (
              <AnimatedSection key={brand.id} animation="fadeInUp" delay={index * 50}>
                <div
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Candy className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{brand.name}</h3>
                  <p className="text-sm text-gray-600">{brand.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Categories</h2>
              <p className="text-lg text-gray-600">
                From traditional sweets to modern confections, we offer a complete range
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Chocolate', 'Candies', 'Gummies', 'Cookies & Biscuits'].map((category, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Candy className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{category}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-3xl font-bold mb-4">Interested in Our Confectionery Brands?</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our confectionery portfolio and distribution opportunities.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get in Touch
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Confectionery
