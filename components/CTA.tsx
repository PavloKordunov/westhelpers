"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Clock } from "lucide-react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Дані форми:", formData);
    alert("Запит надіслано! Ми зателефонуємо вам за 15 хвилин.");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      id="Контакти"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="mx-6 mb-24 overflow-hidden rounded-3xl border border-border bg-surface md:mx-12 lg:mx-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 h-64 w-64 bg-accent/5 blur-[100px] rounded-full" />

          <motion.span
            variants={itemVariants}
            className="font-mono text-xs uppercase tracking-[0.4em] text-accent mb-6"
          >
            Зв'язок з нами
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="mb-8 font-display text-4xl md:text-6xl font-black uppercase italic leading-none"
          >
            Маєте <br /> складне <br /> завдання?
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                icon: <Clock size={20} />,
                label: "Швидка відповідь",
                sub: "Передзвонимо за 15 хвилин",
              },
              {
                icon: <Phone size={20} />,
                label: "Прямий номер",
                sub: "+38 (0XX) XXX XX XX",
              },
            ].map((info, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-center gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-dim text-accent transition-all group-hover:scale-110 group-hover:bg-accent group-hover:text-bg">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest">
                    {info.label}
                  </p>
                  <p className="text-xs text-muted font-mono">{info.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="p-12 lg:p-20 relative bg-bg/30">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.03, scale: 1 }}
            className="absolute top-0 right-0 p-8 font-display text-8xl font-black select-none pointer-events-none"
          >
            FORM
          </motion.div>

          <form
            onSubmit={handleSubmit}
            className="relative z-10 flex flex-col gap-10"
          >
            {[
              {
                id: "name",
                label: "Ваше ім'я",
                type: "text",
                placeholder: "Олександр",
              },
              {
                id: "phone",
                label: "Телефон",
                type: "tel",
                placeholder: "+380",
              },
              {
                id: "message",
                label: "Опис завдання",
                type: "textarea",
                placeholder: "Переїзд або монтаж...",
              },
            ].map((field) => (
              <motion.div
                key={field.id}
                variants={itemVariants}
                className="relative"
              >
                {field.type === "textarea" ? (
                  <textarea
                    required
                    rows={1}
                    className="peer w-full border-b border-border bg-transparent py-3 text-lg outline-none transition-colors focus:border-accent resize-none"
                    placeholder=" "
                    onChange={(e) =>
                      setFormData({ ...formData, [field.id]: e.target.value })
                    }
                  />
                ) : (
                  <input
                    required
                    type={field.type}
                    className="peer w-full border-b border-border bg-transparent py-3 text-lg outline-none transition-colors focus:border-accent"
                    placeholder=" "
                    onChange={(e) =>
                      setFormData({ ...formData, [field.id]: e.target.value })
                    }
                  />
                )}
                <label className="absolute left-0 top-3 text-sm uppercase tracking-widest text-muted transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-muted peer-focus:-top-6 peer-focus:text-xs peer-focus:text-accent">
                  {field.label}
                </label>
              </motion.div>
            ))}

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-4 group flex items-center justify-between bg-accent px-8 py-6 font-display text-xl font-black uppercase italic tracking-widest text-white transition-all hover:shadow-[0_0_30px_rgba(232,98,42,0.3)]"
            >
              Надіслати
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  READY
                </span>
                <Send
                  size={24}
                  className="transition-transform group-hover:translate-x-2 group-hover:-translate-y-1"
                />
              </div>
            </motion.button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
