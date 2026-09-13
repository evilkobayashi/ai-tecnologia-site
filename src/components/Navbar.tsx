"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#ecossistema", label: "Soluções" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#manifesto", label: "Manifesto" },
  { href: "#impacto", label: "Impacto" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pb-2"
    >
      <div className={`max-w-5xl mx-auto rounded-2xl backdrop-blur-xl border shadow-lg px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-white/90 border-slate-200 shadow-indigo-900/10"
          : "bg-white/70 border-white/20 shadow-indigo-900/5"
      }`}>
        <Link href="/" className="flex items-center">
          <img 
            src="/assets/logo-ai-inpi-oficial.jpg" 
            alt="AÍ Tecnologia e Educação" 
            className="h-10 w-auto mix-blend-multiply" 
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-sm text-text-secondary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`hover:text-primary-600 transition-colors relative py-1 ${
                activeSection === link.href.replace("#", "")
                  ? "text-primary-600"
                  : ""
              }`}
            >
              {link.label}
              {activeSection === link.href.replace("#", "") && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <a href="#contato" className="bg-primary-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:scale-105 active:scale-95 transition-all shadow-md shadow-primary-600/20 flex items-center gap-2 group">
            Começar Agora
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary-900 p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden -z-10"
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[80px] left-4 right-4 bg-white/95 backdrop-blur-3xl rounded-2xl p-6 shadow-2xl border border-slate-100 flex flex-col gap-4 lg:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-semibold text-lg transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "text-primary-600"
                      : "text-primary-900"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-border-subtle my-2" />
              <a
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="bg-primary-600 text-white w-full py-3 rounded-xl font-semibold flex justify-center hover:bg-primary-500 transition-colors"
              >
                Começar Agora
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
