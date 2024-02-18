import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Basic: Story = {
  args: {
    routes: [
      {
        path: '/',
        title: 'home',
      },
      {
        path: '/projects',
        title: 'projects',
      },
      {
        path: '/experiences',
        title: 'experiences',
      },
      {
        path: '/blogs',
        title: 'blogs',
      },
      {
        path: '/talks',
        title: 'talks',
      },
    ],
  },
};
