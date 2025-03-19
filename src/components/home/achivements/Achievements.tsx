'use client';
import { motion } from 'framer-motion';
import { AchievementDataType } from './AchievementDataType.interface';
import SectionHeader from '../../../components/global/sectionHeader/SectionHeader';

const Achivements: React.FC<AchievementDataType> = ({ achievementsData }) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='max-w-screen-xl mb-4 lg:mb-8'>
          <div className='mb-4'>
            <SectionHeader title='Achievements' />
          </div>

          <div className='flex rounded-3xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col'>
            <div className='flex h-full flex-col justify-center gap-4 p-6'>
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
                {achievementsData.map((achievementData: string) => (
                  <motion.li
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -100 },
                    }}
                    className='flex items-baseline mt-3'
                    key={achievementData}
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
                    {achievementData}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achivements;
