'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle';

export const NAV_ITEMS = [
  { href: '/#experience', label: 'Experience' },
  { href: '/writing', label: 'Writing' },
  { href: '/speaking', label: 'Speaking' },
];

const COMPACT_AFTER_PX = 120;
const SCROLL_INTENT_PX = 6;

const useScrollState = () => {
  const [state, setState] = useState({ scrolled: false, compact: false });

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      setState((previous) => ({
        scrolled: y > 8,
        compact:
          Math.abs(delta) < SCROLL_INTENT_PX
            ? previous.compact
            : delta > 0 && y > COMPACT_AFTER_PX,
      }));
      if (Math.abs(delta) >= SCROLL_INTENT_PX) lastY = y;
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return state;
};

const useIndicator = (targetIndex: number | null) => {
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [box, setBox] = useState<{ left: number; width: number } | null>(null);

  const measure = useCallback(() => {
    const link = targetIndex === null ? null : linkRefs.current[targetIndex];
    setBox(link ? { left: link.offsetLeft, width: link.offsetWidth } : null);
  }, [targetIndex]);

  useLayoutEffect(measure, [measure]);

  useEffect(() => {
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  return { linkRefs, box };
};

const SiteHeader = () => {
  const pathname = usePathname();
  const { scrolled, compact } = useScrollState();
  const [hovered, setHovered] = useState<number | null>(null);
  const currentIndex = NAV_ITEMS.findIndex(({ href }) => href === pathname);
  const { linkRefs, box } = useIndicator(hovered ?? (currentIndex >= 0 ? currentIndex : null));

  return (
    <>
      <div
        aria-hidden
        className={`scroll-edge pointer-events-none fixed inset-x-0 top-0 z-40 h-20 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <header className='pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3'>
        <nav
          aria-label='Main'
          className={`glass glass-refract pointer-events-auto flex h-12 origin-top items-center gap-1 rounded-full pl-4 pr-1.5 transition-transform duration-300 ease-out motion-reduce:transition-none ${
            compact ? 'scale-[0.92]' : ''
          }`}
        >
          <Link
            href='/'
            className='mr-1 text-[0.9375rem] font-semibold tracking-tight sm:mr-3'
          >
            <span className='sm:hidden'>DM</span>
            <span className='hidden sm:inline'>Debajit Mallick</span>
          </Link>
          <div className='relative flex items-center' onPointerLeave={() => setHovered(null)}>
            {box && (
              <span
                aria-hidden
                className='absolute inset-y-0 left-0 rounded-full bg-fg/[0.08] transition-[transform,width] duration-300 ease-[cubic-bezier(0.3,0.7,0.2,1)] motion-reduce:transition-none'
                style={{ transform: `translateX(${box.left}px)`, width: box.width }}
              />
            )}
            {NAV_ITEMS.map(({ href, label }, index) => {
              const isCurrent = index === currentIndex;
              return (
                <Link
                  key={href}
                  ref={(node) => {
                    linkRefs.current[index] = node;
                  }}
                  href={href}
                  aria-current={isCurrent ? 'page' : undefined}
                  onPointerEnter={() => setHovered(index)}
                  onFocus={() => setHovered(index)}
                  onBlur={() => setHovered(null)}
                  className={`pressable relative rounded-full px-3 py-2 text-sm ${
                    isCurrent ? 'font-medium text-fg' : 'text-fg-secondary hover:text-fg'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
          <ThemeToggle />
        </nav>
      </header>
    </>
  );
};

export default SiteHeader;
