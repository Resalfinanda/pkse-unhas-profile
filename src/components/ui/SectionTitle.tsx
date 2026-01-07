interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ subtitle, title, description, centered = true, light = false }: SectionTitleProps) => {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
      {subtitle && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
          light 
            ? "bg-primary-foreground/20 text-primary-foreground" 
            : "bg-secondary text-secondary-foreground"
        }`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
        light ? "text-primary-foreground" : "text-foreground"
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
