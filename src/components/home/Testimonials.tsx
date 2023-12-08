import { Carousel, Card } from 'flowbite-react';
import Image from 'next/image';

const Testimonials: React.FC<{
  testimonialsData: {
    name: string;
    role: string;
    testimonial: string;
    image: string;
  }[];
}> = ({ testimonialsData }) => {
  return (
    <div className='px-4 mx-auto max-w-screen-xl  lg:px-6 sm:h-96 h-[29rem]  xl:h-140 2xl:h-96 mb-8'>
      <div className='max-w-screen-md mb-4 lg:mb-8'>
        <h2 className='mb-3 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
          Testimonials
        </h2>
      </div>
      <Carousel
        theme={{
          control: {
            base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-white border-4 group-hover:bg-white group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10',
            icon: 'h-5 w-5 text-dark dark:text-gray-200 sm:h-6 sm:w-6',
          },
        }}
        indicators={false}
      >
        {testimonialsData.map(
          (testimonialData: {
            name: string;
            role: string;
            testimonial: string;
            image: string;
          }) => (
            <section
              key={testimonialData.name}
              className='bg-white dark:bg-gray-900'
            >
              <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'>
                <figure className='max-w-screen-md mx-auto'>
                  <svg
                    className='h-12 mx-auto mb-1 text-gray-400 dark:text-gray-600'
                    viewBox='0 0 24 27'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                      fill='currentColor'
                    />
                  </svg>
                  <blockquote>
                    <h1 className='lg:text-xl sm:text-xs xs:text-xs font-medium text-gray-900 dark:text-white'>
                      {`"${testimonialData.testimonial}"`}
                    </h1>
                  </blockquote>
                  <figcaption className='flex items-center justify-center mt-4 space-x-2'>
                    <Image
                      src={testimonialData?.image}
                      height={150}
                      width={150}
                      loading='lazy'
                      className='w-12 h-12 rounded-full'
                      alt={testimonialData?.name}
                    />
                    <div className='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
                      <div className='pr-3 font-medium text-gray-900 dark:text-white'>
                        {testimonialData?.name}
                      </div>
                      <div className='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>
                        {testimonialData?.role}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </section>
          )
        )}
      </Carousel>
    </div>
  );
};

export default Testimonials;
