import { ThemeProvider } from './components/ui/ThemeProvider'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SkillsTicker from './components/SkillsTicker'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="relative">
          <section id="home">
            <Hero />
          </section>
          
          {/* Skills Ticker - Perfect placement after hero */}
          <SkillsTicker />
          
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
