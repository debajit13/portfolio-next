import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SectionHeader from './SectionHeader';
import '../../../utils/intersectionObserverMock';

describe('SectionHeader', () => {
  it('renders SectionHeader', () => {
    render(<SectionHeader title='Test Section' />);

    // to test section header title
    const sectionHeaderTitle = screen.getByText('Test Section');
    expect(sectionHeaderTitle).toBeInTheDocument();
    expect(sectionHeaderTitle.tagName).toBe('H2');
    expect(sectionHeaderTitle).toHaveTextContent('Test Section');
    expect(sectionHeaderTitle).toHaveClass('text-4xl');
  });
});
