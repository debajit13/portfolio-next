import SectionHeader from '@/components/global/sectionHeader/SectionHeader';
import TalkList from '@/components/talks/TalkList/TalkList';

const Talks = () => {
  return (
    <section className='bg-dark dark:bg-gray-900'>
      <div className='py-3 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6'>
        <div className='max-w-screen-md mb-4 lg:mb-8'>
          <SectionHeader title='Talks' />
        </div>
      </div>

      <section className='bg-white dark:bg-gray-900'>
        <TalkList />
      </section>
    </section>
  );
};

export default Talks;
