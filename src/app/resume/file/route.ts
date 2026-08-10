import fs from 'fs';
import { NextResponse } from 'next/server';
import { resolveResumePdf } from '@/lib/resume';

export const dynamic = 'force-dynamic';

export async function GET() {
  const resume = resolveResumePdf();

  if (!resume) {
    return NextResponse.json(
      { error: 'Resume PDF not found. Place a .pdf file in the /resume folder.' },
      { status: 404 },
    );
  }

  const buffer = fs.readFileSync(resume.absolutePath);

  return new NextResponse(buffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="resume.pdf"',
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'Content-Length': String(buffer.byteLength),
    },
  });
}
