"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  // Слідкуємо за скролом для лінії
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    }),
  };

  const steps = [
    {
      step: "01",
      title: "Запит",
      desc: "Пишіть у месенджер або телефонуйте. Ми одразу прорахуємо кількість людей та час.",
    },
    {
      step: "02",
      title: "Приїзд",
      desc: "Хелпери прибувають на локацію вчасно, зі своїм інструментом та пакуванням.",
    },
    {
      step: "03",
      title: "Результат",
      desc: "Виконана робота, зібрані меблі та чиста локація. Ви оплачуєте тільки результат.",
    },
  ];

  return (
    <section
      id="Як це працює"
      ref={sectionRef}
      className="section-padding bg-bg relative overflow-hidden"
    >
      {/* Декоративний фоновий напис з паралаксом */}
      <motion.div
        style={{ x: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        className="absolute top-1/2 left-1/2 font-display text-[20vw] font-black opacity-[0.02] select-none pointer-events-none uppercase"
      >
        PROCESS
      </motion.div>

      <div className="mb-20 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-mono text-xs uppercase tracking-[0.4em] text-accent"
        >
          Алгоритм дій
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 text-4xl md:text-6xl font-display uppercase italic font-black"
        >
          3 кроки до вирішення
        </motion.h2>
      </div>

      <div className="relative mx-auto max-w-6xl z-10">
        {/* Анімована пунктирна лінія для десктопа */}
        <div className="absolute top-10 left-0 w-full h-[2px] hidden lg:block overflow-hidden">
          <div className="w-full h-full border-t border-dashed border-accent/20" />
          <motion.div
            style={{ scaleX, originX: 0 }}
            className="absolute top-0 left-0 w-full h-full border-t border-solid border-accent shadow-[0_0_10px_var(--color-accent)]"
          />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Номер кроку з ефектом обертання */}
              <motion.div
                whileHover={{ rotate: 90, scale: 1.1 }}
                className="mb-8 flex h-20 w-20 items-center justify-center border-2 border-accent bg-bg font-display text-3xl font-black text-accent transition-colors group-hover:bg-accent group-hover:text-bg shadow-[0_0_20px_rgba(232,98,42,0)] group-hover:shadow-[0_0_20px_rgba(232,98,42,0.3)]"
              >
                {item.step}
              </motion.div>

              <h3 className="mb-4 text-2xl font-display uppercase font-bold tracking-tight group-hover:text-accent transition-colors">
                {item.title}
              </h3>

              <p className="text-muted leading-relaxed max-w-[280px]">
                {item.desc}
              </p>

              {/* Мобільний індикатор переходу */}
              {i < 2 && (
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="mt-8 lg:hidden text-accent opacity-30"
                >
                  ↓
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
