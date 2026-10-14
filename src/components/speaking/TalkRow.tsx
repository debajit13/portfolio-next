import Link from 'next/link';
import { formatTalkDate, type Talk } from '@/lib/content';
import { talkFormat } from '@/lib/filters';
import TalkPhotos from './TalkPhotos';

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
  <li className='flex gap-4 py-5 sm:gap-6'>
    <TalkPhotos talk={talk} />
    <div className='min-w-0 flex-1'>
      <time dateTime={talk.date} className='text-caption text-fg-tertiary'>
        {formatTalkDate(talk.date, showYear)}
      </time>
      <h3 className='text-headline mt-0.5'>{talk.title}</h3>
      <p className='mt-1 text-[0.9375rem] text-fg-secondary'>
        {talk.organiser} · {talkFormat(talk) === 'in-person' ? 'In person' : 'Online'}
      </p>
      {(talk.youtubeLink || talk.slidesLink) && (
        <div className='mt-2 flex gap-4 text-[0.9375rem]'>
          {talk.youtubeLink && <TalkLink href={talk.youtubeLink} label='Watch' title={talk.title} />}
          {talk.slidesLink && <TalkLink href={talk.slidesLink} label='Slides' title={talk.title} />}
        </div>
      )}
    </div>
  </li>
);

export default TalkRow;
