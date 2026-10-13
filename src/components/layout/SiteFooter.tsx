import { profile, socialLinks } from '@/lib/content';
import SocialIcon from '../ui/SocialIcon';
import LinkButton from '../ui/LinkButton';

const SiteFooter = () => {
  const linkedIn = socialLinks.find(({ title }) => title === 'LinkedIn');

  return (
    <footer id='contact' className='border-t border-line/70 bg-surface'>
      <div className='mx-auto grid max-w-page gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr] md:py-24'>
        <div>
          <h2 className='text-title'>Let’s talk.</h2>
          <p className='text-lead mt-4 max-w-prose text-fg-secondary'>
            For engineering conversations, speaking invitations or community events, LinkedIn is
            the quickest way to reach me.
          </p>
          <div className='mt-8 flex flex-wrap gap-3'>
            {linkedIn && (
              <LinkButton href={linkedIn.URL} external>
                Message on LinkedIn
              </LinkButton>
            )}
            <LinkButton href={profile.mentorshipURL} variant='secondary' external>
              Book a mentorship call
            </LinkButton>
          </div>
        </div>
        <div className='flex flex-col justify-between gap-8 md:items-end'>
          <ul className='flex gap-2'>
            {socialLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.URL}
                  target='_blank'
                  rel='me noopener noreferrer'
                  aria-label={link.title}
                  className='pressable grid h-11 w-11 place-items-center rounded-full text-fg-secondary hover:bg-fg/5 hover:text-fg'
                >
                  <SocialIcon title={link.title} />
                </a>
              </li>
            ))}
          </ul>
          <p className='text-caption text-fg-tertiary'>
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
