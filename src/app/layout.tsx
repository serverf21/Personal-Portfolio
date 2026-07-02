import type { Metadata } from 'next';
import { JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import ClientProviders from '@/components/providers/ClientProviders';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body-next',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-next',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sarvagyasaxena.tech'),
  title: 'Sarvagya Saxena — Full Stack Developer',
  description:
    'Full Stack Developer & Software Engineer at Walmart Global Tech India. Building fast, scalable web apps with React, Next.js, Node.js, and TypeScript.',
  alternates: {
    canonical: 'https://sarvagyasaxena.tech',
  },
  openGraph: {
    title: 'Sarvagya Saxena — Full Stack Developer',
    description:
      'Full Stack Developer & Software Engineer at Walmart Global Tech India.',
    url: 'https://sarvagyasaxena.tech',
    siteName: 'Sarvagya Saxena',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarvagya Saxena — Full Stack Developer',
    creator: '@sarvagyasaxena',
    description:
      'Full Stack Developer & Software Engineer at Walmart Global Tech India.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body antialiased">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
