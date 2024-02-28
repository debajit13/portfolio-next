import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { upperCaseFirstLetter } from '@/utils/utils';
import '../../../utils/intersectionObserverMock';

describe('Header', () => {
  it('renders Header', () => {
    const routeList = [
      {
        path: '/',
        title: 'home',
      },
      {
        path: '/projects',
        title: 'projects',
      },
      {
        path: '/experiences',
        title: 'experiences',
      },
      {
        path: '/blogs',
        title: 'blogs',
      },
      {
        path: '/talks',
        title: 'talks',
      },
    ];

    render(<Header routes={routeList} />);

    // to test the main wrapper of header component
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(nav.tagName).toBe('NAV');

    // to test the route wrapper of header
    const routes = routeList.map((route) =>
      screen.queryByText(upperCaseFirstLetter(route?.title))
    );

    expect(routes.length).toBe(routeList.length);
    routes.forEach((route) => {
      expect(route).toBeInTheDocument();
      expect(route?.tagName).toBe('SPAN');
    });

    // to test the routes link of header
    const routesLink = routeList.map((route) =>
      screen.queryByRole('link', { name: upperCaseFirstLetter(route?.title) })
    );

    expect(routesLink.length).toBe(routeList.length);
    routesLink.forEach((route, index) => {
      expect(route).toBeInTheDocument();
      expect(route?.tagName).toBe('A');
      expect(route).toHaveAttribute('href', routeList[index].path);
    });
  });
});
