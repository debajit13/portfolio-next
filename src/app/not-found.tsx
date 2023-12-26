import data from '@/constants/data.json';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500'>
            404
          </h1>
          <p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white'>
            Something&apos;s missing.
          </p>
          <div className=' flex justify-center'>
            <Image
              src={data?.errorImage}
              height={200}
              width={300}
              className='w-full'
              alt='Error Page'
            />
          </div>

          <p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.{' '}
          </p>
          <Link
            href='/'
            className='inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline'
          >
            Back to Homepage
            <svg
              className='ml-2 w-4 h-4'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
