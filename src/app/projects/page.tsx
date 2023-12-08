import data from '@/constants/data.json';
import { Card } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <section className='bg-dark dark:bg-gray-900'>
      <div className='py-3 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6'>
        <div className='max-w-screen-md mb-4 lg:mb-8'>
          <h2 className='mb-3 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Projects
          </h2>
        </div>
        <section className='bg-white dark:bg-gray-900 antialiased'>
          <div className='max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24'>
            <div className='grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'>
              {data.projects.map((projectData) => (
                <Card key={projectData?.title} className='space-y-4'>
                  <div className=' w-full flex content-center justify-center'>
                    <Image
                      className='rounded-full'
                      loading='lazy'
                      src={projectData?.image}
                      height={150}
                      width={150}
                      alt={projectData?.title}
                    />
                  </div>

                  <h3 className='text-2xl font-bold leading-tight text-gray-900 dark:text-white'>
                    {projectData?.title}
                  </h3>
                  <div>
                    {projectData?.techstack.map((tech: string) => (
                      <span
                        key={tech}
                        className='bg-gray-100 mr-1 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className='text-lg font-normal text-gray-500 dark:text-gray-400'>
                    {projectData?.description}
                  </p>
                  <Link
                    target='_blank'
                    href={projectData?.webURL}
                    className='text-dark bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                    role='button'
                    rel='noopener noreferrer'
                  >
                    View Website
                    <svg
                      aria-hidden='true'
                      className='w-5 h-5 ml-2 -mr-1'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </Link>
                  <Link
                    target='_blank'
                    href={projectData?.githubURL}
                    className='text-dark  bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                    role='button'
                    rel='noopener noreferrer'
                  >
                    View GitHub
                    <svg
                      aria-hidden='true'
                      className='w-5 h-5 ml-2 -mr-1'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Projects;
