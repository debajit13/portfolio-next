'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { BsImages } from 'react-icons/bs';
import type { Talk } from '@/lib/content';
import PhotoViewer from './PhotoViewer';

const TalkPhotos = ({ talk }: { talk: Pick<Talk, 'title' | 'organiser' | 'images'> }) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const photos = talk.images.map((src, index) => ({
    src,
    alt: `Photo ${index + 1} of ${talk.images.length} from “${talk.title}” at ${talk.organiser}`,
  }));

  if (photos.length === 0) return null;

  const close = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <>
      <button
        ref={triggerRef}
        type='button'
        onClick={() => setIsOpen(true)}
        aria-label={`View ${photos.length} photos from “${talk.title}”`}
        className='pressable group relative aspect-[4/3] w-24 shrink-0 overflow-hidden rounded-inner bg-surface sm:w-36'
      >
        <Image
          src={photos[0].src}
          alt=''
          fill
          sizes='(min-width: 640px) 144px, 96px'
          className='object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100'
        />
        {photos.length > 1 && (
          <span className='glass-clear absolute bottom-1.5 right-1.5 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.6875rem] font-medium'>
            <BsImages aria-hidden className='h-3 w-3' />
            {photos.length}
          </span>
        )}
      </button>
      {isOpen && (
        <PhotoViewer
          photos={photos}
          startIndex={0}
          caption={`${talk.title} · ${talk.organiser}`}
          onClose={close}
        />
      )}
    </>
  );
};

export default TalkPhotos;
