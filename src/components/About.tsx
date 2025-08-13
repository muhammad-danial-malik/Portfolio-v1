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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate Full Stack Developer with expertise in modern technologies and a love for creating exceptional digital experiences.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Hi! I'm Muhammad Danial, a passionate Full Stack Developer with expertise in creating beautiful, functional, and user-friendly websites and applications. With deep knowledge of modern technologies like React, TypeScript, Node.js, and cloud platforms, I bring ideas to life through clean, efficient code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I love tackling complex problems and building scalable solutions that make a real impact. When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="relative group">
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-primary/20">
              <img 
                src="/profile.jpg" 
                alt="Muhammad Danial - Full Stack Developer"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
              <div className="absolute inset-0 ring-1 ring-primary/10 rounded-xl"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors duration-500"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/5 rounded-full blur-lg group-hover:bg-primary/10 transition-colors duration-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
