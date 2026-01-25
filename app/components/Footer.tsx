'use client';

export default function Footer() {
  return (
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
  );
}
