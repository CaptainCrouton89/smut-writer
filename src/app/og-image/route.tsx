import { ImageResponse } from 'next/og';
import OGImage from '@/components/og-image';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <OGImage />
    ),
    {
      width: 1200,
      height: 630,
    }
  );
} 