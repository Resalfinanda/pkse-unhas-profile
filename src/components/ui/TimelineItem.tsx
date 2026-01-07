interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem = ({ year, title, description, isLast = false }: TimelineItemProps) => {
  return (
    <div className="relative flex gap-6">
      {/* Line */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-primary shadow-aqua-md z-10" />
        {!isLast && <div className="w-0.5 flex-1 bg-border" />}
      </div>

      {/* Content */}
      <div className={`pb-8 ${isLast ? "" : ""}`}>
        <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-2">
          {year}
        </span>
        <h4 className="font-display font-semibold text-xl text-foreground mb-2">{title}</h4>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
