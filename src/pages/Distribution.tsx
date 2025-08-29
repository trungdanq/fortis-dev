import { Link } from 'react-router-dom'
import { MapPin, Store, Users, Truck, BarChart3, Globe, ArrowRight, Building, ShoppingBag } from 'lucide-react'

const Distribution = () => {
  const distributionChannels = [
    {
      icon: Building,
      title: 'Modern Trade',
      description: 'Hypermarkets, supermarkets, and convenience store chains',
      coverage: '2000+ outlets',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: ShoppingBag,
      title: 'Health & Beauty',
      description: 'Specialized health and beauty retail chains',
      coverage: '1500+ outlets',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Store,
      title: 'Independent Trade',
      description: 'Traditional independent retailers and general trade',
      coverage: '2500+ outlets',
      color: 'from-green-500 to-green-600'
    }
  ]

  const regions = [
    {
      name: 'Ho Chi Minh City',
      description: 'Head office and primary distribution center',
      outlets: '3000+',
      coverage: 'Southern Vietnam'
    },
    {
      name: 'Hanoi',
      description: 'Branch office and distribution center',
      outlets: '2000+',
      coverage: 'Northern Vietnam'
    },
    {
      name: 'Central Vietnam',
      description: 'Distribution network coverage',
      outlets: '1000+',
      coverage: 'Central regions'
    }
  ]

  const services = [
    {
      icon: Truck,
      title: 'Logistics & Supply Chain',
      description: 'Efficient distribution network covering all regions of Vietnam'
    },
    {
      icon: BarChart3,
      title: 'Market Analysis',
      description: 'Deep market insights and consumer behavior analysis'
    },
    {
      icon: Users,
      title: 'Trade Support',
      description: 'Comprehensive support for retail partners and distributors'
    },
    {
      icon: Globe,
      title: 'Brand Building',
      description: 'Strategic brand development and market positioning'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              <span className="text-yellow-400">Distribution</span> Network
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
              We service all the local and international retailers throughout the whole of Vietnam with our comprehensive distribution network.
            </p>
          </div>
        </div>
      </section>

      {/* Distribution Channels */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Distribution Channels</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our nationwide distribution network covers all modern trade channels as well as independent and general trade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {distributionChannels.map((channel, index) => {
              const IconComponent = channel.icon
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${channel.color} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{channel.title}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <div className="text-2xl font-bold text-gray-900">{channel.coverage}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regional Coverage</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic distribution centers positioned to serve all regions of Vietnam effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Vietnam Coverage Map</h3>
                  <p className="text-gray-600">Nationwide distribution network</p>
                </div>
              </div>
            </div>

            {/* Regional details */}
            <div className="space-y-6">
              {regions.map((region, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{region.name}</h3>
                      <p className="text-gray-600 mb-3">{region.description}</p>
                      <p className="text-sm text-gray-500">{region.coverage}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{region.outlets}</div>
                      <div className="text-sm text-gray-500">outlets</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Services */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Distribution Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive distribution solutions to help international brands succeed in the Vietnamese market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Distribution by Numbers</h2>
            <p className="text-lg text-gray-600">Our extensive reach across Vietnam</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">6000+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">Distribution Outlets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">63</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">Provinces Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">2</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">Distribution Centers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">Vietnam Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Distribution Centers</h2>
            <p className="text-lg text-gray-600">Strategic locations for optimal distribution coverage</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Head Office */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">HEAD OFFICE & DISTRIBUTION CENTER</h3>
              <div className="flex items-start mb-4">
                <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-700">
                  <p className="font-semibold">Ho Chi Minh City</p>
                  <p>363/31 Binh Loi Street,</p>
                  <p>Ward 13, Binh Thanh District</p>
                  <p>VIETNAM</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <div className="text-sm text-blue-800">
                  <p><strong>Coverage:</strong> Southern Vietnam</p>
                  <p><strong>Outlets Served:</strong> 3000+</p>
                </div>
              </div>
            </div>

            {/* Hanoi Branch */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">HANOI BRANCH & DISTRIBUTION CENTER</h3>
              <div className="flex items-start mb-4">
                <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-700">
                  <p className="font-semibold">Hanoi</p>
                  <p>No 6, Giao Thong Street, Yen Phuc,</p>
                  <p>Phuc La, Ha Dong</p>
                  <p>VIETNAM</p>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <div className="text-sm text-green-800">
                  <p><strong>Coverage:</strong> Northern Vietnam</p>
                  <p><strong>Outlets Served:</strong> 2000+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner with Our Distribution Network</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Looking to distribute your products in Vietnam? Let's discuss how our extensive network can help you reach Vietnamese consumers.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
          >
            Contact Our Distribution Team
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Distribution
