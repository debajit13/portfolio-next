import BlogCard from '@/components/blogs/BlogCard';
import SectionHeader from '@/components/global/SectionHeader';
import data from '@/constants/data.json';

const Blogs = () => {
  return (
    <section className='bg-dark dark:bg-gray-900'>
      <div className='py-3 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6'>
        <div className='max-w-screen-md mb-4 lg:mb-8'>
          <SectionHeader title='Blogs' />
        </div>
      </div>

      <section className='bg-white dark:bg-gray-900'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
          <div className='grid gap-8 lg:grid-cols-2'>
            {data?.blogs.map((blog) => (
              <BlogCard
                key={blog.blogTitle}
                blogTitle={blog.blogTitle}
                blogDescription={blog.blogDescription}
                blogLink={blog.blogLink}
                blogImage={blog.blogImage}
                topics={blog.topics}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blogs;
