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
    consentNonMarketing: false,
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
    // Simulate submission
    setTimeout(() => {
      toast({ title: "Form submitted!", description: "We'll be in touch soon." });
      setForm({ firstName: "", lastName: "", phone: "", email: "", consentNonMarketing: false, consentMarketing: false });
      setSubmitting(false);
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-lg shadow-2xl p-6 sm:p-8 max-w-[420px] space-y-5">
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

      {/* Consent checkboxes */}
      <div className="space-y-4 pt-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <Checkbox
            checked={form.consentNonMarketing}
            onCheckedChange={(v) => setForm({ ...form, consentNonMarketing: !!v })}
            className="mt-1"
          />
          <span className="text-xs text-muted-foreground leading-relaxed">
            By checking this box, I consent to receive non-marketing text messages from{" "}
            <strong className="text-foreground">SL Resources</strong> related to{" "}
            <strong className="text-foreground">my inquiry or requested services</strong>. Message frequency varies, message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <Checkbox
            checked={form.consentMarketing}
            onCheckedChange={(v) => setForm({ ...form, consentMarketing: !!v })}
            className="mt-1"
          />
          <span className="text-xs text-muted-foreground leading-relaxed">
            By checking this box, I consent to receive marketing and promotional messages including special offers, discounts, new product updates among others from{" "}
            <strong className="text-foreground">SL Resources</strong> at the phone number provided. Frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
          </span>
        </label>
      </div>

      <Button type="submit" className="w-full h-12 text-base font-bold" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
        {" | "}
        <Link to="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link>
      </p>
    </form>
  );
};

export default HeroLeadForm;
