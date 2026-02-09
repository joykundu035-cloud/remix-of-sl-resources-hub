import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 412, label: "Hires" },
  { value: 685, label: "Clients" },
  { value: 492147, label: "Leads Delivered" },
  { value: 3489, label: "Campaigns" },
];

const StatItem = ({ value, label }: { value: number; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="bg-stat-bg rounded-lg p-6 text-center">
      <div className="text-3xl sm:text-4xl font-heading font-extrabold text-primary">
        {count.toLocaleString()}
      </div>
      <div className="text-muted-foreground font-body text-sm mt-1">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
