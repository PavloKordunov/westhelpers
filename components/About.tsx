"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const xWest = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const xHelpers = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityText = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0],
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  } as const;

  return (
    <section
      id="Про нас"
      ref={sectionRef}
      className="bg-surface section-padding overflow-hidden relative"
    >
      <div className="container mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
        <motion.div
          className="relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="font-mono text-xs uppercase tracking-[0.4em] text-accent block mb-4"
          >
            Хто ми такі
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="mb-8 text-4xl md:text-6xl font-display uppercase italic font-black leading-[0.9]"
          >
            Ми робимо <br /> важку роботу <br /> за вас
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mb-12 text-lg text-muted max-w-xl leading-relaxed"
          >
            WestHelpers — це команда професіоналів, яка приходить на допомогу
            там, де потрібні міцні руки та чітка організація.
          </motion.p>

          <div className="space-y-8">
            {[
              {
                title: "Досвідчені хелпери",
                desc: "Професіонали, які знають цінність ваших речей.",
              },
              {
                title: "Монтаж та сервіс",
                desc: "Розбираємо та збираємо все: від меблів до стендів.",
              },
              {
                title: "Прозорий розрахунок",
                desc: "Чесна ціна без прихованих платежів.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex gap-4 group"
              >
                <div className="mt-1 h-[2px] w-6 shrink-0 bg-accent transition-all group-hover:w-10" />
                <div>
                  <h4 className="font-bold text-text uppercase tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="hidden lg:relative lg:flex flex-col items-center lg:items-end justify-center py-12 lg:py-0 w-full overflow-visible">
          <motion.div
            style={{ opacity: opacityText }}
            className="flex flex-col text-center lg:text-right leading-[0.8] tracking-tighter uppercase font-display font-black"
          >
            <motion.div
              style={{ x: xWest, WebkitTextStroke: "1px var(--color-text)" }}
              className="text-[15vw] lg:text-[11vw] opacity-10 leading-none"
            >
              WEST
            </motion.div>

            <motion.div
              style={{ x: xHelpers }}
              className="text-[15vw] lg:text-[11vw] text-accent leading-none -mt-2"
            >
              HELPERS
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              transition={{ delay: 1 }}
              className="mt-8 flex flex-col items-center lg:items-end gap-1"
            >
              <div className="h-[1px] w-full max-w-[200px] bg-accent" />
              <span className="font-mono text-[16px] tracking-[0.3em] text-muted">
                PRO SERVICE • LVIV • 2026
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
