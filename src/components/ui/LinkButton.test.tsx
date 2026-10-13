import { render, screen } from '@testing-library/react';
import LinkButton from './LinkButton';

describe('LinkButton', () => {
  it('opens external links in a new tab without leaking the opener', () => {
    render(
      <LinkButton href='https://www.linkedin.com/in/debajit-mallick/' external>
        LinkedIn
      </LinkButton>
    );
    const link = screen.getByRole('link', { name: /linkedin/i });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('keeps in-site links in the same tab', () => {
    render(<LinkButton href='#experience'>See experience</LinkButton>);
    const link = screen.getByRole('link', { name: 'See experience' });
    expect(link).toHaveAttribute('href', '#experience');
    expect(link).not.toHaveAttribute('target');
  });
});
