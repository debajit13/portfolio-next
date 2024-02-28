import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import '../../../utils/intersectionObserverMock';

describe('Button', () => {
  it('renders Button', () => {
    // test for primary Button
    render(
      <Button
        title='primary button'
        variant='primary'
        href='https://google.com'
      />
    );

    // to test primary button
    const buttonTitle = screen.getByRole('link', { name: /primary button/ });
    expect(buttonTitle).toBeInTheDocument();
    expect(buttonTitle.tagName).toBe('A');
    expect(buttonTitle).toHaveTextContent('primary button');
    expect(buttonTitle).toHaveClass('bg-blue-700');

    // test for white Button
    render(
      <Button title='white button' variant='white' href='https://google.com' />
    );

    // to test white button
    const whiteButtonTitle = screen.getByRole('link', { name: /white button/ });
    expect(whiteButtonTitle).toBeInTheDocument();
    expect(whiteButtonTitle.tagName).toBe('A');
    expect(whiteButtonTitle).toHaveTextContent('white button');
    expect(whiteButtonTitle).toHaveClass('bg-white');

    // test for primary disabled button
    render(
      <Button
        title='primary disabled button'
        variant='primaryDisabled'
        disabled={true}
      />
    );

    // to test primary disabled button
    const primaryDisabledButton = screen.getByRole('button', {
      name: /primary disabled button/,
    });
    expect(primaryDisabledButton).toBeInTheDocument();
    expect(primaryDisabledButton.tagName).toBe('BUTTON');
    expect(primaryDisabledButton).toHaveTextContent('primary disabled button');
    expect(primaryDisabledButton).toHaveClass('opacity-50');
    expect(primaryDisabledButton).toHaveAttribute('disabled', '');

    // test for white disabled button
    render(
      <Button
        title='white disabled button'
        variant='whiteDisabled'
        disabled={true}
      />
    );

    // to test white disabled button
    const whiteDisabledButton = screen.getByRole('button', {
      name: /white disabled button/,
    });
    expect(whiteDisabledButton).toBeInTheDocument();
    expect(whiteDisabledButton.tagName).toBe('BUTTON');
    expect(whiteDisabledButton).toHaveTextContent('white disabled button');
    expect(whiteDisabledButton).toHaveClass('opacity-50');
    expect(whiteDisabledButton).toHaveAttribute('disabled', '');
  });
});
