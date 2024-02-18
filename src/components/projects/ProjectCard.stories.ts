import { Meta, StoryObj } from '@storybook/react';
import ProjectCard from './ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Basic: Story = {
  args: {
    title: 'Project Name',
    image:
      'https://ik.imagekit.io/debajit13/utilitis/Logo.webp?updatedAt=1708256500208',
    techstack: ['skill 1', 'skill 2', 'skill 3'],
    description: 'You can put your project description here.',
    githubURL: '/',
    webURL: '/',
  },
};
