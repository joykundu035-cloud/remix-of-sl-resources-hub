import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "SL Resources transformed our driver recruitment process. We went from struggling to fill positions to having a steady pipeline of qualified candidates.",
    name: "Sarah Mitchell",
    role: "Fleet Manager",
    rating: 5,
  },
  {
    quote: "The website they built for us has been a game changer. Our online presence went from invisible to industry-leading within months.",
    name: "James Rodriguez",
    role: "Owner, Rodriguez Trucking",
    rating: 5,
  },
  {
    quote: "Their social media strategy helped us recruit 40% more drivers in just 3 months. The ROI has been incredible.",
    name: "Linda Chen",
    role: "HR Director, Pacific Freight",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="section-padding bg-dark-bg">
      <div className="container-max text-center reveal">
        <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">Testimonials</span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-foreground mt-2 mb-12">
          What Our <span className="text-primary">Clients Say</span>
        </h2>

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-card/5 border border-border/20 rounded-xl p-8 sm:p-12">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="text-primary fill-primary" size={20} />
              ))}
            </div>
            <blockquote className="text-dark-foreground/90 font-body text-lg leading-relaxed italic mb-6">
              "{t.quote}"
            </blockquote>
            <div className="font-heading font-bold text-dark-foreground">{t.name}</div>
            <div className="text-muted-foreground text-sm">{t.role}</div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border/30 flex items-center justify-center text-dark-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border/30 flex items-center justify-center text-dark-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
