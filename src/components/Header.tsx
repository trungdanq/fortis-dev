import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from './ui/button'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [brandsDropdownOpen, setBrandsDropdownOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'About Us', href: '/about-us', type: 'link' },
    {
      name: 'Brands',
      href: '/brands',
      type: 'dropdown',
      submenu: [
        { name: 'Confectionery', href: '/confectionery' },
        { name: 'Beverages', href: '/beverages' },
        { name: 'Beauty', href: '/beauty' },
        { name: 'Personal Care', href: '/personal-care' },
      ]
    },
    { name: 'Distribution', href: '/distribution', type: 'link' },
    { name: 'Contact Us', href: '/contact-us', type: 'link' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/95 transition-all duration-300">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-yellow-600 transition-colors duration-300">
              Fortis-asia.com
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.type === 'dropdown' ? (
                  <div className="relative">
                    <button
                      className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                      onMouseEnter={() => setBrandsDropdownOpen(true)}
                      onMouseLeave={() => setBrandsDropdownOpen(false)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {brandsDropdownOpen && (
                      <div
                        className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50"
                        onMouseEnter={() => setBrandsDropdownOpen(true)}
                        onMouseLeave={() => setBrandsDropdownOpen(false)}
                      >
                        {item.submenu?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setBrandsDropdownOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.type === 'link' ? (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium ${
                      location.pathname === item.href
                        ? 'text-yellow-600 font-semibold'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            
            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
                EN
              </button>
              <span className="text-gray-300">|</span>
              <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
                VI
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.type === 'link' ? (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 text-base font-medium hover:bg-gray-50 ${
                        location.pathname === item.href
                          ? 'text-yellow-600 font-semibold'
                          : 'text-gray-700 hover:text-gray-900'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                  {item.submenu && (
                    <div className="pl-6 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <button className="text-sm font-medium text-gray-700">EN</button>
                <span className="text-gray-300">|</span>
                <button className="text-sm font-medium text-gray-700">VI</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
