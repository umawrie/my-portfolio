'use client';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import ProjectsGrid from './components/ProjectsGrid';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <ProjectsGrid />
      <AboutSection />
      <Footer />
    </div>
  );
}
