import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Achievements from './Achievements';
import '../../../utils/intersectionObserverMock';

describe('Achievements', () => {
  it('renders Achievements', () => {
    const achievementsList = [
      'Put your achievement 1 here. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
      'Put your achievement 2 here. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
      'Put your achievement 3 here. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
      'Put your achievement 4 here. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    ];
    render(<Achievements achievementsData={achievementsList} />);

    // to test achievements header
    const sectionHeaderTitle = screen.getByText('Achievements');
    expect(sectionHeaderTitle).toBeInTheDocument();
    expect(sectionHeaderTitle.tagName).toBe('H2');
    expect(sectionHeaderTitle).toHaveTextContent('Achievements');
    expect(sectionHeaderTitle).toHaveClass('text-4xl');

    // to test achievements list
    const achievements = achievementsList.map((achievement) => {
      return screen.getByText(achievement);
    });
    expect(achievements.length).toBe(achievementsList.length);
    achievements.forEach((achievement, index) => {
      expect(achievement).toBeInTheDocument();
      expect(achievement.tagName).toBe('LI');
      expect(achievement).toHaveTextContent(achievementsList[index]);
    });
  });
});
