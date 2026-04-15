"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Послуги", id: "Послуги" },
    { name: "Тарифи", id: "Тарифи" },
    { name: "Про нас", id: "Про нас" },
    { name: "Контакти", id: "Контакти" },
  ];

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center gap-2">
          <span className="font-display text-xl font-extrabold tracking-[0.2em] text-accent">
            WEST
          </span>
          <span className="font-display text-xl font-extrabold tracking-[0.2em]">
            HELPERS
          </span>
        </div>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium tracking-wide text-muted transition-colors hover:text-accent"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("Контакти")}
            className="group relative overflow-hidden border border-accent px-6 py-2 text-sm font-bold uppercase tracking-widest text-accent transition-all hover:text-white"
          >
            <span className="relative z-10">Замовити перевезення</span>
            <div className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-300 group-hover:translate-x-0" />
          </button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute inset-x-0 top-full border-b border-border bg-bg p-6 lg:hidden">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-lg font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("Контакти")}
              className="bg-accent py-4 text-sm font-bold uppercase tracking-widest text-white"
            >
              Замовити перевезення
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
