import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TalkCard from './TalkCard';
import '../../utils/intersectionObserverMock';

describe('TalkCard', () => {
  it('renders TalkCard', () => {
    const topicList = ['Frontend', 'HTML', 'CSS', 'JavaScript'];
    render(
      <TalkCard
        title='Beyond the Browser'
        date='August 25, 2023'
        organiser='GDG Durgapur (Google I/O Extended Durgapur 2023)'
        type='Offline'
        youtubeLink='https://youtu.be/N7ayafLm4GI'
        slidesLink="https://github.com/debajit13/tech-session-resources/blob/main/Beyond%20the%20Browser_%20A%20Look%20at%20Google%20I_O%202023's%20Web%20Enhancements.pdf"
        topics={topicList}
      />
    );

    // to test the title of talk card
    const title = screen.getByRole('heading', { name: /Beyond the Browser/i });
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H2');
    expect(title).toHaveTextContent('Beyond the Browser');

    // to test the date of talk card
    const date = screen.getByText(/August 25, 2023/i);
    expect(date).toBeInTheDocument();
    expect(date.tagName).toBe('SPAN');
    expect(date).toHaveTextContent('August 25, 2023');

    // to test the organiser of talk card
    const organiser = screen.getByText(
      'Organiser: GDG Durgapur (Google I/O Extended Durgapur 2023)'
    );
    expect(organiser).toBeInTheDocument();
    expect(organiser.tagName).toBe('P');
    expect(organiser).toHaveTextContent(
      'Organiser: GDG Durgapur (Google I/O Extended Durgapur 2023)'
    );

    // to test the type of talk card
    const type = screen.getByText(/Offline/i);
    expect(type).toBeInTheDocument();
    expect(type.tagName).toBe('SPAN');
    expect(type).toHaveTextContent('Offline');
    expect(type).toHaveClass('rectangle');

    // to test the youtubeLink of the talk card
    const youtubeLink = screen.getByRole('link', { name: /YouTube/i });
    expect(youtubeLink).toBeInTheDocument();
    expect(youtubeLink.tagName).toBe('A');
    expect(youtubeLink).toHaveTextContent('YouTube');
    expect(youtubeLink).toHaveAttribute('href', 'https://youtu.be/N7ayafLm4GI');

    // to test the slidesLink of the talk card
    const slidesLink = screen.getByRole('link', { name: /Slides/i });
    expect(slidesLink).toBeInTheDocument();
    expect(slidesLink.tagName).toBe('A');
    expect(slidesLink).toHaveTextContent('Slides');
    expect(slidesLink).toHaveAttribute(
      'href',
      "https://github.com/debajit13/tech-session-resources/blob/main/Beyond%20the%20Browser_%20A%20Look%20at%20Google%20I_O%202023's%20Web%20Enhancements.pdf"
    );

    // to test the topics of talk card
    const topics = topicList.map((topic) => screen.queryByText(topic));
    expect(topics.length).toBe(topicList.length);
    topics.forEach((tech) => {
      expect(tech).toBeInTheDocument();
      expect(tech).toHaveClass('pill');
    });
  });
});
