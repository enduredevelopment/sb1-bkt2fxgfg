import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  icon: LucideIcon;
  text: string;
  link: string;
  delay?: number;
}

export default function SocialLink({ icon: Icon, text, link, delay = 0 }: SocialLinkProps) {
  return (
    <a
      href={link}
      className="group relative block p-4 rounded-xl bg-white/[0.01] backdrop-blur-md border border-white/[0.05] hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:-translate-y-0.5 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/5 group-hover:bg-purple-500/10 transition-colors duration-500">
            <Icon className="w-5 h-5 text-purple-300 group-hover:text-purple-200 transition-colors duration-500" />
          </div>
          <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-500">
            {text}
          </span>
        </div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-purple-500/10 transition-colors duration-500">
          <svg
            className="w-4 h-4 text-gray-400 group-hover:text-purple-300 transition-colors duration-500 group-hover:translate-x-0.5 transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}