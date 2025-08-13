import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { ChevronDown, Code2, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Main Content - Perfectly centered */}
      <div className="flex-1 flex items-center justify-center px-4 pt-16 pb-8">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="relative inline-block">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl mx-auto">
                <img 
                  src="/profile.jpg" 
                  alt="Muhammad Danial - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl animate-pulse" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3"
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
              Muhammad Danial
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-muted-foreground"
          >
            Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating exceptional digital experiences with modern technologies. 
            Specialized in React, TypeScript, Node.js, and building scalable web applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-[#333333] font-semibold px-6 py-2.5 text-base group w-full sm:w-auto"
              onClick={() => {
                const element = document.querySelector('#contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get In Touch
              <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 font-semibold px-6 py-2.5 text-base group w-full sm:w-auto"
              onClick={() => {
                const element = document.querySelector('#projects')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Projects
              <Code2 className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center space-x-6"
          >
            <a
              href="https://github.com/muhammad-danial-malik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 group"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-danial-malik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a
              href="mailto:contact@muhammad-danial-malik.dev"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 group"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Fixed at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => {
          const element = document.querySelector('#about')
          element?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <div className="flex flex-col items-center space-y-2 group">
          <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-200">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
