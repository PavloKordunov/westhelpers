"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (id: string) => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  } as const;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  return (
    <footer className="border-t border-border bg-bg px-6 py-16 md:px-12 lg:px-24 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-12 lg:grid-cols-4"
      >
        <motion.div variants={itemVariants} className="lg:col-span-1">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mb-6 flex items-center gap-2 select-none cursor-pointer w-fit"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="font-display text-xl font-black tracking-[0.2em] text-accent uppercase italic">
              WEST
            </span>
            <span className="font-display text-xl font-black tracking-[0.2em] uppercase">
              HELPERS
            </span>
          </motion.div>
          <p className="text-sm text-muted leading-relaxed max-w-[240px]">
            Сервіс сильних рук та розумної допомоги. Робимо переїзди та складні
            монтажні роботи легкими для вас.
          </p>
          <div className="mt-6 flex gap-4">
            {[
              { icon: <FaInstagram size={20} />, href: "#" },
              { icon: <FaFacebook size={20} />, href: "#" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                whileHover={{ y: -3, color: "var(--color-accent)" }}
                className="text-muted transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="mb-6 font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Послуги
          </h4>
          <ul className="space-y-4 text-sm text-muted">
            {[
              "Квартирні переїзди",
              "Послуги вантажників",
              "Монтаж меблів та обладнання",
              "Вивіз будівельного сміття",
            ].map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollToSection("Послуги")}
                  className="hover:text-accent transition-colors relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="mb-6 font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Навігація
          </h4>
          <ul className="space-y-4 text-sm text-muted">
            {[
              {
                name: "Головна",
                action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
              },
              { name: "Хто ми такі", id: "Про нас" },
              { name: "Ціни", id: "Тарифи" },
              { name: "Контакти", id: "Контакти" },
            ].map((link) => (
              <li key={link.name}>
                <button
                  onClick={() =>
                    link.action ? link.action() : scrollToSection(link.id!)
                  }
                  className="hover:text-accent transition-colors"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="mb-6 font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Контакти
          </h4>
          <ul className="space-y-4 text-sm text-muted">
            <motion.li
              whileHover={{ x: 5 }}
              className="flex items-center gap-3"
            >
              <Phone size={16} className="text-accent" />
              <a href="tel:+380XXXXXXXXX" className="hover:text-accent">
                +38 (0XX) XXX XX XX
              </a>
            </motion.li>
            <motion.li
              whileHover={{ x: 5 }}
              className="flex items-center gap-3"
            >
              <Mail size={16} className="text-accent" />
              <a
                href="mailto:hello@westhelpers.ua"
                className="hover:text-accent"
              >
                hello@westhelpers.ua
              </a>
            </motion.li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-accent" />
              <span>м. Львів, Україна</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 flex flex-col items-center justify-between border-t border-border pt-8 text-[10px] uppercase tracking-widest text-muted/50 md:flex-row"
      >
        <p>© 2026 WESTHELPERS. SERVICE CREW.</p>
        <p className="mt-4 md:mt-0 flex items-center gap-2">
          Handcrafted in Ukraine{" "}
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[14px]"
          >
            🇺🇦
          </motion.span>
        </p>
      </motion.div>
    </footer>
  );
}
