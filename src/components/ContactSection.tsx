import { MapPin, Phone, Mail } from "lucide-react";
const ContactSection = () => {
  return <section id="contact" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-12 reveal">
          <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-2">
            Need Help? <span className="text-primary">Contact Us</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto reveal">
          {/* Info */}
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary-foreground" size={18} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-sm">Address</h4>
                  <p className="text-muted-foreground text-sm">123 Logistics Way, Suite 200, Dallas, TX 75201</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary-foreground" size={18} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-sm">Phone</h4>
                  <p className="text-muted-foreground text-sm">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary-foreground" size={18} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-sm">Email</h4>
                  <p className="text-muted-foreground text-sm">wayne@slresources.info</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-md h-64">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214587.60365714584!2d-96.87194384882812!3d32.82058419999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647571f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="SL Resources location" />
            </div>
          </div>

        </div>
      </div>
    </section>;
};
export default ContactSection;