'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { upperCaseFirstLetter } from '../../../utils/utils';
import { HeaderDataType } from './HeaderDataType.interface';

const Header: React.FC<HeaderDataType> = ({ routes }) => {
  const pathName = usePathname();

  return (
    <nav className='mt-5 p-2 z-10 mx-auto flex flex-row justify-evenly items-center w-[350px] bg-blue-100 shadow-lg h-[45px] rounded-[40px] m-2 sticky top-0'>
      {routes.map((route) => (
        <Link key={route.title} href={route.path}>
          <span
            className={`text-sm hover:rounded-full p-2 ${
              pathName === route.path &&
              'bg-[#1a56db] hover:bg-[#1a56db] rounded-full text-white'
            }`}
          >
            {upperCaseFirstLetter(route.title)}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Header;
