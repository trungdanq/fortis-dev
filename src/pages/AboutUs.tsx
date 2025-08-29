import { CheckCircle, Target, Eye, Users, Globe } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const AboutUs = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Quality First',
      description: 'We carefully select and partner with international brands that meet our high standards for quality and innovation.'
    },
    {
      icon: Target,
      title: 'Market Focus',
      description: 'Deep understanding of Vietnamese consumer needs and market dynamics drives our strategic decisions.'
    },
    {
      icon: Users,
      title: 'Strong Partnerships',
      description: 'Building long-term relationships with both international brands and local retail partners.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting international brands with Vietnamese consumers through our extensive distribution network.'
    }
  ]

  const milestones = [
    { year: '2011', event: 'Fortis established in Vietnam' },
    { year: '2015', event: 'Expanded to nationwide distribution' },
    { year: '2018', event: 'Opened Hanoi branch office' },
    { year: '2020', event: 'Reached 6000+ distribution outlets' },
    { year: '2023', event: 'Continued growth and expansion' }
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
                About <span className="text-yellow-400">Fortis</span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
                Professional, innovative management with a young and dynamic team that has a modern perspective.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6">
                Professional, innovative management with a young and dynamic team that has a modern perspective. We perform our mission on a daily basis with great passion and energy.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Regular observation, analysis, and research on the market help us to keep up effectively with global trends and connect them to Vietnamese consumers.
              </p>
              <p className="text-lg text-gray-600">
                Our expertise spans across multiple categories including Food & Beverage, Cosmetics, Beauty and Personal Care, bringing constant innovation to the Vietnamese market.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight" delay={200}>
              <div className="relative">
                <div className="aspect-video bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
                  style={{
                    backgroundSize: 'cover',
                    backgroundImage: "url('https://fortis-asia.com/wp-content/uploads/2023/09/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg')"
                  }}>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <AnimatedSection animation="scaleIn" delay={100}>
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-600">
                  To introduce better choices for everyday products to Vietnamese consumers, and in doing so contribute to improving peoples' lives.
                </p>
              </div>
            </AnimatedSection>

            {/* Mission */}
            <AnimatedSection animation="scaleIn" delay={200}>
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-600">
                  We study and research local people needs and aspirations. We carefully choose quality products and reliable suppliers to introduce constant innovation to the market in the categories of Food & Beverage, Cosmetics, Beauty and Personal Care.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do and help us build lasting relationships with our partners and customers.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <AnimatedSection key={index} animation="scaleIn" delay={index * 100}>
                  <div className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-lg text-gray-600">Key milestones in our growth and development</p>
            </div>
          </AnimatedSection>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-300 hidden md:block"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <AnimatedSection 
                  key={index} 
                  animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"} 
                  delay={index * 100}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                        <div className="text-2xl font-bold text-yellow-600 mb-2">{milestone.year}</div>
                        <div className="text-gray-700">{milestone.event}</div>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                    </div>
                    
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our network of successful partners and bring quality international brands to Vietnamese consumers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
            >
              Contact Us
            </a>
            <a
              href="#brands"
              className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-colors duration-300"
            >
              View Our Brands
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
