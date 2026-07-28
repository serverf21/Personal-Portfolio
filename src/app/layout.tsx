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
  title: 'Sarvagya Saxena — AI Systems Engineer',
  description:
    'AI Systems Engineer building production Agentic AI, RAG pipelines, and MCP servers at Walmart Global Tech.',
  alternates: {
    canonical: 'https://sarvagyasaxena.tech',
  },
  openGraph: {
    title: 'Sarvagya Saxena — AI Systems Engineer',
    description:
      'AI Systems Engineer building production Agentic AI, RAG pipelines, and MCP servers at Walmart Global Tech.',
    url: 'https://sarvagyasaxena.tech',
    siteName: 'Sarvagya Saxena',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarvagya Saxena — AI Systems Engineer',
    creator: '@sarvagyasaxena',
    description:
      'AI Systems Engineer building production Agentic AI, RAG pipelines, and MCP servers at Walmart Global Tech.',
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
