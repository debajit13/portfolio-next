'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

type ScrollRowProps = {
  label: string;
  selectedKey: string;
  children: React.ReactNode;
};

const FADE = '2.5rem';

const ScrollRow = ({ label, selectedKey, children }: ScrollRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ atStart: true, atEnd: true });

  const measure = useCallback(() => {
    const row = rowRef.current;
    if (!row) return;
    setEdges({
      atStart: row.scrollLeft <= 1,
      atEnd: row.scrollLeft + row.clientWidth >= row.scrollWidth - 1,
    });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  useEffect(() => {
    const row = rowRef.current;
    const selected = row?.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (!row || !selected) return;
    const start = selected.offsetLeft;
    const end = start + selected.offsetWidth;
    if (start < row.scrollLeft || end > row.scrollLeft + row.clientWidth) {
      row.scrollLeft = start - row.clientWidth / 2 + selected.offsetWidth / 2;
    }
    measure();
  }, [selectedKey, measure]);

  const scrollByPage = (direction: 1 | -1) =>
    rowRef.current?.scrollBy({
      left: direction * rowRef.current.clientWidth * 0.75,
      behavior: 'smooth',
    });

  const mask = `linear-gradient(to right, ${
    edges.atStart ? 'black' : 'transparent'
  }, black ${FADE}, black calc(100% - ${FADE}), ${edges.atEnd ? 'black' : 'transparent'})`;

  return (
    <div className='relative'>
      <div
        ref={rowRef}
        role='group'
        aria-label={label}
        onScroll={measure}
        style={{ maskImage: mask, WebkitMaskImage: mask }}
        className='flex gap-1.5 overflow-x-auto scroll-smooth [scrollbar-width:none] motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden'
      >
        {children}
      </div>
      {!edges.atStart && (
        <div className='pointer-events-none absolute inset-y-0 left-0 hidden items-center md:flex'>
          <button
            type='button'
            aria-label='Scroll topics left'
            onClick={() => scrollByPage(-1)}
            className='glass pressable pointer-events-auto grid h-8 w-8 place-items-center rounded-full text-fg'
          >
            <BsChevronLeft aria-hidden className='h-3.5 w-3.5' />
          </button>
        </div>
      )}
      {!edges.atEnd && (
        <div className='pointer-events-none absolute inset-y-0 right-0 hidden items-center md:flex'>
          <button
            type='button'
            aria-label='Scroll topics right'
            onClick={() => scrollByPage(1)}
            className='glass pressable pointer-events-auto grid h-8 w-8 place-items-center rounded-full text-fg'
          >
            <BsChevronRight aria-hidden className='h-3.5 w-3.5' />
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollRow;
