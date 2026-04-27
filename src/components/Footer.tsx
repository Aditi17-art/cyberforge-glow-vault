import { Link } from "react-router-dom";
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 bg-cyber-darker mt-20">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="h-7 w-7 text-primary" />
              <span className="font-display font-bold text-lg">
                Cyber<span className="text-gradient">forge</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enterprise cybersecurity solutions engineered to defend modern
              digital businesses against evolving threats.
            </p>

            <div className="flex gap-3 mt-5">
              {[Linkedin, Twitter, Github, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="h-9 w-9 grid place-items-center rounded-full border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary hover:shadow-glow-sm transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="hover:text-primary transition">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/services" className="hover:text-primary transition">
                  Application Penetration Testing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition">
                  Managed Security
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition">
                  Incident Response
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition">
                  Cloud Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>Greater Noida</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a
                  href="tel:+918181924786"
                  className="hover:text-primary transition">
                  +91 8181924786
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a
                  href="mailto:support@tfcyberforgetechnologies.com"
                  className="hover:text-primary transition">
                  support@tfcyberforgetechnologies.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Cyberforge Technologies. All rights
            reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-primary transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Designer Credit */}
        <div className="border-t border-primary/10 mt-4 pt-4 text-center text-sm text-muted-foreground">
          Design & Develop by{" "}
          <span className="text-primary font-semibold">ADITI DHARIWAL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
