'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import data from '@/constants/data.json';

const Header = () => {
  const pathName = usePathname();

  return (
    <nav className='mt-5 z-10 mx-auto flex flex-row justify-evenly items-center w-[350px] bg-gray-100 shadow-lg h-[45px] rounded-[40px] m-2 sticky top-0'>
      {data &&
        data.routes.map((route) => (
          <Link key={route.title} href={route.path}>
            <span
              className={`text-sm hover:rounded-full p-2 ${
                pathName === route.path &&
                'bg-[#6558d3] hover:bg-[#6558d3] rounded-full text-white'
              }`}
            >
              {route.title.charAt(0).toUpperCase() + route.title.slice(1)}
            </span>
          </Link>
        ))}
    </nav>
  );
};

export default Header;
