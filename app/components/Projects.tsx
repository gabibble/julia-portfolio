import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className='mx-auto max-w-6xl px-6'>
      <h2 className='font-script text-5xl text-coral'>projects</h2>
      <div className='my-6 grid grid-cols-6 gap-3'>
        {projects
          .filter((project) => project.featured === true)
          .map((project) => (
            <a
              className={`${project.size === 'wide' ? 'col-span-4' : project.size === 'half' ? 'col-span-3' : 'col-span-2'} rounded-2xl border border-teal p-3`}
            >
              <img src={project.image} className='font-script text-xl'></img>
              <div className='font-script text-3xl'>{project.title}</div>
              <div className=''>{project.blurb}</div>
            </a>
          ))}
      </div>
    </section>
  );
}
