import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  external?: boolean;
};

const VARIANTS = {
  primary: 'glass-tinted text-white hover:brightness-110',
  secondary: 'border border-line bg-canvas text-fg hover:border-fg-tertiary',
};

const LinkButton = ({ href, children, variant = 'primary', external }: LinkButtonProps) => {
  const className = `pressable inline-flex h-11 items-center gap-1.5 rounded-full px-5 text-[0.9375rem] font-medium ${VARIANTS[variant]}`;

  if (external) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' className={className}>
        {children}
        <BsArrowUpRight aria-hidden className='h-3.5 w-3.5' />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default LinkButton;
