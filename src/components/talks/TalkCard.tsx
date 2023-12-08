import { Badge, Button, Card } from 'flowbite-react';

const TalkCard: React.FC<{
  title: string;
  date: string;
  organiser: string;
  type: string;
  youtubeLink?: string;
  slidesLink?: string;
  topics: string[];
}> = ({ date, title, organiser, type, youtubeLink, slidesLink, topics }) => {
  return (
    <Card className='bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex justify-between items-center mb-5 text-gray-500'>
        <Badge color='gray' size='lg'>
          {type}
        </Badge>
        <div className='flex'>
          <svg
            className='w-4 h-4 text-gray-500 dark:text-white mr-1'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 20'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z'
            ></path>
          </svg>{' '}
          <span className='text-sm'>{date}</span>
        </div>
      </div>
      <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {title}
      </h2>
      <div className='flex flex-row flex-wrap w-full'>
        {topics.map((topic: string) => (
          <Badge
            key={topic}
            className='m-1 bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 w-fit'
          >
            {topic}
          </Badge>
        ))}
      </div>

      <p className='mb-5 mt-3 font-light text-gray-500 dark:text-gray-400'>
        Organiser: {organiser}
      </p>
      <div className='flex mt-4 md:mt-6'>
        <Button
          href={youtubeLink ? youtubeLink : ''}
          rel='noopener noreferrer'
          target='_blank'
          className='inline-flex items-center px-2 py-1 text-sm font-small text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          disabled={youtubeLink ? false : true}
        >
          {youtubeLink ? 'Youtube' : 'Video Not Available'}
          <svg
            className='ml-2 w-4 h-4'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </Button>
        <Button
          href={slidesLink ? slidesLink : ''}
          rel='noopener noreferrer'
          target='_blank'
          className='inline-flex items-center px-2 py-1 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3'
          disabled={slidesLink ? false : true}
        >
          {slidesLink ? 'Slides' : 'Slides Not Available'}
          <svg
            className='ml-2 w-4 h-4'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </Button>
      </div>
    </Card>
  );
};

export default TalkCard;
