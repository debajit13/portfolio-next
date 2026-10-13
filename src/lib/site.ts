import data from '@/constants/data.json';
import { profile, yearsOfExperience } from './content';

export const SITE_URL = data.metaData.siteURL;

export const SOCIAL_CARD_SIZE = { width: 1200, height: 630 };

export const socialCardAlt = `${profile.name}, ${profile.role} at ${profile.company}`;

export const SITE_PATHS = ['/', '/writing', '/speaking'];

export const absoluteURL = (path: string) => new URL(path, SITE_URL).toString();

export const siteDescription = () =>
  data.metaData.description.replace('{years}', String(yearsOfExperience()));
