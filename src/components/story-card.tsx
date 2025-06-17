import { ContentCard } from "./shared/content-card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface StoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  onSelect?: () => void;
  className?: string;
}

export function StoryCard({
  title,
  description,
  imageUrl,
  tags,
  onSelect,
  className,
}: StoryCardProps) {
  return (
    <ContentCard
      title={title}
      description={description}
      imageUrl={imageUrl}
      imageAlt={`${title} story cover`}
      className={cn("group hover:scale-[1.02] transition-all duration-300", className)}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        {onSelect && (
          <Button
            onClick={onSelect}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Read Story
          </Button>
        )}
      </div>
    </ContentCard>
  );
} 