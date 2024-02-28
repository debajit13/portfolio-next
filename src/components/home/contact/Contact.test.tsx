import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';
import '../../../utils/intersectionObserverMock';

describe('Contacts', () => {
  it('renders Contacts', () => {
    const contactsList = [
      {
        title: 'LinkedIn',
        URL: 'https://www.linkedin.com/in/debajit-mallick/',
      },
      {
        title: 'Twitter',
        URL: 'https://twitter.com/MallickDebajit',
      },
      {
        title: 'GitHub',
        URL: 'https://github.com/debajit13/',
      },
      {
        title: 'Facebook',
        URL: 'https://www.facebook.com/debajit.mallick.13/',
      },
      {
        title: 'Instagram',
        URL: 'https://www.instagram.com/debajit_mallick_13/',
      },
    ];
    render(<Contact contactsData={contactsList} />);

    // to test Contacts header
    const sectionHeaderTitle = screen.getByText('Contact Me');
    expect(sectionHeaderTitle).toBeInTheDocument();
    expect(sectionHeaderTitle.tagName).toBe('H2');
    expect(sectionHeaderTitle).toHaveTextContent('Contact Me');
    expect(sectionHeaderTitle).toHaveClass('text-4xl');

    // to test Contacts list
    const contacts = contactsList.map((contact) => {
      return screen.getByTestId(contact.title);
    });
    expect(contacts.length).toBe(contactsList.length);
    contacts.forEach((contact, index) => {
      expect(contact).toBeInTheDocument();
      expect(contact.tagName).toBe('A');
      expect(contact).toHaveAttribute('href', contactsList[index].URL);
    });
  });
});
