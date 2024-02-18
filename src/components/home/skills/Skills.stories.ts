import { Meta, StoryObj } from '@storybook/react';
import Skills from './Skills';

const meta: Meta<typeof Skills> = {
  title: 'Components/Skills',
  component: Skills,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skills>;

export const Basic: Story = {
  args: {
    skillsData: [
      {
        name: 'HTML 5',
        image:
          'https://ik.imagekit.io/debajit13/Skills/html5.svg?updatedAt=1700108666696',
      },
      {
        name: 'CSS 3',
        image:
          'https://ik.imagekit.io/debajit13/Skills/css3.svg?updatedAt=1700108678348',
      },
      {
        name: 'JavaScript',
        image:
          'https://ik.imagekit.io/debajit13/Skills/javascript.svg?updatedAt=1700108662141',
      },
      {
        name: 'TypeScript',
        image:
          'https://ik.imagekit.io/debajit13/Skills/typescript.svg?updatedAt=1700108681965',
      },
    ],
  },
};
