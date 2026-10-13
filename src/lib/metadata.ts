import type { Metadata } from 'next';
import data from '@/constants/data.json';
import { profile } from './content';
import { absoluteURL, SITE_URL, siteDescription, SOCIAL_CARD_SIZE, socialCardAlt } from './site';

const { metaData } = data;

const socialImage = (path: string) => [{ url: path, ...SOCIAL_CARD_SIZE, alt: socialCardAlt }];

export const rootMetadata = (): Metadata => {
  const description = siteDescription();
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: metaData.title, template: `%s · ${profile.name}` },
    description,
    keywords: metaData.keywords,
    authors: [{ name: profile.name, url: SITE_URL }],
    creator: profile.name,
    manifest: metaData.manifest,
    alternates: { canonical: '/' },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'profile',
      firstName: 'Debajit',
      lastName: 'Mallick',
      url: SITE_URL,
      siteName: profile.name,
      title: metaData.title,
      description,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      creator: metaData.twitterHandle,
      title: metaData.title,
      description,
    },
  };
};

export const pageMetadata = (path: string, title: string, description: string): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: 'website',
    url: absoluteURL(path),
    siteName: profile.name,
    title: `${title} · ${profile.name}`,
    description,
    locale: 'en_US',
    images: socialImage('/opengraph-image'),
  },
  twitter: {
    card: 'summary_large_image',
    creator: metaData.twitterHandle,
    title: `${title} · ${profile.name}`,
    description,
    images: socialImage('/twitter-image'),
  },
});
