import { MessageCircle, Phone } from "lucide-react";

const FloatingButtons = () => {
  const phone = "+919999999999";
  const wa = "919999999999";

  return (
    <>
      <a
        href={`tel:${phone}`}
        aria-label="Call us"
        className="fixed bottom-6 left-6 z-50 group"
      >
        <span className="absolute inset-0 rounded-full bg-primary/40 blur-xl group-hover:bg-primary/60 transition" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-neon animate-pulse-glow group-hover:scale-110 transition">
          <Phone className="h-6 w-6" />
        </span>
      </a>

      <a
        href={`https://wa.me/${wa}?text=${encodeURIComponent("Hi Cyberforge, I'd like a free consultation.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <span className="absolute inset-0 rounded-full bg-[hsl(142_70%_45%/0.5)] blur-xl group-hover:bg-[hsl(142_70%_45%/0.7)] transition" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142_70%_45%)] text-white shadow-[0_0_24px_hsl(142_70%_45%/0.6)] group-hover:scale-110 transition">
          <MessageCircle className="h-6 w-6" />
        </span>
      </a>
    </>
  );
};

export default FloatingButtons;
