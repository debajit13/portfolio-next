import LinkButton from '@/components/ui/LinkButton';

const NotFound = () => (
  <div className='mx-auto flex max-w-page flex-col items-start px-4 py-24 sm:px-6 md:py-36'>
    <p className='text-eyebrow text-fg-tertiary'>404</p>
    <h1 className='text-display mt-3'>This page doesn’t exist.</h1>
    <p className='text-lead mt-5 max-w-prose text-fg-secondary'>
      It may have moved when the site was reorganised. Projects and experience now live on
      the home page.
    </p>
    <div className='mt-8 flex flex-wrap gap-3'>
      <LinkButton href='/'>Go home</LinkButton>
      <LinkButton href='/writing' variant='secondary'>
        Read the writing
      </LinkButton>
    </div>
  </div>
);

export default NotFound;
