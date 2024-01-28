'use client';
import { motion } from 'framer-motion';
import Skills from '@/components/home/Skills';
import Image from 'next/image';
import data from '@/constants/data.json';
import Testimonials from '@/components/home/Testimonials';
import Achivements from '@/components/home/Achivements';

const Home = () => {
  return (
    <>
      <section className='bg-dark dark:bg-gray-900'>
        <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
          <div className='lg:mt-0 lg:col-span-5 lg:flex place-self-center p-5'>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src={data?.home?.profileImage}
                alt='mockup'
                loading='eager'
                className='rounded-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'
                width={500}
                height={500}
                priority
              />
            </motion.div>
          </div>
          <div className='mr-auto place-self-center lg:col-span-7'>
            <h1 className='max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white mb-6'>
              👋 Hi, Welcome to my space
            </h1>
            <p className='max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
              I am Debajit, a 23 years old Software Engineer with 2+ years of
              experience. Currently, I am working at P360 as a Software
              Engineer. My expertise is in Frontend Web Development.
            </p>
            <p className='max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
              Currently, I am learning NextJS. I am very active in technical
              communities. I am the Organizer of GDG Siliguri, Ex β-MLSA, Ex
              Hack Club Lead, and Ex GSSOC Ambassador.
            </p>
            <p className='max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
              Also, I am a Tech Speaker too. I have given technical talks at
              many events like GDSC WOW KOLKATA, FrontendDays Siliguri, GDG
              Bhopal, JWOC, Azure Devday, Hack Club SIT, GirlScript Siliguri,
              GDSC SIT, Codecademy Frontend Marathon and many more.
            </p>
            <p className='max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
              I also like to participate in Hackathons and Open Source events. I
              won the Smart India Hackathon 2020 and contributed to
              HacktoberFest 2019, HacktoberFest 2020, JWOC and GWOC. Also, I
              mentored a team for Smart India Hackathon 2022 that later won the
              Hackathon.
            </p>
          </div>
        </div>
      </section>
      <Skills skillsData={data?.home?.skills} />
      <Testimonials testimonialsData={data?.home?.testimonials} />
      <Achivements achivementsData={data?.home?.achivements} />
    </>
  );
};

export default Home;
