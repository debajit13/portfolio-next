import SectionHeader from '@/components/global/sectionHeader/SectionHeader';
import TalkList from '@/components/talks/TalkList/TalkList';
import data from '@/constants/data.json';

const Talks = () => {
  return (
    <section className='bg-dark dark:bg-gray-900'>
      <div className='py-3 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6'>
        <div className='mb-4 lg:mb-8 flex items-center justify-between'>
          <SectionHeader title='Talks' />
          <p className='dark:text-white text-bg-gray-900'>
            Total Talks: {data.talks.length}
          </p>
        </div>
      </div>

      <section className='bg-white dark:bg-gray-900'>
        <TalkList />
      </section>
    </section>
  );
};

export default Talks;
