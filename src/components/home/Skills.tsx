'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Skills: React.FC<{
  skillsData: {
    name: string;
    image: string;
  }[];
}> = ({ skillsData }) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='max-w-screen-md mb-4 lg:mb-8'>
          <h2 className='mb-3 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Skills
          </h2>
        </div>
        <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
          {skillsData?.map((skill: { name: string; image: string }) => (
            <div
              key={skill?.name}
              className='flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col max-w-sm'
            >
              <div className='flex h-full flex-col justify-center gap-4 p-6'>
                <motion.div
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: 360,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-16 lg:w-16 dark:bg-primary-900'
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  <picture>
                    <source srcSet={skill?.image} type='image/svg' />
                    <Image
                      src={skill?.image}
                      alt={skill?.name}
                      height={150}
                      width={150}
                      loading='lazy'
                    />
                  </picture>
                </motion.div>

                <h3 className='mb-2 text-xl font-bold dark:text-white'>
                  {skill?.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
