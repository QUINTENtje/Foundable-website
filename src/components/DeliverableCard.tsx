interface DeliverableCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function DeliverableCard({
  icon,
  title,
  description,
}: DeliverableCardProps) {
  return (
    <div className="card-lift group h-full rounded-2xl bg-white border border-border p-6">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent/15">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-text-light leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}
