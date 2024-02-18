import { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Pill: Story = {
  args: {
    title: 'Pill',
    variant: 'pill',
  },
};

export const Rectangle: Story = {
  args: {
    title: 'rectangle',
    variant: 'rectangle',
  },
};
