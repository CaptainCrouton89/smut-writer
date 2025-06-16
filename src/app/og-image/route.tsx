import { ImageResponse } from 'next/og';
import OGImage from '@/components/og-image';

export const runtime = 'edge';
export const alt = 'Interactive Romance - Passionate stories that respond to your choices';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <OGImage />
    ),
    {
      ...size,
    }
  );
} 