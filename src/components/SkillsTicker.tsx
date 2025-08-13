import { motion } from 'framer-motion'

const SkillsTicker = () => {
  const skills = [
    { name: 'HTML5', icon: 'H', bgColor: 'bg-orange-500/10 border-orange-500/20', textColor: 'text-orange-600 dark:text-orange-400' },
    { name: 'CSS3', icon: 'C', bgColor: 'bg-blue-500/10 border-blue-500/20', textColor: 'text-blue-600 dark:text-blue-400' },
    { name: 'JavaScript', icon: 'JS', bgColor: 'bg-yellow-500/10 border-yellow-500/20', textColor: 'text-yellow-600 dark:text-yellow-400' },
    { name: 'React', icon: 'R', bgColor: 'bg-cyan-500/10 border-cyan-500/20', textColor: 'text-cyan-600 dark:text-cyan-400' },
    { name: 'Node.js', icon: 'N', bgColor: 'bg-green-500/10 border-green-500/20', textColor: 'text-green-600 dark:text-green-400' },
    { name: 'Express', icon: 'E', bgColor: 'bg-gray-500/10 border-gray-500/20', textColor: 'text-gray-600 dark:text-gray-400' },
    { name: 'MongoDB', icon: 'M', bgColor: 'bg-green-600/10 border-green-600/20', textColor: 'text-green-700 dark:text-green-300' },
    { name: 'TypeScript', icon: 'TS', bgColor: 'bg-blue-600/10 border-blue-600/20', textColor: 'text-blue-700 dark:text-blue-300' },
    { name: 'Tailwind', icon: 'TW', bgColor: 'bg-teal-500/10 border-teal-500/20', textColor: 'text-teal-600 dark:text-teal-400' },
    { name: 'Git', icon: 'G', bgColor: 'bg-red-500/10 border-red-500/20', textColor: 'text-red-600 dark:text-red-400' },
    { name: 'GitHub', icon: 'GH', bgColor: 'bg-gray-800/10 border-gray-800/20', textColor: 'text-gray-800 dark:text-gray-200' },
    { name: 'Vercel', icon: 'V', bgColor: 'bg-slate-900/10 border-slate-900/20', textColor: 'text-slate-900 dark:text-slate-100' },
  ]

  // Duplicate skills for continuous loop
  const duplicatedSkills = [...skills, ...skills]

  return (
    <div className="w-full py-12 sm:py-16 bg-gradient-to-r from-background/50 via-muted/5 to-background/50 overflow-hidden relative">
      {/* Section Title */}
      <div className="text-center mb-6 sm:mb-8">
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm xs:text-base sm:text-lg font-semibold text-muted-foreground/80 tracking-wide px-4"
        >
          TECHNOLOGIES & TOOLS
        </motion.h3>
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 h-full w-16 sm:w-24 md:w-32 bg-gradient-to-r from-background via-background/95 to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-16 sm:w-24 md:w-32 bg-gradient-to-l from-background via-background/95 to-transparent z-10" />
      
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(var(--primary),0.02)_50%,transparent_75%)] bg-[length:30px_30px] animate-[move_25s_linear_infinite]" />
      </div>
      
      <div className="relative flex justify-center">
        <motion.div
          className="flex items-center gap-4 sm:gap-6 md:gap-8 whitespace-nowrap"
          animate={{
            x: ['0%', '-50%']
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-card/70 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
              whileHover={{ 
                scale: 1.06,
                y: -3,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-md sm:rounded-lg border ${skill.bgColor} group-hover:scale-110 transition-all duration-300`}>
                <span className={`text-xs sm:text-sm font-bold ${skill.textColor}`}>
                  {skill.icon}
                </span>
              </div>
              <span className="text-xs xs:text-sm sm:text-base font-medium text-foreground/90 group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </span>
              
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default SkillsTicker
