export type Project = {
  title: string;
  blurb: string;
  role: string;
  stack: string;
  linkLabel: 'case study' | 'live site';
  href: string;
  image: string;
  imageAlt: string;
  size: 'wide' | 'tall' | 'half' | 'small' | 'featured';
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: 'BeFunky',
    blurb:
      'Features, fixes and UI for an online photo editor used by millions. I worked here as a frontend developer for 4 years.',
    role: 'Frontend Developer',
    stack: 'Lit, JavaScript, Sass',
    linkLabel: 'case study',
    href: 'https://www.befunky.com/',
    image: '/images/projects/befunky-devices-collage.webp',
    imageAlt: "BeFunky's Collage Maker open on a phone and a laptop",
    size: 'wide',
    featured: true,
  },
  {
    title: 'GallerySnap',
    blurb:
      'Crops and straightens askew photos of artwork in one click. Designed by me and vibe coded with Claude.',
    role: 'Idea, design + build',
    stack: 'Next.js, OpenCV.js',
    linkLabel: 'case study',
    href: 'https://www.gallerysnap.app/',
    image: '/images/projects/gallerysnap.webp',
    imageAlt: 'GallerySnap app straightening a photo of a painting',
    size: 'tall',
    featured: true,
  },
  {
    title: 'Steve Barry Writes',
    blurb:
      'A portfolio site for a freelance medical writer. I designed it in Figma and built it in React, using Prismic CMS so he can update it himself.',
    role: 'Client site · design + build',
    stack: 'React, Prismic',
    linkLabel: 'live site',
    href: 'https://stevebarrywrites.com',
    image: '/images/projects/steve-barry.webp',
    imageAlt:
      'Steve Barry Writes homepage with his bio, credentials and client logos',
    size: 'small',
    featured: true,
  },
  {
    title: 'TripUp',
    blurb:
      'Fullstack trip planning app. Plan a trip and get a cost estimate and weather charts, pulled from travel and climate APIs.',
    role: 'Full stack',
    stack: 'React, TypeScript, Flask, PostgreSQL',
    linkLabel: 'live site',
    href: 'https://trip-up-cc461.web.app/',
    image: '/images/projects/tripapp.webp',
    imageAlt:
      'TripUp trip page for Chicago showing estimated cost and May weather',
    size: 'wide',
    featured: true,
  },
  {
    title: 'Gradient Generator',
    blurb:
      'Build a linear, radial or conic gradient, then copy the CSS or download a PNG. My design, vibe coded with Claude.',
    role: 'Design + build',
    stack: 'Vanilla JavaScript',
    linkLabel: 'live site',
    href: 'https://generate-gradient-app.vercel.app/',
    image: '/images/projects/gradient.webp',
    imageAlt:
      'Gradient Generator with a blue-to-purple gradient and color stops',
    size: 'half',
    featured: true,
  },
  {
    title: 'Polka Prints',
    blurb: 'The website for my greeting card shop, designed and built by me.',
    role: 'Design + build',
    stack: 'HTML, CSS, Bootstrap',
    linkLabel: 'live site',
    href: 'https://www.polkaprints.com/',
    image: '/images/projects/polka.webp',
    imageAlt: 'Polka Prints site with a linocut print and greeting cards',
    size: 'half',
    featured: true,
  },
  {
    title: 'Weather App',
    blurb: 'Current weather and a 6-day forecast.',
    role: 'Design + build',
    stack: 'React',
    linkLabel: 'live site',
    href: 'https://juliaweatherapp.netlify.app/',
    image: '/images/projects/weather.webp',
    imageAlt: 'Weather app showing current conditions and a 6-day forecast',
    size: 'small',
    featured: false,
  },
  {
    title: 'Eso Bee',
    blurb: '(add blurb) Musician website',
    role: 'Design + build',
    stack: '(add stack)',
    linkLabel: 'live site',
    href: 'https://esobee.netlify.app/',
    image: '/images/projects/esobee.webp',
    imageAlt: 'Eso Bee musician website',
    size: 'small',
    featured: false,
  },
  {
    title: 'Francis Theater',
    blurb: '(add blurb) Mock theater website',
    role: 'Design + build',
    stack: '(add stack)',
    linkLabel: 'live site',
    href: 'https://francis-theater-mockup.netlify.app/',
    image: '/images/projects/francis.webp',
    imageAlt: 'Francis Theater mock website',
    size: 'small',
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
