import ExperienceCard from '@/components/experiences/ExperienceCard';
import data from '@/constants/data.json';

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
          <div className='max-w-screen-xl px-2 py-1 mx-auto lg:px-6 sm:py-16 lg:py-8'>
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
          </div>
        </section>
      </div>
    </section>
  );
};

export default Experiences;
