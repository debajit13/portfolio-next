import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';
import Header from '@/components/global/header/Header';
import data from '@/constants/data.json';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  ...data?.metaData,
  metadataBase: new URL(data?.metaData?.metadataBase),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='apple-touch-icon' href='./assets/apple-touch-icon.png' />
      </head>
      <body className={`${inter.className} h-full pt-2  `}>
        <Providers>
          <Header routes={data?.routes} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
