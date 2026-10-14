'use client';
import { useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import ScrollRow from './ScrollRow';

type CategoryOption = { name: string; count: number };

type FilterBarProps = {
  label: string;
  query: string;
  onQueryChange: (query: string) => void;
  categories: CategoryOption[];
  category: string | null;
  onCategoryChange: (category: string | null) => void;
  controls?: React.ReactNode;
};

const STICKY_TOP_PX = 76;

const chipClass = (isSelected: boolean) =>
  `pressable inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full px-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-40 ${
    isSelected
      ? 'bg-fg font-medium text-canvas'
      : 'bg-fg/[0.06] text-fg-secondary enabled:hover:bg-fg/10 enabled:hover:text-fg'
  }`;

const useIsStuck = () => {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) =>
        setIsStuck(!entry.isIntersecting && entry.boundingClientRect.top < STICKY_TOP_PX),
      { rootMargin: `-${STICKY_TOP_PX}px 0px 0px 0px` }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return { sentinelRef, isStuck };
};

const FilterBar = ({
  label,
  query,
  onQueryChange,
  categories,
  category,
  onCategoryChange,
  controls,
}: FilterBarProps) => {
  const { sentinelRef, isStuck } = useIsStuck();

  return (
    <>
      <div ref={sentinelRef} aria-hidden className='h-px' />
      <div
        className={`z-30 -mx-2 flex flex-col gap-3 rounded-outer p-2 transition-[background-color,box-shadow] duration-200 md:sticky md:top-[4.75rem] ${
          isStuck ? 'md:glass' : ''
        }`}
      >
        <div className='flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center'>
          <label className='relative block sm:w-72'>
            <span className='sr-only'>Search {label}</span>
            <BsSearch
              aria-hidden
              className='pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-fg-tertiary'
            />
            <input
              type='search'
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder={`Search ${label}`}
              className='h-9 w-full rounded-full border-0 bg-fg/[0.06] pl-9 pr-4 text-[0.9375rem] text-fg placeholder:text-fg-tertiary focus:ring-2 focus:ring-accent'
            />
          </label>
          {controls && <div className='flex flex-wrap items-center gap-2'>{controls}</div>}
        </div>
        <ScrollRow label='Filter by topic' selectedKey={category ?? ''}>
          <button
            type='button'
            aria-pressed={category === null}
            onClick={() => onCategoryChange(null)}
            className={chipClass(category === null)}
          >
            All topics
          </button>
          {categories.map(({ name, count }) => {
            const isSelected = name === category;
            return (
              <button
                key={name}
                type='button'
                aria-pressed={isSelected}
                disabled={count === 0 && !isSelected}
                onClick={() => onCategoryChange(isSelected ? null : name)}
                className={chipClass(isSelected)}
              >
                {name}
                <span
                  className={`text-caption tabular-nums ${
                    isSelected ? 'text-canvas/70' : 'text-fg-tertiary'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </ScrollRow>
      </div>
    </>
  );
};

export default FilterBar;
