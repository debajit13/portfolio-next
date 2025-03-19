'use client';

import { useEffect, useState } from 'react';
import { SearchDataType } from './SearchDataType.interface';

const Search: React.FC<SearchDataType> = ({ placeholder, getSearchText }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    getSearchText(searchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <form className='flex items-center w-[60%] sm:w-[75%] pr-2'>
      <div className='relative w-full'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <svg
            className='w-4 h-4 text-gray-500 dark:text-gray-400'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 18 20'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2'
            />
          </svg>
        </div>
        <input
          type='text'
          id='simple-search'
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e?.target?.value);
          }}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder={placeholder}
          required
        />
      </div>
    </form>
  );
};

export default Search;
