import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Lock, Zap, Eye, Cloud, AlertTriangle, FileCheck, Users, Award, TrendingUp, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-cyber.jpg";

const services = [
  { icon: ShieldCheck, title: "Penetration Testing", desc: "Simulated attacks to expose vulnerabilities before hackers do." },
  { icon: FileCheck, title: "Security Assessment", desc: "Comprehensive audits across infrastructure, apps and people." },
  { icon: Lock, title: "GRC Advisory", desc: "Governance, risk and compliance aligned to ISO, SOC 2 and GDPR." },
  { icon: Eye, title: "Managed Security", desc: "24/7 SOC monitoring, threat hunting and rapid containment." },
  { icon: AlertTriangle, title: "Incident Response", desc: "Forensics, recovery and post-breach hardening on demand." },
  { icon: Cloud, title: "Cloud Security", desc: "Hardening AWS, Azure and GCP environments end-to-end." },
];

const stats = [
  { icon: TrendingUp, value: "500+", label: "Projects Delivered" },
  { icon: Users, value: "200+", label: "Global Clients" },
  { icon: ShieldCheck, value: "99.9%", label: "Security Rate" },
  { icon: Activity, value: "24/7", label: "Threat Monitoring" },
];

const reasons = [
  { icon: Award, title: "Certified Experts", desc: "OSCP, CISSP, CEH and CISA-certified specialists on every engagement." },
  { icon: Zap, title: "Rapid Response", desc: "Average incident triage initiated within 15 minutes of detection." },
  { icon: ShieldCheck, title: "Proven Methodology", desc: "OWASP, NIST and MITRE ATT&CK frameworks baked into our process." },
  { icon: Lock, title: "Full Confidentiality", desc: "Strict NDAs, encrypted reporting and secure data handling at every step." },
];

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary mb-6">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
                Trusted by 200+ businesses worldwide
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
                Cybersecurity Solutions for{" "}
                <span className="text-gradient">Modern Businesses</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Cyberforge Technologies delivers enterprise-grade defense — penetration testing, managed security, incident response and cloud hardening — engineered to keep your business unbreachable.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">
                    Get Free Consultation <ArrowRight className="ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="neon" size="lg">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> ISO 27001</span>
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> SOC 2 Type II</span>
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> GDPR Ready</span>
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> CERT-In Empanelled</span>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-gradient-glow blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden neon-border animate-float">
                <img
                  src={heroImg}
                  alt="Cyberforge digital shield with neon circuitry"
                  width={1600}
                  height={1024}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Complete <span className="text-gradient">Cyber Defense</span> Stack</h2>
            <p className="mt-4 text-muted-foreground">From offensive testing to 24/7 monitoring — every layer of your stack, secured.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="glass-card p-6 group animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/30 grid place-items-center text-primary mb-4 group-hover:shadow-glow-sm transition">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-cyber-surface/30 border-y border-primary/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Why Cyberforge</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Defense built on <span className="text-gradient">expertise & precision</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We combine offensive security mindsets with enterprise-grade operations. Every engagement is led by certified specialists, backed by transparent reporting and measurable risk reduction.
              </p>
              <Button asChild variant="hero" size="lg" className="mt-8">
                <Link to="/about">About Cyberforge <ArrowRight /></Link>
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {reasons.map((r) => (
                <div key={r.title} className="glass-card p-5">
                  <r.icon className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-1">{r.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="glass-card p-8 text-center">
                <s.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl glass-card p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-glow opacity-60" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
                Ready to make your business <span className="text-gradient">unbreachable?</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Book a free 30-minute consultation with our security architects. No obligation, just clarity.
              </p>
              <Button asChild variant="hero" size="lg" className="mt-8">
                <Link to="/contact">Get Your Free Consultation <ArrowRight /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
