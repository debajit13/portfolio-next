'use client';

import Image from 'next/image';
import Link from 'next/link';
import data from '../../constants/data.json';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathName = usePathname();

  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href='/'>
        <Image
          src='https://ik.imagekit.io/debajit13/utilitis/logo.png?updatedAt=1700115191300'
          className='mr-3 rounded-full'
          alt='DM'
          height={50}
          width={50}
        />
      </NavbarBrand>
      <NavbarToggle
        theme={{
          base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-500  focus:outline-none   dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden',
        }}
      />
      <NavbarCollapse>
        {data.routes.map((route) => (
          <NavbarLink
            theme={{
              active: {
                on: 'block py-2 pr-4 pl-3 md:p-0 bg-blue-600 text-white dark:text-white md:bg-transparent md:text-blue-600',
              },
            }}
            key={route.title}
            as={Link}
            href={route.path}
            active={pathName === route.path ? true : false}
          >
            {route.title}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
