import { Meta, StoryObj } from '@storybook/react';
import Contact from './Contact';

const meta: Meta<typeof Contact> = {
  title: 'Components/Contact',
  component: Contact,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Contact>;

export const Basic: Story = {
  args: {
    contactsData: [
      {
        title: 'LinkedIn',
        URL: '/',
      },
      {
        title: 'Twitter',
        URL: '/',
      },
      {
        title: 'GitHub',
        URL: '/',
      },
      {
        title: 'Facebook',
        URL: '/',
      },
      {
        title: 'Instagram',
        URL: '/',
      },
    ],
  },
};
