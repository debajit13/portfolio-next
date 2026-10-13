import type { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'UI/Tag',
  component: Tag,
  tags: ['autodocs'],
  args: { children: 'TypeScript' },
};

export default meta;

export const Default: StoryObj<typeof Tag> = {};
