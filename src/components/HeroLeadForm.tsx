import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const HeroLeadForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    consentCustomerCare: false,
    consentMarketing: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required";
    if (!form.lastName.trim()) errs.lastName = "Last name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = "Invalid email";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    const submittedAt = new Date().toISOString();
    console.info("Form submission consent record:", {
      submittedAt,
      consentCustomerCare: form.consentCustomerCare,
      consentMarketing: form.consentMarketing,
    });

    setTimeout(() => {
      toast({ title: "Form submitted!", description: "We'll be in touch soon." });
      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        consentCustomerCare: false,
        consentMarketing: false,
      });
      setSubmitting(false);
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-lg shadow-2xl p-6 sm:p-8 max-w-[420px] space-y-5">
      {/* Logo */}
      <div className="text-center pb-2">
        <span className="text-2xl font-heading font-extrabold tracking-tight">
          <span className="text-primary">SL</span>{" "}
          <span className="text-foreground">Resources</span>
        </span>
      </div>

      {/* First Name */}
      <div>
        <label className="block text-sm font-bold text-foreground mb-1">
          First Name <span className="text-destructive">*</span>
        </label>
        <Input
          placeholder="First Name"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />
        {errors.firstName && <p className="text-xs text-destructive mt-1">{errors.firstName}</p>}
      </div>

      {/* Last Name */}
      <div>
        <label className="block text-sm font-bold text-foreground mb-1">
          Last Name <span className="text-destructive">*</span>
        </label>
        <Input
          placeholder="Last Name"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
        {errors.lastName && <p className="text-xs text-destructive mt-1">{errors.lastName}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-bold text-foreground mb-1">Phone</label>
        <Input
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-bold text-foreground mb-1">
          Email <span className="text-destructive">*</span>
        </label>
        <Input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
      </div>

      {/* SMS Consent Checkboxes */}
      <div className="space-y-4 pt-2">
        {/* Checkbox 1 — Customer Care SMS */}
        <label className="flex items-start gap-3 cursor-pointer">
          <Checkbox
            checked={form.consentCustomerCare}
            onCheckedChange={(v) => setForm({ ...form, consentCustomerCare: !!v })}
            className="mt-1 shrink-0"
          />
          <span className="text-xs text-muted-foreground leading-relaxed">
            I consent to receive non-marketing text messages from{" "}
            <strong className="text-foreground">SL Resources</strong> related to my inquiry,
            requested services, or customer support. Message frequency may vary. Message and data
            rates may apply. Reply STOP to opt out or HELP for assistance. For support, contact{" "}
            <a href="mailto:support@slresources.info" className="text-primary hover:underline">
              support@slresources.info
            </a>
            .
          </span>
        </label>

        {/* Checkbox 2 — Marketing SMS (Optional) */}
        <label className="flex items-start gap-3 cursor-pointer">
          <Checkbox
            checked={form.consentMarketing}
            onCheckedChange={(v) => setForm({ ...form, consentMarketing: !!v })}
            className="mt-1 shrink-0"
          />
          <span className="text-xs text-muted-foreground leading-relaxed">
            I consent to receive marketing text messages from{" "}
            <strong className="text-foreground">SL Resources</strong>, including updates and service
            information. Message frequency may vary. Message and data rates may apply. Reply STOP to
            opt out or HELP for assistance. For support, contact{" "}
            <a href="mailto:support@slresources.info" className="text-primary hover:underline">
              support@slresources.info
            </a>
            .
          </span>
        </label>
      </div>

      <Button type="submit" className="w-full h-12 text-base font-bold" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit"}
      </Button>

      {/* Support contact */}
      <p className="text-center text-xs text-muted-foreground">
        For support, contact{" "}
        <a href="mailto:support@slresources.info" className="text-primary hover:underline">
          support@slresources.info
        </a>{" "}
        or call{" "}
        <a href="tel:+14024005555" className="text-primary hover:underline">
          (402) 400-5555
        </a>
        .
      </p>

      {/* Legal links */}
      <p className="text-center text-xs text-muted-foreground">
        <Link to="/privacy-policy" className="text-primary hover:underline">
          Privacy Policy
        </Link>
        {" | "}
        <Link to="/terms-of-service" className="text-primary hover:underline">
          Terms of Service
        </Link>
      </p>
    </form>
  );
};

export default HeroLeadForm;
