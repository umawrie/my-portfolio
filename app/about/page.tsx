'use client';

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4" style={{ backgroundColor: 'var(--background)', borderBottom: '1px solid var(--accent)' }}>
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="flex space-x-8">
            <Link href="/" className="text-lg font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--text)' }}>
              Home
            </Link>
            <Link href="/artwork" className="text-lg font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--text)' }}>
              Work
            </Link>
            <Link href="/about" className="text-lg font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--text)' }}>
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8" style={{ color: 'var(--text)' }}>
            About Me
          </h1>
          <p className="text-xl opacity-80" style={{ color: 'var(--text)' }}>
            Hi! I am currently a design student exploring my wide range of interests. Based in New York City, I work with graphic design, web design, fashion, and installation art, while also continuing to explore and develop my creative side.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-6" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--primary)' }}>
              Education
            </h2>
            <div className="bg-white rounded-2xl p-8" style={{ backgroundColor: 'var(--accent)' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--background)' }}>
                Bachelor of Science
              </h3>
              <p className="text-lg mb-2" style={{ color: 'var(--background)' }}>
                Integrated Design and Media
              </p>
              <p className="text-sm mb-2" style={{ color: 'var(--background)' }}>
                NYU Tandon School of Engineering
              </p>
              <p className="text-sm opacity-80" style={{ color: 'var(--background)' }}>
                Expected Graduation: May 2027
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--primary)' }}>
              Get In Touch
            </h2>
            <div className="mt-8 p-6 rounded-2xl" style={{ backgroundColor: 'var(--secondary)' }}>
              <p className="text-sm" style={{ color: 'var(--text)' }}>
                <strong>Email:</strong> umamawrie@gmail.com<br />
                <strong>Location:</strong> Available for remote work worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6" style={{ backgroundColor: 'var(--primary)' }}>
        <div className="max-w-6xl mx-auto text-center">
          <p style={{ color: 'var(--text)' }}>
            © 2025 Uma Mawrie. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
