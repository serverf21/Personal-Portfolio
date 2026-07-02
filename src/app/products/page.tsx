import type { Metadata } from 'next';
import ProjectListingPage from '@/components/ProjectListingPage';
import { CATEGORY_META, getProjectsByCategory } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${CATEGORY_META.product.title} — Sarvagya Saxena`,
  description: CATEGORY_META.product.description,
};

export default function ProductsPage() {
  const projects = getProjectsByCategory('product');

  return <ProjectListingPage category="product" projects={projects} />;
}
