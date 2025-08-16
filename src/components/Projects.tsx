import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Globe, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from './ui/Button'
import { useState, useEffect, useRef } from 'react'

type ProjectCategory = 'All' | 'Frontend' | 'Backend' | 'Full Stack'

interface Project {
  title: string
  description: string
  tech: string[]
  demo: string
  github: string
  image: string
  category: ProjectCategory
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All')
  const [isExpanded, setIsExpanded] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const projects: Project[] = [

    {
      title: "Hamdard Academy",
      description: "Hamdard Academy is a modern landing page built for scalability. Designed to combine clean visuals with a smooth browsing experience.",
      tech: ["Html", "CSS", "JavaScript", "CSS Animations", "Flexbox", "Grid"],
      demo: "https://hamdard-academy.vercel.app/",
      github: "https://github.com/muhammad-danial-malik/Hamdard-Academy",
      image: "/academy.png",
      category: "Frontend"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website showcasing modern design principles with dark mode support and smooth animations.",
      tech: ["React", "TypeScript", "Shadcn UI", "Tailwind CSS", "Framer Motion"],
      demo: "https://muhammad-danial-malik.dev",
      github: "https://github.com/muhammad-danial-malik",
      image: "/portfolio.png",
      category: "Frontend"
    },
    {
      title: "POS System Backend",
      description: "Modular backend system with authentication and product management, built for efficient POS operations.",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "Multer", "Cloudinary"],
      demo: "https://fk-merchant-pos.vercel.app/",
      github: "https://github.com/muhammad-danial-malik/POS-for-Merchant",
      image: "/pos-backend.png",
      category: "Backend"
    }, {
      title: "Wheelhaus",
      description: "Modular Node.js backend for managing users, vehicles, and reviews with secure auth, clean routing, and middleware support.",
      tech: ["Node.js", "Express", "MongoDB", "JWT", "dotenv", "npm"],
      demo: "https://muhammad-danial-malik.dev",
      github: "https://github.com/muhammad-danial-malik/Waheelhaush",
      image: "/wheelhaus.png",
      category: "Backend"
    },
    {
      title: "Auth Portal",
      description: "User authentication portal built with JWT and cookies. Handles registration, login, and API access through secure routes.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "JWT"],
      demo: "https://muhammad-danial-malik.dev",
      github: "https://github.com/muhammad-danial-malik/Auth-Portal",
      image: "/auth-portal.png",
      category: "Full Stack"
    },
    {
      title: "Airbnb Clone v1",
      description: "Airbnb-inspired full-stack web app built with modern tools. Features dynamic property listings, user auth, and cloud-based image handling.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
      demo: "https://fk-airbnb.vercel.app",
      github: "https://github.com/muhammad-danial-malik/Air-bnb-Clone",
      image: "/air-bnb.png",
      category: "Full Stack"
    }
  ]

  const categories: ProjectCategory[] = ['All', 'Frontend', 'Backend', 'Full Stack']

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  // Determine how many projects to show
  const INITIAL_DISPLAY_COUNT = 6
  const shouldShowToggle = filteredProjects.length > INITIAL_DISPLAY_COUNT
  const displayedProjects = isExpanded
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_DISPLAY_COUNT)

  // Auto-collapse when section goes out of view
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !isExpanded) return

      const rect = sectionRef.current.getBoundingClientRect()
      const isOutOfView = rect.bottom < 0 || rect.top > window.innerHeight

      if (isOutOfView) {
        setIsExpanded(false)
      }
    }

    // Add scroll listener with throttling for better performance
    let ticking = false
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScrollHandler, { passive: true })
    return () => window.removeEventListener('scroll', throttledScrollHandler)
  }, [isExpanded])

  // Reset expansion when filter changes
  useEffect(() => {
    setIsExpanded(false)
  }, [activeFilter])

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            A collection of projects showcasing my skills in full-stack development, modern frameworks, and user experience design
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={`transition-all duration-200 ${activeFilter === category
                  ? 'bg-primary text-[#333333]'
                  : 'hover:bg-primary/10'
                  }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.3,
                  delay: isExpanded ? (index >= INITIAL_DISPLAY_COUNT ? (index - INITIAL_DISPLAY_COUNT) * 0.05 : 0) : index * 0.05,
                  layout: { duration: 0.4, ease: "easeInOut" }
                }}
                className="group bg-muted/30 border border-muted/40 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:bg-muted/40"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-primary hover:bg-primary/90 text-[#333333] px-2 py-1 rounded-md font-medium shadow-sm transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-2 font-semibold transition-all duration-200 group"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        asChild
                        className="bg-primary hover:bg-primary/90"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Globe className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See More/Less Button */}
        {shouldShowToggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-12"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={toggleExpansion}
              className="group hover:bg-primary hover:text-[#333333] transition-all duration-300"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                  See Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                  See More ({filteredProjects.length - INITIAL_DISPLAY_COUNT} more projects)
                </>
              )}
            </Button>
          </motion.div>
        )}

        {/* Projects count indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted-foreground">
            Showing {displayedProjects.length} of {filteredProjects.length} projects
            {activeFilter !== 'All' && ` in ${activeFilter}`}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
