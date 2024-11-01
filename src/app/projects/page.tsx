import SectionHeader from '@/components/global/sectionHeader/SectionHeader';
import ProjectCard from '@/components/projects/ProjectCard';
import data from '@/constants/data.json';

const Projects = () => {
  return (
    <section className='bg-dark dark:bg-gray-900'>
      <div className='pt-3 px-4 mx-auto max-w-screen-xl sm:pt-8 lg:px-6'>
        <div className='flex justify-between items-center mb-3 lg:mb-4'>
          <SectionHeader title='Projects' />
          <p className='dark:text-white text-bg-gray-900'>
            Total Projects: {data.projects.length}
          </p>
        </div>
        <section className='bg-white dark:bg-gray-900 antialiased'>
          <div className='max-w-screen-xl px-4 pb-8 mx-auto lg:px-6 sm:pb-16 lg:pb-24'>
            <div className='grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-8 gap-y-12 sm:grid-cols-2 '>
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
