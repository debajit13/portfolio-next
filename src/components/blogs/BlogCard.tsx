'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BlogDataType } from './BlogDataType.interface';
import { Badge } from '../global/Badge';

const BlogCard: React.FC<BlogDataType> = ({
  blogTitle,
  blogDescription,
  blogLink,
  blogImage,
  topics,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      className='p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'
    >
      <div className='flex justify-between items-center mb-5 text-gray-500'>
        <Image
          className='w-full h-30 rounded-2xl'
          src={blogImage}
          height={150}
          width={200}
          alt={blogTitle}
        />
      </div>
      <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {blogTitle}
      </h2>
      <div className='flex flex-row flex-wrap w-full'>
        {topics.map((topic: string) => (
          <Badge key={topic} title={topic} variant='pill' />
        ))}
      </div>
      <p className='mb-5 font-light text-gray-500 dark:text-gray-400 mt-2'>
        {blogDescription}
      </p>
      <div className='flex justify-end items-center'>
        <Link
          rel='noopener noreferrer'
          target='_blank'
          href={blogLink}
          className='inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline'
        >
          Read more
          <svg
            className='ml-2 w-4 h-4'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;
