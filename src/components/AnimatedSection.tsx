import { ReactNode } from 'react'
import { useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn' | 'slideInFromBottom'
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fadeInUp'
}: AnimatedSectionProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ delay, triggerOnce: true })

  const getAnimationClass = () => {
    switch (animation) {
      case 'fadeInUp':
        return fadeInUp(isVisible)
      case 'fadeInLeft':
        return `transform transition-all duration-700 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
        }`
      case 'fadeInRight':
        return `transform transition-all duration-700 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
        }`
      case 'fadeIn':
        return `transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`
      case 'scaleIn':
        return `transform transition-all duration-700 ease-out ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`
      case 'slideInFromBottom':
        return `transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`
      default:
        return fadeInUp(isVisible)
    }
  }

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  )
}

export default AnimatedSection
