import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919901515300?text=Hello%20Dhreeti%20Clinic"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 end-5 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full text-white shadow-soft hover:scale-105 transition-transform"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle className="h-7 w-7" fill="white" />
      <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: "#25D366" }} />
    </a>
  );
}
