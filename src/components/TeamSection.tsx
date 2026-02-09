import presidentImg from "@/assets/president.jpg";

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-12 reveal">
          <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">Our Team</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2">
            Meet Our <span className="text-primary">President</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto reveal">
          <div className="bg-card rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="aspect-square md:aspect-auto md:h-full">
                <img
                  src={presidentImg}
                  alt="Wayne Shoemaker, President of SL Resources"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 lg:p-12">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1">Wayne Shoemaker</h3>
                <p className="text-primary font-heading font-semibold text-sm mb-4">President & Founder</p>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  With over 20 years of experience in the trucking and logistics industry, Wayne founded SL Resources with a singular vision: to bridge the gap between carriers and qualified drivers through innovative digital solutions.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Under his leadership, SL Resources has grown to serve hundreds of carriers nationwide, delivering millions of qualified leads and building a reputation for excellence in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
