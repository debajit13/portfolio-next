import {
  TestimonialsDataType,
  TestimonialDataType,
} from './TestimonialDataType.interface';
import TestimonialCard from './TestimonialCard';
import SectionHeader from '@/components/global/SectionHeader';

const Testimonials: React.FC<TestimonialsDataType> = ({ testimonialsData }) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
        <div className='text-left'>
          <SectionHeader title='Testimonials' />
        </div>
        <div className='grid mb-8 lg:mb-12 lg:grid-cols-2'>
          {testimonialsData.map((testimonialData: TestimonialDataType) => (
            <TestimonialCard
              key={testimonialData?.name}
              name={testimonialData?.name}
              testimonial={testimonialData?.testimonial}
              image={testimonialData?.image}
              role={testimonialData?.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
