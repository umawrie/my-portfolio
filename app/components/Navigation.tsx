'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-center">
          <div className="flex space-x-8">
            <Link 
              href="/#work" 
              className="text-sm font-medium text-black hover:text-red-600 transition-colors"
            >
              Work
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium text-black hover:text-red-600 transition-colors"
            >
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
  );
}
