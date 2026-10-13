import {
  experiences,
  experienceSpan,
  plainText,
  splitEmphasis,
  formatTalkDate,
  formatTenure,
  groupTalksByYear,
  matchesQuery,
  toParagraphs,
  sortTalksByDate,
  talks,
  talkTopics,
  topicsByFrequency,
  type Talk,
  yearsOfExperience,
} from './content';

const talk = (title: string, date: string) => ({ title, date }) as Talk;

describe('yearsOfExperience', () => {
  it('counts only completed years since the career start', () => {
    expect(yearsOfExperience('2021-04-01', new Date('2026-03-31'))).toBe(4);
    expect(yearsOfExperience('2021-04-01', new Date('2026-04-02'))).toBe(5);
  });
});

describe('talk dates', () => {
  it('stores every talk date as an ISO calendar date', () => {
    talks.forEach(({ date }) => expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/));
  });

  it('formats calendar dates without shifting them by time zone', () => {
    expect(formatTalkDate('2026-05-25')).toBe('May 25');
    expect(formatTalkDate('2026-01-01', true)).toBe('Jan 1, 2026');
  });
});

describe('formatTenure', () => {
  it('renders every role in one consistent format', () => {
    expect(formatTenure({ start: '2021-04', end: '2022-04' })).toBe('Apr 2021 – Apr 2022');
    expect(formatTenure({ start: '2026-01', end: null })).toBe('Jan 2026 – Present');
    experiences.forEach((experience) =>
      expect(formatTenure(experienceSpan(experience))).toMatch(
        /^[A-Z][a-z]{2} \d{4} – ([A-Z][a-z]{2} \d{4}|Present)$/
      )
    );
  });
});

describe('experienceSpan', () => {
  it('spans from the earliest position to the latest one', () => {
    const span = experienceSpan({
      positions: [
        { start: '2025-04', end: '2026-01' },
        { start: '2022-05', end: '2025-03' },
      ],
    });
    expect(formatTenure(span)).toBe('May 2022 – Jan 2026');
  });
});

describe('splitEmphasis', () => {
  it('marks text wrapped in double asterisks as strong', () => {
    expect(splitEmphasis('Cut reviews **25%** across **70+ developers**')).toEqual([
      { text: 'Cut reviews ', strong: false },
      { text: '25%', strong: true },
      { text: ' across ', strong: false },
      { text: '70+ developers', strong: true },
    ]);
    expect(plainText('Cut reviews **25%**')).toBe('Cut reviews 25%');
  });
});

describe('sortTalksByDate', () => {
  it('orders talks from newest to oldest regardless of source order', () => {
    const sorted = sortTalksByDate([
      talk('old', '2021-06-06'),
      talk('new', '2026-05-25'),
      talk('middle', '2025-02-28'),
    ]);
    expect(sorted.map(({ title }) => title)).toEqual(['new', 'middle', 'old']);
  });
});

describe('groupTalksByYear', () => {
  it('groups consecutive talks under their year', () => {
    const groups = groupTalksByYear([
      talk('a', '2026-05-25'),
      talk('b', '2026-03-07'),
      talk('c', '2025-11-02'),
    ]);
    expect(groups.map(({ year, talks }) => [year, talks.length])).toEqual([
      [2026, 2],
      [2025, 1],
    ]);
  });
});

describe('topicsByFrequency', () => {
  it('keeps topics that meet the threshold, most frequent first', () => {
    const list = [{ topics: ['React', 'Git'] }, { topics: ['React'] }, { topics: ['Vue'] }];
    expect(topicsByFrequency(list, 2)).toEqual(['React']);
    expect(topicsByFrequency(list, 1)[0]).toBe('React');
  });

  it('only offers talk filters that return results', () => {
    talkTopics.forEach((topic) =>
      expect(talks.some(({ topics }) => topics.includes(topic))).toBe(true)
    );
  });
});

describe('toParagraphs', () => {
  it('splits on blank lines and drops surrounding whitespace', () => {
    expect(toParagraphs(' One. \n\nTwo.\n \nThree. ')).toEqual(['One.', 'Two.', 'Three.']);
    expect(toParagraphs('Single paragraph.')).toEqual(['Single paragraph.']);
  });
});

describe('matchesQuery', () => {
  it('matches any field case-insensitively, ignoring surrounding whitespace', () => {
    expect(matchesQuery('  react ', 'Local-First React')).toBe(true);
    expect(matchesQuery('kolkata', 'Local-First React', 'React Kolkata')).toBe(true);
    expect(matchesQuery('vue', 'Local-First React')).toBe(false);
  });
});

