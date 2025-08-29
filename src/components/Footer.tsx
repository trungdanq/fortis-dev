import { Link } from 'react-router-dom'

const Footer = () => {
  const navigation = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'About Us', href: '/about-us', type: 'link' },
    { name: 'Brands', href: '/brands', type: 'link' },
    { name: 'Distribution', href: '/distribution', type: 'link' },
    { name: 'Contact Us', href: '/contact-us', type: 'link' },
  ]

  const brands = [
    { name: 'Confectionery', href: '/confectionery', type: 'link' },
    { name: 'Beverages', href: '/beverages', type: 'link' },
    { name: 'Beauty', href: '/beauty', type: 'link' },
    { name: 'Personal Care', href: '/personal-care', type: 'link' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Fortis-asia.com</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Your gateway to an exquisite world of international brands in Vietnam. We bring you the finest products across Confectionery, Beverages, Beauty, and Personal Care.
            </p>
            <div className="flex space-x-4">
              <button className="text-sm font-medium text-gray-300 hover:text-white">
                EN
              </button>
              <span className="text-gray-500">|</span>
              <button className="text-sm font-medium text-gray-300 hover:text-white">
                VI
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  {item.type === 'link' ? (
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Brand Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Brands</h4>
            <ul className="space-y-2">
              {brands.map((item) => (
                <li key={item.name}>
                  {item.type === 'link' ? (
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright 2025 © <span className="font-semibold">Fortis Asia</span>
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Powered by <span className="font-semibold">Flatsome Theme</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
