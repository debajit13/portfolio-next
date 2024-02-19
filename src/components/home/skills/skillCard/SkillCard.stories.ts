import { Meta, StoryObj } from '@storybook/react';
import SkillCard from './SkillCard';

const meta: Meta<typeof SkillCard> = {
  title: 'Components/SkillCard',
  component: SkillCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SkillCard>;

export const Basic: Story = {
  args: {
    name: 'You can put your skill name here',
    image:
      'https://ik.imagekit.io/debajit13/Skills/html5.svg?updatedAt=1700108666696',
  },
};
