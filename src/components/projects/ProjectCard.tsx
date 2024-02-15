'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectCard: React.FC<{
  title: string;
  image: string;
  techstack: string[];
  description: string;
  githubURL: string;
  webURL: string;
}> = ({ title, image, techstack, description, githubURL, webURL }) => {
  return (
    <div
      key={title}
      className='flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col space-y-4 h-full'
    >
      <div className='flex h-full flex-col justify-center gap-4 p-6'>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 360,
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          viewport={{
            once: true,
          }}
          className='w-full flex content-center justify-center'
          whileHover={{
            scale: 1.1,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.8 }}
        >
          <Image
            className='rounded-full'
            src={image}
            height={150}
            width={150}
            alt={title}
          />
        </motion.div>

        <h3 className='text-2xl font-bold leading-tight text-gray-900 dark:text-white'>
          {title}
        </h3>
        <div className='flex flex-row flex-wrap w-full justify-center'>
          {techstack.map((tech: string) => (
            <span
              key={tech}
              className='mt-2 bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 w-fit'
            >
              {tech}
            </span>
          ))}
        </div>

        <p className='text-lg font-normal text-gray-500 dark:text-gray-400'>
          {description}
        </p>
        <div className='flex mt-4 md:mt-6 justify-center '>
          <Link
            href={githubURL}
            rel='noopener noreferrer'
            target='_blank'
            className='group justify-center p-0.5 font-medium relative focus:z-10 border border-transparent enabled:hover:bg-cyan-800 dark:enabled:hover:bg-cyan-700 inline-flex items-center px-2 py-1 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            <span className='flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2'>
              GitHub
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
          <Link
            href={webURL}
            rel='noopener noreferrer'
            target='_blank'
            className='group justify-center p-0.5 relative focus:z-10 enabled:hover:bg-cyan-800 dark:enabled:hover:bg-cyan-700 inline-flex items-center px-2 py-1 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3'
          >
            <span className='flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2'>
              Website
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
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
