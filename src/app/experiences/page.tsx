import data from '@/constants/data.json';
import { Card } from 'flowbite-react';

const Experiences = () => {
  return (
    <section className='bg-dark dark:bg-gray-900'>
      <div className='py-3 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6'>
        <div className='max-w-screen-md mb-4 lg:mb-8'>
          <h2 className='mb-3 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Experiences
          </h2>
        </div>
        <section className='bg-white dark:bg-gray-900 antialiased'>
          <div className='max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-8'>
            {data?.experiences.map((experience) => (
              <Card
                key={experience?.id}
                className='flow-root max-w-7xl mx-auto mt-8 sm:mt-12 lg:mt-16'
              >
                <div className='-my-4 divide-y divide-gray-200 dark:divide-gray-700'>
                  <div className='flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center'>
                    <p className='w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0'>
                      {experience?.timeline}
                    </p>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                        {experience?.companyName}
                      </h3>
                      <h4 className='text-md font-semibold text-gray-600 dark:text-white'>
                        {experience?.role}
                      </h4>
                      {experience?.skills.map((skill: string) => (
                        <span
                          key={skill}
                          className='bg-gray-100 mr-1 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'
                        >
                          {skill}
                        </span>
                      ))}
                      <h4 className='text-md font-semibold text-gray-600 dark:text-white mt-3'>
                        key Achivements
                      </h4>
                      <ul className='max-w-3xl space-y-1 text-gray-500 list-inside dark:text-gray-400'>
                        {experience?.keyAchivements.map(
                          (keyAchivement: string) => (
                            <li
                              className='flex items-baseline mt-3'
                              key={keyAchivement}
                            >
                              <svg
                                className='w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                              >
                                <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                              </svg>
                              {keyAchivement}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Experiences;
