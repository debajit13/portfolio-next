'use client';
import React from 'react';
import BlogCard from './BlogCard';
import Select from '../global/select/Select';
import data from '@/constants/data.json';
import { useState } from 'react';

const BlogList = () => {
  const [blogs, setBlogs] = useState([...data.blogs]);

  const getSelectedValue = (value: string) => {
    if (value === 'All') {
      setBlogs([...data.blogs]);
      return;
    }
    let tempBlogs = data.blogs.filter((blog) => {
      if (blog.topics.includes(value)) {
        return blog;
      }
    });
    setBlogs([...tempBlogs]);
  };

  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
      <Select label='Topics' getSelectedValue={getSelectedValue} />
      <div className='grid gap-8 lg:grid-cols-2'>
        {blogs.map((blog) => (
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
  );
};

export default BlogList;
