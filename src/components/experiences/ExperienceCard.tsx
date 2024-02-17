'use client';
import { motion } from 'framer-motion';

const ExperienceCard: React.FC<{
  companyName: string;
  role: string;
  skills: string[];
  keyAchivements: string[];
  timeline: string;
}> = ({ companyName, role, skills, keyAchivements, timeline }) => {
  return (
    <li className='mb-10 ms-6'>
      <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
        <svg
          className='w-2.5 h-2.5 text-blue-800 dark:text-blue-300'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
        </svg>
      </span>
      <div className=' p-4 bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-700 dark:border-gray-600'>
        <h2 className='mb-1 text-xl font-semibold text-gray-900 dark:text-white'>
          {companyName}
        </h2>
        <h3 className='mb-1 text-lg font-semibold text-gray-500 dark:text-white'>
          {role}
        </h3>
        <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
          {timeline}
        </time>
        <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
          All of the pages and components are first designed in Figma and we
          keep a parity between the two versions even as we update the project.
        </p>
        <h4 className='text-md font-semibold text-gray-600 dark:text-white mt-3'>
          key Achivements
        </h4>
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
          className='max-w-3xl space-y-1 text-gray-500 list-inside dark:text-gray-400'
        >
          {keyAchivements.map((keyAchivement: string) => (
            <motion.li
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 },
              }}
              className='flex items-baseline mt-3'
              key={keyAchivement}
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
              {keyAchivement}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </li>
  );
};

export default ExperienceCard;
