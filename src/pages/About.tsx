import { Link } from "react-router-dom";
import {
  Target, Eye, ShieldCheck, Award, Users, TrendingUp, Sparkles, ArrowRight,
  Rocket, Globe2, Zap, Lock, CheckCircle2, Star,
  Building2, Landmark, HeartPulse, ShoppingBag, Cpu, GraduationCap,
  BadgeCheck, ShieldAlert, Cloud, Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  { icon: Award, title: "Excellence", desc: "Industry-leading certifications and rigorous methodologies." },
  { icon: ShieldCheck, title: "Integrity", desc: "Confidential, transparent, and ethical at every step." },
  { icon: Users, title: "Partnership", desc: "We work alongside your team — not as a black box vendor." },
  { icon: TrendingUp, title: "Innovation", desc: "Always ahead of evolving threats with modern tooling." },
];

const industries = [
  { icon: Landmark, name: "Banking & Finance" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: ShoppingBag, name: "E-commerce" },
  { icon: Cpu, name: "SaaS & Tech" },
  { icon: Building2, name: "Enterprise" },
  { icon: GraduationCap, name: "EdTech" },
];

const certifications = [
  { icon: BadgeCheck, title: "ISO 27001", desc: "Information security management certified." },
  { icon: ShieldAlert, title: "SOC 2 Type II", desc: "Audited controls for security & privacy." },
  { icon: Cloud, title: "AWS Partner", desc: "Certified cloud security specialists." },
  { icon: Server, title: "CERT-In Empanelled", desc: "Government-recognized security auditors." },
];

const differentiators = [
  { icon: Rocket, title: "Move at startup speed", desc: "Engagements kick off in days, not months." },
  { icon: Globe2, title: "Global delivery", desc: "Specialists across 4 continents, 24/7 coverage." },
  { icon: Zap, title: "Attacker mindset", desc: "Real adversary simulation, not checkbox audits." },
  { icon: Lock, title: "Zero-leak guarantee", desc: "Encrypted reporting, strict NDAs, secure-by-default ops." },
];

const About = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-glow blur-3xl opacity-60" />
        <div className="container relative mx-auto text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary mb-5">
            <Sparkles className="h-3.5 w-3.5" /> About Cyberforge Technologies
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Forging the future of <span className="text-gradient">digital defense</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            We make world-class cybersecurity, software quality and digital craftsmanship accessible to every modern business — from disruptive startups to global enterprises.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Work With Us <ArrowRight /></Link>
            </Button>
            <Button asChild variant="neon" size="lg">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-padding">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Who We Are</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5 leading-tight">
              A team of <span className="text-gradient">offensive thinkers</span> defending what matters most
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For over a decade, our specialists have safeguarded financial institutions, healthcare systems, government agencies and high-growth tech companies. We don't just check boxes — we think like attackers, build resilient systems and equip your team to stay ahead of evolving threats.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "10+ years of offensive security experience",
                "Trusted by CISOs across four continents",
                "Millions in breach damages prevented",
                "End-to-end: defense, dev, design & QA",
              ].map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/90">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { v: "10+", l: "Years of Experience" },
              { v: "50+", l: "Security Experts" },
              { v: "200+", l: "Active Clients" },
              { v: "500+", l: "Engagements Delivered" },
            ].map((s, i) => (
              <div
                key={s.l}
                className="glass-card p-6 text-center transition-all duration-300 hover:scale-[1.05] hover:shadow-glow-sm hover:border-primary/50 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section-padding bg-cyber-surface/30 border-y border-primary/10">
        <div className="container mx-auto grid md:grid-cols-2 gap-6">
          <div className="glass-card p-8 group transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-sm">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/30 grid place-items-center text-primary mb-4 shadow-glow-sm group-hover:scale-110 transition-transform">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower every organization with proactive, intelligent and accessible cybersecurity — turning security from a cost center into a competitive advantage.
            </p>
          </div>
          <div className="glass-card p-8 group transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-sm">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/30 grid place-items-center text-primary mb-4 shadow-glow-sm group-hover:scale-110 transition-transform">
              <Eye className="h-7 w-7" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              A digital world where businesses innovate fearlessly — protected by defense systems that adapt as fast as the threats they face.
            </p>
          </div>
        </div>
      </section>

      {/* TRUSTED BY INDUSTRIES */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Trusted Across Industries</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Securing leaders in <span className="text-gradient">every sector</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From regulated finance to fast-moving startups — we tailor defense to your domain.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <div
                key={ind.name}
                className="glass-card p-5 flex flex-col items-center justify-center text-center gap-3 group transition-all duration-300 hover:scale-[1.06] hover:shadow-glow-sm hover:border-primary/50 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/30 grid place-items-center text-primary group-hover:scale-110 transition-transform">
                  <ind.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-foreground/90">{ind.name}</span>
              </div>
            ))}
          </div>

          {/* CERTIFICATIONS */}
          <div className="text-center max-w-2xl mx-auto mt-20 mb-10">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Certifications & Partnerships</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Backed by <span className="text-gradient">global standards</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((c, i) => (
              <div
                key={c.title}
                className="relative overflow-hidden glass-card p-6 group transition-all duration-300 hover:scale-[1.04] hover:shadow-glow-sm hover:border-primary/50 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/30 grid place-items-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-display font-semibold text-lg mb-2">{c.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CYBERFORGE */}
      <section className="section-padding bg-cyber-surface/30 border-y border-primary/10">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Why Cyberforge</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">What sets us <span className="text-gradient">apart</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d, i) => (
              <div
                key={d.title}
                className="glass-card p-6 group transition-all duration-300 hover:scale-[1.04] hover:shadow-glow-sm hover:border-primary/50 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/30 grid place-items-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <d.icon className="h-6 w-6" />
                </div>
                <h4 className="font-display font-semibold text-lg mb-2">{d.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">What we stand for</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="glass-card p-6 text-center group transition-all duration-300 hover:scale-[1.04] hover:shadow-glow-sm animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/30 grid place-items-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <v.icon className="h-6 w-6" />
                </div>
                <h4 className="font-display font-semibold text-lg mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl glass-card p-10 md:p-14 text-center">
            <div className="absolute inset-0 bg-gradient-glow opacity-40" />
            <div className="relative">
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display text-xl md:text-2xl leading-relaxed text-foreground/90">
                "Cyberforge didn't just find our vulnerabilities — they rebuilt our security culture. The most professional engagement we've run in a decade."
              </p>
              <div className="mt-6 text-sm">
                <span className="font-semibold text-foreground">CISO</span>
                <span className="text-muted-foreground"> · Global FinTech Group</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl glass-card p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-glow opacity-60" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-bold">
                Want to work with <span className="text-gradient">Cyberforge?</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Let's talk about how we can secure, build and scale your business — together.
              </p>
              <Button asChild variant="hero" size="lg" className="mt-8">
                <Link to="/contact">Get Consultation <ArrowRight /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
