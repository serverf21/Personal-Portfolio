import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SITE } from '@/lib/constants';

const FOOTER_SOCIAL = [
  {
    label: 'GitHub',
    href: 'https://github.com/serverf21',
    Icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sarvagya-saxena-a8740195/',
    Icon: FaLinkedinIn,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/server_saxena/',
    Icon: AiFillInstagram,
  },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-dark border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-ink-dark/90">
            Designed and Developed by {SITE.name}
          </p>
          <p className="mt-1 text-sm text-ink-dark/60">Copyright © {year}</p>
        </div>

        <nav aria-label="Social links">
          <ul className="m-0 flex list-none flex-row items-center justify-center gap-6 p-0">
            {FOOTER_SOCIAL.map(({ label, href, Icon }) => (
              <li key={label} className="leading-none">
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="interactive inline-flex text-ink-dark/70 transition-colors hover:text-forge-cyan"
                >
                  <Icon size={26} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
