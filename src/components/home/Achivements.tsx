import { Card } from 'flowbite-react';

const Achivements: React.FC<{ achivementsData: string[] }> = ({
  achivementsData,
}) => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='max-w-screen-xl mb-4 lg:mb-8'>
          <h2 className='mb-3 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Achivements
          </h2>
          <Card>
            <ul className='max-w-3xl space-y-1 text-gray-500 list-inside dark:text-gray-400'>
              {achivementsData.map((achivementData: string) => (
                <li className='flex items-baseline mt-3' key={achivementData}>
                  <svg
                    className='w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                  </svg>
                  {achivementData}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achivements;
