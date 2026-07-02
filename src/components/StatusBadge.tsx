import type { BuildStatus } from '@/lib/constants';
import { STATUS_META } from '@/lib/constants';

type StatusBadgeProps = {
  status: BuildStatus;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const meta = STATUS_META[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs ${meta.className}`}
    >
      <span aria-hidden>{meta.dot}</span>
      {meta.label}
    </span>
  );
}
