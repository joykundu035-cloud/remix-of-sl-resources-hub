import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle } from "lucide-react";

const faqs = [
  { q: "How quickly can I start receiving leads?", a: "Most clients begin receiving leads within 24-48 hours of onboarding. We work quickly to understand your specific requirements and start delivering qualified candidates right away." },
  { q: "What types of drivers do you generate leads for?", a: "We generate leads for company drivers, owner operators, team drivers, and specialized driver positions. Our targeting can be customized based on experience level, location, and endorsements." },
  { q: "Are there any long-term contracts?", a: "No! We operate on flexible month-to-month plans. We believe our results speak for themselves, so you're never locked into a long-term commitment." },
  { q: "How do leads get delivered?", a: "Leads are delivered in real-time via email, API integration, or directly into your ATS/CRM system. We support seamless integration with most popular hiring platforms." },
  { q: "What makes SL Resources different from other lead providers?", a: "We focus exclusively on the trucking industry, which means our leads are highly targeted and qualified. Combined with our web design and social media services, we offer a complete digital growth solution." },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-max max-w-3xl">
        <div className="text-center mb-12 reveal">
          <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8 flex items-start gap-3 reveal">
          <AlertTriangle className="text-primary flex-shrink-0 mt-0.5" size={18} />
          <p className="text-sm font-body text-foreground">
            <strong>Important:</strong> All leads are exclusive and delivered in real-time. We do not resell leads to multiple carriers.
          </p>
        </div>

        <div className="reveal">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border px-6">
                <AccordionTrigger className="font-heading font-semibold text-foreground text-left py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
