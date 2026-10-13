import type { Metadata, Viewport } from 'next';
import './globals.css';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import GlassLens from '@/components/layout/GlassLens';
import { THEME_STORAGE_KEY } from '@/lib/theme';
import { rootMetadata } from '@/lib/metadata';
import { Analytics } from '@vercel/analytics/next';

export const revalidate = 86400;

export const generateMetadata = (): Metadata => rootMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

// Safari accepts backdrop-filter: url() but paints nothing, so @supports cannot gate refraction.
const prepareDocument = `(() => {
  const root = document.documentElement;
  let stored = null;
  try { stored = localStorage.getItem('${THEME_STORAGE_KEY}'); } catch {}
  const dark = stored ? stored === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  root.classList.toggle('dark', dark);
  const brands = navigator.userAgentData && navigator.userAgentData.brands;
  if (brands && brands.some((entry) => entry.brand === 'Chromium')) root.dataset.refraction = '';
})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: prepareDocument }} />
      </head>
      <body className='min-h-screen'>
        <a
          href='#main'
          className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-canvas focus:px-4 focus:py-2'
        >
          Skip to content
        </a>
        <GlassLens />
        <SiteHeader />
        <main id='main' className='pt-16'>
          {children}
        </main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
