"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: "Послуги", id: "Послуги" },
    { name: "Тарифи", id: "Тарифи" },
    { name: "Про нас", id: "Про нас" },
    { name: "Контакти", id: "Контакти" },
  ];

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-border py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer select-none group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="font-display text-xl font-black tracking-[0.2em] text-accent uppercase italic transition-transform group-hover:scale-105">
            WEST
          </span>
          <span className="font-display text-xl font-black tracking-[0.2em] uppercase transition-transform group-hover:scale-105">
            HELPERS
          </span>
        </motion.div>

        <div className="hidden items-center gap-10 lg:flex">
          <div className="flex gap-8">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-accent transition-all group-hover:w-full" />
              </motion.button>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("Контакти")}
            className="group relative flex items-center gap-2 overflow-hidden bg-accent px-6 py-2.5 text-[11px] font-black uppercase tracking-widest text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent/90"
          >
            <span className="relative z-10">Швидкий виклик</span>
            <Phone
              size={14}
              className="relative z-10 transition-transform group-hover:rotate-12"
            />
          </motion.button>
        </div>

        <button
          className="relative z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[105] flex flex-col bg-bg p-8 lg:hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[30vw] font-black opacity-[0.03] select-none pointer-events-none">
              MENU
            </div>

            <div className="flex flex-col gap-6 pt-24 text-center relative z-10">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="font-display text-5xl font-black uppercase italic tracking-tighter text-text transition-all active:text-accent"
                >
                  {item.name}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 flex flex-col gap-8 items-center"
              >
                <button
                  onClick={() => scrollToSection("Контакти")}
                  className="w-full bg-accent py-5 font-display text-xl font-black uppercase italic tracking-widest text-white shadow-2xl shadow-accent/30"
                >
                  Замовити зараз
                </button>
                <div className="space-y-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
                    Львів • Україна
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted opacity-50">
                    На зв'язку 24/7
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
