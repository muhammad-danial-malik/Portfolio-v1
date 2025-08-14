import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface FireflyProps {
  id: number
}

const Firefly: React.FC<FireflyProps> = () => {
  const [path, setPath] = useState<{ x: number; y: number }[]>([])
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    // Generate random path points
    const steps = Math.floor(Math.random() * 8) + 12
    const newPath = []
    
    for (let i = 0; i <= steps; i++) {
      newPath.push({
        x: Math.random() * 100 - 50, // -50vw to 50vw
        y: Math.random() * 100 - 50  // -50vh to 50vh
      })
    }
    
    setPath(newPath)
    setDuration(Math.random() * 60 + 40) // 40-100 seconds
  }, [])

  const startDelay = Math.random() * 500 // 0-0.5 seconds initial delay
  const flashDelay = Math.random() * 2000 + 500 // 0.5-2.5 seconds (faster start)
  const flashDuration = Math.random() * 4000 + 3000 // 3-7 seconds (shorter cycles)
  const scale = Math.random() * 0.75 + 0.25 // 0.25-1.0

  return (
    <motion.div
      className="firefly fixed pointer-events-none"
      style={{
        left: '50%',
        top: '50%',
        width: '4px',
        height: '4px',
        zIndex: 1
      }}
      animate={{
        x: path.map(p => `${p.x}vw`),
        y: path.map(p => `${p.y}vh`),
        scale: Array(path.length).fill(scale)
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: startDelay / 1000
      }}
    >
      {/* Main firefly body - always visible */}
      <motion.div
        className="absolute w-full h-full rounded-full bg-muted/30 dark:bg-muted/40"
        animate={{ 
          opacity: [0.15, 0.25, 0.15, 0.25, 0.15]
        }}
        transition={{
          duration: flashDuration / 1000 + 2,
          delay: flashDelay / 1000,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Brand color spark - the main glow effect */}
      <motion.div
        className="absolute w-full h-full rounded-full"
        style={{
          backgroundColor: '#FFC900',
          boxShadow: '0 0 4px rgba(255, 201, 0, 0.4), 0 0 8px rgba(255, 201, 0, 0.2)'
        }}
        animate={{ 
          opacity: [0, 0.08, 0.6, 0.7, 0.3, 0],
          scale: [0.6, 0.8, 1.2, 1.1, 0.9, 0.7]
        }}
        transition={{
          duration: flashDuration / 1000,
          delay: flashDelay / 1000,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.1, 0.3, 0.4, 0.7, 1]
        }}
      />
    </motion.div>
  )
}

interface FirefliesProps {
  quantity?: number
  className?: string
}

const Fireflies: React.FC<FirefliesProps> = ({ quantity = 12, className = "" }) => {
  const fireflies = Array.from({ length: quantity }, (_, i) => i + 1)

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`} style={{ zIndex: 1 }}>
      {fireflies.map(id => (
        <Firefly key={id} id={id} />
      ))}
    </div>
  )
}

export default Fireflies
