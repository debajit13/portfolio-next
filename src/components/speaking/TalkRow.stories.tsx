import type { Meta, StoryObj } from '@storybook/react';
import { talks } from '@/lib/content';
import TalkRow from './TalkRow';

const meta: Meta<typeof TalkRow> = {
  title: 'Speaking/TalkRow',
  component: TalkRow,
  tags: ['autodocs'],
  decorators: [(Story) => <ul className='max-w-3xl'>{Story()}</ul>],
};

export default meta;
type Story = StoryObj<typeof TalkRow>;

export const WithRecording: Story = {
  args: { talk: talks.find(({ youtubeLink }) => youtubeLink) ?? talks[0], showYear: true },
};

export const WithoutLinks: Story = {
  args: { talk: talks.find(({ youtubeLink, slidesLink }) => !youtubeLink && !slidesLink) },
};
