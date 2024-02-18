import { Meta, StoryObj } from '@storybook/react';
import Testimonials from './Testimonials';

const meta: Meta<typeof Testimonials> = {
  title: 'Components/Testimonials',
  component: Testimonials,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Testimonials>;

export const Basic: Story = {
  args: {
    testimonialsData: [
      {
        name: 'Name 1',
        role: 'Developer Advocate @ABC',
        testimonial:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image:
          'https://ik.imagekit.io/debajit13/utilitis/icons8-person-94.png?updatedAt=1708256095766',
      },
      {
        name: 'Name 2',
        role: 'Tech Lead @ABC',
        testimonial:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image:
          'https://ik.imagekit.io/debajit13/utilitis/icons8-person-94.png?updatedAt=1708256095766',
      },
      {
        name: 'Name 3',
        role: 'Data Engineer @ABC',
        testimonial:
          'Consectetur adipiscing elit, sed do eiusmod tempor magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image:
          'https://ik.imagekit.io/debajit13/utilitis/icons8-person-94.png?updatedAt=1708256095766',
      },
      {
        name: 'Name 4',
        role: 'Product Manager @ABC',
        testimonial:
          'Lorem ipsum dolor sit amet,   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image:
          'https://ik.imagekit.io/debajit13/utilitis/icons8-person-94.png?updatedAt=1708256095766',
      },
    ],
  },
};
