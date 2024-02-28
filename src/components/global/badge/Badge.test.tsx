import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Badge from './Badge';
import '../../../utils/intersectionObserverMock';

describe('Badge', () => {
  it('renders Badge', () => {
    // test for pill badge
    render(<Badge title='pill badge' variant='pill' />);

    // to test pill badge title
    const pillBadgeTitle = screen.getByText('pill badge');
    expect(pillBadgeTitle).toBeInTheDocument();
    expect(pillBadgeTitle.tagName).toBe('SPAN');
    expect(pillBadgeTitle).toHaveTextContent('pill badge');
    expect(pillBadgeTitle).toHaveClass('pill');

    // test for rectangle badge
    render(<Badge title='rectangle badge' variant='rectangle' />);

    // to test rectangle badge title
    const rectangleBadgeTitle = screen.getByText('rectangle badge');
    expect(rectangleBadgeTitle).toBeInTheDocument();
    expect(rectangleBadgeTitle.tagName).toBe('SPAN');
    expect(rectangleBadgeTitle).toHaveTextContent('rectangle badge');
    expect(rectangleBadgeTitle).toHaveClass('rectangle');
  });
});
