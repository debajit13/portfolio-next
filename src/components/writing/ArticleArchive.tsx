'use client';
import { useMemo, useState } from 'react';
import { articles, articleTopics, matchesQuery } from '@/lib/content';
import FilterBar, { ALL_TOPICS } from '../ui/FilterBar';
import ArticleCard from './ArticleCard';

const ArticleArchive = () => {
  const [query, setQuery] = useState('');
  const [topic, setTopic] = useState(ALL_TOPICS);

  const visible = useMemo(
    () =>
      articles.filter(
        (article) =>
          (topic === ALL_TOPICS || article.topics.includes(topic)) &&
          matchesQuery(query, article.blogTitle, article.blogDescription, ...article.topics)
      ),
    [query, topic]
  );

  return (
    <>
      <FilterBar
        label='articles'
        query={query}
        onQueryChange={setQuery}
        topics={articleTopics}
        topic={topic}
        onTopicChange={setTopic}
      />
      <p aria-live='polite' className='text-caption mt-8 text-fg-tertiary'>
        {visible.length} {visible.length === 1 ? 'article' : 'articles'}
      </p>
      {visible.length > 0 ? (
        <ul className='mt-6 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'>
          {visible.map((article) => (
            <ArticleCard key={article.blogLink} article={article} />
          ))}
        </ul>
      ) : (
        <p className='mt-6 text-fg-secondary'>
          Nothing matches that search. Try a different word or topic.
        </p>
      )}
    </>
  );
};

export default ArticleArchive;
