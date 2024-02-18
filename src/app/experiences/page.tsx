import ExperienceCard from '@/components/experiences/ExperienceCard';
import SectionHeader from '@/components/global/sectionHeader/SectionHeader';
import data from '@/constants/data.json';

const Experiences = () => {
  return (
    <section className='bg-dark dark:bg-gray-900'>
      <div className='py-3 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6'>
        <div className='max-w-screen-md mb-4 lg:mb-8'>
          <SectionHeader title='Experiences' />
        </div>
        <section className='bg-white dark:bg-gray-900 antialiased'>
          <div className='max-w-screen-xl px-2 py-1 mx-auto lg:px-6 sm:py-16 lg:py-8'>
            <ol className='relative border-s border-gray-200 dark:border-gray-700'>
              {data?.experiences.map((experience) => (
                <ExperienceCard
                  key={experience.id}
                  companyName={experience.companyName}
                  role={experience.role}
                  skills={experience.skills}
                  keyAchivements={experience.keyAchivements}
                  timeline={experience.timeline}
                />
              ))}
            </ol>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Experiences;
