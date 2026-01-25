'use client';

import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">About</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            Hi! I am currently a design student exploring my wide range of interests. Based in New York City, I work with graphic design, web design, fashion, and installation art, while also continuing to explore and develop my creative side.
          </p>
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
