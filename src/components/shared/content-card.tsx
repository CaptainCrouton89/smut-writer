import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  title: string;
  description?: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
  children?: React.ReactNode;
}

export function ContentCard({
  title,
  description,
  imageUrl,
  imageAlt,
  className,
  children,
}: ContentCardProps) {
  return (
    <Card className={cn("overflow-hidden bg-card/60 backdrop-blur-sm border-primary/30", className)}>
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/40 to-transparent" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl font-bold">{title}</CardTitle>
        {description && (
          <CardDescription className="text-base sm:text-lg">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  );
} 