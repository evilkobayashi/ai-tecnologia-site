"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppFab() {
  return (
    <motion.a
      href="https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre as soluções da AÍ Tecnologia."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center transition-colors"
    >
      <MessageCircle size={26} strokeWidth={2.2} />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-amber rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-amber rounded-full" />
    </motion.a>
  );
}
