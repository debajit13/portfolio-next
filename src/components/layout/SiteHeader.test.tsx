import { fireEvent, render, screen } from '@testing-library/react';
import SiteHeader from './SiteHeader';

jest.mock('next/navigation', () => ({ usePathname: () => '/writing' }));

beforeAll(() => {
  window.matchMedia = jest.fn().mockReturnValue({
    matches: false,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  });
});

beforeEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove('dark');
});

describe('SiteHeader', () => {
  it('marks the current section for assistive technology', () => {
    render(<SiteHeader />);
    expect(screen.getByRole('link', { name: 'Writing' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Speaking' })).not.toHaveAttribute('aria-current');
  });

  it('toggles and remembers the appearance', () => {
    render(<SiteHeader />);
    const toggle = screen.getByRole('button', { name: 'Dark appearance' });
    expect(toggle).toHaveAttribute('aria-pressed', 'false');

    fireEvent.click(toggle);
    expect(document.documentElement).toHaveClass('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(toggle).toHaveAttribute('aria-pressed', 'true');

    fireEvent.click(toggle);
    expect(document.documentElement).not.toHaveClass('dark');
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
