"use client";

import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pb-2"
    >
      <div className="max-w-5xl mx-auto rounded-2xl bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg shadow-indigo-900/5 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 font-bold text-xl text-primary-900 tracking-tight">
          A<span className="text-primary-600">Í</span> Tecnologia
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-text-secondary">
          <Link href="#ecossistema" className="hover:text-primary-600 transition-colors">Soluções</Link>
          <Link href="#manifesto" className="hover:text-primary-600 transition-colors">Manifesto</Link>
          <Link href="#impacto" className="hover:text-primary-600 transition-colors">Impacto</Link>
          <Link href="#contato" className="hover:text-primary-600 transition-colors">Contato</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <button className="bg-primary-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:scale-105 active:scale-95 transition-all shadow-md shadow-primary-600/20 flex items-center gap-2 group">
            Começar Agora
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[80px] left-4 right-4 bg-white/95 backdrop-blur-3xl rounded-2xl p-6 shadow-2xl border border-slate-100 flex flex-col gap-4 md:hidden"
        >
          <Link href="#ecossistema" onClick={() => setIsOpen(false)} className="font-semibold text-lg text-primary-900">Soluções</Link>
          <Link href="#manifesto" onClick={() => setIsOpen(false)} className="font-semibold text-lg text-primary-900">Manifesto</Link>
          <Link href="#impacto" onClick={() => setIsOpen(false)} className="font-semibold text-lg text-primary-900">Impacto</Link>
          <Link href="#contato" onClick={() => setIsOpen(false)} className="font-semibold text-lg text-primary-900">Contato</Link>
          <hr className="border-border-subtle my-2" />
          <button className="bg-primary-600 text-white w-full py-3 rounded-xl font-semibold hover:bg-primary-500 transition-colors">
            Começar Agora
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
