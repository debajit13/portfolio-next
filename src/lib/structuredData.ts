import { education, experiences, profile, socialLinks, toolkit } from './content';
import { SITE_URL, siteDescription } from './site';

export const profilePageSchema = () => {
  const current = experiences[0];
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: SITE_URL,
    mainEntity: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: profile.name,
      url: SITE_URL,
      image: profile.image,
      jobTitle: profile.role,
      description: siteDescription(),
      worksFor: { '@type': 'Organization', name: current.companyName },
      alumniOf: education.map(({ school }) => ({ '@type': 'CollegeOrUniversity', name: school })),
      knowsAbout: toolkit.flatMap(({ items }) => items),
      sameAs: socialLinks.map(({ URL }) => URL),
    },
  };
};
