import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  delay?: number;
}

export default function ProjectCard({ title, description, image, tags, github, demo, delay = 0 }: ProjectCardProps) {
  return (
    <div 
      className="group relative rounded-xl bg-white/[0.01] backdrop-blur-md border border-white/[0.05] overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 text-white/90 group-hover:text-white transition-colors duration-500">
            {title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={github}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-300 transition-colors duration-300 group/link"
            >
              <div className="p-2 rounded-lg bg-white/5 group-hover/link:bg-purple-500/10 transition-colors duration-300">
                <Github className="w-4 h-4" />
              </div>
              Code
            </a>
            <a
              href={demo}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-300 transition-colors duration-300 group/link"
            >
              <div className="p-2 rounded-lg bg-white/5 group-hover/link:bg-purple-500/10 transition-colors duration-300">
                <ExternalLink className="w-4 h-4" />
              </div>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}