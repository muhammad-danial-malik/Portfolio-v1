import { Bot, Terminal } from "./Icons";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      <div className="relative z-10 text-center px-4">
        <Bot className="w-24 h-24 mx-auto mb-6 animate-pulse text-cyan-400" size={96} />
        <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          AI ENGINEER
        </h1>
        <p className="text-xl text-cyan-300 glitch-text">
          Building the future with artificial intelligence
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Terminal className="w-6 h-6" size={24} />
      </div>
    </div>
  );
};

export default Hero;
