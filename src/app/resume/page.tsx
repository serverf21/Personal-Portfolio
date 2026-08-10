import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowLeft, FiDownload } from 'react-icons/fi';
import { SITE } from '@/lib/constants';
import { resolveResumePdf } from '@/lib/resume';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: `Resume — ${SITE.name}`,
  description: `View the resume of ${SITE.name}, ${SITE.title}.`,
  robots: { index: true, follow: true },
};

export default function ResumePage() {
  const resume = resolveResumePdf();

  return (
    <div className="flex min-h-screen flex-col bg-canvas-dark text-ink-dark">
      <header className="relative z-20 shrink-0 border-b border-white/10 bg-canvas-dark/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="interactive inline-flex items-center gap-2 font-mono text-sm text-forge-orange transition hover:text-forge-cyan"
          >
            <FiArrowLeft /> Back home
          </Link>
          <p className="hidden font-display text-sm font-semibold sm:block">
            {SITE.name} — Resume
          </p>
          {resume ? (
            <a
              href="/resume/file"
              download="resume.pdf"
              className="interactive inline-flex items-center gap-2 rounded-full border border-forge-orange px-4 py-2 text-sm font-semibold text-forge-orange transition hover:bg-forge-orange hover:text-canvas-dark"
            >
              <FiDownload /> Download
            </a>
          ) : (
            <span className="text-sm text-ink-dark/50">Unavailable</span>
          )}
        </div>
      </header>

      <main className="relative z-10 min-h-0 flex-1 bg-[#525659]">
        {resume ? (
          <iframe
            title={`${SITE.name} Resume`}
            src="/resume/file"
            className="h-[calc(100vh-4.25rem)] w-full border-0"
          />
        ) : (
          <div className="flex h-[calc(100vh-4.25rem)] flex-col items-center justify-center gap-3 px-6 text-center">
            <p className="font-display text-xl font-semibold text-white">Resume not found</p>
            <p className="max-w-md text-sm text-white/70">
              Add a PDF to the <code className="font-mono text-forge-cyan">resume/</code> folder at
              the project root (e.g. <code className="font-mono text-forge-cyan">resume/resume.pdf</code>
              ), then refresh this page.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
