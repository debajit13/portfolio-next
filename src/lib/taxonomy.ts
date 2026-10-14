import data from '@/constants/data.json';

export const CATEGORY_NAMES = data.topicCategories.map(({ name }) => name);

export const normalizeTag = (tag: string) => tag.trim().toLowerCase();

const categoryByTag = new Map(
  data.topicCategories.flatMap(({ name, tags }) =>
    tags.map((tag) => [normalizeTag(tag), name] as const)
  )
);

const broadTags = new Set(data.broadTags.map(normalizeTag));

export const categoriesOf = (tags: string[]) => {
  const matched = new Set(tags.map((tag) => categoryByTag.get(normalizeTag(tag))));
  return CATEGORY_NAMES.filter((name) => matched.has(name));
};

export const unmappedTags = (tags: string[]) =>
  tags.filter((tag) => !broadTags.has(normalizeTag(tag)) && !categoryByTag.has(normalizeTag(tag)));

export const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const categoryFromSlug = (slug: string) =>
  CATEGORY_NAMES.find((name) => slugify(name) === slug) ?? null;

export const categoryCounts = (items: { categories: string[] }[], names: string[]) =>
  names.map((name) => ({
    name,
    count: items.filter(({ categories }) => categories.includes(name)).length,
  }));

export const usedCategories = (items: { categories: string[] }[]) =>
  CATEGORY_NAMES.filter((name) => items.some(({ categories }) => categories.includes(name)));
