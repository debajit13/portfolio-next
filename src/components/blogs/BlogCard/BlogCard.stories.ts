import { Meta, StoryObj } from '@storybook/react';
import BlogCard from './BlogCard';

const meta: Meta<typeof BlogCard> = {
  title: 'Components/BlogCard',
  component: BlogCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

export const Basic: Story = {
  args: {
    blogTitle: 'Sample Blog Title',
    blogDescription:
      'This is a sample blog description. You can put some short description in this section to describe the theme of the blog.',
    blogLink: '/',
    blogImage:
      'https://ik.imagekit.io/debajit13/Blogs/Blog%20Placeholder%20Banner.webp?updatedAt=1708254981754',
    topics: ['topic 1', 'topic 2', 'topic 3'],
  },
};
