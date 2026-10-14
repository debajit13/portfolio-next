import { fireEvent, render, screen } from '@testing-library/react';
import TalkPhotos from './TalkPhotos';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ alt }: { alt: string }) => <span role='img' aria-label={alt} />,
}));

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = function showModal(this: HTMLDialogElement) {
    this.setAttribute('open', '');
  };
  HTMLDialogElement.prototype.close = function close(this: HTMLDialogElement) {
    this.removeAttribute('open');
    this.dispatchEvent(new Event('close'));
  };
  Element.prototype.scrollTo = function scrollTo(
    this: Element,
    options?: ScrollToOptions | number
  ) {
    if (typeof options === 'object') this.scrollLeft = options.left ?? 0;
  } as Element['scrollTo'];
  Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
    configurable: true,
    get: () => 100,
  });
  window.matchMedia = jest.fn().mockReturnValue({ matches: false });
});

const talk = {
  title: 'Building Production Apps using Firebase and AI',
  organiser: 'GDG On Campus BIT',
  images: [
    'https://example.com/1.webp',
    'https://example.com/2.webp',
    'https://example.com/3.webp',
  ],
};

describe('TalkPhotos', () => {
  it('renders nothing for a talk without photos', () => {
    const { container } = render(<TalkPhotos talk={{ ...talk, images: [] }} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('opens a viewer with every photo described, then returns focus on close', () => {
    render(<TalkPhotos talk={talk} />);
    const trigger = screen.getByRole('button', { name: /view 3 photos/i });
    fireEvent.click(trigger);

    expect(screen.getByText('1 of 3')).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: /photo \d of 3 from/i })).toHaveLength(3);
    expect(screen.getByRole('button', { name: 'Previous photo' })).toBeDisabled();

    fireEvent.click(screen.getByRole('button', { name: 'Next photo' }));
    expect(screen.getByText('2 of 3')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Close photos' }));
    expect(screen.queryByText('2 of 3')).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it('keeps arrow keys working after the last photo disables Next', () => {
    render(<TalkPhotos talk={talk} />);
    fireEvent.click(screen.getByRole('button', { name: /view 3 photos/i }));
    fireEvent.click(screen.getByRole('button', { name: 'Next photo' }));
    fireEvent.click(screen.getByRole('button', { name: 'Next photo' }));
    expect(screen.getByText('3 of 3')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next photo' })).toBeDisabled();

    fireEvent.keyDown(document.body, { key: 'ArrowLeft' });
    expect(screen.getByText('2 of 3')).toBeInTheDocument();
    fireEvent.keyDown(document.body, { key: 'ArrowRight' });
    fireEvent.keyDown(document.body, { key: 'ArrowRight' });
    expect(screen.getByText('3 of 3')).toBeInTheDocument();
  });
});
