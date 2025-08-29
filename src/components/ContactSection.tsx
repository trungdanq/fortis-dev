import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">Get in touch with our team</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">FORTIS LTD</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-500 mr-3" />
                <span className="text-gray-700">+84 28 2253 7463</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-500 mr-3" />
                <span className="text-gray-700">info@fortis-asia.com</span>
              </div>
              <div className="flex items-start">
                <span className="text-gray-700 text-sm">
                  Tax code: 0314998558
                </span>
              </div>
            </div>
          </div>

          {/* Head Office */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">HEAD OFFICE</h3>
            <div className="flex items-start mb-4">
              <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <div className="text-gray-700">
                <p>363/31 Binh Loi Street,</p>
                <p>Ward 13, Binh Thanh District, HCMC</p>
                <p>VIETNAM</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 w-full"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View on Google Maps
            </Button>
          </div>

          {/* Hanoi Branch */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">HANOI BRANCH</h3>
            <div className="flex items-start mb-4">
              <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-1" />
              <div className="text-gray-700">
                <p>No 6, Giao Thong Street, Yen Phuc,</p>
                <p>Phuc La, Ha Dong, Hanoi</p>
                <p>VIETNAM</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 w-full"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View on Google Maps
            </Button>
          </div>
        </div>

        {/* Contact Actions */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
