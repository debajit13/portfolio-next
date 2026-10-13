import Link from 'next/link';
import { BsChevronRight } from 'react-icons/bs';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  action?: { href: string; label: string };
  tone?: 'canvas' | 'surface';
  children: React.ReactNode;
};

const Section = ({
  id,
  eyebrow,
  title,
  description,
  action,
  tone = 'canvas',
  children,
}: SectionProps) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    className={`py-16 md:py-24 ${tone === 'surface' ? 'bg-surface' : ''}`}
  >
    <div className='mx-auto max-w-page px-4 sm:px-6'>
      <div className='mb-10 flex flex-wrap items-end justify-between gap-4'>
        <div>
          <p className='text-eyebrow text-fg-tertiary'>{eyebrow}</p>
          <h2 id={`${id}-title`} className='text-title mt-2'>
            {title}
          </h2>
          {description && (
            <p className='mt-3 max-w-prose text-[1.0625rem] text-fg-secondary'>{description}</p>
          )}
        </div>
        {action && (
          <Link
            href={action.href}
            className='group inline-flex items-center gap-1 text-[0.9375rem] text-accent hover:underline'
          >
            {action.label}
            <BsChevronRight
              aria-hidden
              className='h-3 w-3 transition-transform group-hover:translate-x-0.5'
            />
          </Link>
        )}
      </div>
      {children}
    </div>
  </section>
);

export default Section;
