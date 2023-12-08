import BlogCard from '@/components/blogs/BlogCard';
import data from '@/constants/data.json';

const Blogs = () => {
  return (
    <section className='bg-dark dark:bg-gray-900'>
      <div className='py-3 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6'>
        <div className='max-w-screen-md mb-4 lg:mb-8'>
          <h2 className='mb-3 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Blogs
          </h2>
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
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blogs;
