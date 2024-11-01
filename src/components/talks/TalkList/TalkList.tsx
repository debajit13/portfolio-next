'use client';
import React, { useEffect, useState } from 'react';
import TalkCard from '../TalkCard';
import Select from '../../global/select/Select';
import data from '@/constants/data.json';
import Search from '../../global/search/Search';

const TalkList = () => {
  const [talks, setTalks] = useState([...data.talks]);
  const [searchText, setSearchText] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<string>('All');

  useEffect(() => {
    filterDataHandler(searchText, selectedValue);
  }, [searchText, selectedValue]);

  const filterDataHandler = (searchText: string, selectedValue: string) => {
    let selectedTalks = [];
    if (selectedValue === 'All') {
      selectedTalks = [...data?.talks];
    } else {
      selectedTalks = data.talks.filter((talk) => {
        if (talk.topics.includes(selectedValue)) {
          return talk;
        }
      });
    }
    if (searchText) {
      let selectedSearchedTalks = selectedTalks.filter((talk) =>
        talk.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setTalks([...selectedSearchedTalks]);
    } else {
      setTalks([...selectedTalks]);
    }
  };

  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
      <section className='flex justify-center items-center flex-row w-full mb-3'>
        <Search
          placeholder='Search Talks...'
          getSearchText={(value) => {
            setSearchText(value);
          }}
        />
        <Select
          data={data.talksTopics}
          getSelectedValue={(value) => {
            setSelectedValue(value);
          }}
        />
      </section>

      {talks.length === 0 ? (
        <p className='text-center text-gray-500 text-xl'>No talks found!</p>
      ) : (
        <div className='grid gap-8 sm:grid-cols-2'>
          {talks.map((talk) => (
            <TalkCard
              key={talk.title}
              title={talk.title}
              date={talk.date}
              organiser={talk.organiser}
              type={talk.type}
              youtubeLink={talk.youtubeLink}
              slidesLink={talk.slidesLink}
              topics={talk.topics}
              images={talk.images}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TalkList;
