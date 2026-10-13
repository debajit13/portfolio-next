import { fireEvent, render, screen, within } from '@testing-library/react';
import { articles } from '@/lib/content';
import ArticleArchive from './ArticleArchive';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt }: { alt: string }) => <span role='img' aria-label={alt} />,
}));

const visibleTitles = () =>
  within(screen.getByRole('list')).getAllByRole('heading').map((h) => h.textContent);

describe('ArticleArchive', () => {
  it('shows every article by default', () => {
    render(<ArticleArchive />);
    expect(visibleTitles()).toHaveLength(articles.length);
  });

  it('narrows the list to the selected topic', () => {
    render(<ArticleArchive />);
    fireEvent.click(screen.getByRole('button', { name: 'Git' }));
    const expected = articles.filter(({ topics }) => topics.includes('Git'));
    expect(visibleTitles()).toEqual(expected.map(({ blogTitle }) => blogTitle));
    expect(screen.getByRole('button', { name: 'Git' })).toHaveAttribute('aria-pressed', 'true');
  });

  it('explains when nothing matches the search', () => {
    render(<ArticleArchive />);
    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'zzzz-no-match' } });
    expect(screen.getByText(/Nothing matches that search/)).toBeInTheDocument();
    expect(screen.getByText('0 articles')).toBeInTheDocument();
  });
});
