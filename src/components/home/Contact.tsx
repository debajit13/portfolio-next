import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
} from 'flowbite-react';
import {
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from 'react-icons/bs';

const Contact = () => {
  return (
    <Footer container className='shadow-none'>
      <div className='w-full py-8 px-0 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <h2 className='mb-6 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
          Contact Me
        </h2>
        <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
          <div>
            <h2 className='text-gray-700 text-3xl font-semibold mb-3'>
              Let&apos;s Get in Touch
            </h2>
            <p className='text-gray-500'>
              Feel free to reach out to me through the following social media
              platforms. I&apos;d love to connect with you!
            </p>
          </div>
        </div>
        <FooterDivider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <FooterCopyright by='Debajit Mallick' year={2024} />
          <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
            <FooterIcon
              href='https://www.linkedin.com/in/debajit-mallick'
              target='_blank'
              rel='noopener noreferrer'
              icon={BsLinkedin}
            />
            <FooterIcon
              href='https://twitter.com/MallickDebajit'
              target='_blank'
              rel='noopener noreferrer'
              icon={BsTwitter}
            />
            <FooterIcon
              href='https://github.com/debajit13/'
              target='_blank'
              rel='noopener noreferrer'
              icon={BsGithub}
            />
            <FooterIcon
              href='https://m.facebook.com/debajit.mallick.13/'
              target='_blank'
              rel='noopener noreferrer'
              icon={BsFacebook}
            />
            <FooterIcon
              href='https://www.instagram.com/debajit_mallick_13/'
              target='_blank'
              rel='noopener noreferrer'
              icon={BsInstagram}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Contact;
