import data from '@/constants/data.json';

export type Talk = (typeof data.talks)[number];
export type Article = (typeof data.blogs)[number];
export type Experience = (typeof data.experiences)[number];
export type Project = (typeof data.projects)[number];
export type Testimonial = (typeof data.testimonials)[number];
export type SocialLink = (typeof data.socialLinks)[number];
export type DateSpan = { start: string; end: string | null };

export const profile = data.profile;
export const experiences = data.experiences;
export const toolkit = data.toolkit;
export const education = data.education;
export const writingStats = data.writingStats;
export const projects = data.projects;
export const community = data.community;
export const recognition = data.recognition;
export const socialLinks = data.socialLinks;
export const testimonials = data.testimonials;
export const articles = data.blogs;
export const articleTopics = data.blogTopics;

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;
const MIN_TALKS_PER_TOPIC = 4;

export const yearsOfExperience = (
  careerStart: string = profile.careerStart,
  now: Date = new Date()
) => Math.floor((now.getTime() - new Date(careerStart).getTime()) / MS_PER_YEAR);

const utcDate = (isoDate: string) => new Date(`${isoDate.slice(0, 10)}T00:00:00Z`);

const formatUTC = (isoDate: string, options: Intl.DateTimeFormatOptions) =>
  utcDate(isoDate).toLocaleDateString('en-US', { ...options, timeZone: 'UTC' });

export const formatTalkDate = (isoDate: string, withYear = false) =>
  formatUTC(isoDate, { month: 'short', day: 'numeric', ...(withYear && { year: 'numeric' }) });

export const formatMonth = (yearMonth: string | null) =>
  yearMonth ? formatUTC(`${yearMonth}-01`, { month: 'short', year: 'numeric' }) : 'Present';

export const formatTenure = ({ start, end }: DateSpan) =>
  `${formatMonth(start)} – ${formatMonth(end)}`;

export const experienceSpan = ({ positions }: { positions: DateSpan[] }): DateSpan => ({
  start: positions[positions.length - 1].start,
  end: positions[0].end,
});

export const splitEmphasis = (text: string) =>
  text
    .split(/(\*\*[^*]+\*\*)/)
    .filter(Boolean)
    .map((part) =>
      part.startsWith('**') && part.endsWith('**')
        ? { text: part.slice(2, -2), strong: true }
        : { text: part, strong: false }
    );

export const plainText = (text: string) => text.replace(/\*\*/g, '');

export const yearOf = (isoDate: string) => Number(isoDate.slice(0, 4));

export const sortTalksByDate = (list: Talk[]) =>
  [...list].sort((a, b) => b.date.localeCompare(a.date));

export const talks = sortTalksByDate(data.talks);

export const topicsByFrequency = (list: { topics: string[] }[], minCount: number) => {
  const counts = new Map<string, number>();
  list.forEach(({ topics }) =>
    topics.forEach((topic) => counts.set(topic, (counts.get(topic) ?? 0) + 1))
  );
  return Array.from(counts)
    .filter(([, count]) => count >= minCount)
    .sort((a, b) => b[1] - a[1])
    .map(([topic]) => topic);
};

export const talkTopics = topicsByFrequency(talks, MIN_TALKS_PER_TOPIC);

export const groupTalksByYear = (list: Talk[]) =>
  list.reduce<{ year: number; talks: Talk[] }[]>((groups, talk) => {
    const year = yearOf(talk.date);
    const current = groups[groups.length - 1];
    if (current?.year === year) {
      current.talks.push(talk);
    } else {
      groups.push({ year, talks: [talk] });
    }
    return groups;
  }, []);

export const toParagraphs = (text: string) =>
  text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

export const matchesQuery = (query: string, ...fields: string[]) => {
  const needle = query.trim().toLowerCase();
  return fields.some((field) => field.toLowerCase().includes(needle));
};
