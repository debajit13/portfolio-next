import { Meta, StoryObj } from '@storybook/react';
import ExperienceCard from './ExperienceCard';

const meta: Meta<typeof ExperienceCard> = {
  title: 'Components/ExperienceCard',
  component: ExperienceCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExperienceCard>;

export const Basic: Story = {
  args: {
    companyName: 'Company Name',
    role: 'Your Role',
    skills: ['skill 1', 'skill 2', 'skill 3'],
    keyAchivements: [
      'You can put your achivements in this section.',
      'Try to show your impact in the organizations.',
      'Do not make it more than 2 lines',
    ],
    timeline: '01/01/2000 - Present',
  },
};
