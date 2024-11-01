import { SectionHeaderDataType } from './SectionHeader.interface';

const SectionHeader: React.FC<SectionHeaderDataType> = ({ title }) => {
  return (
    <h2 className='text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
      {title}
    </h2>
  );
};

export default SectionHeader;
