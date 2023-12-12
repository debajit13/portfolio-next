'use client';
import Image from 'next/image';
import Link from 'next/link';
import data from '../../constants/data.json';
import { Navbar } from 'flowbite-react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Header = () => {
  const pathName = usePathname();

  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href='/'>
        <Image
          src='https://ik.imagekit.io/debajit13/utilitis/logo.png?updatedAt=1700115191300'
          className='mr-3 rounded-full'
          alt='DM'
          height={50}
          width={50}
        />
      </Navbar.Brand>
      <Navbar.Toggle
        theme={{
          base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-500  focus:outline-none   dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden',
        }}
      />
      <Navbar.Collapse>
        {data.routes.map((route) => (
          <Navbar.Link
            theme={{
              active: {
                on: 'block py-2 pr-4 pl-3 md:p-0 bg-blue-600 rounded-e-3xl text-white dark:text-white md:bg-transparent md:text-blue-600',
              },
            }}
            key={route.title}
            as={Link}
            href={route.path}
            active={pathName === route.path ? true : false}
          >
            <motion.div
              initial='closed'
              whileInView='open'
              variants={{
                open: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    when: 'beforeChildren',
                    staggerChildren: 1,
                  },
                },
                closed: {
                  opacity: 0,
                  x: '-100%',
                  transition: {
                    when: 'afterChildren',
                  },
                },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {route.title}
            </motion.div>
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
