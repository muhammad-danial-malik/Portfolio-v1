export interface Project {
  title: string;
  description: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    title: "Neural Network Framework",
    description:
      "Built a custom deep learning framework with advanced optimization techniques",
    tech: ["PyTorch", "CUDA", "Python"],
  },
  {
    title: "AI Vision System",
    description:
      "Computer vision system for real-time object detection and tracking",
    tech: ["TensorFlow", "OpenCV", "Docker"],
  },
  {
    title: "NLP Engine",
    description:
      "Natural language processing engine for sentiment analysis and text generation",
    tech: ["Transformers", "BERT", "FastAPI"],
  },
  {
    title: "Reinforcement Learning",
    description:
      "Deep RL system for autonomous decision making in complex environments",
    tech: ["PyTorch", "Gym", "Ray"],
  },
  {
    title: "MLOps Pipeline",
    description:
      "End-to-end ML pipeline with automated training and deployment",
    tech: ["Kubernetes", "MLflow", "Jenkins"],
  },
  {
    title: "AI Research Platform",
    description: "Platform for conducting and managing AI experiments at scale",
    tech: ["Python", "React", "MongoDB"],
  },
];

export interface Skill {
  name: string;
  level: number;
}

export const aiSkills: Skill[] = [
  { name: "Deep Learning", level: 95 },
  { name: "Computer Vision", level: 90 },
  { name: "Natural Language Processing", level: 85 },
  { name: "Reinforcement Learning", level: 80 },
  { name: "MLOps", level: 85 },
];

export const techSkills: Skill[] = [
  { name: "Python", level: 95 },
  { name: "PyTorch/TensorFlow", level: 90 },
  { name: "Docker/Kubernetes", level: 85 },
  { name: "React/TypeScript", level: 80 },
  { name: "CI/CD", level: 85 },
];


