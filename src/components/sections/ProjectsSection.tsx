import Link from 'next/link';
import { projects } from '@/lib/content';
import Section from '../ui/Section';

const ProjectsSection = () => (
  <Section id='projects' eyebrow='Side projects' title='Things I build for fun' tone='surface'>
    <ul className='grid gap-4 md:grid-cols-3'>
      {projects.map((project) => (
        <li key={project.title} className='flex flex-col rounded-outer bg-canvas p-6'>
          <h3 className='text-headline'>{project.title}</h3>
          <p className='mt-2 line-clamp-3 flex-1 text-[0.9375rem] leading-relaxed text-fg-secondary'>
            {project.description}
          </p>
          <p className='text-caption mt-4 text-fg-tertiary'>
            {project.techstack.slice(0, 4).join(' · ')}
          </p>
          <div className='mt-5 flex gap-5 text-[0.9375rem]'>
            <Link
              href={project.webURL}
              target='_blank'
              rel='noopener noreferrer'
              className='text-accent hover:underline'
            >
              Live site<span className='sr-only'> for {project.title}</span>
            </Link>
            <Link
              href={project.githubURL}
              target='_blank'
              rel='noopener noreferrer'
              className='text-accent hover:underline'
            >
              Source<span className='sr-only'> for {project.title}</span>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </Section>
);

export default ProjectsSection;
