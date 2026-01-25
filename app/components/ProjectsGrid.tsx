'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { allProjects, ProjectTag } from '../data/projects';

const allTags: ProjectTag[] = ['Product / UX', 'Interactive / Creative Tech', 'Photography', 'Branding'];

export default function ProjectsGrid() {
  const [selectedTag, setSelectedTag] = useState<ProjectTag | 'All'>('All');

  const filteredProjects = selectedTag === 'All' 
    ? allProjects.filter(p => !p.featured)
    : allProjects.filter(p => !p.featured && p.tags.includes(selectedTag));

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">More Projects</h2>
        
        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setSelectedTag('All')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedTag === 'All'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.id}`}
                className="group"
              >
                <div className="bg-white border border-gray-200 hover:border-red-600 transition-colors overflow-hidden">
                  <div className="aspect-[4/3] relative bg-gray-100">
                    {project.video ? (
                      <video
                        src={project.video}
                        className="object-cover w-full h-full"
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-black group-hover:text-red-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-12">No projects found for this filter.</p>
        )}
      </div>
    </section>
  );
}
