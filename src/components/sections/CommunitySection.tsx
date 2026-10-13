import { community, recognition } from '@/lib/content';
import Section from '../ui/Section';

const CommunitySection = () => (
  <Section id='community' eyebrow='Community' title='Giving back'>
    <div className='grid gap-12 md:grid-cols-2'>
      <div>
        <h3 className='text-eyebrow text-fg-tertiary'>Roles</h3>
        <ul className='mt-4 divide-y divide-line/70 border-y border-line/70'>
          {community.map(({ name, role }) => (
            <li key={name} className='flex items-baseline justify-between gap-4 py-3.5'>
              <span className='text-[1.0625rem]'>{name}</span>
              <span className='text-caption shrink-0 text-right text-fg-tertiary'>{role}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className='text-eyebrow text-fg-tertiary'>Recognition</h3>
        <ul className='mt-4 space-y-3.5 text-[1.0625rem] leading-relaxed text-fg-secondary'>
          {recognition.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

export default CommunitySection;
