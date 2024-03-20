import BlogList from '@/components/blogs/BlogList';
import SectionHeader from '@/components/global/sectionHeader/SectionHeader';

const Blogs = () => {
  return (
    <section className='bg-dark dark:bg-gray-900'>
      <div className='py-3 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6'>
        <div className='max-w-screen-md mb-4 lg:mb-8'>
          <SectionHeader title='Blogs' />
        </div>
      </div>

      <section className='bg-white dark:bg-gray-900'>
        <BlogList />
      </section>
    </section>
  );
};

export default Blogs;
