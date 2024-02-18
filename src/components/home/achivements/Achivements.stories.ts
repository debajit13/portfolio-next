import { Meta, StoryObj } from '@storybook/react';
import Achievements from './Achievements';

const meta: Meta<typeof Achievements> = {
  title: 'Components/Achievements',
  component: Achievements,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Achievements>;

export const Basic: Story = {
  args: {
    achievementsData: [
      'Put your achievement 1 here. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
      'Put your achievement 2 here. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
      'Put your achievement 3 here. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
      'Put your achievement 4 here. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    ],
  },
};
