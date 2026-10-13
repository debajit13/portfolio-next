import { ImageResponse } from 'next/og';
import { profile, talks, yearsOfExperience } from './content';
import { SITE_URL, SOCIAL_CARD_SIZE } from './site';

export const renderSocialCard = () => {
  const stats = [
    { value: `${yearsOfExperience()}+`, label: 'years' },
    ...profile.stats.map(({ value, shortLabel }) => ({ value, label: shortLabel })),
    { value: String(talks.length), label: 'talks' },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#ffffff',
          color: '#1d1d1f',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 680 }}>
          <div style={{ fontSize: 30, color: '#56565b' }}>
            {`${profile.role} at ${profile.company}`}
          </div>
          <div
            style={{ fontSize: 88, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05, marginTop: 12 }}
          >
            {profile.name}
          </div>
          <div style={{ fontSize: 40, color: '#56565b', marginTop: 16, letterSpacing: -1 }}>
            {profile.tagline}
          </div>
          <div style={{ display: 'flex', gap: 40, marginTop: 56 }}>
            {stats.map(({ value, label }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 40, fontWeight: 600, letterSpacing: -1 }}>{value}</div>
                <div style={{ fontSize: 22, color: '#6e6e73', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 24, color: '#0066cc', marginTop: 48 }}>
            {new URL(SITE_URL).host}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain img elements only */}
        <img
          src={profile.image}
          alt=''
          width={340}
          height={340}
          style={{ borderRadius: 56, objectFit: 'cover' }}
        />
      </div>
    ),
    SOCIAL_CARD_SIZE
  );
};
