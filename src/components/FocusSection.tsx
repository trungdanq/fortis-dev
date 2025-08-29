import { Candy, Coffee, Sparkles, Heart } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const FocusSection = () => {
  const categories = [
    {
      icon: Candy,
      title: 'Confectionery',
      description: 'Discover the taste of pure delight as we bring you the world\'s finest treats, carefully sourced and delivered to your doorstep.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Coffee,
      title: 'Beverages',
      description: 'Whether you seek a caffeine kick or a refreshing sip, our curated collection ensures that every beverage moment becomes a memorable one.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Sparkles,
      title: 'Beauty',
      description: 'Discover our Beauty products, handpicked international brands that redefine beauty standards, empowering you to embrace your unique charm through skincare, cosmetics, and grooming essentials',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Heart,
      title: 'Personal Care',
      description: 'Elevate your self-care routine with our Personal Care essentials. Experience the difference in quality, as we bring you international personal care brands that prioritize your comfort and confidence.',
      color: 'from-green-500 to-teal-500'
    }
  ]

  return (
    <section className="py-16 bg-gray-50" id="brands">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">What we do</h3>
            <h2 className="text-4xl font-bold text-gray-900">Our focus</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              Welcome to Fortis, your gateway to an exquisite world of international brands in Vietnam. We take pride in our unwavering commitment to bringing you the finest products across four distinct categories: Confectionery, Beverages, Beauty, and Personal Care. Each category encapsulates a universe of premium experiences designed to elevate your everyday life.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <AnimatedSection 
                key={index} 
                animation="scaleIn" 
                delay={index * 100}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center h-full flex flex-col transform hover:-translate-y-2">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {category.description}
                  </p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FocusSection
