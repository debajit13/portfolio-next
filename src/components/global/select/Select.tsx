'use client';
import React, { useEffect, useState } from 'react';
import { SelectDataType } from './Select.interface';

const Select: React.FC<SelectDataType> = ({ getSelectedValue, data }) => {
  const [selected, setSelected] = useState<string>('');
  useEffect(() => {
    if (selected) {
      getSelectedValue(selected);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);
  return (
    <form className='sm:w-[25%] w-[40%]'>
      <select
        onChange={(e) => {
          setSelected(e?.target?.value);
        }}
        defaultValue={selected}
        id='countries'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      >
        <option value='All'>All</option>
        {data.map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Select;
