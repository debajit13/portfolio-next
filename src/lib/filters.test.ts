import type { Talk } from './content';
import { matchesTalk, talkFormat, withoutCategory, type TalkFilters } from './filters';

const talk = (overrides: Partial<Talk>): Talk => ({
  title: 'Local-First React',
  date: '2026-05-23',
  organiser: 'React Kolkata',
  type: 'Offline',
  youtubeLink: '',
  slidesLink: '',
  topics: ['ReactJS', 'Offline'],
  images: [],
  categories: ['React', 'HTML, CSS & the Web'],
  ...overrides,
});

const noFilters: TalkFilters = { query: '', category: null, format: 'all', videoOnly: false };

describe('matchesTalk', () => {
  it('keeps everything when no filter is set', () => {
    expect(matchesTalk(talk({}), noFilters)).toBe(true);
  });

  it('filters by category, format and recording together', () => {
    const recorded = talk({ youtubeLink: 'https://youtu.be/x' });
    expect(matchesTalk(recorded, { ...noFilters, category: 'React', format: 'in-person', videoOnly: true })).toBe(true);
    expect(matchesTalk(recorded, { ...noFilters, format: 'online' })).toBe(false);
    expect(matchesTalk(talk({}), { ...noFilters, videoOnly: true })).toBe(false);
    expect(matchesTalk(talk({}), { ...noFilters, category: 'AI' })).toBe(false);
  });

  it('searches titles, organisers, tags and categories', () => {
    expect(matchesTalk(talk({}), { ...noFilters, query: 'kolkata' })).toBe(true);
    expect(matchesTalk(talk({}), { ...noFilters, query: 'reactjs' })).toBe(true);
    expect(matchesTalk(talk({}), { ...noFilters, query: 'css' })).toBe(true);
    expect(matchesTalk(talk({}), { ...noFilters, query: 'kubernetes' })).toBe(false);
  });
});

describe('talkFormat', () => {
  it('maps the stored type to a filter format', () => {
    expect(talkFormat({ type: 'Offline' })).toBe('in-person');
    expect(talkFormat({ type: 'Online' })).toBe('online');
  });
});

describe('withoutCategory', () => {
  it('drops only the category so counts reflect the other filters', () => {
    expect(withoutCategory({ ...noFilters, category: 'AI', format: 'online' })).toEqual({
      ...noFilters,
      format: 'online',
    });
  });
});
