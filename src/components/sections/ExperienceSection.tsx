import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';
import {
  education,
  experiences,
  experienceSpan,
  formatTenure,
  toolkit,
  type Experience,
} from '@/lib/content';
import Section from '../ui/Section';
import Tag from '../ui/Tag';
import HighlightList from './HighlightList';

const VISIBLE_HIGHLIGHTS = 3;

const Company = ({ experience }: { experience: Experience }) => (
  <div className='relative flex items-start gap-3.5 self-start'>
    <Image
      src={experience.logo}
      alt=''
      width={44}
      height={44}
      sizes='44px'
      className='h-11 w-11 shrink-0 rounded-[0.625rem] bg-white object-cover ring-1 ring-inset ring-fg/10'
    />
    <div className='min-w-0'>
      <h3 className='text-headline'>
        <a
          href={experience.website}
          target='_blank'
          rel='noopener noreferrer'
          className='group transition-colors duration-150 after:absolute after:inset-0 hover:text-accent active:opacity-70'
        >
          {experience.companyName}
          <BsArrowUpRight
            aria-hidden
            className='ml-1 inline-block h-3 w-3 align-baseline text-fg-tertiary transition-[color,transform] duration-200 ease-out group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-accent motion-reduce:transition-none'
          />
          <span className='sr-only'>(opens company website in a new tab)</span>
        </a>
      </h3>
      <p className='text-caption mt-1 text-fg-tertiary'>
        {formatTenure(experienceSpan(experience))}
        <br />
        {experience.location}
      </p>
    </div>
  </div>
);

type Position = Experience['positions'][number];

const TimelineMarker = ({ isLast }: { isLast: boolean }) => (
  <>
    <span
      aria-hidden
      className='absolute left-0 top-2 h-[9px] w-[9px] rounded-full border-2 border-fg-tertiary bg-canvas'
    />
    {!isLast && (
      <span aria-hidden className='absolute -bottom-10 left-1 top-5 w-px bg-line' />
    )}
  </>
);

const PositionEntry = ({
  position,
  isTimeline,
  isLast,
}: {
  position: Position;
  isTimeline: boolean;
  isLast: boolean;
}) => (
  <li className={isTimeline ? 'relative pl-6' : undefined}>
    {isTimeline && <TimelineMarker isLast={isLast} />}
    <div className='flex flex-wrap items-baseline gap-x-3'>
      <h4 className='text-headline text-fg-secondary'>{position.title}</h4>
      {isTimeline && (
        <span className='text-caption text-fg-tertiary'>{formatTenure(position)}</span>
      )}
    </div>
    {position.highlights.length > 0 && (
      <HighlightList highlights={position.highlights} visibleCount={VISIBLE_HIGHLIGHTS} />
    )}
  </li>
);

const Role = ({ experience }: { experience: Experience }) => {
  const isTimeline = experience.positions.length > 1;
  const lastIndex = experience.positions.length - 1;

  return (
    <li className='grid gap-4 py-8 md:grid-cols-[14rem_1fr] md:gap-10'>
      <Company experience={experience} />
      <div>
        {experience.summary && (
          <p className='mb-6 max-w-prose text-[1.0625rem] leading-relaxed text-fg'>
            {experience.summary}
          </p>
        )}
        <ol
          aria-label={`Roles at ${experience.companyName}`}
          className={isTimeline ? 'space-y-8' : undefined}
        >
          {experience.positions.map((position, index) => (
            <PositionEntry
              key={position.title}
              position={position}
              isTimeline={isTimeline}
              isLast={index === lastIndex}
            />
          ))}
        </ol>
        {experience.skills.length > 0 && (
          <ul aria-label='Technologies' className='mt-5 flex flex-wrap gap-2'>
            {experience.skills.map((skill) => (
              <li key={skill}>
                <Tag>{skill}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

const ExperienceSection = () => (
  <Section id='experience' eyebrow='Experience' title='Where I’ve worked'>
    <ol className='divide-y divide-line/70 border-y border-line/70'>
      {experiences.map((experience) => (
        <Role key={experience.id} experience={experience} />
      ))}
    </ol>

    <h3 className='text-eyebrow mt-16 text-fg-tertiary'>Skills</h3>
    <dl className='mt-6 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3'>
      {toolkit.map(({ group, items }) => (
        <div key={group}>
          <dt className='text-headline'>{group}</dt>
          <dd className='mt-2 text-[1.0625rem] leading-relaxed text-fg-secondary'>
            {items.join(', ')}
          </dd>
        </div>
      ))}
    </dl>

    <h3 className='text-eyebrow mt-16 text-fg-tertiary'>Education</h3>
    <ul className='mt-6 space-y-6'>
      {education.map((entry) => (
        <li key={entry.school} className='grid gap-1 md:grid-cols-[14rem_1fr] md:gap-10'>
          <p className='text-caption pt-1 text-fg-tertiary'>
            {entry.start} – {entry.end} · {entry.location}
          </p>
          <div>
            <p className='text-headline'>{entry.school}</p>
            <p className='mt-1 text-[1.0625rem] text-fg-secondary'>
              {entry.degree} · {entry.grade}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </Section>
);

export default ExperienceSection;
