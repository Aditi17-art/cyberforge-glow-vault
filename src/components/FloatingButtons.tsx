
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  const phone = "+918181924786";
  const wa = "8181924786";

  return (
    <>
      {/* Floating Call Button */}
      <a
        href={`tel:${phone}`}
        aria-label="Call us"
        className="fixed bottom-6 left-6 z-50 group"
      >
        {/* Glow Effect */}
        <span className="absolute inset-0 rounded-full bg-primary/40 blur-xl group-hover:bg-primary/60 transition-all duration-300" />

        {/* Call Icon */}
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-neon animate-pulse-glow group-hover:scale-110 transition-all duration-300">
          <Phone className="h-6 w-6" />
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${wa}?text=${encodeURIComponent(
          "Hi Cyberforge, I'd like a free consultation."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group"
      >
        {/* WhatsApp Glow Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/50 blur-xl group-hover:bg-[#25D366]/70 transition-all duration-300" />

        {/* WhatsApp Icon */}
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_24px_rgba(37,211,102,0.6)] group-hover:scale-110 transition-all duration-300">
          <FaWhatsapp className="h-8 w-8" />
        </span>
      </a>
    </>
  );
};

export default FloatingButtons;
