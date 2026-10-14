import { fireEvent, render, screen, within } from '@testing-library/react';
import { articles } from '@/lib/content';
import ArticleArchive from './ArticleArchive';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt }: { alt: string }) => <span role='img' aria-label={alt} />,
}));

const visibleTitles = () =>
  within(screen.getByRole('list')).getAllByRole('heading').map((h) => h.textContent);

const topicButton = (name: string) =>
  within(screen.getByRole('group', { name: 'Filter by topic' })).getByRole('button', {
    name: new RegExp(`^${name}`),
  });

beforeEach(() => window.history.replaceState(null, '', '/writing'));

describe('ArticleArchive', () => {
  it('shows every article by default', () => {
    render(<ArticleArchive />);
    expect(visibleTitles()).toHaveLength(articles.length);
    expect(screen.queryByRole('button', { name: /clear filters/i })).not.toBeInTheDocument();
  });

  it('narrows the list to a topic and shows how many match', () => {
    render(<ArticleArchive />);
    fireEvent.click(topicButton('Testing'));
    const expected = articles.filter(({ categories }) => categories.includes('Testing'));
    expect(visibleTitles()).toEqual(expected.map(({ blogTitle }) => blogTitle));
    expect(topicButton('Testing')).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText(`${expected.length} of ${articles.length} articles`)).toBeInTheDocument();
    expect(window.location.search).toBe('?topic=testing');
  });

  it('restores filters from a shared link', () => {
    window.history.replaceState(null, '', '/writing?topic=firebase-cloud&q=remote');
    render(<ArticleArchive />);
    expect(topicButton('Firebase & Cloud')).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('searchbox')).toHaveValue('remote');
  });

  it('explains an empty result and clears every filter', () => {
    render(<ArticleArchive />);
    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'zzzz-no-match' } });
    expect(screen.getByText(/Nothing matches these filters/)).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole('button', { name: /clear filters/i })[0]);
    expect(visibleTitles()).toHaveLength(articles.length);
    expect(window.location.search).toBe('');
  });
});
