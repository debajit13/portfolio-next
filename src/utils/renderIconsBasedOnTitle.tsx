import {
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from 'react-icons/bs';

/**
 * render social media icons based on title
 *
 * @param {string} title
 * @return {*}
 */
export const renderIconBasedOnTitle = (title: string): any => {
  switch (title) {
    case 'LinkedIn':
      return <BsLinkedin className='w-6 h-6' />;
    case 'Twitter':
      return <BsTwitter className='w-6 h-6' />;
    case 'GitHub':
      return <BsGithub className='w-6 h-6' />;
    case 'Facebook':
      return <BsFacebook className='w-6 h-6' />;
    case 'Instagram':
      return <BsInstagram className='w-6 h-6' />;
    default:
      return false;
  }
};
