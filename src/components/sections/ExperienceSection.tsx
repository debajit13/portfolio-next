import {
  education,
  experiences,
  experienceSpan,
  formatTenure,
  plainText,
  toolkit,
  type Experience,
} from '@/lib/content';
import Section from '../ui/Section';
import Tag from '../ui/Tag';
import Emphasis from '../ui/Emphasis';

const VISIBLE_HIGHLIGHTS = 3;

const Highlight = ({ text }: { text: string }) => (
  <li className='relative pl-5'>
    <span
      aria-hidden
      className='absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-fg-tertiary'
    />
    <Emphasis text={text} />
  </li>
);

const Role = ({ experience }: { experience: Experience }) => {
  const visible = experience.highlights.slice(0, VISIBLE_HIGHLIGHTS);
  const more = experience.highlights.slice(VISIBLE_HIGHLIGHTS);
  return (
    <li className='grid gap-3 py-8 md:grid-cols-[14rem_1fr] md:gap-10'>
      <div>
        <h3 className='text-headline'>{experience.companyName}</h3>
        <p className='text-caption mt-1 text-fg-tertiary'>
          {formatTenure(experienceSpan(experience))} · {experience.location}
        </p>
      </div>
      <div>
        <ul aria-label={`Roles at ${experience.companyName}`} className='space-y-1'>
          {experience.positions.map((position) => (
            <li key={position.title} className='flex flex-wrap items-baseline gap-x-3'>
              <span className='text-headline text-fg-secondary'>{position.title}</span>
              {experience.positions.length > 1 && (
                <span className='text-caption text-fg-tertiary'>{formatTenure(position)}</span>
              )}
            </li>
          ))}
        </ul>
        <ul className='mt-4 max-w-prose space-y-3 text-[1.0625rem] leading-relaxed text-fg-secondary'>
          {visible.map((highlight) => (
            <Highlight key={plainText(highlight)} text={highlight} />
          ))}
        </ul>
        {more.length > 0 && (
          <details className='group mt-3 max-w-prose'>
            <summary className='inline-flex cursor-pointer list-none items-center gap-1 text-[0.9375rem] text-accent hover:underline [&::-webkit-details-marker]:hidden'>
              <span className='group-open:hidden'>
                {more.length} more {more.length === 1 ? 'highlight' : 'highlights'}
              </span>
              <span className='hidden group-open:inline'>Show fewer</span>
            </summary>
            <ul className='mt-3 space-y-3 text-[1.0625rem] leading-relaxed text-fg-secondary'>
              {more.map((highlight) => (
                <Highlight key={plainText(highlight)} text={highlight} />
              ))}
            </ul>
          </details>
        )}
        <ul aria-label='Technologies' className='mt-5 flex flex-wrap gap-2'>
          {experience.skills.map((skill) => (
            <li key={skill}>
              <Tag>{skill}</Tag>
            </li>
          ))}
        </ul>
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
    <ul className='mt-6'>
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
