import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BlogCard from './BlogCard';
import '../../utils/intersectionObserverMock';

describe('BlogCard', () => {
  it('renders BlogCard', () => {
    render(
      <BlogCard
        blogTitle='Sample Blog Title'
        blogDescription='This is a sample blog description. You can put some short description in this section to describe the theme of the blog.'
        blogLink='/'
        blogImage='https://ik.imagekit.io/debajit13/Blogs/Blog%20Placeholder%20Banner.webp?updatedAt=1708254981754'
        topics={['topic 1', 'topic 2', 'topic 3']}
      />
    );

    const heading = screen.getByRole('heading', { name: 'Sample Blog Title' });

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H2');
    expect(heading).toHaveTextContent('Sample Blog Title');
  });
});
