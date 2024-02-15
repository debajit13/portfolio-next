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
    <div className='rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col flow-root max-w-7xl mx-auto mt-8 sm:mt-12 lg:mt-16'>
      <div className='flex h-full flex-col justify-center gap-4 p-6'>
        <div className='-my-4 divide-y divide-gray-200 dark:divide-gray-700'>
          <div className='flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center'>
            <p className='w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0'>
              {timeline}
            </p>
            <div>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                {companyName}
              </h3>
              <h4 className='text-md font-semibold text-gray-600 dark:text-white'>
                {role}
              </h4>
              <div className='flex flex-row flex-wrap w-full'>
                {skills.map((skill: string) => (
                  <span
                    key={skill}
                    className='mt-2 bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 w-fit'
                  >
                    {skill}
                  </span>
                ))}
              </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
