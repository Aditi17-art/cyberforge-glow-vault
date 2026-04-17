import { Link } from "react-router-dom";
import { Target, Eye, ShieldCheck, Award, Users, TrendingUp, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  { name: "Arjun Mehta", role: "Founder & CEO", bio: "20+ yrs in offensive security. Ex-Big4 cyber lead." },
  { name: "Priya Sharma", role: "CISO", bio: "Architect of GRC programs for Fortune 500 firms." },
  { name: "Rahul Kapoor", role: "Head of Red Team", bio: "OSCP, OSCE. Disclosed 50+ critical CVEs." },
  { name: "Sara Iyer", role: "SOC Director", bio: "Built 24/7 SOCs across APAC and EMEA." },
];

const values = [
  { icon: Award, title: "Excellence", desc: "Industry-leading certifications and rigorous methodologies." },
  { icon: ShieldCheck, title: "Integrity", desc: "Confidential, transparent, and ethical at every step." },
  { icon: Users, title: "Partnership", desc: "We work alongside your team — not as a black box vendor." },
  { icon: TrendingUp, title: "Innovation", desc: "Always ahead of evolving threats with modern tooling." },
];

const About = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="container relative mx-auto text-center max-w-3xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Forging the future of <span className="text-gradient">digital defense</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Cyberforge Technologies was founded with one mission: to make world-class cybersecurity accessible to every modern business — from disruptive startups to global enterprises.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-padding">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
              A team of <span className="text-gradient">offensive thinkers</span> defending what matters most
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For over a decade, our specialists have safeguarded financial institutions, healthcare systems, government agencies and high-growth tech companies. We don't just check boxes — we think like attackers, build resilient systems and equip your team to stay ahead of evolving threats.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Our work has prevented millions in potential breach damages and earned us the trust of CISOs across four continents.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { v: "10+", l: "Years of Experience" },
              { v: "50+", l: "Security Experts" },
              { v: "200+", l: "Active Clients" },
              { v: "500+", l: "Engagements Delivered" },
            ].map((s) => (
              <div key={s.l} className="glass-card p-6 text-center">
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
          <div className="glass-card p-8">
            <Target className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-display text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower every organization with proactive, intelligent and accessible cybersecurity — turning security from a cost center into a competitive advantage.
            </p>
          </div>
          <div className="glass-card p-8">
            <Eye className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-display text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              A digital world where businesses innovate fearlessly — protected by defense systems that adapt as fast as the threats they face.
            </p>
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
            {values.map((v) => (
              <div key={v.title} className="glass-card p-6 text-center">
                <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/30 grid place-items-center text-primary mx-auto mb-4">
                  <v.icon className="h-6 w-6" />
                </div>
                <h4 className="font-display font-semibold text-lg mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-padding bg-cyber-surface/30 border-y border-primary/10">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Leadership</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Meet the <span className="text-gradient">Cyberforge</span> team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="glass-card p-6 text-center">
                <div className="relative mx-auto h-24 w-24 rounded-full bg-gradient-primary grid place-items-center text-2xl font-display font-bold text-primary-foreground mb-4 shadow-neon">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h4 className="font-display font-semibold text-lg">{m.name}</h4>
                <p className="text-primary text-sm">{m.role}</p>
                <p className="text-xs text-muted-foreground mt-2">{m.bio}</p>
                <a href="#" aria-label="LinkedIn" className="inline-flex mt-3 h-8 w-8 items-center justify-center rounded-full border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary transition">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Want to work with us?</h2>
          <p className="mt-4 text-muted-foreground">Let's talk about how we can secure your business.</p>
          <Button asChild variant="hero" size="lg" className="mt-6">
            <Link to="/contact">Get Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
