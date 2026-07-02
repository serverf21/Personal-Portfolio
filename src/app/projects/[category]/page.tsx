import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectListingPage from '@/components/ProjectListingPage';
import {
  CATEGORY_META,
  getProjectsByCategory,
  type ProjectCategory,
} from '@/lib/constants';

const VALID_CATEGORIES = ['ai', 'platform'] as const;

type PageProps = {
  params: { category: string };
};

export function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({ category }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const category = params.category as ProjectCategory;
  if (!VALID_CATEGORIES.includes(category as (typeof VALID_CATEGORIES)[number])) {
    return { title: 'Projects' };
  }
  const meta = CATEGORY_META[category];
  return {
    title: `${meta.title} — Sarvagya Saxena`,
    description: meta.description,
  };
}

export default function CategoryProjectsPage({ params }: PageProps) {
  const category = params.category as ProjectCategory;

  if (!VALID_CATEGORIES.includes(category as (typeof VALID_CATEGORIES)[number])) {
    notFound();
  }

  const projects = getProjectsByCategory(category);

  return <ProjectListingPage category={category} projects={projects} />;
}
