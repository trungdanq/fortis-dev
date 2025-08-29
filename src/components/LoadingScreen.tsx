import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsVisible(false)
            setTimeout(onLoadingComplete, 500)
          }, 500)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-40 w-20 h-20 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-yellow-400 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="text-center z-10 font-sans">
        {/* Logo Animation */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 animate-pulse">
            <span className="text-yellow-400">Fortis</span>-asia.com
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-medium">
            Connoisseurs of Quality
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-sm mx-auto">
          <div className="bg-gray-700 rounded-full h-2 mb-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <div className="text-gray-400 text-sm">
            Loading... {Math.round(Math.min(progress, 100))}%
          </div>
        </div>

        {/* Loading Animation */}
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
