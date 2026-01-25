'use client';

import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">About</h2>
        <div className="prose prose-lg max-w-none">
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
          <Link 
            href="/about"
            className="inline-block text-red-600 font-medium hover:underline"
          >
            Read more about me →
          </Link>
        </div>
      </div>
    </section>
  );
}
