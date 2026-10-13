import Image from 'next/image';
import { profile, socialLinks, talks, yearsOfExperience } from '@/lib/content';
import LinkButton from '../ui/LinkButton';

const Hero = () => {
  const years = yearsOfExperience();
  const linkedIn = socialLinks.find(({ title }) => title === 'LinkedIn');

  const stats = [
    { value: `${years}+`, label: 'Years shipping production software' },
    ...profile.stats,
    { value: String(talks.length), label: 'Talks at DevFests, I/O Extended and meetups' },
  ];

  return (
    <section aria-labelledby='hero-title' className='pt-12 md:pt-20'>
      <div className='mx-auto grid max-w-page items-center gap-8 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:gap-16'>
        <div>
          <p className='text-headline text-fg-secondary'>
            {profile.role} at {profile.company}
          </p>
          <h1 id='hero-title' className='text-display mt-3'>
            {profile.name}
          </h1>
          <p className='text-title mt-3 max-w-[22ch] text-fg-secondary'>{profile.tagline}</p>
          <p className='text-lead mt-6 max-w-prose text-fg-secondary'>
            {years}+ years shipping production software. {profile.summary}
          </p>
          <div className='mt-8 flex flex-wrap gap-3'>
            {linkedIn && (
              <LinkButton href={linkedIn.URL} external>
                Connect on LinkedIn
              </LinkButton>
            )}
            <LinkButton href='#experience' variant='secondary'>
              See experience
            </LinkButton>
          </div>
        </div>
        <Image
          src={profile.image}
          alt={`Portrait of ${profile.name}`}
          width={320}
          height={320}
          priority
          sizes='(min-width: 768px) 320px, 96px'
          className='order-first h-24 w-24 rounded-full object-cover md:order-none md:h-80 md:w-80 md:rounded-[2.5rem]'
        />
      </div>

      <div className='mx-auto mt-14 max-w-page px-4 sm:px-6 md:mt-24'>
        <dl className='grid grid-cols-2 gap-px overflow-hidden rounded-outer bg-line/70 md:grid-cols-4'>
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className='flex flex-col-reverse justify-end gap-1 bg-canvas p-5 md:p-6'
            >
              <dt className='text-caption text-fg-secondary'>{label}</dt>
              <dd className='text-[2rem] font-semibold leading-none tracking-[-0.03em]'>
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
