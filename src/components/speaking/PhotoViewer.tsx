'use client';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight, BsXLg } from 'react-icons/bs';

export type Photo = { src: string; alt: string };

type PhotoViewerProps = {
  photos: Photo[];
  startIndex: number;
  caption: string;
  onClose: () => void;
};

const controlClass =
  'glass-clear pressable pointer-events-auto grid h-11 w-11 place-items-center rounded-full disabled:pointer-events-none disabled:opacity-0';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const PhotoViewer = ({ photos, startIndex, caption, onClose }: PhotoViewerProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(startIndex);
  const lastIndex = photos.length - 1;

  const slideIndex = useCallback(() => {
    const track = trackRef.current;
    return track?.clientWidth ? Math.round(track.scrollLeft / track.clientWidth) : 0;
  }, []);

  const goTo = useCallback(
    (target: number, behavior: ScrollBehavior = 'smooth') => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(target, lastIndex));
      track.scrollTo({
        left: clamped * track.clientWidth,
        behavior: prefersReducedMotion() ? 'auto' : behavior,
      });
      setIndex(clamped);
    },
    [lastIndex]
  );

  const step = useCallback((delta: number) => goTo(slideIndex() + delta), [goTo, slideIndex]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    goTo(startIndex, 'auto');
  }, [goTo, startIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      step(event.key === 'ArrowRight' ? 1 : -1);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [step]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog?.open && !dialog.contains(document.activeElement)) dialog.focus();
  }, [index]);

  const closeOnEmptySpace = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) dialogRef.current?.close();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label={caption}
      onClose={onClose}
      tabIndex={-1}
      className='photo-viewer fixed inset-0 m-0 h-full max-h-none w-full max-w-none overflow-hidden bg-transparent p-0 text-white outline-none'
    >
      <div
        ref={trackRef}
        onScroll={() => setIndex(slideIndex())}
        className='flex h-full snap-x snap-mandatory overflow-x-auto overscroll-contain [scrollbar-width:none]'
      >
        {photos.map((photo) => (
          <div
            key={photo.src}
            onClick={closeOnEmptySpace}
            className='flex h-full w-full shrink-0 snap-center items-center justify-center px-2 pb-16 pt-16 sm:px-20 sm:pb-14 sm:pt-6'
          >
            <div className='relative h-full w-full'>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes='100vw'
                quality={85}
                loading='eager'
                className='object-contain'
              />
            </div>
          </div>
        ))}
      </div>

      <div className='pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-5'>
        <p
          aria-live='polite'
          className='glass-clear text-caption rounded-full px-3 py-1.5 tabular-nums'
        >
          {index + 1} of {photos.length}
        </p>
        <button
          type='button'
          aria-label='Close photos'
          onClick={() => dialogRef.current?.close()}
          className={controlClass}
        >
          <BsXLg aria-hidden className='h-4 w-4' />
        </button>
      </div>

      {photos.length > 1 && (
        <>
          <div className='pointer-events-none absolute inset-y-0 left-3 hidden items-center sm:flex'>
            <button
              type='button'
              aria-label='Previous photo'
              disabled={index === 0}
              onClick={() => step(-1)}
              className={controlClass}
            >
              <BsChevronLeft aria-hidden className='h-4 w-4' />
            </button>
          </div>
          <div className='pointer-events-none absolute inset-y-0 right-3 hidden items-center sm:flex'>
            <button
              type='button'
              aria-label='Next photo'
              disabled={index === lastIndex}
              onClick={() => step(1)}
              className={controlClass}
            >
              <BsChevronRight aria-hidden className='h-4 w-4' />
            </button>
          </div>
        </>
      )}

      <p className='pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-5 pt-10 text-center text-[0.9375rem] text-white/85'>
        {caption}
      </p>
    </dialog>
  );
};

export default PhotoViewer;
