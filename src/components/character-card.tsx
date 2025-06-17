import { ContentCard } from "./shared/content-card";

interface CharacterCardProps {
  name: string;
  description: string;
  imageUrl: string;
  attributes: {
    name: string;
    value: number;
  }[];
  className?: string;
}

export function CharacterCard({
  name,
  description,
  imageUrl,
  attributes,
  className,
}: CharacterCardProps) {
  return (
    <ContentCard
      title={name}
      description={description}
      imageUrl={imageUrl}
      imageAlt={`${name} character portrait`}
      className={className}
    >
      <div className="space-y-4">
        {attributes.map((attr) => (
          <div key={attr.name} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{attr.name}</span>
              <span className="text-primary font-medium">{attr.value}</span>
            </div>
            <div className="h-1.5 bg-primary/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${(attr.value / 10) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </ContentCard>
  );
} 