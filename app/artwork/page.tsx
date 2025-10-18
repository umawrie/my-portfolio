'use client';

import Link from "next/link";
import Image from "next/image";

// Project data with proper image organization
const allProjects = [
  // Branding Projects
  {
    id: "hacs",
    title: "HACS",
    description: "Hospitality Analytics Cloud Services - Website and Social Media Branding",
    category: "Branding",
    subcategory: "Digital Branding",
    year: "2025",
    images: [
      "/images/branding/hacs/hacs-logo.jpg",
    ]
  },
  {
    id: "reground",
    title: "reground.",
    description: "Personal mental health app to help people with anxiety",
    category: "Branding",
    subcategory: "App Design",
    year: "2025",
    images: [
      "/images/branding/reground/reground-logo.jpg",
    ]
  },
  {
    id: "toyota",
    title: "TOYota",
    description: "A rebrand of Toyota car company into a toy company",
    category: "Branding",
    subcategory: "Rebranding",
    year: "2022",
    images: [
      "/images/branding/toyota/toyota-logo.jpg",
    ]
  },
  // Visuals Projects
  {
    id: "unboxed",
    title: "Unboxed",
    description: "Photo project shown through a viewmaster, commentary on women based on Pandora's box",
    category: "Visuals",
    subcategory: "Photography",
    year: "2025",
    images: [
      "/images/visuals/unboxed/hope/hope-07.jpg",
    ]
  },
];

// Group projects by category and limit to 3 per category
const projectsByCategory = {
  Branding: allProjects.filter(p => p.category === "Branding").slice(0, 3),
  Visuals: allProjects.filter(p => p.category === "Visuals").slice(0, 3),
};

export default function ArtworkPage() {
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
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8" style={{ color: 'var(--text)' }}>
            Work Gallery
          </h1>
        </div>
      </section>

      {/* Artwork Gallery */}
      <section className="py-16 px-6" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Branding Section */}
          <div id="branding" className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: 'var(--primary)' }}>
              Branding
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projectsByCategory.Branding.map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300" style={{ backgroundColor: 'var(--primary)' }}>
                    <div className="aspect-square relative">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>
                        {project.title}
                      </h3>
                      <p className="text-sm mb-4" style={{ color: 'var(--text)' }}>
                        {project.description}
                      </p>
                      <div className="flex justify-between text-xs" style={{ color: 'var(--accent)' }}>
                        <span>{project.subcategory}</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Visuals Section */}
          <div id="visuals" className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: 'var(--secondary)' }}>
              Visuals
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projectsByCategory.Visuals.map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300" style={{ backgroundColor: 'var(--secondary)' }}>
                    <div className="aspect-square relative">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>
                        {project.title}
                      </h3>
                      <p className="text-sm mb-4" style={{ color: 'var(--text)' }}>
                        {project.description}
                      </p>
                      <div className="flex justify-between text-xs" style={{ color: 'var(--accent)' }}>
                        <span>{project.subcategory}</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
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
