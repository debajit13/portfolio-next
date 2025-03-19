import { ButtonDataType } from './ButtonDataType.interface';
import Link from 'next/link';

const Button: React.FC<ButtonDataType> = ({
  title,
  variant,
  href,
  disabled,
}) => {
  const variants = {
    primary:
      'group justify-center p-0.5 font-medium relative focus:z-10 border border-transparent enabled:hover:bg-cyan-800 dark:enabled:hover:bg-cyan-700 inline-flex items-center px-2 py-1 text-sm font-small text-center text-white bg-blue-700 rounded-3xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
    white:
      'group justify-center p-0.5 relative focus:z-10 enabled:hover:bg-cyan-800 dark:enabled:hover:bg-cyan-700 inline-flex items-center px-2 py-1 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-3xl hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3',
    primaryDisabled:
      'group justify-center p-0.5 font-medium relative focus:z-10 cursor-not-allowed opacity-50 border border-transparent enabled:hover:bg-cyan-800 dark:enabled:hover:bg-cyan-700 inline-flex items-center px-2 py-1 text-sm font-small text-center text-white bg-blue-700 rounded-3xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
    whiteDisabled:
      'group justify-center p-0.5 relative focus:z-10 cursor-not-allowed opacity-50 enabled:hover:bg-cyan-800 dark:enabled:hover:bg-cyan-700 inline-flex items-center px-2 py-1 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-3xl hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3',
    red: 'group justify-center p-0.5 font-medium relative focus:z-10 border border-transparent enabled:hover:bg-[#e44332] dark:enabled:hover:bg-[#e44332] inline-flex items-center px-2 py-1 text-sm font-small text-center text-white bg-[#e44332] rounded-3xl hover:bg-[#e44332] focus:ring-4 focus:outline-none focus:ring-[#e44332] dark:bg-[#e44332] dark:hover:bg-[#e44332] dark:focus:ring-[#e44332',
  };

  return (
    <>
      {disabled ? (
        <button type='button' disabled className={variants[variant]}>
          <span className='flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2'>
            {title}
          </span>
        </button>
      ) : (
        href && (
          <Link
            href={href}
            rel='noopener noreferrer'
            target='_blank'
            className={variants[variant]}
          >
            <span className='flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2'>
              {title}
              <svg
                className='ml-2 w-4 h-4'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </span>
          </Link>
        )
      )}
    </>
  );
};

export default Button;
