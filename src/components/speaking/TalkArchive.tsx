'use client';
import { useMemo, useState } from 'react';
import { groupTalksByYear, matchesQuery, talks, talkTopics } from '@/lib/content';
import FilterBar, { ALL_TOPICS } from '../ui/FilterBar';
import TalkRow from './TalkRow';

const TalkArchive = () => {
  const [query, setQuery] = useState('');
  const [topic, setTopic] = useState(ALL_TOPICS);

  const visible = useMemo(
    () =>
      talks.filter(
        (talk) =>
          (topic === ALL_TOPICS || talk.topics.includes(topic)) &&
          matchesQuery(query, talk.title, talk.organiser, ...talk.topics)
      ),
    [query, topic]
  );

  return (
    <>
      <FilterBar
        label='talks'
        query={query}
        onQueryChange={setQuery}
        topics={talkTopics}
        topic={topic}
        onTopicChange={setTopic}
      />
      <p aria-live='polite' className='text-caption mt-8 text-fg-tertiary'>
        {visible.length} {visible.length === 1 ? 'talk' : 'talks'}
      </p>
      {visible.length === 0 && (
        <p className='mt-6 text-fg-secondary'>
          Nothing matches that search. Try a different word or topic.
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
