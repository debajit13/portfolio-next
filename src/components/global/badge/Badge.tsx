import { BadgeDataType } from './BadgeDataType.interface';

const Badge: React.FC<BadgeDataType> = ({ title, variant }) => {
  const variants = {
    rectangle:
      'rectangle flex h-fit items-center gap-1 font-semibold bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 rounded px-2 py-0.5',
    pill: 'pill mt-2 bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 w-fit',
  };

  return <span className={variants[variant]}>{title}</span>;
};

export default Badge;
