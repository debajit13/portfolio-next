import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/global/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Debajit Mallick',
  description:
    'Debajit Mallick is Software Engineer with 2+ years of experience in Frontend Development. Also, He is a Tech Speaker and active member in several tech communities.',
  authors: [
    {
      name: 'Debajit Mallick',
    },
  ],
  keywords:
    'Frontend Developer, ReactJS, VueJS, TypeScript, JavaScript, HTML5, CSS3, NuxtJS, NextJS',
  manifest: '/manifest.json',
  metadataBase: new URL('https://ik.imagekit.io/debajit13/utilitis'),
  openGraph: {
    type: 'website',
    url: 'https://debajitmallick.com/',
    title: 'Debajit Mallick',
    description:
      'A Software Engineer with 2+ years of experience in Frontend Development. Also, I am a Tech Speaker and active member in several tech communities.',
    siteName: 'Debajit Mallick',
    images: [
      {
        url: '/Debajit_Mallick_Open_Graphwebp.webp?updatedAt=1702190645178',
      },
    ],
  },
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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
