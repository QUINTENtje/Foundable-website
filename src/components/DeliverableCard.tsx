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
    <div className="rounded-2xl bg-white border border-border p-6 hover:shadow-md transition-shadow">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-text-light leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}
