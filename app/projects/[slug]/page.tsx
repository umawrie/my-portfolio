'use client';

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

// Project data
const projects = {
  toyota: {
    title: "TOYota",
    description: "During my summer course at Parsons, I completed a rebranding project that challenged us to transform an existing company into a completely new concept. I selected Toyota and reimagined the well-known car manufacturer as a toy company. The project involved conducting market research, analyzing target audiences, and comparing branding strategies across industries. As part of the rebrand, I designed a cohesive line of products, including bags, toy boxes, stickers, and a cup, each reflecting the playful and imaginative spirit of the new brand identity.",
    category: "Branding",
    subcategory: "Rebranding",
    year: "2022",
    images: [
      "/images/branding/toyota/toyota-02.jpg",
    ]
  },
              hacs: {
                title: "HACS",
                description: "During my summer internship with a tech start-up focused on helping hotels improve the way they access and interpret their data, I had the opportunity to learn extensively about the hospitality industry and its relationship with technology. As part of the internship, our team of interns was assigned to design a mock website aimed at hotel clients. I developed the front-end interface, which included a clean and intuitive dashboard for quick data insights, as well as organized tabs displaying graphs and analytics for deeper exploration. Alongside the website project, we were also responsible for managing the company's social media presence. I created the start-up's first post to introduce its mission and visual identity, contributing to its initial brand direction. This experience strengthened my understanding of user-centered design, data visualization, and how thoughtful branding can bridge technology with real-world industry needs.",
    category: "Branding",
    subcategory: "Digital Branding",
    year: "2025",
    sections: {
      website: {
        title: "Website Design",
        images: [
          "/images/branding/hacs/hacs-website-01.jpg",
          "/images/branding/hacs/hacs-website-02.jpg",
          "/images/branding/hacs/hacs-website-03.jpg",
          "/images/branding/hacs/hacs-website-04.jpg",
          "/images/branding/hacs/hacs-website-05.jpg",
          "/images/branding/hacs/hacs-website-06.jpg",
          "/images/branding/hacs/hacs-website-07.jpg",
        ]
      },
      social: {
        title: "Social Media",
        images: [
          "/images/branding/hacs/hacs-social-01.jpg",
          "/images/branding/hacs/hacs-social-02.jpg",
          "/images/branding/hacs/hacs-social-03.jpg",
          "/images/branding/hacs/hacs-social-04.jpg",
          "/images/branding/hacs/hacs-social-05.jpg",
        ]
      }
    }
  },
  reground: {
    title: "reground.",
    description: "Reground is a personal project focused on helping users manage everyday anxiety through intentional interaction design. The app organizes calming practices into three groups: drawing rituals, writing rituals, and breathing exercises, each offering multiple guided activities. The goal is to create a simple and intuitive space where users can slow down, reflect, and regain a sense of control.\n\nThe interface uses soft motion, minimal color palettes, and responsive feedback to make the experience feel personal and grounded. While the feature for personalized feedback is still in progress, the current design emphasizes accessibility, mindful pacing, and emotional connection through visual and interactive design choices.",
    category: "Branding",
    subcategory: "App Design",
    year: "2025",
    images: [
      "/images/branding/reground/reground-01.jpg",
      "/images/branding/reground/reground-02.jpg",
      "/images/branding/reground/reground-03.jpg",
      "/images/branding/reground/reground-04.jpg",
      "/images/branding/reground/reground-05.jpg",
    ]
  },
              unboxed: {
                title: "Unboxed",
                description: "While walking through a small vintage store at the Jersey Shore, I found an old View Master tucked between stacks of postcards and seashells. When I held it up to the light, I felt a quiet sense of nostalgia, as if I was peering into someone else's memories. That small moment sparked this project and reminded me how objects can carry emotion and story.\n\nInspired by the 1929 silent film Pandora's Box, this work explores how women are seen, judged, and redefined through images. I created three photographic reels titled The Gaze, The Blame, and The Hope, each capturing a different emotional perspective on perception, blame, and resilience.\n\nThe piece is presented through the same View Master I found that day. Its stereoscopic design creates a small and focused world for each image, inviting viewers to look closely and reflect on their own act of seeing. Every photograph was taken and composed to convey layers of meaning through light, framing, and symbolism. In making this work, I often thought about the women in my life, especially my mother, sister, and friends, whose strength and tenderness have shaped who I am. This project became a love letter to them, to their stories, and to the sense of community and connection they have given me. Unboxed will be exhibited at the NYU Library from October to December 2025 and invites viewers to reflect on how the image of women continues to evolve in both art and everyday life.",
    category: "Visuals",
    subcategory: "Photography",
    year: "2025",
                reels: {
                  "the-gaze": {
                    title: "The Gaze",
                    images: [
                      "/images/visuals/unboxed/the-gaze/the-gaze-01.jpg",
                      "/images/visuals/unboxed/the-gaze/the-gaze-02.jpg",
                      "/images/visuals/unboxed/the-gaze/the-gaze-03.jpg",
                      "/images/visuals/unboxed/the-gaze/the-gaze-04.jpg",
                      "/images/visuals/unboxed/the-gaze/the-gaze-05.jpg",
                      "/images/visuals/unboxed/the-gaze/the-gaze-06.jpg",
                      "/images/visuals/unboxed/the-gaze/the-gaze-07.jpg",
                    ]
                  },
                  "the-blame": {
                    title: "The Blame",
                    images: [
                      "/images/visuals/unboxed/the-blame/the-blame-01.jpg",
                      "/images/visuals/unboxed/the-blame/the-blame-02.jpg",
                      "/images/visuals/unboxed/the-blame/the-blame-03.jpg",
                      "/images/visuals/unboxed/the-blame/the-blame-04.jpg",
                      "/images/visuals/unboxed/the-blame/the-blame-05.jpg",
                      "/images/visuals/unboxed/the-blame/the-blame-06.jpg",
                      "/images/visuals/unboxed/the-blame/the-blame-07.jpg",
                    ]
                  },
      "hope": {
        title: "The Hope",
        images: [
          "/images/visuals/unboxed/hope/hope-01.jpg",
          "/images/visuals/unboxed/hope/hope-02.jpg",
          "/images/visuals/unboxed/hope/hope-03.jpg",
          "/images/visuals/unboxed/hope/hope-04.jpg",
          "/images/visuals/unboxed/hope/hope-05.jpg",
          "/images/visuals/unboxed/hope/hope-06.jpg",
          "/images/visuals/unboxed/hope/hope-07.jpg",
        ]
      }
    }
  },
  "nostalgia-interrupting-noise": {
    title: "nostalgia interrupting noise",
    description: "A collection of photos - a visual exploration of memory and sound",
    category: "Visuals",
    subcategory: "Photography",
    year: "2025",
    video: "/images/visuals/nostalgia-interrupting-noise/nostalgia-interrupting-noise.mp4",
  },
  "flower-facecards": {
    title: "Flower Facecards",
    description: "This was a project assigned to make face cards—a king, queen, and jack—out of four shapes: a circle, square, triangle, and an original shape. The cards could be any theme, and I chose to create flower-themed face cards using Illustrator.",
    category: "Visuals",
    subcategory: "Digital Art",
    year: "2025",
    images: [
      "/images/visuals/flower-facecards/pips.png",
      "/images/visuals/flower-facecards/facecard-1.jpg",
      "/images/visuals/flower-facecards/facecard-2.jpg",
      "/images/visuals/flower-facecards/facecard-3.jpg",
      "/images/visuals/flower-facecards/facecard-4.jpg",
      "/images/visuals/flower-facecards/facecard-5.jpg",
      "/images/visuals/flower-facecards/facecard-6.jpg",
      "/images/visuals/flower-facecards/facecard-7.jpg",
      "/images/visuals/flower-facecards/facecard-8.jpg",
      "/images/visuals/flower-facecards/facecard-9.jpg",
      "/images/visuals/flower-facecards/facecard-10.jpg",
      "/images/visuals/flower-facecards/facecard-11.jpg",
      "/images/visuals/flower-facecards/facecard-12.jpg",
    ]
  },
  "voices-in-motion": {
    title: "Voices in Motion",
    description: "Photos from the women's march",
    category: "Visuals",
    subcategory: "Documentary",
    year: "2024",
    images: [
      "/images/visuals/voices/voices-01.jpg",
      "/images/visuals/voices/voices-02.jpg",
      "/images/visuals/voices/voices-03.jpg",
    ]
  },
  "fragmented-narratives": {
    title: "Fragmented Narratives",
    description: "Video project exploring fragmented storytelling",
    category: "Visuals",
    subcategory: "Video",
    year: "2024",
    images: [
      "/images/visuals/fragmented/fragmented-01.jpg",
      "/images/visuals/fragmented/fragmented-02.jpg",
      "/images/visuals/fragmented/fragmented-03.jpg",
    ]
  },
  "ephemeral-elegance": {
    title: "Ephemeral Elegance",
    description: "Paper dress design exploring temporary beauty",
    category: "Fashion",
    subcategory: "Wearable Art",
    year: "2024",
    images: [
      "/images/fashion/ephemeral/ephemeral-01.jpg",
      "/images/fashion/ephemeral/ephemeral-02.jpg",
      "/images/fashion/ephemeral/ephemeral-03.jpg",
    ]
  },
  "drawn-threads": {
    title: "Drawn Threads",
    description: "Sketches of a fashion collection",
    category: "Fashion",
    subcategory: "Design",
    year: "2024",
    images: [
      "/images/fashion/drawn/drawn-01.jpg",
      "/images/fashion/drawn/drawn-02.jpg",
      "/images/fashion/drawn/drawn-03.jpg",
    ]
  },
  "canvas-denim": {
    title: "Canvas Denim",
    description: "Painted jeans exploring art and fashion intersection",
    category: "Fashion",
    subcategory: "Textile Art",
    year: "2024",
    images: [
      "/images/fashion/canvas/canvas-01.jpg",
      "/images/fashion/canvas/canvas-02.jpg",
      "/images/fashion/canvas/canvas-03.jpg",
    ]
  },
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects[slug as keyof typeof projects];
  const [activeSection, setActiveSection] = useState<'website' | 'social'>('website');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeReel, setActiveReel] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--background)' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>Project Not Found</h1>
          <Link href="/artwork" className="text-lg" style={{ color: 'var(--accent)' }}>
            ← Back to Work
          </Link>
        </div>
      </div>
    );
  }

  // Check if this is the HACS project with sections
  const isHacsProject = slug === 'hacs' && 'sections' in project;
  
  // Check if this is a horizontal slider project (reground)
  const isHorizontalSliderProject = slug === 'reground';
  
  // Check if this is the Unboxed project with reels
  const isUnboxedProject = slug === 'unboxed' && 'reels' in project;
  
  // Check if this is the Flower Facecards project
  const isFlowerFacecardsProject = slug === 'flower-facecards';
  
  // Check if this is a video project
  const isVideoProject = 'video' in project;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4" style={{ backgroundColor: 'var(--background)', borderBottom: '1px solid var(--accent)' }}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/artwork" className="text-lg font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--text)' }}>
            ← Back to Work
          </Link>
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

      {/* Project Header */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
              {project.category} • {project.subcategory} • {project.year}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6" style={{ color: 'var(--text)' }}>
              {project.title}
            </h1>
            {isFlowerFacecardsProject && 'images' in project && project.images.length > 0 ? (
              <>
                <div className="flex justify-center mb-8">
                  <div className="relative w-full max-w-2xl aspect-square">
                    <Image
                      src={project.images[0]}
                      alt={`${project.title} - Cover`}
                      fill
                      className="object-contain rounded-lg"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                </div>
                <p className="text-xl opacity-80 max-w-3xl mx-auto text-center project-description" style={{ color: 'var(--text)' }}>
                  {project.description}
                </p>
              </>
            ) : (
              <p className="text-xl opacity-80 max-w-3xl project-description" style={{ color: 'var(--text)' }}>
                {project.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {isHacsProject ? (
            <>
              {/* Website Design Section */}
              <div className="mb-20">
                <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--text)' }}>
                  Website Design
                </h3>
                <div className="relative">
                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
                      {project.sections.website.images.map((imagePath, index) => (
                        <div key={index} className="flex-shrink-0 group cursor-pointer" onClick={() => setSelectedImage(imagePath)}>
                          <div className="relative overflow-hidden bg-gray-200" style={{ width: '400px', height: '300px' }}>
                            <Image
                              src={imagePath}
                              alt={`${project.title} - Website Design - Image ${index + 1}`}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="400px"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `
                                    <div class="flex items-center justify-center h-full text-center p-8" style="color: var(--text); background: var(--primary);">
                                      <div>
                                        <div class="text-lg font-bold mb-2">Website Design - Image ${index + 1}</div>
                                        <div class="text-sm opacity-70">Upload your image here</div>
                                        <div class="text-xs mt-2 opacity-50">${imagePath}</div>
                                      </div>
                                    </div>
                                  `;
                                }
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="mb-20">
                <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--text)' }}>
                  Social Media
                </h3>
                <div className="relative">
                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
                      {project.sections.social.images.map((imagePath, index) => (
                        <div key={index} className="flex-shrink-0 group cursor-pointer" onClick={() => setSelectedImage(imagePath)}>
                          <div className="relative overflow-hidden bg-gray-200" style={{ width: '400px', height: '300px' }}>
                            <Image
                              src={imagePath}
                              alt={`${project.title} - Social Media - Image ${index + 1}`}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="400px"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `
                                    <div class="flex items-center justify-center h-full text-center p-8" style="color: var(--text); background: var(--primary);">
                                      <div>
                                        <div class="text-lg font-bold mb-2">Social Media - Image ${index + 1}</div>
                                        <div class="text-sm opacity-70">Upload your image here</div>
                                        <div class="text-xs mt-2 opacity-50">${imagePath}</div>
                                      </div>
                                    </div>
                                  `;
                                }
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : isHorizontalSliderProject ? (
            /* Horizontal Slider for reground */
            <div className="relative">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex space-x-4 pb-4" style={{ width: 'max-content' }}>
                  {'images' in project && project.images.map((imagePath, index) => (
                    <div key={index} className="flex-shrink-0 group cursor-pointer" onClick={() => setSelectedImage(imagePath)}>
                      <div className="relative bg-gray-200" style={{ maxWidth: '300px', width: '100%' }}>
                        <Image
                          src={imagePath}
                          alt={`${project.title} - Image ${index + 1}`}
                          width={300}
                          height={200}
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 300px"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="flex items-center justify-center h-full text-center p-8" style="color: var(--text); background: var(--primary);">
                                  <div>
                                    <div class="text-lg font-bold mb-2">Image ${index + 1}</div>
                                    <div class="text-sm opacity-70">Upload your image here</div>
                                    <div class="text-xs mt-2 opacity-50">${imagePath}</div>
                                  </div>
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : isUnboxedProject ? (
            /* View-Master Reels for Unboxed */
            <div className="space-y-20">
              {Object.entries(project.reels).map(([reelKey, reel]) => (
                <div key={reelKey} className="text-center">
                  <h3 className="text-3xl font-bold mb-12" style={{ color: 'var(--text)' }}>
                    {reel.title}
                  </h3>
                  
                  {/* View-Master Reel */}
                  <div className="flex justify-center mb-8">
                    <div 
                      className="relative cursor-pointer group"
                      onClick={() => setActiveReel(reelKey)}
                      style={{ width: '320px', height: '320px' }}
                    >
                      {/* Outer View-Master frame */}
                      <div className="absolute inset-0 rounded-full overflow-hidden" style={{ 
                        background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #2a2a2a 100%)',
                        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.3)'
                      }}>
                        {/* Inner circular frame */}
                        <div className="absolute inset-4 rounded-full overflow-hidden border-2" style={{ 
                          borderColor: '#444',
                          background: 'linear-gradient(45deg, #333 0%, #222 100%)'
                        }}>
                          {/* Image slots arranged in View-Master pattern */}
                          <div className="relative w-full h-full">
                            {reel.images.slice(0, 7).map((imagePath, index) => {
                              // Create 14 boxes by repeating each image twice
                              return Array.from({ length: 2 }).map((_, repeatIndex) => {
                                const boxIndex = index * 2 + repeatIndex;
                                const angle = (boxIndex * 25.71) * (Math.PI / 180); // 360/14 = 25.71 degrees
                                
                                // Adjust radius for different box positions
                                let radius;
                                if (index === 4) { // Box 5 (index 4)
                                  radius = 145; // Move slightly left (away from center)
                                } else if (index === 5) { // Box 6 (index 5)
                                  if (repeatIndex === 0) {
                                    radius = 150; // First instance - next to box 5, keep position
                                  } else {
                                    radius = 135; // Second instance - next to box 7, move slightly back out
                                  }
                                } else if (index === 3) { // Box 4 (index 3)
                                  radius = 135; // Move closer to box 5, less inward
                                } else if (index === 0 || index === 1) { // Boxes 1, 2 (index 0, 1)
                                  radius = 105; // Move a little more inward
                                } else if (index === 2) { // Box 3 (index 2)
                                  radius = 115; // Move up slightly (closer to boxes 1,2)
                                } else { // Box 7 (index 6)
                                  radius = 120; // Keep original inward position
                                }
                                
                                const x = Math.cos(angle) * radius + 160;
                                const y = Math.sin(angle) * radius + 160;
                                
                                return (
                                  <div
                                    key={`${index}-${repeatIndex}`}
                                    className="absolute w-12 h-8 rounded-lg overflow-hidden border-2"
                                    style={{
                                      left: `${x - 24}px`,
                                      top: `${y - 16}px`,
                                      borderColor: '#555',
                                      boxShadow: 'inset 0 0 10px rgba(0,0,0,0.3)',
                                      background: '#1a1a1a',
                                      transform: `rotate(${angle * (180 / Math.PI)}deg)`,
                                      transformOrigin: 'center center'
                                    }}
                                  >
                                    <Image
                                      src={imagePath}
                                      alt={`${reel.title} - Frame ${index + 1}`}
                                      width={48}
                                      height={32}
                                      className="object-cover w-full h-full"
                                      sizes="48px"
                                      style={{
                                        transform: `rotate(${-angle * (180 / Math.PI)}deg)`,
                                        transformOrigin: 'center center'
                                      }}
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const parent = target.parentElement;
                                        if (parent) {
                                          parent.innerHTML = `
                                            <div class="flex items-center justify-center h-full text-center p-1" style="color: #888; background: #1a1a1a; font-size: 6px; transform: rotate(${-angle * (180 / Math.PI)}deg);">
                                              ${index + 1}
                                            </div>
                                          `;
                                        }
                                      }}
                                    />
                                  </div>
                                );
                              });
                            }).flat()}
                            
                            {/* Center hub */}
                            <div 
                              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center text-center border-4"
                              style={{ 
                                backgroundColor: '#2a2a2a', 
                                color: '#ccc',
                                borderColor: '#555',
                                boxShadow: 'inset 0 0 15px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.3)'
                              }}
                            >
                              <div className="text-center">
                                <div className="text-xs font-bold mb-1" style={{ color: '#888' }}>
                                  VIEW-MASTER
                                </div>
                                <div className="text-xs font-bold" style={{ color: '#ccc' }}>
                                  {reel.title.split(' ').map(word => word[0]).join('')}
                                </div>
                              </div>
                            </div>
                            
                            {/* Radial lines connecting to center */}
                            {Array.from({ length: 14 }).map((_, index) => {
                              const angle = (index * 25.71) * (Math.PI / 180); // 360/14 = 25.71 degrees
                              
                              // Adjust radius for different box positions
                              let radius;
                              const imageIndex = Math.floor(index / 2);
                              const repeatIndex = index % 2;
                              if (imageIndex === 4) { // Box 5
                                radius = 145; // Move slightly left (away from center)
                              } else if (imageIndex === 5) { // Box 6
                                if (repeatIndex === 0) {
                                  radius = 150; // First instance - next to box 5, keep position
                                } else {
                                  radius = 135; // Second instance - next to box 7, move slightly back out
                                }
                              } else if (imageIndex === 3) { // Box 4
                                radius = 135; // Move closer to box 5, less inward
                              } else if (imageIndex === 0 || imageIndex === 1) { // Boxes 1, 2
                                radius = 105; // Move a little more inward
                              } else if (imageIndex === 2) { // Box 3
                                radius = 115; // Move up slightly (closer to boxes 1,2)
                              } else { // Box 7
                                radius = 120; // Keep original inward position
                              }
                              
                              const x = Math.cos(angle) * radius + 160;
                              const y = Math.sin(angle) * radius + 160;
                              
                              return (
                                <div
                                  key={index}
                                  className="absolute w-1"
                                  style={{
                                    left: `${x - 0.5}px`,
                                    top: `${y - (radius - 48)}px`,
                                    height: `${radius - 48}px`,
                                    background: 'linear-gradient(to center, #444, transparent)',
                                    transform: `rotate(${angle * (180 / Math.PI)}deg)`,
                                    transformOrigin: 'center bottom'
                                  }}
                                />
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      
                      {/* Hover overlay with View-Master branding */}
                      <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="text-white font-bold text-lg mb-2">VIEW REEL</div>
                          <div className="text-white text-sm opacity-80">Click to explore</div>
                        </div>
                      </div>
                      
                      {/* View-Master notch */}
                      <div 
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-8 h-4 rounded-t-full"
                        style={{ backgroundColor: '#2a2a2a' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : isFlowerFacecardsProject ? (
            /* Horizontal Scrollable Gallery for Flower Facecards */
            <div className="relative">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex space-x-6 pb-4" style={{ width: 'max-content', margin: '0 auto' }}>
                  {'images' in project && project.images.map((imagePath, index) => {
                    // Skip the first image (pips.png) for Flower Facecards as it's already shown above
                    if (index === 0) return null;
                    return (
                      <div key={index} className="flex-shrink-0 group cursor-pointer" onClick={() => setSelectedImage(imagePath)}>
                        <div className="relative overflow-hidden bg-gray-200 rounded-lg" style={{ width: '400px', height: '400px' }}>
                          <Image
                            src={imagePath}
                            alt={`${project.title} - Image ${index}`}
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-300"
                            sizes="400px"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `
                                  <div class="flex items-center justify-center h-full text-center p-8" style="color: var(--text); background: var(--primary);">
                                    <div>
                                      <div class="text-lg font-bold mb-2">Image ${index}</div>
                                      <div class="text-sm opacity-70">Upload your image here</div>
                                      <div class="text-xs mt-2 opacity-50">${imagePath}</div>
                                    </div>
                                  </div>
                                `;
                              }
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : isVideoProject ? (
            /* Video Player for video projects */
            <div className="flex justify-center">
              {'video' in project && project.video && (
                <div className="relative w-full max-w-4xl">
                  <video
                    src={project.video}
                    controls
                    className="w-full h-auto rounded-lg"
                    style={{ backgroundColor: '#000' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          ) : (
            /* Regular Gallery for other projects */
            <div className="flex justify-center">
              {'images' in project && project.images.map((imagePath, index) => {
                return (
                <div key={index} className="group cursor-pointer" onClick={() => setSelectedImage(imagePath)}>
                  <div className="relative overflow-hidden bg-gray-200" style={{ maxWidth: '800px', width: '100%' }}>
                    <Image
                      src={imagePath}
                      alt={`${project.title} - Image ${index + 1}`}
                      width={800}
                      height={600}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 800px"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="flex items-center justify-center h-full text-center p-8" style="color: var(--text); background: var(--primary);">
                              <div>
                                <div class="text-lg font-bold mb-2">Image ${index + 1}</div>
                                <div class="text-sm opacity-70">Upload your image here</div>
                                <div class="text-xs mt-2 opacity-50">${imagePath}</div>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-colors z-10"
              style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              ×
            </button>
            <div className="relative max-w-full max-h-full">
              <Image
                src={selectedImage}
                alt="Full size image"
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
                style={{ maxHeight: '90vh' }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}

      {/* Reel Modal */}
      {activeReel && isUnboxedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setActiveReel(null)}
        >
          <div className="relative max-w-7xl max-h-full p-4 w-full">
            <button
              onClick={() => setActiveReel(null)}
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-colors z-10"
              style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              ×
            </button>
            
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">
                {project.reels[activeReel as keyof typeof project.reels].title}
              </h2>
            </div>
            
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
                {project.reels[activeReel as keyof typeof project.reels].images.map((imagePath, index) => (
                  <div key={index} className="flex-shrink-0 group cursor-pointer" onClick={() => setSelectedImage(imagePath)}>
                    <div className="relative overflow-hidden bg-gray-200" style={{ width: '400px', height: '300px' }}>
                      <Image
                        src={imagePath}
                        alt={`${project.reels[activeReel as keyof typeof project.reels].title} - Image ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="400px"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="flex items-center justify-center h-full text-center p-8" style="color: var(--text); background: var(--primary);">
                                <div>
                                  <div class="text-lg font-bold mb-2">${project.reels[activeReel as keyof typeof project.reels].title} - Image ${index + 1}</div>
                                  <div class="text-sm opacity-70">Upload your image here</div>
                                  <div class="text-xs mt-2 opacity-50">${imagePath}</div>
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

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
