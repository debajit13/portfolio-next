import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NextImageMock from '../../../utils/nextImageMock';
import Testimonials from './Testimonials';
import '../../../utils/intersectionObserverMock';

jest.mock('next/image', () => NextImageMock);

describe('Testimonials', () => {
  it('renders Testimonials', () => {
    const testimonialList = [
      {
        name: 'Name 1',
        role: 'Developer Advocate @ABC',
        testimonial: 'Lorem ipsum dolor sit amet',
        image:
          'https://ik.imagekit.io/debajit13/utilitis/icons8-person-94.png?updatedAt=1708256095766',
      },
      {
        name: 'Name 2',
        role: 'Tech Lead @ABC',
        testimonial: 'consectetur adipiscing elit',
        image:
          'https://ik.imagekit.io/debajit13/utilitis/icons8-person-94.png?updatedAt=1708256095766',
      },
    ];
    render(<Testimonials testimonialsData={testimonialList} />);

    // to test testimonials header
    const sectionHeaderTitle = screen.getByText('Testimonials');
    expect(sectionHeaderTitle).toBeInTheDocument();
    expect(sectionHeaderTitle.tagName).toBe('H2');
    expect(sectionHeaderTitle).toHaveTextContent('Testimonials');
    expect(sectionHeaderTitle).toHaveClass('text-4xl');

    // to test testimonials name list
    const testimonialsName = testimonialList.map((testimonial) => {
      return screen.getByText(testimonial.name);
    });
    expect(testimonialsName.length).toBe(testimonialList.length);
    testimonialsName.forEach((testimonial, index) => {
      expect(testimonial).toBeInTheDocument();
      expect(testimonial.tagName).toBe('DIV');
      expect(testimonial).toHaveTextContent(testimonialList[index].name);
    });

    // to test testimonials role list
    const testimonialsRole = testimonialList.map((testimonial) => {
      return screen.getByText(testimonial.role);
    });
    expect(testimonialsRole.length).toBe(testimonialList.length);
    testimonialsRole.forEach((testimonial, index) => {
      expect(testimonial).toBeInTheDocument();
      expect(testimonial.tagName).toBe('DIV');
      expect(testimonial).toHaveTextContent(testimonialList[index].role);
    });

    // to test testimonials name list
    const testimonials = testimonialList.map((testimonialData) => {
      return screen.getByText(testimonialData.testimonial);
    });
    expect(testimonials.length).toBe(testimonialList.length);
    testimonials.forEach((testimonial, index) => {
      expect(testimonial).toBeInTheDocument();
      expect(testimonial.tagName).toBe('P');
      expect(testimonial).toHaveTextContent(testimonialList[index].testimonial);
    });

    // to test testimonial image list
    const testimonialImages = testimonialList.map((testimonial) => {
      return screen.getByRole('img', {
        name: `picture of ${testimonial.name}`,
      });
    });

    expect(testimonialImages.length).toBe(testimonialList.length);
    testimonialImages.forEach((testimonial, index) => {
      expect(testimonial).toBeInTheDocument();
      expect(testimonial.tagName).toBe('IMG');
      expect(testimonial).toHaveAttribute('src', testimonialList[index].image);
      expect(testimonial).toHaveAttribute(
        'alt',
        `picture of ${testimonialList[index].name}`
      );
    });
  });
});
