import { SectionHeaderDataType } from '@/types/types';

const SectionHeader: React.FC<SectionHeaderDataType> = ({ title }) => {
  return (
    <h2 className='mb-3 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
      {title}
    </h2>
  );
};

export default SectionHeader;
