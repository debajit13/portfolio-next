import Link from 'next/link';
import { formatTalkDate, type Talk } from '@/lib/content';

const TalkLink = ({ href, label, title }: { href: string; label: string; title: string }) => (
  <Link
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='text-accent hover:underline'
  >
    {label}
    <span className='sr-only'> for {title}</span>
  </Link>
);

const TalkRow = ({ talk, showYear = false }: { talk: Talk; showYear?: boolean }) => (
  <li className='grid gap-1 py-5 sm:grid-cols-[7rem_1fr_auto] sm:items-baseline sm:gap-6'>
    <time dateTime={talk.date} className='text-caption text-fg-tertiary'>
      {formatTalkDate(talk.date, showYear)}
    </time>
    <div>
      <h3 className='text-headline'>{talk.title}</h3>
      <p className='mt-1 text-[0.9375rem] text-fg-secondary'>
        {talk.organiser} · {talk.type === 'Offline' ? 'In person' : 'Online'}
      </p>
    </div>
    {(talk.youtubeLink || talk.slidesLink) && (
      <div className='mt-2 flex gap-4 text-[0.9375rem] sm:mt-0'>
        {talk.youtubeLink && <TalkLink href={talk.youtubeLink} label='Watch' title={talk.title} />}
        {talk.slidesLink && <TalkLink href={talk.slidesLink} label='Slides' title={talk.title} />}
      </div>
    )}
  </li>
);

export default TalkRow;
