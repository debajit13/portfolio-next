import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NextImageMock from '../../../../utils/nextImageMock';
import TestimonialCard from './TestimonialCard';
import '../../../../utils/intersectionObserverMock';

jest.mock('next/image', () => NextImageMock);

describe('TestimonialCard', () => {
  it('renders TestimonialCard', () => {
    const testimonial = {
      name: 'Name 1',
      role: 'Developer Advocate @ABC',
      testimonial: 'Lorem ipsum dolor sit amet',
      image:
        'https://ik.imagekit.io/debajit13/utilitis/icons8-person-94.png?updatedAt=1708256095766',
    };

    render(
      <TestimonialCard
        name={testimonial.name}
        role={testimonial.role}
        testimonial={testimonial.testimonial}
        image={testimonial.image}
      />
    );

    // to test testimonial name
    const testimonialName = screen.getByText(testimonial.name);
    expect(testimonialName).toBeInTheDocument();
    expect(testimonialName.tagName).toBe('DIV');
    expect(testimonialName).toHaveTextContent(testimonial.name);

    // to test testimonial role
    const testimonialRole = screen.getByText(testimonial.role);
    expect(testimonialRole).toBeInTheDocument();
    expect(testimonialRole.tagName).toBe('DIV');
    expect(testimonialRole).toHaveTextContent(testimonial.role);

    // to test testimonial
    const testimonialText = screen.getByText(testimonial.testimonial);
    expect(testimonialText).toBeInTheDocument();
    expect(testimonialText.tagName).toBe('P');
    expect(testimonialText).toHaveTextContent(testimonial.testimonial);

    // to test testimonial image
    const testimonialImage = screen.getByRole('img', {
      name: `picture of ${testimonial.name}`,
    });
    expect(testimonialImage).toBeInTheDocument();
    expect(testimonialImage.tagName).toBe('IMG');
    expect(testimonialImage).toHaveAttribute('src', testimonial.image);
    expect(testimonialImage).toHaveAttribute(
      'alt',
      `picture of ${testimonial.name}`
    );
  });
});
