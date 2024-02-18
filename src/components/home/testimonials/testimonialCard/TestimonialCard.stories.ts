import { Meta, StoryObj } from '@storybook/react';
import TestimonialCard from './TestimonialCard';

const meta: Meta<typeof TestimonialCard> = {
  title: 'Components/TestimonialCard',
  component: TestimonialCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TestimonialCard>;

export const Basic: Story = {
  args: {
    name: 'John Doe',
    testimonial:
      'You can put the testimonial text here. This section can be descriptive. The focus is on your achievemenets, what is your impact or maybe some of your soft skills which are pretty amazing.',
    image:
      'https://ik.imagekit.io/debajit13/utilitis/icons8-person-94.png?updatedAt=1708256095766',
    role: 'Sr. Software Engineer',
  },
};
