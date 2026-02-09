import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
const footerLinks = [{
  label: "Home",
  href: "#home"
}, {
  label: "Services",
  href: "#services"
}, {
  label: "About",
  href: "#about"
}, {
  label: "Team",
  href: "#team"
}, {
  label: "Contact",
  href: "#contact"
}];
const SLFooter = () => {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <span className="font-heading font-extrabold text-lg tracking-widest text-foreground">
              SL <span className="text-primary">RESOURCES</span>
            </span>
            <p className="text-muted-foreground text-xs mt-2">© {new Date().getFullYear()} SL Resources. All rights reserved.</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map(link => <button key={link.href} onClick={() => handleNav(link.href)} className="text-muted-foreground text-sm font-body hover:text-primary transition-colors">
                {link.label}
              </button>)}
          </nav>

          <div className="flex justify-center md:justify-end gap-4">
            {[{
            Icon: Facebook,
            href: "#"
          }, {
            Icon: Linkedin,
            href: "#"
          }, {
            Icon: Instagram,
            href: "#"
          }].map(({
            Icon,
            href
          }, i) => <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                
              </a>)}
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-xs">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            {" · "}
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>;
};
export default SLFooter;