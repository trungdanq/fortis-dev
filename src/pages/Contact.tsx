import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, ExternalLink, Send } from 'lucide-react'
import { Button } from '../components/ui/button'
import AnimatedSection from '../components/AnimatedSection'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    })
  }

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
                Get in <span className="text-yellow-400">Touch</span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
                Want to get in touch? We'd love to hear from you. Here's how you can reach us…
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Talk to Sales */}
            <AnimatedSection animation="scaleIn" delay={100}>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors duration-300">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Talk to sales</h3>
                <p className="text-gray-600 mb-6">
                  Interested in our products? Just pick up the phone and call us.
                </p>
                <a
                  href="tel:+842822537463"
                  className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors duration-200"
                >
                  +84 28 2253 7463
                </a>
              </div>
            </AnimatedSection>

            {/* Contact Support */}
            <AnimatedSection animation="scaleIn" delay={200}>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors duration-300">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact support</h3>
                <p className="text-gray-600 mb-6">
                  Sometimes you need a little help. Don't worry, We're here for you.
                </p>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  Contact support
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form and Company Details */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Ask a question</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Comment or Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-yellow-500 text-black hover:bg-yellow-400 font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit
                </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Company Details */}
            <AnimatedSection animation="fadeInRight" delay={200}>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Company Details</h2>
              
              {/* Main Company Info */}
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">FORTIS LTD</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">+84 28 2253 7463</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" />
                    <a
                      href="mailto:info@fortis-asia.com"
                      className="text-gray-700 hover:text-yellow-600 transition-colors duration-200"
                    >
                      info@fortis-asia.com
                    </a>
                  </div>
                  <div className="text-gray-600 text-sm">
                    Tax code: 0314998558
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="space-y-6">
                {/* Head Office */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">HEAD OFFICE</h4>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
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
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">HANOI BRANCH</h4>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
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
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring quality international brands to Vietnamese consumers together.
          </p>
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
              className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
