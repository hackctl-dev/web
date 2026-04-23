'use client'

import { useEffect, useRef, useState } from 'react'

export function FadeIn({ 
  children, 
  className = '', 
  delay = 0,
  threshold = 0.15 
}: { 
  children: React.ReactNode, 
  className?: string, 
  delay?: number,
  threshold?: number 
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      { threshold }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div 
      ref={ref} 
      className={`${className} ${isVisible ? 'vis' : ''}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}
