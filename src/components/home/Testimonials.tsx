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
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
        <div className='text-left'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Testimonials
          </h2>
        </div>
        <div className='grid mb-8 lg:mb-12 lg:grid-cols-2'>
          {testimonialsData.map((testimonialData) => (
            <figure
              key={testimonialData.name}
              className='flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700'
            >
              <blockquote className='mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400'>
                <p className='my-4'>{testimonialData.testimonial}</p>
              </blockquote>
              <figcaption className='flex justify-center items-center space-x-3'>
                <Image
                  className='w-9 h-9 rounded-full'
                  src={testimonialData.image}
                  loading='lazy'
                  height={100}
                  width={100}
                  alt={`picture of ${testimonialData.name}`}
                />
                <div className='space-y-0.5 font-medium dark:text-white text-left'>
                  <div>{testimonialData.name}</div>
                  <div className='text-sm font-light text-gray-500 dark:text-gray-400'>
                    {testimonialData.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
