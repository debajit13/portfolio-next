'use client';
import { useMemo } from 'react';
import { articleCategories, articles } from '@/lib/content';
import { matchesArticle, withoutCategory, type ArticleFilters } from '@/lib/filters';
import { categoryCounts, categoryFromSlug, slugify } from '@/lib/taxonomy';
import { useUrlState } from '@/lib/useUrlState';
import FilterBar from '../ui/FilterBar';
import ResultSummary from '../ui/ResultSummary';
import ArticleCard from './ArticleCard';

const DEFAULT_PARAMS = { q: '', topic: '' };

const ArticleArchive = () => {
  const [params, update, reset] = useUrlState(DEFAULT_PARAMS);

  const filters: ArticleFilters = { query: params.q, category: categoryFromSlug(params.topic) };
  const visible = articles.filter((article) => matchesArticle(article, filters));
  const counts = useMemo(
    () =>
      categoryCounts(
        articles.filter((article) => matchesArticle(article, withoutCategory(filters))),
        articleCategories
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- counts depend on the search only
    [params.q]
  );
  const isFiltered = params.q !== '' || params.topic !== '';

  return (
    <>
      <FilterBar
        label='articles'
        query={params.q}
        onQueryChange={(q) => update({ q })}
        categories={counts}
        category={filters.category}
        onCategoryChange={(category) => update({ topic: category ? slugify(category) : '' })}
      />
      <ResultSummary
        shown={visible.length}
        total={articles.length}
        noun='articles'
        isFiltered={isFiltered}
        onReset={reset}
      />
      {visible.length > 0 ? (
        <ul className='mt-6 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'>
          {visible.map((article) => (
            <ArticleCard key={article.blogLink} article={article} />
          ))}
        </ul>
      ) : (
        <p className='mt-6 text-fg-secondary'>
          Nothing matches these filters. Try another topic or a shorter search.
        </p>
      )}
    </>
  );
};

export default ArticleArchive;
