import { Link } from 'react-router-dom'
import { Heart, ArrowLeft, Star, Award, Globe } from 'lucide-react'

const PersonalCare = () => {
  const features = [
    {
      icon: Star,
      title: 'Premium Care',
      description: 'International personal care brands that prioritize comfort and confidence'
    },
    {
      icon: Award,
      title: 'Trusted Brands',
      description: 'All our personal care partners are recognized for their quality and innovation'
    },
    {
      icon: Globe,
      title: 'Global Excellence',
      description: 'Bringing world-class personal care solutions to Vietnamese consumers'
    }
  ]

  const brandLogos = Array(12).fill(null).map((_, i) => ({
    id: i + 1,
    name: `Personal Care Brand ${i + 1}`,
    description: 'Premium personal care products'
  }))

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 flex items-center min-h-[60vh]">
          <div className="w-full">
            <nav className="mb-8">
              <Link 
                to="/brands" 
                className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Brands
              </Link>
            </nav>
            
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-yellow-400">Personal Care</span>
              </h1>
            </div>
            
            <p className="max-w-3xl text-xl text-gray-200 sm:text-2xl">
              Elevate your self-care routine with our Personal Care essentials. Experience the difference in quality, as we bring you international personal care brands that prioritize your comfort and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Personal Care Brands</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From daily essentials to specialized care, we bring personal care products that enhance your well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Personal Care Partners</h2>
            <p className="text-lg text-gray-600">
              Trusted personal care brands that prioritize health, comfort, and confidence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {brandLogos.map((brand) => (
              <div
                key={brand.id}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-400 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{brand.name}</h3>
                <p className="text-sm text-gray-600">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-lg text-gray-600">
              Comprehensive personal care solutions for your daily routine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Body Care', 'Oral Care', 'Baby Care', 'Health & Wellness'].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Our Personal Care Brands?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our personal care portfolio and distribution opportunities.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
            <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default PersonalCare
