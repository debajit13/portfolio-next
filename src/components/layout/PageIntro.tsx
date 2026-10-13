const PageIntro = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <header className='pb-10 pt-12 md:pb-14 md:pt-20'>
    <h1 className='text-display'>{title}</h1>
    <p className='text-lead mt-5 max-w-prose text-fg-secondary'>{children}</p>
  </header>
);

export default PageIntro;
