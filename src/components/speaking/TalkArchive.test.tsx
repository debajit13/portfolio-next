import { fireEvent, render, screen, within } from '@testing-library/react';
import { talks } from '@/lib/content';
import TalkArchive from './TalkArchive';

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => <span />,
}));

const talkTitles = () =>
  screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent);

const topicButton = (name: string) =>
  within(screen.getByRole('group', { name: 'Filter by topic' })).getByRole('button', {
    name: new RegExp(`^${name}`),
  });

beforeEach(() => window.history.replaceState(null, '', '/speaking'));

describe('TalkArchive', () => {
  it('lists every talk grouped by year', () => {
    render(<TalkArchive />);
    expect(talkTitles()).toHaveLength(talks.length);
    expect(screen.getByRole('heading', { level: 2, name: '2026' })).toBeInTheDocument();
  });

  it('combines format, recording and topic filters', () => {
    render(<TalkArchive />);
    fireEvent.click(screen.getByRole('button', { name: 'In person' }));
    fireEvent.click(screen.getByRole('button', { name: /has video/i }));
    fireEvent.click(topicButton('Firebase & Cloud'));
    const expected = talks.filter(
      (talk) =>
        talk.type === 'Offline' && talk.youtubeLink && talk.categories.includes('Firebase & Cloud')
    );
    expect(expected.length).toBeGreaterThan(0);
    expect(talkTitles()).toEqual(expected.map(({ title }) => title));
    expect(window.location.search).toBe('?topic=firebase-cloud&format=in-person&video=1');
  });

  it('updates topic counts to reflect the other filters', () => {
    render(<TalkArchive />);
    fireEvent.click(screen.getByRole('button', { name: 'Online' }));
    const onlineAI = talks.filter(
      (talk) => talk.type === 'Online' && talk.categories.includes('AI')
    ).length;
    expect(topicButton('AI')).toHaveTextContent(`AI${onlineAI}`);
  });
});
