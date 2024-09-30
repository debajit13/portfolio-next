import BlogList from '@/components/blogs/BlogList/BlogList';
import SectionHeader from '@/components/global/sectionHeader/SectionHeader';
import data from '@/constants/data.json';

const Blogs = () => {
  return (
    <section className='bg-dark dark:bg-gray-900'>
      <div className='py-3 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6'>
        <div className='flex justify-between items-center mb-4 lg:mb-8'>
          <SectionHeader title='Blogs' />
          <p className='dark:text-white text-bg-gray-900'>
            Total Blogs: {data.blogs.length}
          </p>
        </div>
      </div>

      <section className='bg-white dark:bg-gray-900'>
        <BlogList />
      </section>
    </section>
  );
};

export default Blogs;
