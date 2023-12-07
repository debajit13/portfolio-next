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
      <NavbarToggle />
      <NavbarCollapse>
        {data.routes.map((route) => (
          <NavbarLink
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
