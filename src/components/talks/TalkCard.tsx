'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react'; // Import useState for managing active slide
import { TalkDataType } from './TalkDataType.interface';
import Button from '../global/button/Button';
import Badge from '../global/badge/Badge';

const TalkCard: React.FC<TalkDataType> = ({
  date,
  title,
  organiser,
  type,
  youtubeLink,
  slidesLink,
  topics,
  images = [],
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className='h-full'
    >
      <div className='flex flex-col bg-white h-full rounded-3xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
        <div className='h-64 w-full'>
          {images.length > 0 ? (
            <div id='default-carousel' className='relative w-full'>
              <div className='relative h-64 overflow-hidden rounded-t-3xl'>
                {images.map((src, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-700 ease-in-out ${
                      index === activeSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      position: index === activeSlide ? 'relative' : 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                    data-carousel-item
                  >
                    <Image
                      src={src}
                      alt={`Talk image ${index + 1}`}
                      fill
                      className='object-cover'
                    />
                  </div>
                ))}
              </div>

              <button
                type='button'
                className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
                onClick={handlePrev}
              >
                <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60'>
                  <svg
                    className='w-6 h-6 text-white dark:text-gray-700'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 19l-7-7 7-7'
                    ></path>
                  </svg>
                </span>
              </button>
              <button
                type='button'
                className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
                onClick={handleNext}
              >
                <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60'>
                  <svg
                    className='w-6 h-6 text-white dark:text-gray-800'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5l7 7-7 7'
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          ) : (
            <div className='flex items-center justify-center h-64 text-gray-500 dark:text-gray-400'>
              No images found
            </div>
          )}
        </div>

        <div className='flex h-full flex-col justify-center gap-4 p-6'>
          <div className='flex justify-between items-center mb-5 text-gray-500'>
            <Badge title={type} variant='rectangle' />
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
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z'
                ></path>
              </svg>{' '}
              <span className='text-sm date'>{date}</span>
            </div>
          </div>
          <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h2>

          <div className='flex flex-row flex-wrap w-full'>
            {topics.map((topic: string) => (
              <Badge key={topic} title={topic} variant='pill' />
            ))}
          </div>

          <p className='mb-5 mt-3 font-light text-gray-500 dark:text-gray-400'>
            Organiser: {organiser}
          </p>

          <div className=' flex mt-4 md:mt-6'>
            {youtubeLink ? (
              <Button variant='primary' href={youtubeLink} title='YouTube' />
            ) : (
              <Button
                disabled={true}
                variant='primaryDisabled'
                title='Video Not Available'
              />
            )}

            {slidesLink ? (
              <Button variant='white' href={slidesLink} title='Slides' />
            ) : (
              <Button
                disabled={true}
                variant='whiteDisabled'
                title='Slides Not Available'
              />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TalkCard;
