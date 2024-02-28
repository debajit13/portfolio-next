import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NextImageMock from '../../utils/nextImageMock';
import BlogCard from './BlogCard';
import '../../utils/intersectionObserverMock';

jest.mock('next/image', () => NextImageMock);

describe('BlogCard', () => {
  it('renders BlogCard', () => {
    const topicList = ['topic 1', 'topic 2', 'topic 3'];

    render(
      <BlogCard
        blogTitle='Sample Blog Title'
        blogDescription='This is a sample blog description. You can put some short description in this section to describe the theme of the blog.'
        blogLink='https://dev.to/'
        blogImage='https://ik.imagekit.io/debajit13/Blogs/Blog%20Placeholder%20Banner.webp?updatedAt=1708254981754'
        topics={topicList}
      />
    );

    // to test the heading of blog card
    const heading = screen.getByRole('heading', { name: /Sample Blog Title/i });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H2');
    expect(heading).toHaveTextContent('Sample Blog Title');

    // to test the description of blog card
    const description = screen.getByText(
      /^This is a sample blog description. You can put some short description in this section to describe the theme of the blog.$/i
    );
    expect(description).toBeInTheDocument();
    expect(description.tagName).toBe('P');
    expect(description).toHaveTextContent(
      'This is a sample blog description. You can put some short description in this section to describe the theme of the blog.'
    );

    // to test the URL of the blog Link
    const link = screen.getByRole('link', { name: /Read more/i });
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
    expect(link).toHaveTextContent('Read more');
    expect(link).toHaveAttribute('href', 'https://dev.to/');

    // to test the image of the blog
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image.tagName).toBe('IMG');
    expect(image).toHaveAttribute(
      'src',
      'https://ik.imagekit.io/debajit13/Blogs/Blog%20Placeholder%20Banner.webp?updatedAt=1708254981754'
    );

    // to test the topics of the blog
    const badge = screen.getByText('topic 1');
    expect(badge).toBeInTheDocument();
    expect(badge.tagName).toBe('SPAN');
    expect(badge).toHaveTextContent('topic 1');
    expect(badge).toHaveClass('pill');

    // to test the skills of experience card
    const topics = topicList.map((topic) => screen.queryByText(topic));
    expect(topics.length).toBe(topicList.length);
    topics.forEach((topic) => {
      expect(topic).toBeInTheDocument();
      expect(topic).toHaveClass('pill');
    });
  });
});
