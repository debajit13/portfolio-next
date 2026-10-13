import { render, screen } from '@testing-library/react';
import { testimonials, toParagraphs } from '@/lib/content';
import TestimonialsSection from './TestimonialsSection';

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => <span />,
}));

describe('TestimonialsSection', () => {
  it('shows every testimonial in full with its author', () => {
    render(<TestimonialsSection />);
    expect(screen.getAllByRole('figure')).toHaveLength(testimonials.length);
    testimonials.forEach(({ name, role, testimonial }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByText(role)).toBeInTheDocument();
      const paragraphs = toParagraphs(testimonial);
      paragraphs.forEach((paragraph, index) => {
        const opening = index === 0 ? '“' : '';
        const closing = index === paragraphs.length - 1 ? '”' : '';
        expect(screen.getByText(`${opening}${paragraph}${closing}`)).toBeInTheDocument();
      });
    });
  });
});
