import { featuredProjects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section className='mx-auto max-w-6xl px-6'>
      <h2 className='font-script text-5xl text-coral'>projects</h2>
      <div className='my-6 grid grid-cols-6 gap-3'>
        {featuredProjects
          .map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
      </div>
    </section>
  );
}
