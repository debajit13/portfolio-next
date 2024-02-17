'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ProjectDataType } from './ProjectDataType.interface';
import Button from '../global/Button';
import { Badge } from '../global/Badge';

const ProjectCard: React.FC<ProjectDataType> = ({
  title,
  image,
  techstack,
  description,
  githubURL,
  webURL,
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

        <p className='text-lg font-normal text-gray-500 dark:text-gray-400'>
          {description}
        </p>
        <div className='flex mt-4 md:mt-6 justify-center '>
          <Button title='GitHub' variant='primary' href={githubURL} />
          <Button title='Website' variant='white' href={webURL} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
