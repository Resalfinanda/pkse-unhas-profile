import { Calendar } from "lucide-react";

interface ActivityCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
}

const ActivityCard = ({ title, description, date, image }: ActivityCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card card-hover">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <h3 className="font-display font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
