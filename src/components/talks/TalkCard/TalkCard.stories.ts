import { Meta, StoryObj } from '@storybook/react';
import TalkCard from './TalkCard';

const meta: Meta<typeof TalkCard> = {
  title: 'Components/TalkCard',
  component: TalkCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TalkCard>;

export const Basic: Story = {
  args: {
    date: 'January 01, 2000',
    title: 'Talk Title',
    organiser: 'Organiser of the event',
    type: 'Online',
    youtubeLink: '/',
    slidesLink: '/',
    topics: ['topic 1', 'topic 2', 'topic 3'],
  },
};

export const CardWithDisabledButtons: Story = {
  args: {
    date: 'January 01, 2000',
    title: 'Talk Title',
    organiser: 'Organiser of the event',
    type: 'Online',
    youtubeLink: '',
    slidesLink: '',
    topics: ['topic 1', 'topic 2', 'topic 3'],
  },
};
