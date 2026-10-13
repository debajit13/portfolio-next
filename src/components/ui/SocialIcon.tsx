import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { FaDev } from 'react-icons/fa';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  LinkedIn: BsLinkedin,
  GitHub: BsGithub,
  X: BsTwitterX,
  'Dev.to': FaDev,
};

const SocialIcon = ({ title }: { title: string }) => {
  const Icon = ICONS[title];
  return Icon ? <Icon aria-hidden className='h-5 w-5' /> : null;
};

export default SocialIcon;
