import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="min-h-screen bg-black text-cyan-400 font-mono">
     <Hero/>
     <Projects/>
     <Skills/>
     <Contact/>
    </div>
  )
}

export default App
