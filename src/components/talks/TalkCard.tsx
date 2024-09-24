'use client';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import the Next.js Image component
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
  image,
}) => {
  // Fallback image if no image is provided
  const fallbackImage = '/images/fallback-image.png'; // Ensure this fallback image is in your public folder

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
        {/* Image Section */}
        <div className='relative w-full h-64'>
          <Image
            src={image || fallbackImage}
            alt={title}
            layout='fill' // Ensures the image takes up the full space of the container
            objectFit='cover' // Crops the image to cover the entire area
            className='rounded-t-lg'
          />
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

          <div className='flex mt-4 md:mt-6'>
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
