import type { MetadataRoute } from 'next';
import { absoluteURL } from '@/lib/site';

const robots = (): MetadataRoute.Robots => ({
  rules: { userAgent: '*', allow: '/' },
  sitemap: absoluteURL('/sitemap.xml'),
});

export default robots;
