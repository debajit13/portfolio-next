import { fireEvent, render, screen } from '@testing-library/react';
import HighlightList from './HighlightList';

beforeAll(() => {
  window.matchMedia = jest.fn().mockReturnValue({ matches: false });
});

const highlights = ['First', 'Second', 'Third', 'Fourth **bold**', 'Fifth'];

describe('HighlightList', () => {
  it('shows the first items and offers the rest behind one control', () => {
    render(<HighlightList highlights={highlights} visibleCount={3} />);
    const toggle = screen.getByRole('button', { name: '2 more highlights' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByText('Fifth').closest('[aria-hidden]')).toHaveAttribute(
      'aria-hidden',
      'true'
    );
  });

  it('continues the same list and moves the control to its end when expanded', () => {
    render(<HighlightList highlights={highlights} visibleCount={3} />);
    fireEvent.click(screen.getByRole('button', { name: '2 more highlights' }));

    const toggle = screen.getByRole('button', { name: 'Show fewer' });
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Fifth').closest('[aria-hidden]')).toHaveAttribute(
      'aria-hidden',
      'false'
    );
    expect(screen.getByText('bold').tagName).toBe('STRONG');

    const lastItem = screen.getByText('Fifth');
    expect(
      lastItem.compareDocumentPosition(toggle) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy();
  });

  it('renders no control when everything fits', () => {
    render(<HighlightList highlights={highlights.slice(0, 2)} visibleCount={3} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
