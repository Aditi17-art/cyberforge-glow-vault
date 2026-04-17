import { Link } from "react-router-dom";
import { Banknote, HeartPulse, ShoppingCart, Landmark, Server, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    icon: Banknote,
    title: "Finance & Banking",
    desc: "Protecting transactions, customer data and trading platforms with PCI-DSS, RBI and SEBI-aligned controls.",
    tags: ["PCI-DSS", "Fraud prevention", "Transaction security"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Securing patient data, medical devices and EHR systems under HIPAA, HITRUST and DPDP regulations.",
    tags: ["HIPAA", "EHR security", "Medical IoT"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    desc: "Defending storefronts, payment gateways and customer accounts from carding, ATO and supply-chain attacks.",
    tags: ["Payment security", "Bot defense", "Fraud detection"],
  },
  {
    icon: Landmark,
    title: "Government",
    desc: "CERT-In aligned services for ministries, public sector units and critical national infrastructure.",
    tags: ["CERT-In", "Critical infra", "Cyber resilience"],
  },
  {
    icon: Server,
    title: "IT & SaaS",
    desc: "Securing modern software companies — from CI/CD pipelines and cloud workloads to multi-tenant SaaS platforms.",
    tags: ["DevSecOps", "Cloud-native", "SOC 2"],
  },
];

const Industries = () => {
  return (
    <>
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="container relative mx-auto text-center max-w-3xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Industries We Serve</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Specialized defense for <span className="text-gradient">every sector</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg">
            Cyberforge tailors security strategies to the unique threat landscape, regulations and operations of your industry.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div
                key={ind.title}
                className="glass-card p-7 group animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/30 grid place-items-center text-primary mb-5 group-hover:shadow-glow-sm transition">
                  <ind.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{ind.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {ind.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary/90">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl glass-card p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-glow opacity-60" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-bold">Don't see your industry?</h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                We've worked across logistics, education, energy and more. Let's talk about your security needs.
              </p>
              <Button asChild variant="hero" size="lg" className="mt-8">
                <Link to="/contact">Talk to Our Experts <ArrowRight /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
