'use client';

import Link from 'next/link';
import Image from 'next/image';
import { featuredProjects } from '../data/projects';

export default function FeaturedProjects() {
  return (
    <section id="work" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-black">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
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
                  <h3 className="text-xl font-bold mb-2 text-black group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
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
      </div>
    </section>
  );
}
