import type { Meta, StoryObj } from '@storybook/react';
import LinkButton from './LinkButton';

const meta: Meta<typeof LinkButton> = {
  title: 'UI/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  args: { href: '#', children: 'Get in touch' },
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {};

export const Secondary: Story = { args: { variant: 'secondary', children: 'See experience' } };

export const External: Story = { args: { external: true, children: 'Message on LinkedIn' } };
