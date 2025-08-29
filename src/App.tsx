import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Brands from './pages/Brands'
import Confectionery from './pages/Confectionery'
import Beverages from './pages/Beverages'
import Beauty from './pages/Beauty'
import PersonalCare from './pages/PersonalCare'
import Distribution from './pages/Distribution'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <Router>
        <ScrollToTop />
        <div className={`min-h-screen bg-white transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/confectionery" element={<Confectionery />} />
            <Route path="/beverages" element={<Beverages />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/personal-care" element={<PersonalCare />} />
            <Route path="/distribution" element={<Distribution />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
