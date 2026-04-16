"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Trash2,
  Hammer,
  Users,
  Timer,
  ArrowRight,
  MoveHorizontal,
} from "lucide-react";

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <section
      id="Послуги"
      ref={sectionRef}
      className="section-padding overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="mb-16">
          <motion.span
            variants={cardVariants}
            className="font-mono text-xs uppercase tracking-[0.4em] text-accent block"
          >
            Сервіс та допомога
          </motion.span>
          <motion.h2
            variants={cardVariants}
            className="mt-4 text-4xl md:text-6xl uppercase font-display italic font-black"
          >
            Чим ми допомагаємо
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-10">
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bento-card lg:col-span-6 flex flex-col justify-between group cursor-default"
          >
            <div>
              <div className="mb-6 inline-block">
                <MoveHorizontal className="h-12 w-12 text-accent" />
              </div>
              <h3 className="mb-4 text-3xl font-display uppercase italic font-bold">
                Квартирні та офісні переїзди
              </h3>
              <p className="mb-8 max-w-md text-muted leading-relaxed">
                Беремо на себе все: від пакування кришталю до розстановки меблів
                на новому місці. Ваш комфорт — наша відповідальність.
              </p>
            </div>
            <button
              onClick={() =>
                document
                  .getElementById("Тарифи")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 font-bold text-accent group/btn w-fit"
            >
              Замовити переїзд{" "}
              <ArrowRight
                size={16}
                className="transition-transform group-hover/btn:translate-x-2"
              />
            </button>
          </motion.div>

          {/* Стовпчик: Вантажники та Монтаж */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            {[
              {
                icon: <Users className="h-8 w-8 text-accent" />,
                title: "Міцні вантажники",
                text: "Команда професіоналів для розвантаження фур чи підйому будматеріалів.",
              },
              {
                icon: <Hammer className="h-8 w-8 text-accent" />,
                title: "Монтаж та демонтаж",
                text: "Розберемо меблі, встановимо техніку або змонтуємо конструкції.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="bento-card flex-1 cursor-default"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="mb-2 text-xl uppercase font-display font-bold italic">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Нижня лінія: Сміття, Івенти, Експрес */}
          {[
            {
              icon: <Trash2 className="h-8 w-8 text-accent" />,
              title: "Вивіз сміття",
              text: "Вивозимо старі меблі, техніку та будівельне сміття після ремонту.",
              span: "lg:col-span-3",
            },
            {
              icon: <Box className="h-8 w-8 text-accent" />,
              title: "Хелпери на івенти",
              text: "Допомога в підготовці заходів: монтаж сцени, розстановка декору.",
              span: "lg:col-span-4",
            },
            {
              icon: <Timer className="h-8 w-8 text-accent" />,
              title: "Терміновий виїзд",
              text: "Потрібна допомога 'на зараз'? Виїзд протягом 60 хвилин.",
              span: "lg:col-span-3",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className={`bento-card ${item.span} cursor-default`}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="mb-2 text-xl uppercase font-display font-bold italic">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
