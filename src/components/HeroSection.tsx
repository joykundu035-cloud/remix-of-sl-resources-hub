import heroTruck from "@/assets/hero-truck.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroTruck})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Form card */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-lg shadow-2xl overflow-hidden max-w-[420px]">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/dFdc5zQHeJQU0mNyUeTO"
                style={{ width: "100%", height: "765px", border: "none", borderRadius: "3px" }}
                id="inline-dFdc5zQHeJQU0mNyUeTO"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="lovable embed"
                data-height="765"
                data-layout-iframe-id="inline-dFdc5zQHeJQU0mNyUeTO"
                data-form-id="dFdc5zQHeJQU0mNyUeTO"
                title="lovable embed"
                loading="lazy"
              />
            </div>
          </div>

          {/* Hero text */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6">
              Welcome to<br />
              <span className="text-primary">SL Resources</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 font-body mb-8 max-w-lg">
              Your trusted partner in trucking lead generation, web design, and social media optimization. We help carriers grow with quality leads and digital solutions.
            </p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary text-primary-foreground font-heading font-bold px-8 py-4 rounded-md hover:brightness-110 transition-all hover:scale-105 active:scale-95 text-lg shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
