import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NextImageMock from '../../../utils/nextImageMock';
import Skills from './Skills';
import '../../../utils/intersectionObserverMock';

jest.mock('next/image', () => NextImageMock);

describe('Skills', () => {
  it('renders Skills', () => {
    const skillList = [
      {
        name: 'HTML 5',
        image:
          'https://ik.imagekit.io/debajit13/Skills/html5.svg?updatedAt=1700108666696',
      },
      {
        name: 'CSS 3',
        image:
          'https://ik.imagekit.io/debajit13/Skills/css3.svg?updatedAt=1700108678348',
      },
      {
        name: 'JavaScript',
        image:
          'https://ik.imagekit.io/debajit13/Skills/javascript.svg?updatedAt=1700108662141',
      },
      {
        name: 'TypeScript',
        image:
          'https://ik.imagekit.io/debajit13/Skills/typescript.svg?updatedAt=1700108681965',
      },
      {
        name: 'React.js',
        image:
          'https://ik.imagekit.io/debajit13/Skills/react.svg?updatedAt=1700108674259',
      },
      {
        name: 'Vue.js',
        image:
          'https://ik.imagekit.io/debajit13/Skills/vue.svg?updatedAt=1700108670283',
      },
    ];
    render(<Skills skillsData={skillList} />);

    // to test skills header
    const sectionHeaderTitle = screen.getByText('Skills');
    expect(sectionHeaderTitle).toBeInTheDocument();
    expect(sectionHeaderTitle.tagName).toBe('H2');
    expect(sectionHeaderTitle).toHaveTextContent('Skills');
    expect(sectionHeaderTitle).toHaveClass('text-4xl');

    // to test skills list
    const skills = skillList.map((skill) => {
      return screen.getByText(skill.name);
    });
    expect(skills.length).toBe(skillList.length);
    skills.forEach((skill, index) => {
      expect(skill).toBeInTheDocument();
      expect(skill.tagName).toBe('H3');
      expect(skill).toHaveTextContent(skillList[index].name);
      expect(skill).toHaveClass('font-bold');
    });

    // to test skill logo list
    const skillLogos = skillList.map((skill) => {
      return screen.getByRole('img', { name: skill.name });
    });

    expect(skillLogos.length).toBe(skillList.length);
    skillLogos.forEach((skill, index) => {
      expect(skill).toBeInTheDocument();
      expect(skill.tagName).toBe('IMG');
      expect(skill).toHaveAttribute('src', skillList[index].image);
      expect(skill).toHaveAttribute('alt', skillList[index].name);
    });
  });
});
