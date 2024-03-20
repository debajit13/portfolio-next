'use client';
import React, { useEffect, useState } from 'react';
import { SelectDataType } from './Select.interface';
import data from '../../../constants/data.json';

const Select: React.FC<SelectDataType> = ({ label, getSelectedValue }) => {
  const [selected, setSelected] = useState<string>('');
  useEffect(() => {
    if (selected) {
      getSelectedValue(selected);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);
  return (
    <form className='max-w-sm mb-3 ml-auto'>
      <label
        htmlFor='countries'
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        {label}
      </label>
      <select
        onChange={(e) => {
          setSelected(e?.target?.value);
        }}
        defaultValue={selected}
        id='countries'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      >
        <option value='All'>All</option>
        {data.blogTopics.map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Select;
