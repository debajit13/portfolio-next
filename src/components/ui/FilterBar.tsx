'use client';
import { BsSearch } from 'react-icons/bs';

export const ALL_TOPICS = 'All';

type FilterBarProps = {
  label: string;
  query: string;
  onQueryChange: (query: string) => void;
  topics: string[];
  topic: string;
  onTopicChange: (topic: string) => void;
};

const FilterBar = ({
  label,
  query,
  onQueryChange,
  topics,
  topic,
  onTopicChange,
}: FilterBarProps) => (
  <div className='glass sticky top-[4.75rem] z-30 flex flex-col gap-2 rounded-outer p-2 md:flex-row md:items-center'>
    <label className='relative block shrink-0 md:w-72'>
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
        className='h-10 w-full rounded-inner border-0 bg-fg/[0.06] pl-9 pr-3 text-[0.9375rem] text-fg placeholder:text-fg-tertiary focus:ring-2 focus:ring-accent'
      />
    </label>
    <div
      role='group'
      aria-label='Filter by topic'
      className='flex gap-1.5 overflow-x-auto [scrollbar-width:none]'
    >
      {[ALL_TOPICS, ...topics].map((item) => {
        const isSelected = item === topic;
        return (
          <button
            key={item}
            type='button'
            aria-pressed={isSelected}
            onClick={() => onTopicChange(item)}
            className={`pressable h-10 shrink-0 rounded-full px-4 text-sm ${
              isSelected
                ? 'bg-fg font-medium text-canvas'
                : 'text-fg-secondary hover:bg-fg/[0.07] hover:text-fg'
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  </div>
);

export default FilterBar;
