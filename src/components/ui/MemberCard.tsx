interface MemberCardProps {
  name: string;
  position?: string;
  department?: string;
  image: string;
  isLeader?: boolean;
}

const MemberCard = ({ name, position, department, image, isLeader = false }: MemberCardProps) => {
  return (
    <div className={`group text-center ${isLeader ? "scale-110" : ""}`}>
      <div className={`relative mx-auto mb-4 overflow-hidden ${
        isLeader 
          ? "w-40 h-40 rounded-2xl ring-4 ring-primary shadow-aqua-lg" 
          : "w-32 h-32 rounded-xl shadow-card"
      }`}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h4 className={`font-display font-semibold text-foreground ${isLeader ? "text-xl" : "text-lg"}`}>
        {name}
      </h4>
      {position && (
        <p className="text-primary font-medium text-sm mt-1">{position}</p>
      )}
      {department && (
        <p className="text-muted-foreground text-sm">{department}</p>
      )}
    </div>
  );
};

export default MemberCard;
