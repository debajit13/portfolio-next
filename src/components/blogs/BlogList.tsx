'use client';
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Select from '../global/select/Select';
import data from '@/constants/data.json';
import Search from '../global/search/Search';

const BlogList = () => {
  const [blogs, setBlogs] = useState([...data.blogs]);
  const [searchText, setSearchText] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<string>('All');

  useEffect(() => {
    filterDataHandler(searchText, selectedValue);
  }, [searchText, selectedValue]);

  const filterDataHandler = (searchText: string, selectedValue: string) => {
    let selectedBlogs = [];
    if (selectedValue === 'All') {
      selectedBlogs = [...data?.blogs];
    } else {
      selectedBlogs = data.blogs.filter((blog) => {
        if (blog.topics.includes(selectedValue)) {
          return blog;
        }
      });
    }
    if (searchText) {
      let selectedSearchedBlogs = selectedBlogs.filter((blog) =>
        blog.blogTitle.toLowerCase().includes(searchText.toLowerCase())
      );
      setBlogs([...selectedSearchedBlogs]);
    } else {
      setBlogs([...selectedBlogs]);
    }
  };

  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
      <section className='flex justify-center items-center flex-row w-full mb-3'>
        <Search
          placeholder='Search Blogs...'
          getSearchText={(value) => {
            setSearchText(value);
          }}
        />
        <Select
          label='Topics'
          getSelectedValue={(value) => {
            setSelectedValue(value);
          }}
        />
      </section>

      {blogs.length === 0 ? (
        <p className='text-center text-gray-500 text-xl'>No blogs found!</p>
      ) : (
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
      )}
    </div>
  );
};

export default BlogList;
