import leadGenImg from "@/assets/lead-gen.jpg";
import webDesignImg from "@/assets/web-design-mockup.jpg";
import socialImg from "@/assets/social-media.jpg";

const ContentBlocks = () => {
  return (
    <>
      {/* Lead Generation Block - Dark */}
      <section className="section-padding bg-dark-bg" id="lead-gen">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center reveal">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img src={leadGenImg} alt="Qualified leads for trucking companies" className="w-full h-auto" loading="lazy" />
            </div>
            <div>
              <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">Service</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-foreground mt-2 mb-6">
                Find Out More: <span className="text-primary">Lead Generation</span>
              </h2>
              <p className="text-dark-foreground/70 font-body leading-relaxed mb-6">
                Our lead generation services connect trucking companies with qualified drivers actively seeking new opportunities. We deliver exclusive, real-time leads directly to your hiring team.
              </p>
              <ul className="space-y-3">
                {["Company Drivers", "Owner Operators", "Team Drivers"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-dark-foreground/80 font-body">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Web Design Block - Light */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center reveal">
            <div className="lg:order-2 rounded-lg overflow-hidden shadow-xl">
              <img src={webDesignImg} alt="Responsive web design for trucking companies" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="lg:order-1">
              <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">Service</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                Find Out More: <span className="text-primary">Web Design</span>
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                Our web design services create stunning, mobile-responsive websites tailored for the trucking and logistics industry. We build sites that convert visitors into leads.
              </p>
              <ul className="space-y-3">
                {["Custom responsive design", "SEO optimized", "Lead capture forms", "Fast load times"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground/80 font-body">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Block - Dark */}
      <section className="section-padding bg-dark-bg">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center reveal">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img src={socialImg} alt="Social media optimization dashboard" className="w-full h-auto" loading="lazy" />
            </div>
            <div>
              <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">Service</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-foreground mt-2 mb-6">
                Find Out More: <span className="text-primary">Social Media Optimization</span>
              </h2>
              <p className="text-dark-foreground/70 font-body leading-relaxed mb-6">
                Our social media optimization services help trucking companies build a strong online presence, engage with potential drivers, and establish brand authority across all major platforms.
              </p>
              <ul className="space-y-3">
                {["Facebook & Instagram management", "LinkedIn recruiting campaigns", "Content creation & scheduling", "Performance analytics"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-dark-foreground/80 font-body">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentBlocks;
