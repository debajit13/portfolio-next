'use client';
import { useId, useRef, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { plainText } from '@/lib/content';
import Emphasis from '../ui/Emphasis';

const RESIZE_MS = 320;
const LIST_CLASS = 'max-w-prose space-y-3 text-[1.0625rem] leading-relaxed text-fg-secondary';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const keepInPlace = (element: HTMLElement, durationMs: number) => {
  const anchorTop = element.getBoundingClientRect().top;
  const start = performance.now();
  const follow = (now: number) => {
    const drift = element.getBoundingClientRect().top - anchorTop;
    if (drift !== 0) window.scrollBy({ top: drift, behavior: 'instant' });
    if (now - start < durationMs) requestAnimationFrame(follow);
  };
  requestAnimationFrame(follow);
};

const Highlight = ({ text }: { text: string }) => (
  <li className='relative pl-5'>
    <span
      aria-hidden
      className='absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-fg-tertiary'
    />
    <Emphasis text={text} />
  </li>
);

type HighlightListProps = { highlights: string[]; visibleCount: number };

const HighlightList = ({ highlights, visibleCount }: HighlightListProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const regionId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const visible = highlights.slice(0, visibleCount);
  const more = highlights.slice(visibleCount);

  const toggle = () => {
    if (isExpanded && toggleRef.current) {
      keepInPlace(toggleRef.current, prefersReducedMotion() ? 0 : RESIZE_MS + 60);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='mt-4'>
      <ul className={LIST_CLASS}>
        {visible.map((highlight) => (
          <Highlight key={plainText(highlight)} text={highlight} />
        ))}
      </ul>
      {more.length > 0 && (
        <>
          <div
            id={regionId}
            aria-hidden={!isExpanded}
            className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none ${
              isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`}
          >
            <div className='overflow-hidden'>
              <ul
                className={`${LIST_CLASS} pt-3 transition-opacity duration-300 motion-reduce:transition-none ${
                  isExpanded ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {more.map((highlight) => (
                  <Highlight key={plainText(highlight)} text={highlight} />
                ))}
              </ul>
            </div>
          </div>
          <button
            ref={toggleRef}
            type='button'
            aria-expanded={isExpanded}
            aria-controls={regionId}
            onClick={toggle}
            className='mt-3 inline-flex items-center gap-1 text-[0.9375rem] text-accent hover:underline'
          >
            {isExpanded
              ? 'Show fewer'
              : `${more.length} more ${more.length === 1 ? 'highlight' : 'highlights'}`}
            <BsChevronDown
              aria-hidden
              className={`h-3 w-3 transition-transform duration-300 motion-reduce:transition-none ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>
        </>
      )}
    </div>
  );
};

export default HighlightList;
