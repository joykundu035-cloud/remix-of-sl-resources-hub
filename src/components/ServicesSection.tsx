import { Target, Globe, Share2, Zap, DollarSign, Code, FileCheck } from "lucide-react";

const services = [
  { icon: Target, title: "Lead Generation", desc: "High-quality, real-time leads for trucking companies to hire company drivers, owner operators, and team drivers." },
  { icon: Globe, title: "Website Development", desc: "Custom, responsive websites designed specifically for the trucking and logistics industry." },
  { icon: Share2, title: "Social Media Optimization", desc: "Strategic social media management to boost your brand presence and attract top talent." },
];

const features = [
  { icon: Zap, title: "Real-Time Leads", desc: "Leads delivered instantly to your inbox" },
  { icon: DollarSign, title: "Affordable Packages", desc: "Competitive pricing for every budget" },
  { icon: Code, title: "API Integration", desc: "Seamless integration with your systems" },
  { icon: FileCheck, title: "No Long-term Contracts", desc: "Flexible month-to-month plans" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16 reveal">
          <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2">
            Check Our <span className="text-primary">Services</span>
          </h2>
        </div>

        {/* 3 main service cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((s, i) => (
            <div
              key={i}
              className="reveal bg-card rounded-lg p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-border"
            >
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                <s.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* 4 feature tiles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="reveal flex items-start gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 bg-stat-bg rounded-full flex items-center justify-center flex-shrink-0">
                <f.icon className="text-primary" size={18} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-foreground">{f.title}</h4>
                <p className="text-muted-foreground text-xs mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
