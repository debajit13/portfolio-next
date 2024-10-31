'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { upperCaseFirstLetter } from '../../../utils/utils';
import { HeaderDataType } from './HeaderDataType.interface';
import ThemeToggler from '../themeToggler/ThemeToggler';

const Header: React.FC<HeaderDataType> = ({ routes }) => {
  const pathName = usePathname();

  return (
    <nav className='p-2 z-50 mx-auto flex flex-row justify-evenly items-center w-[370px] dark:bg-blue-900 dark:text-cyan-50 bg-blue-100 shadow-lg h-[45px] rounded-[40px] m-2 sticky top-0'>
      {routes.map((route) => (
        <Link key={route.title} href={route.path}>
          <span
            className={`text-sm hover:rounded-full p-1.5 ${
              pathName === route.path &&
              'bg-[#1a56db] dark:bg-blue-100 dark:text-black rounded-full text-white'
            }`}
          >
            {upperCaseFirstLetter(route.title)}
          </span>
        </Link>
      ))}
      <ThemeToggler />
    </nav>
  );
};

export default Header;
