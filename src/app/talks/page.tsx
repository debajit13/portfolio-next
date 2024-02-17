import SectionHeader from '@/components/global/SectionHeader';
import TalkCard from '@/components/talks/TalkCard';
import data from '@/constants/data.json';

const Talks = () => {
  return (
    <section className='bg-dark dark:bg-gray-900'>
      <div className='py-3 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6'>
        <div className='max-w-screen-md mb-4 lg:mb-8'>
          <SectionHeader title='Talks' />
        </div>
      </div>

      <section className='bg-white dark:bg-gray-900'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
          <div className='grid gap-8 lg:grid-cols-2'>
            {data?.talks.map((talk) => (
              <TalkCard
                key={talk.date}
                title={talk.title}
                date={talk.date}
                organiser={talk.organiser}
                type={talk.type}
                youtubeLink={talk.youtubeLink}
                slidesLink={talk.slidesLink}
                topics={talk.topics}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Talks;
