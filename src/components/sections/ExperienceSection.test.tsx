import { render, screen, within } from '@testing-library/react';
import { experiences } from '@/lib/content';
import ExperienceSection from './ExperienceSection';

jest.mock('next/image', () => ({
  __esModule: true,
  default: jest.requireActual('../../utils/nextImageMock').default,
}));

beforeAll(() => {
  window.matchMedia = jest.fn().mockReturnValue({ matches: false });
});

const roleOf = (companyName: string) =>
  screen.getByRole('list', { name: `Roles at ${companyName}` }).closest('ol > li') as HTMLElement;

describe('ExperienceSection', () => {
  it('links every company name to its website in a new tab', () => {
    render(<ExperienceSection />);
    experiences.forEach(({ companyName, website }) => {
      const link = screen.getByRole('link', { name: new RegExp(`^${companyName} `) });
      expect(link).toHaveAttribute('href', website);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      expect(link).toHaveAccessibleName(
        `${companyName} (opens company website in a new tab)`
      );
    });
  });

  it('shows each company logo as decoration beside its name', () => {
    const { container } = render(<ExperienceSection />);
    const logos = Array.from(container.querySelectorAll('img'));
    expect(logos.map((logo) => logo.getAttribute('src'))).toEqual(
      experiences.map(({ logo }) => logo)
    );
    logos.forEach((logo) => expect(logo).toHaveAttribute('alt', ''));
  });

  it('leaves out empty highlight and technology lists', () => {
    render(<ExperienceSection />);
    experiences.forEach(({ companyName, highlights, skills }) => {
      const role = within(roleOf(companyName));
      expect(role.queryAllByRole('list', { name: 'Technologies' })).toHaveLength(
        skills.length > 0 ? 1 : 0
      );
      if (highlights.length === 0) {
        expect(role.queryByRole('button')).toBeNull();
      }
    });
  });
});
