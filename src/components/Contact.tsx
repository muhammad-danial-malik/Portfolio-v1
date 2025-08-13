import { Github, Linkedin, Mail } from "./Icons";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-black/90">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-purple-400">NEURAL LINK</h2>
        <div className="flex justify-center gap-8">
          <a
            href="https://github.com"
            className="hover:text-purple-400 transition-colors"
          >
            <Github className="w-8 h-8" size={32} />
          </a>
          <a
            href="https://linkedin.com"
            className="hover:text-purple-400 transition-colors"
          >
            <Linkedin className="w-8 h-8" size={32} />
          </a>
          <a
            href="mailto:ai@engineer.com"
            className="hover:text-purple-400 transition-colors"
          >
            <Mail className="w-8 h-8" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
