import { motion } from 'framer-motion'
import { Code2, Database, Globe, Server } from 'lucide-react'
import SkillsTicker from './SkillsTicker'

const Skills = () => {
  const skills = [
    { name: "Frontend Development", icon: Globe, level: 95 },
    { name: "React.js", icon: Code2, level: 90 },
    { name: "TypeScript", icon: Code2, level: 88 },
    { name: "Backend Development", icon: Server, level: 85 },
    { name: "Database Design", icon: Database, level: 82 }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Expertise in modern web technologies and development practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-muted/30 border border-muted/40 rounded-lg p-6 hover:shadow-lg hover:bg-muted/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* Skills Ticker */}
        <SkillsTicker />
      </div>
    </section>
  )
}

export default Skills
