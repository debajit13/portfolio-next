import Image from 'next/image';
import { TestimonialDataType } from './TestimonialDataType.interface';

const TestimonialCard: React.FC<TestimonialDataType> = ({
  name,
  testimonial,
  image,
  role,
}) => {
  return (
    <figure
      key={name}
      className='flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700'
    >
      <blockquote className='mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400'>
        <p className='my-4'>{testimonial}</p>
      </blockquote>
      <figcaption className='flex justify-center items-center space-x-3'>
        <Image
          className='w-9 h-9 rounded-full'
          src={image}
          loading='lazy'
          height={100}
          width={100}
          alt={`picture of ${name}`}
        />
        <div className='space-y-0.5 font-medium dark:text-white text-left'>
          <div>{name}</div>
          <div className='text-sm font-light text-gray-500 dark:text-gray-400'>
            {role}
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
