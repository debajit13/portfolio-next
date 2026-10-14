import type { Article, Talk } from './content';
import { matchesQuery } from './content';

export const TALK_FORMATS = [
  { value: 'all', label: 'All' },
  { value: 'in-person', label: 'In person' },
  { value: 'online', label: 'Online' },
] as const;

export type TalkFormat = (typeof TALK_FORMATS)[number]['value'];

export type TalkFilters = {
  query: string;
  category: string | null;
  format: TalkFormat;
  videoOnly: boolean;
};

export type ArticleFilters = {
  query: string;
  category: string | null;
};

const FORMAT_BY_TYPE: Record<string, TalkFormat> = { Offline: 'in-person', Online: 'online' };

export const talkFormat = (talk: Pick<Talk, 'type'>) => FORMAT_BY_TYPE[talk.type] ?? 'online';

export const matchesTalk = (talk: Talk, { query, category, format, videoOnly }: TalkFilters) =>
  (!category || talk.categories.includes(category)) &&
  (format === 'all' || talkFormat(talk) === format) &&
  (!videoOnly || Boolean(talk.youtubeLink)) &&
  matchesQuery(query, talk.title, talk.organiser, ...talk.topics, ...talk.categories);

export const matchesArticle = (article: Article, { query, category }: ArticleFilters) =>
  (!category || article.categories.includes(category)) &&
  matchesQuery(
    query,
    article.blogTitle,
    article.blogDescription,
    ...article.topics,
    ...article.categories
  );

export const withoutCategory = <T extends { category: string | null }>(filters: T): T => ({
  ...filters,
  category: null,
});
