import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { type Project } from '../data/projects';

const colSpans: Record<Project['size'], string> = {
  wide: 'md:col-span-4',
  half: 'md:col-span-3',
  tall: 'md:col-span-2',
  small: 'md:col-span-2',
  featured: 'md:col-span-6',
};

export default function ProjectCard({ project }: { project: Project }) {
  const isTall = project.size === 'tall';
  const Arrow =
    project.linkLabel === 'live site' ? FiArrowUpRight : FiArrowRight;

  return (
    <a
      href={project.href}
      className={`col-span-6 ${colSpans[project.size]} flex lift flex-col rounded-[20px] border-[1.5px] border-ink p-4 md:p-5`}
    >
      <div
        className={`overflow-hidden rounded-xl ${project.imageFit === 'contain' ? '' : 'border border-ink/15'} ${isTall ? 'md:relative md:flex-1' : ''}`}
      >
        <picture>
          {project.mobileImage && (
            <source media='(min-width: 768px)' srcSet={project.image} />
          )}
          <img
            src={project.mobileImage ?? project.image}
            alt={project.imageAlt}
            className={`block h-auto w-full ${isTall ? 'md:absolute md:inset-0 md:h-full md:object-cover md:object-top' : ''}`}
          />
        </picture>
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
