"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Box, Truck, HardHat, UserCheck } from "lucide-react";

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeInOut" as const,
      },
    }),
  };

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-24 py-20">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/4 -right-20 z-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]"
      />

      <div className="relative z-10 max-w-6xl">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 flex items-center gap-2"
        >
          <span className="h-[1px] w-8 bg-accent"></span>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Професійна допомога в один клік
          </span>
        </motion.div>

        <h1 className="mb-8 font-display text-5xl leading-[0.85] font-extrabold uppercase md:text-8xl lg:text-[110px]">
          <motion.span
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="block"
          >
            Вантажимо.
          </motion.span>
          <motion.span
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="block text-transparent stroke-text"
            style={{ WebkitTextStroke: "1px var(--color-text)" }}
          >
            Перевозимо.
          </motion.span>
          <motion.span
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="block text-accent"
          >
            Монтуємо.
          </motion.span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <p className="mb-10 max-w-xl text-lg text-muted md:text-xl leading-relaxed">
              WestHelpers — це команда міцних хлопців для ваших завдань. Від
              квартирних переїздів до складного монтажу обладнання. Ми робимо
              важку роботу за вас.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("Тарифи")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-bold transition-all flex items-center gap-3 shadow-lg shadow-accent/20"
              >
                Замовити хелперів <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ backgroundColor: "var(--color-accent-dim)" }}
                className="border border-border bg-surface px-8 py-4 text-lg font-bold transition-all"
              >
                Наші послуги
              </motion.button>
            </div>
          </motion.div>

          <div className="hidden lg:grid grid-cols-2 gap-4 translate-y-10">
            {[
              { icon: <Truck size={18} />, text: "Переїзди", delay: 5 },
              { icon: <Box size={18} />, text: "Вантажники", delay: 5.2 },
              { icon: <HardHat size={18} />, text: "Монтаж", delay: 5.4 },
              { icon: <UserCheck size={18} />, text: "Хелпери", delay: 5.6 },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                custom={item.delay}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                whileHover={{ y: -5, borderColor: "var(--color-accent)" }}
              >
                <ServiceTag icon={item.icon} text={item.text} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-10 left-0 w-full origin-left"
      >
        <div className="dashed-line" />
      </motion.div>
    </section>
  );
}

function ServiceTag({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 border border-border bg-surface/50 p-4 backdrop-blur-sm transition-all duration-300">
      <div className="text-accent">{icon}</div>
      <span className="font-bold uppercase text-xs tracking-widest">
        {text}
      </span>
    </div>
  );
}
