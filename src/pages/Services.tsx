import { Link } from "react-router-dom";
import {
  ShieldCheck, FileCheck, Lock, Eye, AlertTriangle, Cloud, Check, ArrowRight,
  Code2, Palette, Sparkles, TestTube2, Globe, Smartphone, Server, Cog, Users,
  FileSearch, SlidersHorizontal, Network, Wifi, ShieldAlert, Boxes, Bug, Zap,
  Activity, ShieldHalf, PlugZap, RefreshCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const pentestServices = [
  { icon: Globe, title: "Web Application Penetration Testing", desc: "Deep-dive testing of web apps against OWASP Top 10 and business logic flaws." },
  { icon: PlugZap, title: "Web Services & API Pentesting", desc: "REST, GraphQL & SOAP API testing for auth, injection and data exposure." },
  { icon: Smartphone, title: "Mobile Application Penetration Testing", desc: "iOS & Android app testing for insecure storage, runtime and API issues." },
  { icon: ShieldHalf, title: "Application Security", desc: "Secure SDLC, threat modeling and AppSec program design end-to-end." },
  { icon: Server, title: "Infrastructure Penetration Testing", desc: "Internal & external network attacks simulating real-world adversaries." },
  { icon: Cloud, title: "Cloud Penetration Testing", desc: "AWS, Azure and GCP misconfiguration, IAM and privilege escalation testing." },
  { icon: Users, title: "Social Engineering", desc: "Phishing, vishing and physical intrusion simulations against your team." },
  { icon: FileSearch, title: "Source Code Review", desc: "Manual + SAST review to find vulnerabilities deep in your codebase." },
  { icon: SlidersHorizontal, title: "Configuration Review", desc: "Hardening review of servers, databases, firewalls and cloud services." },
  { icon: Network, title: "Network Architecture Review", desc: "Segmentation, zero-trust and defense-in-depth design assessment." },
  { icon: Cog, title: "Hardening Control", desc: "CIS-benchmark hardening for OS, containers and critical infrastructure." },
  { icon: Wifi, title: "Wireless Security Assessments", desc: "WiFi, Bluetooth and IoT radio testing for rogue access and weak crypto." },
];

const qaServices = [
  "Manual Testing",
  "Automated Testing",
  "Functional Testing",
  "Performance Testing",
  "Security Testing",
  "API Testing",
  "Regression Testing",
];

const digitalServices = [
  {
    icon: Code2,
    title: "Web Development",
    tagline: "Fast. Scalable. Stunning.",
    desc: "We build fast, scalable, and visually stunning websites tailored to your business needs — engineered for performance and built to convert.",
    points: ["Business Websites", "Portfolio Websites", "E-commerce Development", "Custom Web Applications", "Landing Pages"],
    cta: "Get Your Website",
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    tagline: "Designs that define your brand.",
    desc: "Creative and impactful designs that elevate your brand identity — from pixel-perfect logos to full marketing campaigns.",
    points: ["Logo Design", "Social Media Creatives", "UI/UX Design", "Branding Kits", "Marketing Materials"],
    cta: "Start Designing",
  },
];

const coreServices = [
  {
    icon: ShieldCheck,
    title: "Penetration Testing",
    tagline: "Think like an attacker. Defend like a pro.",
    desc: "Real-world simulated attacks on your web apps, mobile apps, networks and APIs. We expose vulnerabilities before threat actors can exploit them — and give you a clear remediation path.",
    points: ["Web & mobile app pentests", "Network & infrastructure testing", "API & cloud pentesting", "Detailed CVSS-scored reports"],
  },
  {
    icon: FileCheck,
    title: "Security Assessment",
    tagline: "Know exactly where you stand.",
    desc: "End-to-end assessment of your security posture across people, processes and technology. We benchmark against industry frameworks and deliver an actionable roadmap.",
    points: ["Vulnerability assessments", "Configuration reviews", "Source code reviews", "Risk gap analysis"],
  },
  {
    icon: Lock,
    title: "GRC Advisory",
    tagline: "Compliance, made effortless.",
    desc: "Governance, risk and compliance consulting aligned to ISO 27001, SOC 2, PCI-DSS, HIPAA and GDPR. We help you achieve and maintain certifications without the chaos.",
    points: ["ISO 27001 implementation", "SOC 2 Type I & II readiness", "GDPR & DPDP compliance", "Policy & control frameworks"],
  },
  {
    icon: Eye,
    title: "Managed Security (MSSP)",
    tagline: "Round-the-clock protection.",
    desc: "Our 24/7 SOC monitors your environment, hunts for threats and contains incidents in real time — with full transparency through dashboards and weekly reports.",
    points: ["24/7 SOC monitoring", "SIEM/SOAR management", "Threat intelligence feeds", "Proactive threat hunting"],
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    tagline: "When seconds count, we act.",
    desc: "Rapid containment, forensic investigation and full recovery support during active security incidents. Plus tabletop exercises to keep your team ready.",
    points: ["Emergency breach response", "Digital forensics", "Ransomware recovery", "Post-incident hardening"],
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    tagline: "Secure-by-design cloud.",
    desc: "Comprehensive security for AWS, Azure and GCP — from architecture reviews to runtime protection. We harden your cloud without slowing your engineering teams.",
    points: ["Cloud architecture reviews", "CSPM & CWPP deployment", "IAM & zero-trust design", "Container & K8s security"],
  },
];

const Services = () => {
  return (
    <>
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="container relative mx-auto text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary mb-5">
            <Sparkles className="h-3.5 w-3.5" /> All-in-One Tech Solutions
          </div>
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Cybersecurity <span className="text-gradient">+ Digital Solutions</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg">
            From offensive pentesting and QA testing to web development and brand design — one trusted partner for every layer of your digital business.
          </p>
        </div>
      </section>

      {/* CORE CYBERSECURITY SERVICES */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {coreServices.map((s, i) => (
            <div
              key={s.title}
              className="glass-card p-8 md:p-12 grid lg:grid-cols-12 gap-8 items-start animate-fade-up"
            >
              <div className="lg:col-span-4 flex flex-col">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/30 grid place-items-center text-primary mb-5 shadow-glow-sm">
                  <s.icon className="h-8 w-8" />
                </div>
                <span className="text-xs font-mono text-primary mb-2">0{i + 1} / 06</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold">{s.title}</h2>
                <p className="text-primary text-sm mt-2">{s.tagline}</p>
              </div>

              <div className="lg:col-span-8">
                <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {s.points.map((p) => (
                    <div key={p} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/90">{p}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="neon" size="sm" className="mt-6">
                  <Link to="/contact">Discuss this service <ArrowRight /></Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED PENTEST GRID */}
      <section className="section-padding border-t border-primary/10 bg-cyber-surface/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary mb-4">
              <Bug className="h-3.5 w-3.5" /> Offensive Security
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Penetration Testing <span className="text-gradient">& Security Services</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A complete catalogue of offensive security capabilities — from web apps to wireless, code to cloud.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pentestServices.map((s, i) => (
              <div
                key={s.title}
                className="glass-card p-6 group transition-all duration-300 hover:scale-[1.03] hover:shadow-glow-sm hover:border-primary/50 animate-fade-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/30 grid place-items-center text-primary mb-4 group-hover:shadow-glow-sm group-hover:scale-110 transition-all">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-lg leading-tight mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Request a Pentest <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* QA TESTING */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary mb-4">
              <TestTube2 className="h-3.5 w-3.5" /> Quality Assurance
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              QA Testing & <span className="text-gradient">Software Testing</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Ensure your applications are bug-free, secure, and high-performing with our advanced QA and testing solutions.
            </p>
          </div>

          <div className="glass-card p-8 md:p-12 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/30 grid place-items-center text-primary mb-5 shadow-glow-sm">
                <TestTube2 className="h-8 w-8" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold">QA Testing & Software Testing</h3>
              <p className="text-primary text-sm mt-2">Ship with confidence. Test like attackers.</p>
            </div>

            <div className="lg:col-span-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Combine functional, performance and security testing in one engagement. From sprint-aligned manual QA
                to enterprise automation frameworks — we make sure every release is fast, stable and secure.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {qaServices.map((p, i) => {
                  const icons = [Bug, Zap, Check, Activity, ShieldAlert, PlugZap, RefreshCcw];
                  const Icon = icons[i % icons.length];
                  return (
                    <div
                      key={p}
                      className="flex items-center gap-3 p-3 rounded-lg border border-primary/20 bg-primary/5 hover:border-primary/50 hover:shadow-glow-sm transition-all"
                    >
                      <Icon className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground/90">{p}</span>
                    </div>
                  );
                })}
              </div>

              <Button asChild variant="hero" size="sm">
                <Link to="/contact">Test Your Application <ArrowRight /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL SOLUTIONS */}
      <section className="section-padding border-t border-primary/10 bg-cyber-surface/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Beyond Security</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Digital Solutions <span className="text-gradient">Beyond Security</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From bulletproof websites to brand-defining design — we build the digital experiences that power your growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {digitalServices.map((s, i) => (
              <div
                key={s.title}
                className="glass-card p-8 md:p-10 group transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-sm animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/30 grid place-items-center text-primary mb-5 shadow-glow-sm group-hover:scale-110 transition-transform">
                  <s.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold">{s.title}</h3>
                <p className="text-primary text-sm mt-2 mb-4">{s.tagline}</p>
                <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {s.points.map((p) => (
                    <div key={p} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/90">{p}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="hero" size="sm">
                  <Link to="/contact">{s.cta} <ArrowRight /></Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Mini CTA banner */}
          <div className="mt-12 relative overflow-hidden rounded-2xl glass-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="absolute inset-0 bg-gradient-glow opacity-40" />
            <div className="relative">
              <h3 className="font-display text-xl md:text-2xl font-bold">
                Need a secure website? <span className="text-gradient">We build & protect it.</span>
              </h3>
              <p className="text-sm text-muted-foreground mt-1">One team for development, design and defense.</p>
            </div>
            <Button asChild variant="neon" size="lg" className="relative shrink-0">
              <Link to="/contact">Talk to Us <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl glass-card p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-glow opacity-60" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-bold">
                Not sure which service you need?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Talk to our architects. We'll assess your needs and recommend the right approach — free of cost.
              </p>
              <Button asChild variant="hero" size="lg" className="mt-8">
                <Link to="/contact">Book Free Consultation <ArrowRight /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
