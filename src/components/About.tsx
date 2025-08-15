import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Passionate Full Stack Developer with expertise in modern technologies and a love for creating exceptional digital experiences.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Hi! I'm Muhammad Danial, a passionate Full Stack Developer with expertise in creating beautiful, functional, and user-friendly websites and applications. With deep knowledge of modern technologies like React, TypeScript, Node.js, and cloud platforms, I bring ideas to life through clean, efficient code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I love tackling complex problems and building scalable solutions that make a real impact. When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="relative flex justify-center md:justify-start">
            {/* Background layer with equal right and bottom visibility (12px offset) */}
            <div className="absolute top-3 left-3 w-60 h-60 sm:w-64 sm:h-64 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-primary/10 dark:bg-primary/15 rounded-xl border border-primary/10 dark:border-primary/15 shadow-sm"></div>
            
            {/* Square image with equal width and height (18rem on large screens) */}
            <img 
              src="/profile.jpg" 
              alt="Muhammad Danial - Full Stack Developer"
              className="relative w-60 h-60 sm:w-64 sm:h-64 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover object-center rounded-xl shadow-lg border border-border/40 bg-background transition-transform duration-500 hover:scale-105 z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
