import data from '@/constants/data.json';
import { articles, talks } from './content';
import {
  CATEGORY_NAMES,
  categoriesOf,
  categoryCounts,
  categoryFromSlug,
  slugify,
  unmappedTags,
} from './taxonomy';

describe('topic data', () => {
  it('maps every tag used on a talk or article to a filter category', () => {
    const tags = [...data.talks, ...data.blogs].flatMap(({ topics }) => topics);
    expect(Array.from(new Set(unmappedTags(tags)))).toEqual([]);
  });

  it('places every talk and article in at least one category', () => {
    const uncategorised = [
      ...talks.filter(({ categories }) => categories.length === 0).map(({ title }) => title),
      ...articles
        .filter(({ categories }) => categories.length === 0)
        .map(({ blogTitle }) => blogTitle),
    ];
    expect(uncategorised).toEqual([]);
  });

  it('never assigns one tag to two categories', () => {
    const tags = data.topicCategories.flatMap(({ tags }) => tags.map((tag) => tag.toLowerCase()));
    expect(tags.length).toBe(new Set(tags).size);
  });

  it('gives every talk the same set of fields', () => {
    const shapes = new Set(data.talks.map((talk) => Object.keys(talk).sort().join()));
    expect(shapes.size).toBe(1);
  });
});

describe('categoriesOf', () => {
  it('matches tags case-insensitively and keeps the category order', () => {
    expect(categoriesOf(['gemini', 'ReactJS', 'Frontend'])).toEqual(['React', 'AI']);
    expect(categoriesOf(['React', 'reactjs'])).toEqual(['React']);
  });
});

describe('category slugs', () => {
  it('round-trips every category through a URL-safe slug', () => {
    CATEGORY_NAMES.forEach((name) => {
      expect(slugify(name)).toMatch(/^[a-z0-9-]+$/);
      expect(categoryFromSlug(slugify(name))).toBe(name);
    });
    expect(slugify('Firebase & Cloud')).toBe('firebase-cloud');
    expect(categoryFromSlug('not-a-topic')).toBeNull();
  });
});

describe('categoryCounts', () => {
  it('counts items per category', () => {
    const items = [{ categories: ['React', 'AI'] }, { categories: ['React'] }];
    expect(categoryCounts(items, ['React', 'AI', 'Testing'])).toEqual([
      { name: 'React', count: 2 },
      { name: 'AI', count: 1 },
      { name: 'Testing', count: 0 },
    ]);
  });
});
