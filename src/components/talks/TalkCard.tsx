'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const TalkCard: React.FC<{
  title: string;
  date: string;
  organiser: string;
  type: string;
  youtubeLink?: string;
  slidesLink?: string;
  topics: string[];
}> = ({ date, title, organiser, type, youtubeLink, slidesLink, topics }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      className='h-full'
    >
      <div className='flex flex-col bg-white h-full rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
        <div className='flex h-full flex-col justify-center gap-4 p-6'>
          <div className='flex justify-between items-center mb-5 text-gray-500'>
            <span className='flex h-fit items-center gap-1 font-semibold bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 rounded px-2 py-0.5'>
              <span>{type}</span>
            </span>
            <div className='flex'>
              <svg
                className='w-4 h-4 text-gray-500 dark:text-white mr-1'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z'
                ></path>
              </svg>{' '}
              <span className='text-sm'>{date}</span>
            </div>
          </div>
          <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h2>

          <div className='flex flex-row flex-wrap w-full'>
            {topics.map((topic: string) => (
              <span
                key={topic}
                className='flex h-fit items-center gap-1 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300 p-1 m-1 bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 w-fit'
              >
                <span>{topic}</span>
              </span>
            ))}
          </div>

          <p className='mb-5 mt-3 font-light text-gray-500 dark:text-gray-400'>
            Organiser: {organiser}
          </p>

          <div className='flex mt-4 md:mt-6'>
            {youtubeLink ? (
              <Link
                href={youtubeLink}
                rel='noopener noreferrer'
                target='_blank'
                className='group justify-center p-0.5 font-medium relative focus:z-10 border border-transparent enabled:hover:bg-cyan-800 dark:enabled:hover:bg-cyan-700 inline-flex items-center px-2 py-1 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                <span className='flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2'>
                  YouTube
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
                </span>
              </Link>
            ) : (
              <button
                disabled
                type='button'
                className='group justify-center p-0.5 font-medium relative focus:z-10 cursor-not-allowed opacity-50 border border-transparent enabled:hover:bg-cyan-800 dark:enabled:hover:bg-cyan-700 inline-flex items-center px-2 py-1 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                <span className='flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2'>
                  Video Not Available
                </span>
              </button>
            )}

            {slidesLink ? (
              <Link
                href={slidesLink}
                rel='noopener noreferrer'
                target='_blank'
                className='group justify-center p-0.5 relative focus:z-10 enabled:hover:bg-cyan-800 dark:enabled:hover:bg-cyan-700 inline-flex items-center px-2 py-1 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3'
              >
                <span className='flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2'>
                  Slides
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
                </span>
              </Link>
            ) : (
              <button
                type='button'
                disabled
                className='group justify-center p-0.5 relative focus:z-10 cursor-not-allowed opacity-50 enabled:hover:bg-cyan-800 dark:enabled:hover:bg-cyan-700 inline-flex items-center px-2 py-1 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3'
              >
                <span className='flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2'>
                  Slides Not Available
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TalkCard;
