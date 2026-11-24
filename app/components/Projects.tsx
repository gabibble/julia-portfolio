import { featuredProjects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section
      id='work'
      className='mx-auto my-24 w-full max-w-[calc(72rem+3rem)] px-6 md:my-32'
    >
      <h2 className='border-b border-ink/40 pb-6 font-script text-6xl md:text-7xl'>
        work
      </h2>
      <div className='mt-10 grid grid-cols-6 gap-6 md:gap-8'>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
