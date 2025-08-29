import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const PartnersSection = () => {
  return (
    <section className="py-16 bg-white" id="partners">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Trusted Partners</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We work with leading international brands and local retail partners to deliver quality products across Vietnam.
            </p>
          </div>
        </AnimatedSection>

        {/* Partner logos placeholder */}
        <AnimatedSection animation="fadeInUp" delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center mb-16">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div
                key={item}
                className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                style={{ animationDelay: `${item * 50}ms` }}
              >
                <span className="text-gray-500 text-xs font-medium">Partner {item}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Partnership Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AnimatedSection animation="fadeInLeft" delay={300}>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">International Brand Partners</h3>
              <p className="text-blue-100 mb-6">
                We partner with leading international FMCG brands to bring their products to Vietnamese consumers.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">50+</div>
                  <p className="text-blue-100 text-sm">International Brands</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">20+</div>
                  <p className="text-blue-100 text-sm">Countries Represented</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight" delay={400}>
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Retail Partners</h3>
              <p className="text-green-100 mb-6">
                Strong relationships with local and international retailers across all channels in Vietnam.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">6000+</div>
                  <p className="text-green-100 text-sm">Retail Outlets</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">100%</div>
                  <p className="text-green-100 text-sm">Vietnam Coverage</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* CTA for Distribution */}
        <AnimatedSection animation="scaleIn" delay={500}>
          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn About Our Distribution Network</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Discover how our comprehensive distribution network can help your brand reach Vietnamese consumers effectively.
              </p>
              <Link
                to="/distribution"
                className="inline-flex items-center bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
              >
                View Distribution Network
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default PartnersSection
