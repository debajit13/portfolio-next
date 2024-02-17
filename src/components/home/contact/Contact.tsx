import Link from 'next/link';
import { ContactsDataType, ContactDataType } from './ContactDataType.interface';
import { renderIconBasedOnTitle } from '@/utils/renderIconsBasedOnTitle';
import SectionHeader from '@/components/global/SectionHeader';

const Contact: React.FC<ContactsDataType> = ({ contactsData }) => {
  return (
    <footer className='bg-white dark:bg-gray-900 p-3'>
      <div className='w-full py-8 px-0 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <SectionHeader title='Contact Me' />
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
            {contactsData.map((contactData: ContactDataType) => (
              <div key={contactData.title}>
                <Link
                  aria-label='LinkedIn'
                  href={contactData.URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 dark:hover:text-white'
                >
                  {contactData && renderIconBasedOnTitle(contactData?.title)}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
