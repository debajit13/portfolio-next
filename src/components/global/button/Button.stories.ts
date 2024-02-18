import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    title: 'Primary',
    variant: 'primary',
    href: '/',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    title: 'Primary Disabled',
    variant: 'primaryDisabled',
    disabled: true,
  },
};

export const White: Story = {
  args: {
    title: 'White',
    variant: 'white',
    href: '/',
  },
};

export const WhiteDisabled: Story = {
  args: {
    title: 'White Disabled',
    variant: 'whiteDisabled',
    disabled: true,
  },
};
