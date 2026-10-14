import Image from 'next/image';
import { testimonials, toParagraphs, type Testimonial } from '@/lib/content';
import Section from '../ui/Section';
import BalancedGrid from '../ui/BalancedGrid';

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <figure className='flex w-full flex-col justify-between gap-6 rounded-outer bg-canvas p-6'>
    <blockquote className='space-y-4 text-[1.0625rem] leading-relaxed'>
      {toParagraphs(testimonial.testimonial).map((paragraph, index, all) => (
        <p key={index}>
          {index === 0 && '“'}
          {paragraph}
          {index === all.length - 1 && '”'}
        </p>
      ))}
    </blockquote>
    <figcaption className='flex items-center gap-3'>
      <Image
        src={testimonial.image}
        alt=''
        width={40}
        height={40}
        className='h-10 w-10 shrink-0 rounded-full object-cover'
      />
      <div className='min-w-0'>
        <p className='text-[0.9375rem] font-semibold'>{testimonial.name}</p>
        <p className='text-caption text-fg-tertiary'>{testimonial.role}</p>
      </div>
    </figcaption>
  </figure>
);

const TestimonialsSection = () => (
  <Section id='testimonials' eyebrow='Testimonials' title='What colleagues say' tone='surface'>
    <BalancedGrid
      items={testimonials.map((testimonial) => ({
        key: testimonial.name,
        node: <TestimonialCard testimonial={testimonial} />,
      }))}
    />
  </Section>
);

export default TestimonialsSection;
