import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NextImageMock from '../../utils/nextImageMock';
import ProjectCard from './ProjectCard';
import '../../utils/intersectionObserverMock';

jest.mock('next/image', () => NextImageMock);

describe('ProjectCard', () => {
  it('renders ProjectCard', () => {
    const techstackList = ['HTML 5', 'CSS 3', 'JavaScript'];
    render(
      <ProjectCard
        title='Test Project'
        description='This is a test description'
        image='https://ik.imagekit.io/debajit13/utilitis/Logo.webp?updatedAt=1708256500208'
        techstack={techstackList}
        githubURL='https://github.com/'
        webURL='https://myproject.com/'
      />
    );

    // to test the title of project card
    const title = screen.getByRole('heading', { name: /Test Project/i });
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H3');
    expect(title).toHaveTextContent('Test Project');

    // to test the description of project card
    const description = screen.getByText('This is a test description');
    expect(description).toBeInTheDocument();
    expect(description.tagName).toBe('P');
    expect(description).toHaveTextContent('This is a test description');

    // to test the image of the project card
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image.tagName).toBe('IMG');
    expect(image).toHaveAttribute(
      'src',
      'https://ik.imagekit.io/debajit13/utilitis/Logo.webp?updatedAt=1708256500208'
    );

    // to test the techstack of project card
    const techstack = techstackList.map((skill) => screen.queryByText(skill));
    expect(techstack.length).toBe(techstackList.length);
    techstack.forEach((tech) => {
      expect(tech).toBeInTheDocument();
      expect(tech).toHaveClass('pill');
    });

    // to test the githubURL of the project card
    const githubURL = screen.getByRole('link', { name: /GitHub/i });
    expect(githubURL).toBeInTheDocument();
    expect(githubURL.tagName).toBe('A');
    expect(githubURL).toHaveTextContent('GitHub');
    expect(githubURL).toHaveAttribute('href', 'https://github.com/');

    // to test the webURL of the project card
    const webURL = screen.getByRole('link', { name: /Website/i });
    expect(webURL).toBeInTheDocument();
    expect(webURL.tagName).toBe('A');
    expect(webURL).toHaveTextContent('Website');
    expect(webURL).toHaveAttribute('href', 'https://myproject.com/');
  });
});
