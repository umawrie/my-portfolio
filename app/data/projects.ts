export type ProjectTag = 'Product / UX' | 'Interactive / Creative Tech' | 'Photography' | 'Branding';

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  tags: ProjectTag[];
  year: string;
  featured?: boolean;
  image: string;
  video?: string;
}

export const allProjects: Project[] = [
  {
    id: 'hacs',
    title: 'HACS Dashboard & Branding',
    description: 'Dashboard and branding design for a hospitality analytics platform, featuring data visualization and social media content.',
    shortDescription: 'Dashboard and branding design for a hospitality analytics platform, featuring data visualization and social media content.',
    tags: ['Product / UX', 'Branding'],
    year: '2025',
    featured: true,
    image: '/images/branding/hacs/hacs-logo.jpg',
  },
  {
    id: 'unboxed',
    title: 'Unboxed',
    description: 'Inspired by the 1929 silent film Pandora\'s Box, this work explores how women are seen, judged, and redefined through images. I created three photographic reels titled The Gaze, The Blame, and The Hope, each capturing a different emotional perspective on perception, blame, and resilience.',
    shortDescription: 'A photography installation exploring women\'s representation through three View Master reels, exhibited at NYU Library.',
    tags: ['Photography'],
    year: '2025',
    featured: true,
    image: '/images/visuals/unboxed/hope/hope-07.jpg',
  },
  {
    id: 'pierot',
    title: 'Pierot — Venetian Mask',
    description: 'A speculative luxury biotech brand centered on the Venetian Mask and a biomorphic skin layer that respond to constantly changing aesthetic standards.',
    shortDescription: 'Speculative design project envisioning a future where beauty is programmable through biotechnology.',
    tags: ['Interactive / Creative Tech', 'Branding'],
    year: '2025',
    featured: true,
    image: '/images/branding/pierott/Pierrot-venetian-mask.mp4',
    video: '/images/branding/pierott/Pierrot-venetian-mask.mp4',
  },
  {
    id: 'reground',
    title: 'reground.',
    description: 'Reground is a personal project focused on helping users manage everyday anxiety through intentional interaction design. The app organizes calming practices into three groups: drawing rituals, writing rituals, and breathing exercises, each offering multiple guided activities.',
    shortDescription: 'A mental health app designed to help users manage anxiety through calming practices and intentional interaction design.',
    tags: ['Product / UX'],
    year: '2025',
    featured: false,
    image: '/images/branding/reground/reground-logo.jpg',
  },
  {
    id: 'reactive-particle-system',
    title: 'Reactive Particle System',
    description: '3D particle system moved with touch screen, also using Open Sound Control and Python to trigger midi notes in ableton based off of media pipe\'s object detection.',
    shortDescription: 'Interactive audio-visual composition using TouchDesigner, responding to touch and object detection.',
    tags: ['Interactive / Creative Tech'],
    year: '2025',
    featured: false,
    image: '/images/visuals/reactive-particle-system/reactive-particle-system.mp4',
    video: '/images/visuals/reactive-particle-system/reactive-particle-system.mp4',
  },
  {
    id: 'nostalgia-interrupting-noise',
    title: 'Nostalgia Interrupting Noise',
    description: 'A collection of photos - a visual exploration of memory and sound',
    shortDescription: 'A visual exploration of memory and sound through photography.',
    tags: ['Photography'],
    year: '2025',
    featured: false,
    image: '/images/visuals/nostalgia-interrupting-noise/nostalgia-interrupting-noise.mp4',
    video: '/images/visuals/nostalgia-interrupting-noise/nostalgia-interrupting-noise.mp4',
  },
  {
    id: 'flower-facecards',
    title: 'Flower Facecards',
    description: 'This was a project assigned to make face cards—a king, queen, and jack—out of four shapes: a circle, square, triangle, and an original shape. The cards could be any theme, and I chose to create flower-themed face cards using Illustrator.',
    shortDescription: 'Playing card design project creating flower-themed face cards from geometric shapes.',
    tags: ['Branding'],
    year: '2025',
    featured: false,
    image: '/images/visuals/flower-facecards/pips.png',
  },
  {
    id: 'toyota',
    title: 'TOYota',
    description: 'During my summer course at Parsons, I completed a rebranding project that challenged us to transform an existing company into a completely new concept. I selected Toyota and reimagined the well-known car manufacturer as a toy company.',
    shortDescription: 'Rebranding project transforming Toyota from a car manufacturer into a toy company concept.',
    tags: ['Branding'],
    year: '2022',
    featured: false,
    image: '/images/branding/toyota/toyota-logo.jpg',
  },
];

export const featuredProjects = allProjects.filter(p => p.featured);
export const otherProjects = allProjects.filter(p => !p.featured);
