import { act, fireEvent, render, screen } from '@testing-library/react';
import SiteHeader from './SiteHeader';

let mockPathname = '/writing';
jest.mock('next/navigation', () => ({ usePathname: () => mockPathname }));

type ObserverCallback = (entries: Partial<IntersectionObserverEntry>[]) => void;
let notifyObserver: ObserverCallback = () => {};

beforeAll(() => {
  window.matchMedia = jest.fn().mockReturnValue({
    matches: false,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  });
  window.IntersectionObserver = jest.fn((callback: ObserverCallback) => {
    notifyObserver = callback;
    return { observe: jest.fn(), disconnect: jest.fn(), unobserve: jest.fn() };
  }) as unknown as typeof IntersectionObserver;
});

beforeEach(() => {
  mockPathname = '/writing';
  localStorage.clear();
  document.documentElement.classList.remove('dark');
  document.body.innerHTML = '';
});

const renderOnHomeWithExperienceSection = () => {
  mockPathname = '/';
  const section = document.createElement('section');
  section.id = 'experience';
  document.body.appendChild(section);
  render(<SiteHeader />);
  return section;
};

describe('SiteHeader', () => {
  it('marks the current page for assistive technology', () => {
    render(<SiteHeader />);
    expect(screen.getByRole('link', { name: 'Writing' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Speaking' })).not.toHaveAttribute('aria-current');
  });

  it('highlights Experience only while its section is on screen', () => {
    const section = renderOnHomeWithExperienceSection();
    const experience = screen.getByRole('link', { name: 'Experience' });
    expect(experience).not.toHaveAttribute('aria-current');

    act(() => notifyObserver([{ target: section, isIntersecting: true }]));
    expect(experience).toHaveAttribute('aria-current', 'location');

    act(() => notifyObserver([{ target: section, isIntersecting: false }]));
    expect(experience).not.toHaveAttribute('aria-current');
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
