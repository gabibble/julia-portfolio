import { type Project } from '../data/projects';

const colSpans: Record<Project['size'], string> = {
  wide: 'md:col-span-4',
  half: 'md:col-span-3',
  tall: 'md:col-span-2',
  small: 'md:col-span-2',
  featured: 'md:col-span-6',
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      className={`col-span-6 ${colSpans[project.size]} rounded-2xl border border-teal p-3`}
    >
      <img src={project.image} alt={project.imageAlt}/>
      <div className='font-script text-3xl'>{project.title}</div>
      <div className=''>{project.blurb}</div>
    </a>
  );
}
