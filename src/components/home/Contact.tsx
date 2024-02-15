import {
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from 'react-icons/bs';

const Contact = () => {
  return (
    <footer className='bg-white dark:bg-gray-900 p-3'>
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
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2024 Debajit Mallick
          </span>
          <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
            <div>
              <a
                href='https://www.linkedin.com/in/debajit-mallick'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 dark:hover:text-white'
              >
                <BsLinkedin className='w-6 h-6' />
              </a>
            </div>

            <div>
              <a
                href='https://twitter.com/MallickDebajit'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 dark:hover:text-white'
              >
                <BsTwitter className='w-6 h-6' />
              </a>
            </div>

            <div>
              <a
                href='https://github.com/debajit13/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 dark:hover:text-white'
              >
                <BsGithub className='w-6 h-6' />
              </a>
            </div>

            <div>
              <a
                href='https://m.facebook.com/debajit.mallick.13/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 dark:hover:text-white'
              >
                <BsFacebook className='w-6 h-6' />
              </a>
            </div>

            <div>
              <a
                href='https://www.instagram.com/debajit_mallick_13/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 dark:hover:text-white'
              >
                <BsInstagram className='w-6 h-6' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
