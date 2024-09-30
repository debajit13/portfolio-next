import SectionHeader from '@/components/global/sectionHeader/SectionHeader';
import ProjectCard from '@/components/projects/ProjectCard';
import data from '@/constants/data.json';

const Projects = () => {
  return (
    <section className='bg-dark dark:bg-gray-900'>
      <div className='py-3 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6'>
        <div className='flex justify-between items-center mb-4 lg:mb-8'>
          <SectionHeader title='Projects' />
          <p className='dark:text-white text-bg-gray-900'>
            Total Projects: {data.projects.length}
          </p>
        </div>
        <section className='bg-white dark:bg-gray-900 antialiased'>
          <div className='max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24'>
            <div className='grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 '>
              {data.projects.map((projectData) => (
                <ProjectCard
                  key={projectData.title}
                  title={projectData.title}
                  techstack={projectData.techstack}
                  description={projectData.description}
                  githubURL={projectData.githubURL}
                  webURL={projectData.webURL}
                  image={projectData.image}
                  features={projectData.features}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Projects;
