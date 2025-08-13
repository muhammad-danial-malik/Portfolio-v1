import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-background via-muted/20 to-background border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(var(--primary),0.02)_50%,transparent_75%)] bg-[length:30px_30px]" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-start">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Muhammad Danial
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Full Stack Developer
                </p>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Crafting exceptional digital experiences with modern technologies. 
                Let's build something amazing together.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Contact', href: '#contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.querySelector(link.href)
                        element?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-sm font-semibold text-foreground">Let's Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/muhammad-danial-malik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/50 hover:bg-primary hover:text-[#333333] transition-all duration-300 group"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href="https://linkedin.com/in/muhammad-danial-malik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/50 hover:bg-primary hover:text-[#333333] transition-all duration-300 group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
                <a
                  href="mailto:contact@muhammad-danial-malik.dev"
                  className="p-2 rounded-lg bg-muted/50 hover:bg-primary hover:text-[#333333] transition-all duration-300 group"
                  aria-label="Email Contact"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
              <div className="pt-2">
                <p className="text-xs text-muted-foreground">
                  contact@muhammad-danial-malik.dev
                </p>
                <p className="text-xs text-muted-foreground">
                  muhammad-danial-malik.dev
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-sm text-muted-foreground"
              >
                <span>© {currentYear} Muhammad Danial. Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>and lots of ☕</span>
              </motion.div>

              {/* Back to Top */}
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
              >
                <span>Back to top</span>
                <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-200" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/3 rounded-full blur-2xl" />
    </footer>
  )
}

export default Footer
