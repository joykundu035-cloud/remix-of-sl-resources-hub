import { useEffect } from "react";
import { Link } from "react-router-dom";
import SLFooter from "@/components/SLFooter";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | SL Resources";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 bg-card border-b border-border px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-heading font-extrabold text-lg tracking-widest text-foreground">
            SL <span className="text-primary">RESOURCES</span>
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>

          <div className="space-y-8 text-muted-foreground font-body leading-relaxed text-sm sm:text-base">

            <section>
              <p>Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.</p>
              <ul className="space-y-3 list-disc list-inside pl-4 mt-4">
                <li>Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.</li>
                <li>We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.</li>
                <li>We will only retain personal information as long as necessary for the fulfillment of those purposes.</li>
                <li>We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</li>
                <li>Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.</li>
                <li>We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</li>
                <li>We will make readily available to customers information about our policies and practices relating to the management of personal information.</li>
              </ul>
              <p className="mt-4">We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">SMS Communications</h2>
              <p className="mb-3">
                By providing your phone number and opting in through our website, you consent to receive SMS messages from SL Resources related to your inquiry, requested services, customer support, and optional marketing communications if separately consented.
              </p>
              <p className="mb-3">
                Message frequency may vary. Message and data rates may apply. You may opt out at any time by replying STOP. Reply HELP for assistance.
              </p>
              <p className="mb-3">
                SL Resources does not sell, rent, or share your phone number or SMS consent with third parties for marketing purposes.
              </p>
              <p>
                Your information is used solely to communicate with you regarding your inquiry and SL Resources services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Information Sharing</h2>
              <p>
                SL Resources does not sell, rent, or trade your personal information, including phone numbers, to third parties for marketing or lead generation purposes.
              </p>
            </section>

          </div>

          <p className="mt-12 text-xs text-muted-foreground">Last updated: January 1, 2025</p>
        </article>
      </main>

      <SLFooter />
    </div>
  );
};

export default PrivacyPolicy;
