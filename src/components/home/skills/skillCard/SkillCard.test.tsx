import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NextImageMock from '../../../../utils/nextImageMock';
import SkillCard from './SkillCard';
import '../../../../utils/intersectionObserverMock';

jest.mock('next/image', () => NextImageMock);

describe('SkillCard', () => {
  it('renders SkillCard', () => {
    render(
      <SkillCard
        name='HTML 5'
        image='https://ik.imagekit.io/debajit13/Skills/html5.svg?updatedAt=1700108666696'
      />
    );
    // to test skill name of skillCard
    let skillName = screen.getByText('HTML 5');
    expect(skillName).toBeInTheDocument();
    expect(skillName.tagName).toBe('H3');
    expect(skillName).toHaveTextContent('HTML 5');
    expect(skillName).toHaveClass('font-bold');

    // to test logo of skillCard
    let skillLogo = screen.getByRole('img', { name: /HTML 5/ });
    expect(skillLogo).toBeInTheDocument();
    expect(skillLogo.tagName).toBe('IMG');
    expect(skillLogo).toHaveAttribute(
      'src',
      'https://ik.imagekit.io/debajit13/Skills/html5.svg?updatedAt=1700108666696'
    );
    expect(skillLogo).toHaveAttribute('alt', 'HTML 5');
  });
});
