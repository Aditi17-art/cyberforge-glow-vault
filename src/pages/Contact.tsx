import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent! Our team will reach out within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 800);
  };

  return (
    <>
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="container relative mx-auto text-center max-w-3xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Let's <span className="text-gradient">secure</span> your business
          </h1>
          <p className="mt-6 text-muted-foreground text-lg">
            Fill the form below or reach us directly. Free 30-min consultation,
            no obligation.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/30 grid place-items-center text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a
                    href="tel:+918181924786"
                    className="text-sm text-muted-foreground hover:text-primary transition block">
                    +91 8181924786
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">
                    Mon–Fri, 9am–7pm IST
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/30 grid place-items-center text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="support@tfcyberforgetechnologies.com"
                    className="text-sm text-muted-foreground hover:text-primary transition block">
                    support@tfcyberforgetechnologies.com
                  </a>
                </div>
              </div>

              <div className="glass-card p-6 flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/30 grid place-items-center text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Office</h4>
                  <p className="text-sm text-muted-foreground">
                    500 Cyber Avenue, Tech Park,
                    <br />
                    Greater Noida, India
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 flex items-center gap-4 hover:border-primary/60 transition">
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/30 grid place-items-center text-primary">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Chat on WhatsApp</h4>
                  <p className="text-sm text-muted-foreground">
                    Get an instant response
                  </p>
                </div>
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="glass-card p-8 md:p-10">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
                  Send us a message
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  We typically respond within a few hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 ..."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">How can we help? *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your security needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={submitting}
                    className="w-full sm:w-auto">
                    {submitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="ml-1" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-10 glass-card overflow-hidden p-0">
            <iframe
              title="Cyberforge office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124416.6779097396!2d77.49085005!3d12.9542617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 grayscale-[40%] contrast-110"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
