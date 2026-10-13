'use client';
import { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { THEME_STORAGE_KEY } from '@/lib/theme';

const readStoredTheme = () => {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
};

const storeTheme = (theme: 'light' | 'dark') => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {}
};

const applyTheme = (isDark: boolean) =>
  document.documentElement.classList.toggle('dark', isDark);

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>();

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    const systemScheme = matchMedia('(prefers-color-scheme: dark)');
    const followSystem = (event: MediaQueryListEvent) => {
      if (readStoredTheme()) return;
      applyTheme(event.matches);
      setIsDark(event.matches);
    };
    systemScheme.addEventListener('change', followSystem);
    return () => systemScheme.removeEventListener('change', followSystem);
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains('dark');
    applyTheme(next);
    storeTheme(next ? 'dark' : 'light');
    setIsDark(next);
  };

  return (
    <button
      type='button'
      onClick={toggle}
      aria-label='Dark appearance'
      aria-pressed={isDark}
      className='pressable grid h-9 w-9 place-items-center rounded-full text-fg-secondary hover:bg-fg/[0.07] hover:text-fg'
    >
      <BsMoon aria-hidden className='h-4 w-4 dark:hidden' />
      <BsSun aria-hidden className='hidden h-4 w-4 dark:block' />
    </button>
  );
};

export default ThemeToggle;
