import { useEffect } from "react";
import { Link } from "react-router-dom";
import SLFooter from "@/components/SLFooter";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service | SL Resources";
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
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-8">Terms of Service</h1>

          <div className="space-y-8 text-muted-foreground font-body leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">1. Terms</h2>
              <p>By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">2. Use License</h2>
              <p className="mb-3">Permission is granted to temporarily download one copy of the materials (information or software) on SLResources1.com web site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on SLResources1.com web site;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p className="mt-3">This license shall automatically terminate if you violate any of these restrictions and may be terminated by SLResources1.com at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">3. Disclaimer</h2>
              <p>The materials on SLResources1.com web site are provided "as is". SLResources1.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, SLResources1.com does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">4. Limitations</h2>
              <p>In no event shall SLResources1.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on SLResources1.com Internet site, even if SLResources1.com or a SLResources1.com authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">5. Revisions and Errata</h2>
              <p>The materials appearing on SLResources1.com web site could include technical, typographical, or photographic errors. SLResources1.com does not warrant that any of the materials on its web site are accurate, complete, or current. SLResources1.com may make changes to the materials contained on its web site at any time without notice. SLResources1.com does not, however, make any commitment to update the materials.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">6. Links</h2>
              <p>SLResources1.com has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SLResources1.com of the site. Use of any such linked web site is at the user's own risk.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">7. Site Terms of Use Modifications</h2>
              <p>SLResources1.com may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">8. Governing Law</h2>
              <p>Any claim relating to SLResources1.com web site shall be governed by the laws of the State of Nebraska without regard to its conflict of law provisions. General Terms and Conditions applicable to Use of a Web Site.</p>
            </section>
          </div>

          <p className="mt-12 text-xs text-muted-foreground">Last updated: January 1, 2025</p>
        </article>
      </main>

      <SLFooter />
    </div>
  );
};

export default TermsOfService;
