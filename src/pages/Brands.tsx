import { Link } from 'react-router-dom'
import { Candy, Coffee, Sparkles, Heart, ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const Brands = () => {
  const brandCategories = [
    {
      id: 'confectionery',
      icon: Candy,
      title: 'Confectionery',
      description: 'Discover the taste of pure delight as we bring you the world\'s finest treats, carefully sourced and delivered to your doorstep.',
      color: 'from-pink-500 to-rose-500',
      href: '/confectionery',
      bgImage: 'https://images.unsplash.com/photo-1514517220017-8ce97d9e6244?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'beverages',
      icon: Coffee,
      title: 'Beverages',
      description: 'Whether you seek a caffeine kick or a refreshing sip, our curated collection ensures that every beverage moment becomes a memorable one.',
      color: 'from-amber-500 to-orange-500',
      href: '/beverages',
      bgImage: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'beauty',
      icon: Sparkles,
      title: 'Beauty',
      description: 'Discover our Beauty products, handpicked international brands that redefine beauty standards, empowering you to embrace your unique charm.',
      color: 'from-purple-500 to-indigo-500',
      href: '/beauty',
      bgImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'personal-care',
      icon: Heart,
      title: 'Personal Care',
      description: 'Elevate your self-care routine with our Personal Care essentials. Experience international brands that prioritize your comfort and confidence.',
      color: 'from-green-500 to-teal-500',
      href: '/personal-care',
      bgImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-4 h-4 bg-yellow-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-32 w-6 h-6 bg-yellow-400/30 rounded-full animate-ping delay-300"></div>
          <div className="absolute top-60 left-20 w-3 h-3 bg-yellow-400/25 rounded-full animate-bounce delay-500"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                Our <span className="text-yellow-400">Brands</span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
                Explore our carefully curated collection of international brands across four distinct categories, each designed to elevate your everyday life.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Brand Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Product Categories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From confectionery delights to premium beauty products, discover the diverse range of international brands we bring to Vietnam.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <AnimatedSection key={category.id} animation="scaleIn" delay={index * 100}>
                  <Link
                    to={category.href}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block"
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url('${category.bgImage}')` }}
                    ></div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                    
                    {/* Content */}
                    <div className="relative p-8 h-80 flex flex-col justify-end text-white">
                      <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                        {category.title}
                      </h3>
                      
                      <p className="text-gray-200 mb-4 line-clamp-3">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center text-yellow-400 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                        Explore {category.title}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Brand Portfolio</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We work with leading international brands to bring quality products to Vietnamese consumers across multiple categories.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 hover:text-yellow-600 transition-colors duration-300">50+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">International Brands</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 hover:text-yellow-600 transition-colors duration-300">4</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">Product Categories</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 hover:text-yellow-600 transition-colors duration-300">20+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">Countries Represented</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 hover:text-yellow-600 transition-colors duration-300">6000+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">Distribution Points</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Are you an international brand looking to enter the Vietnamese market? Let's discuss how we can help you succeed.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Brands
