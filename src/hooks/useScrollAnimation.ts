import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  delay?: number
}

export const useScrollAnimation = <T extends HTMLElement = HTMLElement>(options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    delay = 0
  } = options

  const elementRef = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setTimeout(() => {
            setIsVisible(true)
            setHasTriggered(true)
          }, delay)
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce, delay, hasTriggered])

  return { elementRef, isVisible }
}

// Animation classes
export const fadeInUp = (isVisible: boolean) => 
  `transform transition-all duration-700 ease-out ${
    isVisible 
      ? 'translate-y-0 opacity-100' 
      : 'translate-y-8 opacity-0'
  }`

export const fadeInLeft = (isVisible: boolean) => 
  `transform transition-all duration-700 ease-out ${
    isVisible 
      ? 'translate-x-0 opacity-100' 
      : '-translate-x-8 opacity-0'
  }`

export const fadeInRight = (isVisible: boolean) => 
  `transform transition-all duration-700 ease-out ${
    isVisible 
      ? 'translate-x-0 opacity-100' 
      : 'translate-x-8 opacity-0'
  }`

export const fadeIn = (isVisible: boolean) => 
  `transition-all duration-700 ease-out ${
    isVisible ? 'opacity-100' : 'opacity-0'
  }`

export const scaleIn = (isVisible: boolean) => 
  `transform transition-all duration-700 ease-out ${
    isVisible 
      ? 'scale-100 opacity-100' 
      : 'scale-95 opacity-0'
  }`

export const slideInFromBottom = (isVisible: boolean) => 
  `transform transition-all duration-1000 ease-out ${
    isVisible 
      ? 'translate-y-0 opacity-100' 
      : 'translate-y-16 opacity-0'
  }`
