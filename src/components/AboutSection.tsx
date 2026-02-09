import aboutImg from "@/assets/about-truck.jpg";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Proven Track Record",
  "Customized Solutions",
  "Trusted by Carriers",
  "Dedicated Support Team",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center reveal">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src={aboutImg} alt="SL Resources trucking at night" className="w-full h-auto" loading="lazy" />
          </div>
          <div>
            <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
              Find Out More <span className="text-primary">About Us</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              SL Resources is a specialized service provider dedicated to helping trucking companies and carriers find qualified drivers through innovative lead generation, professional web design, and strategic social media optimization.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              With years of industry experience, we understand the unique challenges of the trucking sector. Our team works tirelessly to deliver measurable results that drive growth for your business.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-foreground font-body text-sm">
                  <CheckCircle className="text-primary flex-shrink-0" size={18} />
                  {h}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
