import { Meta, StoryObj } from '@storybook/react';
import SectionHeader from './SectionHeader';

const meta: Meta<typeof SectionHeader> = {
  title: 'Components/SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Basic: Story = {
  args: {
    title: 'Home',
  },
};
