import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
