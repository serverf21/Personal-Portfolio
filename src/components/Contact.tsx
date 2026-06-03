'use client';

import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiCheck, FiLoader } from 'react-icons/fi';
import { sectionReveal, fadeUpItem, viewportOnce } from '@/lib/animations';
import { SITE, SOCIAL } from '@/lib/constants';

type FormState = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

export default function Contact() {
  const [details, setDetails] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const validate = useCallback((): FormErrors => {
    const next: FormErrors = {};
    if (!details.name.trim()) next.name = 'Name is required';
    if (!details.email.trim()) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) next.email = 'Invalid email';
    if (!details.message.trim()) next.message = 'Message is required';
    else if (details.message.trim().length < 10) next.message = 'At least 10 characters';
    return next;
  }, [details]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    if (Object.keys(formErrors).length) {
      toast.error('Please fix the errors below');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch(SITE.firebaseContactUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: details.name.trim(),
          email: details.email.trim(),
          message: details.message.trim(),
          timestamp: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      toast.success(`Thanks ${details.name}! I'll be in touch soon.`);
      setDetails({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 2500);
    } catch {
      setStatus('idle');
      toast.error('Failed to send. Please email me directly.');
    }
  };

  return (
    <motion.section
      id="contact"
      className="section-light py-24 lg:py-32"
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <motion.div variants={fadeUpItem}>
          <span className="rounded-full bg-forge-orange/15 px-3 py-1 font-mono text-xs text-forge-orange">
            Available for freelance opportunities
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-ink-light">Let&apos;s Connect</h2>
          <p className="mt-4 text-ink-light/75">
            Have a project in mind or want to collaborate? Send a message — I typically reply within
            48 hours.
          </p>
          <p className="mt-6">
            <a href={`mailto:${SITE.email}`} className="interactive font-mono text-forge-violet hover:underline">
              {SITE.email}
            </a>
          </p>
          <div className="mt-8 flex gap-4">
            <a href={SOCIAL[0].href} className="interactive text-ink-light/70 hover:text-forge-orange" aria-label="GitHub">
              <FaGithub size={22} />
            </a>
            <a href={SOCIAL[1].href} className="interactive text-ink-light/70 hover:text-forge-cyan" aria-label="LinkedIn">
              <FaLinkedin size={22} />
            </a>
            <a href={SOCIAL[2].href} className="interactive text-ink-light/70 hover:text-forge-violet" aria-label="Twitter">
              <FaTwitter size={22} />
            </a>
          </div>
        </motion.div>

        <motion.form
          variants={fadeUpItem}
          onSubmit={submit}
          className="glass-card space-y-5 p-6 text-ink-light lg:p-8"
        >
          <div>
            <input
              className={`interactive w-full border-b border-ink-light/20 bg-transparent py-3 outline-none focus:border-forge-orange ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Your name"
              value={details.name}
              onChange={(e) => setDetails((d) => ({ ...d, name: e.target.value }))}
              aria-label="Name"
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              className={`interactive w-full border-b border-ink-light/20 bg-transparent py-3 outline-none focus:border-forge-orange ${errors.email ? 'border-red-500' : ''}`}
              placeholder="Your email"
              value={details.email}
              onChange={(e) => setDetails((d) => ({ ...d, email: e.target.value }))}
              aria-label="Email"
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>
          <div>
            <textarea
              className={`interactive min-h-[140px] w-full resize-none border-b border-ink-light/20 bg-transparent py-3 outline-none focus:border-forge-orange ${errors.message ? 'border-red-500' : ''}`}
              placeholder="Your message"
              value={details.message}
              onChange={(e) => setDetails((d) => ({ ...d, message: e.target.value }))}
              aria-label="Message"
            />
            {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="interactive flex w-full items-center justify-center gap-2 rounded-full bg-forge-orange py-3 font-semibold text-canvas-dark transition hover:brightness-110 disabled:opacity-70"
          >
            {status === 'loading' && <FiLoader className="animate-spin" />}
            {status === 'success' && <FiCheck />}
            {status === 'idle' && 'Send Message'}
            {status === 'loading' && 'Sending…'}
            {status === 'success' && 'Sent!'}
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
}
