'use client';
import { useMemo } from 'react';
import { BsPlayCircle } from 'react-icons/bs';
import { groupTalksByYear, talkCategories, talks } from '@/lib/content';
import {
  matchesTalk,
  TALK_FORMATS,
  withoutCategory,
  type TalkFilters,
  type TalkFormat,
} from '@/lib/filters';
import { categoryCounts, categoryFromSlug, slugify } from '@/lib/taxonomy';
import { useUrlState } from '@/lib/useUrlState';
import FilterBar from '../ui/FilterBar';
import ResultSummary from '../ui/ResultSummary';
import SegmentedControl from '../ui/SegmentedControl';
import ToggleChip from '../ui/ToggleChip';
import TalkRow from './TalkRow';

const DEFAULT_PARAMS = { q: '', topic: '', format: 'all', video: '' };

const isTalkFormat = (value: string): value is TalkFormat =>
  TALK_FORMATS.some((format) => format.value === value);

const TalkArchive = () => {
  const [params, update, reset] = useUrlState(DEFAULT_PARAMS);

  const filters: TalkFilters = {
    query: params.q,
    category: categoryFromSlug(params.topic),
    format: isTalkFormat(params.format) ? params.format : 'all',
    videoOnly: params.video === '1',
  };

  const visible = talks.filter((talk) => matchesTalk(talk, filters));
  const counts = useMemo(
    () =>
      categoryCounts(
        talks.filter((talk) => matchesTalk(talk, withoutCategory(filters))),
        talkCategories
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- counts depend on the non-topic filters only
    [params.q, params.format, params.video]
  );
  const isFiltered = Object.entries(params).some(
    ([key, value]) => value !== DEFAULT_PARAMS[key as keyof typeof DEFAULT_PARAMS]
  );

  return (
    <>
      <FilterBar
        label='talks'
        query={params.q}
        onQueryChange={(q) => update({ q })}
        categories={counts}
        category={filters.category}
        onCategoryChange={(category) => update({ topic: category ? slugify(category) : '' })}
        controls={
          <>
            <SegmentedControl
              label='Format'
              options={TALK_FORMATS}
              value={filters.format}
              onChange={(format) => update({ format })}
            />
            <ToggleChip
              pressed={filters.videoOnly}
              onChange={(pressed) => update({ video: pressed ? '1' : '' })}
              icon={<BsPlayCircle aria-hidden className='h-3.5 w-3.5' />}
            >
              Has video
            </ToggleChip>
          </>
        }
      />
      <ResultSummary
        shown={visible.length}
        total={talks.length}
        noun='talks'
        isFiltered={isFiltered}
        onReset={reset}
      />
      {visible.length === 0 && (
        <p className='mt-6 text-fg-secondary'>
          Nothing matches these filters. Try another topic or a shorter search.
        </p>
      )}
      {groupTalksByYear(visible).map(({ year, talks: talksInYear }) => (
        <section key={year} aria-labelledby={`talks-${year}`} className='mt-10'>
          <h2 id={`talks-${year}`} className='text-title pb-3'>
            {year}
          </h2>
          <ul className='divide-y divide-line/70 border-y border-line/70'>
            {talksInYear.map((talk) => (
              <TalkRow key={`${talk.title}-${talk.date}`} talk={talk} />
            ))}
          </ul>
        </section>
      ))}
    </>
  );
};

export default TalkArchive;
