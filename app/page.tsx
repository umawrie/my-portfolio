'use client';

import Link from "next/link";

export default function Home() {
  const scrollToDashboard = () => {
    const element = document.getElementById('dashboard');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 typewriter" style={{ color: 'var(--text)' }}>
            Uma Mawrie
          </h1>
          <button
            onClick={scrollToDashboard}
            className="animate-fade-in-up text-4xl opacity-70 hover:opacity-100 transition-opacity"
            style={{ animationDelay: '3.5s', color: 'var(--text)' }}
          >
            ↓
          </button>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: 'var(--text)' }}>
            Explore My Work
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Branding Card */}
            <Link href="/artwork#branding" className="group">
              <div className="bg-white rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300" style={{ backgroundColor: 'var(--primary)' }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Branding
                </h3>
              </div>
            </Link>

            {/* Visuals Card */}
            <Link href="/artwork#visuals" className="group">
              <div className="bg-white rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300" style={{ backgroundColor: 'var(--secondary)' }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Visuals
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6" style={{ backgroundColor: 'var(--primary)' }}>
        <div className="max-w-6xl mx-auto text-center">
          <p style={{ color: 'var(--text)' }}>
            © 2024 Uma Mawrie. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
