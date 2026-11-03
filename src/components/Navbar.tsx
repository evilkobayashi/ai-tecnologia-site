"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/#imersao", label: "Contexto" },
  { href: "/#produtos", label: "Produtos" },
  { href: "/#metodo", label: "Método" },
  { href: "/#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-16 w-full bg-[#f7f4ee]/95 backdrop-blur-sm border-b border-[rgba(31,27,22,0.08)]">
      <div className="max-w-[1440px] mx-auto h-full px-6 md:px-8 flex items-center justify-between gap-6">
        <Link href="/" aria-label="AÍ Tecnologia — página inicial" className="flex items-center gap-3 shrink-0">
          <div className="relative w-32 h-8">
            <Image
              src="/assets/final-horizontal-black.svg"
              alt="AÍ Tecnologia e Educação"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        <nav aria-label="Principal" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] leading-5 font-normal text-[#5e554a] hover:text-[#1f1b16] transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://planeja.aitecnologia.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] leading-5 font-normal text-[#5e554a] hover:text-[#1f1b16] transition-colors duration-150"
          >
            Entrar no Planeja AÍ
          </a>
          <Link
            href="/#contato"
            className="h-9 px-4 rounded-[8px] bg-[#1f1b16] text-[#f7f4ee] text-[14px] leading-5 font-medium inline-flex items-center justify-center hover:bg-[#332d25] active:scale-[0.98] transition-[background-color,transform] duration-150"
          >
            Agendar demonstração
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="md:hidden h-9 w-9 rounded-[8px] border border-[rgba(31,27,22,0.08)] bg-[#fdfbf7] inline-flex items-center justify-center text-[#5e554a] hover:text-[#1f1b16] transition-colors duration-150"
        >
          {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#fdfbf7] border-b border-[rgba(31,27,22,0.08)] px-6 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="h-9 flex items-center text-[15px] text-[#1f1b16] font-normal"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-[rgba(31,27,22,0.08)] flex flex-col gap-3">
            <a
              href="https://planeja.aitecnologia.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 flex items-center text-[14px] text-[#5e554a]"
            >
              Entrar no Planeja AÍ
            </a>
            <Link
              href="/#contato"
              onClick={() => setOpen(false)}
              className="h-10 px-4 rounded-[8px] bg-[#1f1b16] text-[#f7f4ee] text-[14px] font-medium inline-flex items-center justify-center"
            >
              Agendar demonstração
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
