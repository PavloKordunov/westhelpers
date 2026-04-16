"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  } as const;

  const reviews = [
    {
      quote:
        "Замовляли хелперів для монтажу виставкового стенду. Хлопці приїхали вчасно, зі своїм інструментом. Працювали без перерв 6 годин поспіль. Дуже задоволені результатом!",
      author: "Артем Дмитренко",
      role: "Організатор івентів",
    },
    {
      quote:
        "Переїзд квартири пройшов без жодної подряпини. Особливо вразило, як акуратно запакували та перенесли піаніно на 5-й поверх без ліфта. Справжні профі.",
      author: "Тетяна Резнік",
      role: "Власниця квартири",
    },
    {
      quote:
        "Потрібно було терміново розвантажити фуру з товаром на склад. WestHelpers зреагували за годину. Хлопці міцні, тверезі та дуже швидкі. Рекомендую!",
      author: "Ігор Ващук",
      role: "Власник магазину",
    },
  ];

  return (
    <section
      id="Відгуки"
      ref={sectionRef}
      className="section-padding bg-bg overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto"
      >
        <div className="mb-16 text-center lg:text-left">
          <motion.span
            variants={itemVariants}
            className="font-mono text-xs uppercase tracking-[0.4em] text-accent block mb-4"
          >
            Довіра клієнтів
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-display uppercase italic font-black"
          >
            Що про нас кажуть
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bento-card flex flex-col justify-between group h-full"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>

                <Quote
                  className="mb-6 text-accent opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                  size={32}
                />

                <p className="mb-8 text-lg leading-relaxed text-text italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-border/50">
                <p className="font-display font-bold uppercase tracking-wider text-accent">
                  {item.author}
                </p>
                <p className="text-xs text-muted uppercase font-mono tracking-widest mt-1">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
