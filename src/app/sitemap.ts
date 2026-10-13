import type { MetadataRoute } from 'next';
import { absoluteURL, SITE_PATHS } from '@/lib/site';

const sitemap = (): MetadataRoute.Sitemap =>
  SITE_PATHS.map((path) => ({
    url: absoluteURL(path),
    changeFrequency: path === '/' ? 'monthly' : 'weekly',
    priority: path === '/' ? 1 : 0.8,
  }));

export default sitemap;
