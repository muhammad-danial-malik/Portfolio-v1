import { Brain, Cpu } from "./Icons";
import { aiSkills, techSkills } from "../constants";

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/20">
      <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
        NEURAL PATHWAYS
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5" size={20} /> AI & ML
          </h3>
          <div className="space-y-3">
            {aiSkills.map((skill, index) => (
              <div key={index} className="relative">
                <div className="h-2 bg-purple-900/30 rounded">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-sm mt-1 inline-block">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5" size={20} /> Tech Stack
          </h3>
          <div className="space-y-3">
            {techSkills.map((skill, index) => (
              <div key={index} className="relative">
                <div className="h-2 bg-purple-900/30 rounded">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-sm mt-1 inline-block">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
