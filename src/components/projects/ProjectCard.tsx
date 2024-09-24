'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ProjectDataType } from './ProjectDataType.interface';
import Button from '../global/button/Button';
import Badge from '../global/badge/Badge';

const ProjectCard: React.FC<ProjectDataType> = ({
  title,
  image,
  techstack,
  description,
  githubURL,
  webURL,
  features,
}) => {
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
            <Badge key={tech} variant='pill' title={tech} />
          ))}
        </div>

        <h5 className='dark:text-white text-left font-bold text-gray-700'>
          Description
        </h5>
        <p className='text-sm text-left font-normal text-gray-500 dark:text-gray-400'>
          {description}
        </p>
        {features && (
          <div className='flex rounded-lg  bg-white  dark:bg-gray-800 flex-col'>
            <div className='flex h-full flex-col justify-center gap-4'>
              <h5 className='dark:text-white text-left font-bold text-gray-700'>
                Features
              </h5>
              <motion.ul
                initial='hidden'
                whileInView='visible'
                viewport={{
                  once: true,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      when: 'beforeChildren',
                      staggerChildren: 0.3,
                    },
                  },
                  hidden: {
                    opacity: 0,
                    transition: {
                      when: 'afterChildren',
                    },
                  },
                }}
                className='max-w-3xl space-y-1 text-gray-500 text-left list-inside dark:text-gray-400'
              >
                {features.map((feature: string) => (
                  <motion.li
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -100 },
                    }}
                    className='flex items-baseline mt-3'
                    key={feature}
                  >
                    <svg
                      className='w-3.5 h-3.5 me-2 text-blue-600 dark:text-blue-500 flex-shrink-0'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        )}

        <div className='flex mt-4 md:mt-6 justify-center '>
          <Button title='GitHub' variant='primary' href={githubURL} />
          <Button title='Website' variant='white' href={webURL} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
