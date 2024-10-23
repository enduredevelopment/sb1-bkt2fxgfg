import React, { useState } from 'react';
import { Github, Twitter, Linkedin, Mail, Briefcase, Code } from 'lucide-react';
import Portfolio from './components/Portfolio';
import SocialLink from './components/SocialLink';
import Background from './components/Background';

export default function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  if (showPortfolio) {
    return <Portfolio onBack={() => setShowPortfolio(false)} />;
  }

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <Background />

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center mb-16">
          <div className="relative w-40 h-40 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-2xl animate-pulse-slow" />
            <div className="relative rounded-full overflow-hidden gradient-border">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6 text-gradient tracking-tight">
            John Developer
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            Full-stack developer crafting beautiful digital experiences. 
            Specializing in React, Node.js, and modern web technologies.
          </p>
        </div>

        <div className="space-y-4">
          <SocialLink icon={Github} text="GitHub" link="#" delay={100} />
          <SocialLink icon={Twitter} text="Twitter" link="#" delay={200} />
          <SocialLink icon={Linkedin} text="LinkedIn" link="#" delay={300} />
          <SocialLink icon={Mail} text="Contact Me" link="#" delay={400} />
          <SocialLink icon={Code} text="Blog" link="#" delay={500} />

          <button
            onClick={() => setShowPortfolio(true)}
            className="group relative w-full p-4 rounded-xl bg-gradient-to-r from-violet-500/20 to-purple-500/20 backdrop-blur-md border border-purple-500/30 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] animate-fade-in"
            style={{ animationDelay: '600ms' }}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 transition-colors duration-500">
                  <Briefcase className="w-5 h-5 text-purple-300 group-hover:text-purple-200 transition-colors duration-500" />
                </div>
                <span className="text-gray-200 font-medium group-hover:text-white transition-colors duration-500">
                  View Portfolio
                </span>
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-purple-500/10 transition-colors duration-500">
                <svg
                  className="w-4 h-4 text-purple-300 group-hover:text-purple-200 transition-colors duration-500 group-hover:translate-x-0.5 transform"
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
          </button>
        </div>
      </div>
    </div>
  );
}