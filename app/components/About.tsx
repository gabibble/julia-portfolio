const skillGroups = [
  {
    title: 'Languages',
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'Python',
      'HTML',
      'CSS/Sass',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Lit (lit-html)',
      'Web Components',
      'Redux',
      'Accessibility (WCAG, ARIA)',
      'i18n',
    ],
  },
  {
    title: 'Design',
    skills: [
      'Figma',
      'UI/UX',
      'Responsive Layout',
      'Adobe Illustrator',
      'Photoshop',
    ],
  },
  {
    title: 'Tools',
    skills: [
      'Git/GitHub',
      'Vite',
      'GitHub Actions',
      'LambdaTest',
      'Sentry',
      'Codex',
      'Claude Code',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'Express',
      'REST APIs',
      'Flask',
      'PostgreSQL',
      'MongoDB',
      'Firebase',
    ],
  },
];

export default function About() {
  return (
    <section
      id='about'
      className='mx-auto my-16 w-full max-w-[calc(72rem+3rem)] px-6 md:my-32'
    >
      <div className='grid grid-cols-1 gap-10 md:grid-cols-[4fr_3fr] md:items-center'>
        <div>
          <div className='mb-8 border-b border-ink/40 pb-4 md:border-0 md:pb-0'>
            <h2 className='mx-auto flex w-fit flex-col font-script leading-none md:mx-0'>
              <span className='text-3xl md:text-4xl lg:text-5xl'>about</span>
              <span className='ml-[1.3em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
                julia giebultowicz
              </span>
            </h2>
          </div>
          <p className='max-w-prose text-lg'>
            Frontend software engineer with four years of experience shipping
            features in a photo editing web app used by millions. I love
            building intuitive, beautiful interfaces and obsess over user
            experience. A passion for clean, functional code, my intuition for
            product and UX, and an eye for design make me a cross-functional
            addition to any team.
          </p>
          <p className='mt-4 max-w-prose text-lg'>
            Before coding, I was a teacher. That experience helped shape my love
            of collaboration, my leadership abilities and my tolerance for
            high-stress situations.
          </p>
        </div>
        <div className='relative mx-auto aspect-square w-full max-w-64 overflow-hidden rounded-full sm:max-w-sm'>
          <img
            className='absolute inset-0 h-full w-full object-cover'
            src='/images/julia-riso.webp'
            alt='Portrait of Julia'
          />
        </div>
      </div>

      <h3 className='mt-16 border-b border-ink/40 pb-4 font-script text-5xl md:text-6xl'>
        skills
      </h3>
      <div className='mt-6 grid grid-cols-1 gap-5 md:mt-8 md:grid-cols-3 md:gap-8 lg:grid-cols-5'>
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h4 className='font-bold'>{group.title}</h4>
            <ul className='mt-1 flex flex-wrap text-ink/80 md:mt-3 md:flex-col md:gap-1.5 md:text-ink'>
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="after:mx-2 after:content-['·'] last:after:content-none md:after:content-none"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
