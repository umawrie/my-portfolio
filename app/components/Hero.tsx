'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-black transition-opacity duration-1000 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Uma Mawrie
        </h1>
        <p 
          className={`text-xl md:text-2xl mb-4 text-gray-600 transition-opacity duration-1000 delay-200 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Interactive and visual designer studying Integrated Design and Media at NYU
        </p>
        <p 
          className={`text-lg md:text-xl mb-8 text-gray-700 max-w-3xl mx-auto transition-opacity duration-1000 delay-400 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          I design calm, story-driven digital experiences — from mental health apps and data dashboards to interactive installations and photography.
        </p>
        <p 
          className={`text-sm md:text-base mb-12 text-gray-500 max-w-2xl mx-auto transition-opacity duration-1000 delay-600 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Currently: BS Integrated Design and Media, NYU Tandon (Class of 2027). Open to Summer 2026 internships in product design, UX, and creative technology.
        </p>
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-opacity duration-1000 delay-800 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={scrollToWork}
            className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
          >
            View selected work
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors text-center"
          >
            Download resume
          </a>
          <a
            href="mailto:urm2003@nyu.edu"
            className="px-8 py-3 border-2 border-red-600 text-red-600 font-medium hover:bg-red-600 hover:text-white transition-colors text-center"
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
