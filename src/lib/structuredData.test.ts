import { experiences, profile, socialLinks } from './content';
import { profilePageSchema } from './structuredData';

describe('profilePageSchema', () => {
  it('describes the person behind the profile page for search engines', () => {
    const schema = profilePageSchema();
    expect(schema['@type']).toBe('ProfilePage');
    expect(schema.mainEntity).toMatchObject({
      '@type': 'Person',
      name: profile.name,
      jobTitle: profile.role,
      worksFor: { name: experiences[0].companyName },
      sameAs: socialLinks.map(({ URL }) => URL),
    });
    expect(schema.mainEntity.description).not.toContain('{years}');
  });

  it('does not publish private contact details', () => {
    expect(JSON.stringify(profilePageSchema())).not.toMatch(/@gmail\.com|mailto:|telephone/);
  });
});
