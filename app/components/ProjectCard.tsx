import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { type Project } from '../data/projects';

const colSpans: Record<Project['size'], string> = {
  wide: 'md:col-span-4',
  half: 'md:col-span-3',
  tall: 'md:col-span-2',
  small: 'md:col-span-2',
  featured: 'md:col-span-6',
};

// Fixed image shape per card size, so same-size cards get same-size photos.
// Tall cards have no fixed shape on desktop: the photo fills the row height.
const imageShapes: Record<Project['size'], string> = {
  wide: 'aspect-[16/9]',
  half: 'aspect-[16/10]',
  tall: 'aspect-[4/3] md:aspect-auto md:flex-1',
  small: 'aspect-[4/3]',
  featured: 'aspect-[16/7]',
};

export default function ProjectCard({ project }: { project: Project }) {
  const Arrow =
    project.linkLabel === 'live site' ? FiArrowUpRight : FiArrowRight;

  return (
    <a
      href={project.href}
      className={`col-span-6 ${colSpans[project.size]} flex lift flex-col rounded-[20px] border-[1.5px] border-ink p-4 md:p-5`}
    >
      <div
        className={`relative overflow-hidden rounded-xl ${project.imageFit === 'contain' ? '' : 'border border-ink/15'} ${imageShapes[project.size]}`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          className={`absolute inset-0 h-full w-full ${project.imageFit === 'contain' ? 'object-contain' : 'object-cover object-top'}`}
        />
      </div>
      <div className='px-1 pt-5'>
        <div className='flex items-baseline justify-between gap-4'>
          <h3 className='text-xl font-medium'>{project.title}</h3>
          <span className='flex shrink-0 items-center gap-1 text-sm text-ink/70'>
            {project.linkLabel}
            <Arrow className='size-4' />
          </span>
        </div>
        <p className='mt-2 text-ink/80'>{project.blurb}</p>
        <p className='mt-3 text-sm text-ink/70'>
          <span className='font-medium text-ink'>{project.role}</span>
          {project.stack && ` · ${project.stack}`}
        </p>
      </div>
    </a>
  );
}
