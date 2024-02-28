import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ExperienceCard from './ExperienceCard';
import '../../utils/intersectionObserverMock';

describe('ExperienceCard', () => {
  it('renders ExperienceCard', () => {
    const skillList = ['HTML 5', 'CSS 3', 'JavaScript'];
    const keyAchievementList = ['achievement 1', 'achievement 2'];

    render(
      <ExperienceCard
        companyName='ABC'
        role='Software Engineer'
        skills={skillList}
        keyAchivements={keyAchievementList}
        timeline='01/01/2022 - Present'
      />
    );

    // to test the company name of experience card
    const companyName = screen.getByRole('heading', { name: /ABC/i });
    expect(companyName).toBeInTheDocument();
    expect(companyName.tagName).toBe('H2');
    expect(companyName).toHaveTextContent('ABC');

    // to test the role of experience card
    const role = screen.getByRole('heading', { name: /Software Engineer/i });
    expect(role).toBeInTheDocument();
    expect(role.tagName).toBe('H3');
    expect(role).toHaveTextContent('Software Engineer');

    // to test the skills of experience card
    const skills = skillList.map((skill) => screen.queryByText(skill));
    expect(skills.length).toBe(skillList.length);
    skills.forEach((skill) => {
      expect(skill).toBeInTheDocument();
      expect(skill).toHaveClass('pill');
    });

    // to test the achievements of experience card
    const achievements = keyAchievementList.map((achievement) =>
      screen.queryByText(achievement)
    );
    expect(achievements.length).toBe(keyAchievementList.length);
    achievements.forEach((achivement) => {
      expect(achivement).toBeInTheDocument();
    });

    // to test the role of experience card
    const timeline = screen.getByText('01/01/2022 - Present');
    expect(timeline).toBeInTheDocument();
    expect(timeline.tagName).toBe('TIME');
    expect(timeline).toHaveTextContent('01/01/2022 - Present');
  });
});
