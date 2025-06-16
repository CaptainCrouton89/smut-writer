import Image from 'next/image';

export default function OGImage() {
  return (
    <div className="relative w-[1200px] h-[630px]">
      <Image
        src="/heart-og.png"
        alt="Interactive Romance - Passionate stories that respond to your choices"
        width={1200}
        height={630}
        className="object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/smut-logo.png"
          alt="Interactive Romance Logo"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  );
} 