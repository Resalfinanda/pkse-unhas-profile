interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const StatCard = ({ value, label, icon }: StatCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-card text-center card-hover">
      {icon && (
        <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4 text-primary">
          {icon}
        </div>
      )}
      <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
        {value}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

export default StatCard;
