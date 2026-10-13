const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className='text-caption inline-flex items-center rounded-full bg-fg/[0.06] px-2.5 py-1 text-fg-secondary'>
    {children}
  </span>
);

export default Tag;
