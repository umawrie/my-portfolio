'use client';

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-center">
            <div className="flex space-x-8">
              <Link href="/#work" className="text-sm font-medium text-black hover:text-red-600 transition-colors">
                Work
              </Link>
              <Link href="/about" className="text-sm font-medium text-black hover:text-red-600 transition-colors">
                About
              </Link>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-black hover:text-red-600 transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black">
            About Me
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-lg text-gray-700 mb-6">
              I'm an Integrated Design and Media student at NYU Tandon, passionate about creating 
              thoughtful digital experiences that blend functionality with emotional resonance. My work 
              spans product design, UX, interactive installations, and visual storytelling.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              I'm particularly drawn to projects that address mental health, data visualization, and 
              narrative-driven design. Whether designing a calming anxiety app or visualizing complex 
              datasets, I aim to create interfaces that feel intuitive, meaningful, and human-centered.
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-black">Tools & Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Figma', 'Adobe Creative Suite', 'React', 'Next.js', 'TouchDesigner', 'Python', 'Illustrator', 'Photoshop'].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-white border border-gray-200 text-sm text-gray-700 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-black">
              Education
            </h2>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-black">
                Bachelor of Science
              </h3>
              <p className="text-lg mb-2 text-gray-700">
                Integrated Design and Media
              </p>
              <p className="text-sm mb-2 text-gray-600">
                NYU Tandon School of Engineering
              </p>
              <p className="text-sm text-gray-500">
                Expected Graduation: May 2027
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-black">
              Get In Touch
            </h2>
            <div className="mt-8 p-6 rounded-lg bg-white border border-gray-200">
              <p className="text-sm text-gray-700">
                <strong>Email:</strong> urm2003@nyu.edu<br />
                <strong>Location:</strong> Available for remote work worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-sm text-gray-400">
                © 2025 Uma Mawrie. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="mailto:urm2003@nyu.edu"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Email
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
