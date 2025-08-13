import { projects } from "../constants";
import { ExternalLink } from "./Icons";

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-black/90">
      <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
        NEURAL NETWORKS
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-purple-900/10 to-cyan-900/10 p-6 rounded-lg border border-cyan-900 hover:border-cyan-400 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            <h3 className="text-xl font-bold mb-3 text-purple-400">
              {project.title}
            </h3>
            <p className="text-cyan-300 mb-4">{project.description}</p>
            <div className="flex gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <ExternalLink className="absolute top-4 right-4 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
