import React from 'react';
import { ArrowLeft } from 'lucide-react';
import ProjectCard from './ProjectCard';
import Background from './Background';

const projects = [
  {
    title: "Project Alpha",
    description: "A modern e-commerce platform built with Next.js and Stripe, featuring real-time inventory management and AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    tags: ["Next.js", "Stripe", "Tailwind", "AI"],
    github: "#",
    demo: "#"
  },
  {
    title: "Project Beta",
    description: "Real-time collaborative workspace with Socket.io, featuring video calls, shared documents, and encrypted messaging.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop",
    tags: ["React", "Socket.io", "WebRTC"],
    github: "#",
    demo: "#"
  },
  {
    title: "Project Gamma",
    description: "AI-powered content management system with automatic SEO optimization and multi-language support.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
    tags: ["Python", "TensorFlow", "React"],
    github: "#",
    demo: "#"
  }
];

interface PortfolioProps {
  onBack: () => void;
}

export default function Portfolio({ onBack }: PortfolioProps) {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <Background />
      
      <div className="relative z-10 container mx-auto px-4 py-12 max-w-5xl">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-16"
        >
          <div className="p-2 rounded-lg bg-white/5 group-hover:bg-purple-500/10 transition-colors duration-300">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="font-medium">Back to Links</span>
        </button>

        <div className="space-y-6 mb-16">
          <h2 className="text-5xl font-bold text-gradient tracking-tight">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Explore my latest works showcasing modern web development techniques,
            innovative solutions, and creative designs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} delay={index * 100} />
          ))}
        </div>
      </div>
    </div>
  );
}