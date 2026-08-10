import fs from 'fs';
import path from 'path';

const RESUME_DIR = path.join(process.cwd(), 'resume');

/**
 * Resolves the PDF to serve from `/resume`.
 * Prefers `resume.pdf`, otherwise the newest `.pdf` in the folder —
 * so replacing the file (any name) requires no code changes.
 */
export function resolveResumePdf(): { absolutePath: string; fileName: string } | null {
  if (!fs.existsSync(RESUME_DIR)) return null;

  const pdfs = fs
    .readdirSync(RESUME_DIR)
    .filter((name) => name.toLowerCase().endsWith('.pdf'))
    .map((fileName) => {
      const absolutePath = path.join(RESUME_DIR, fileName);
      return {
        fileName,
        absolutePath,
        mtime: fs.statSync(absolutePath).mtimeMs,
      };
    });

  if (pdfs.length === 0) return null;

  const preferred = pdfs.find((p) => p.fileName.toLowerCase() === 'resume.pdf');
  const chosen = preferred ?? pdfs.sort((a, b) => b.mtime - a.mtime)[0];

  return { absolutePath: chosen.absolutePath, fileName: chosen.fileName };
}
