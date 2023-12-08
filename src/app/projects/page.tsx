import data from '@/constants/data.json';
import { Button, Card } from 'flowbite-react';
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
                  <div className='flex flex-row flex-wrap w-full justify-center'>
                    {projectData?.techstack.map((tech: string) => (
                      <span
                        key={tech}
                        className='mt-2 bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 w-fit'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className='text-lg font-normal text-gray-500 dark:text-gray-400'>
                    {projectData?.description}
                  </p>
                  <div className='flex mt-4 md:mt-6 justify-center '>
                    <Button
                      href={projectData?.githubURL}
                      rel='noopener noreferrer'
                      target='_blank'
                      className='inline-flex items-center px-2 py-1 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
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
                    </Button>
                    <Button
                      href={projectData?.webURL}
                      rel='noopener noreferrer'
                      target='_blank'
                      className='inline-flex items-center px-2 py-1 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3'
                    >
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
                    </Button>
                  </div>
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
