"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  // Варіанти для заголовка та контейнера
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  } as const;

  return (
    <section
      id="Тарифи"
      ref={sectionRef}
      className="bg-surface section-padding overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 text-center"
      >
        <motion.span
          variants={fadeIn}
          className="font-mono text-xs uppercase tracking-[0.4em] text-accent block"
        >
          Прайс-лист
        </motion.span>
        <motion.h2
          variants={fadeIn}
          className="mt-4 text-4xl md:text-6xl font-display uppercase italic font-black"
        >
          Наші Тарифи
        </motion.h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 gap-8 lg:grid-cols-3"
      >
        {/* Картка 1: Транспорт */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="bento-card flex flex-col group"
        >
          <div className="mb-6 flex items-center justify-between">
            <div className="bg-accent px-4 py-2 text-bg font-bold">
              від 750 грн/год
            </div>
            <div className="border border-accent px-4 py-2 text-accent text-sm font-bold">
              на 2 год.
            </div>
          </div>
          <h3 className="mb-2 text-2xl font-display uppercase font-bold group-hover:text-accent transition-colors">
            VW Crafter (14м³)
          </h3>
          <p className="mb-6 text-sm text-muted">
            Мінімальне замовлення: 1500 грн.
          </p>

          <div className="mb-8 space-y-3">
            {[
              { label: "Довжина", value: "4.3 м." },
              { label: "Об'єм кузова", value: "14 куб." },
              { label: "Вантажопідйомність", value: "1.5 т." },
            ].map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between border-b border-border/50 pb-2 text-sm"
              >
                <span className="text-muted">{spec.label}:</span>
                <span className="font-bold">{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-border/30">
            <h4 className="mb-4 text-xs uppercase tracking-widest text-accent font-bold">
              Додатково
            </h4>
            <ul className="space-y-2 text-xs text-muted italic">
              <li>Подача авто: до 30 хв.</li>
              <li>Область: від 20 грн./км.</li>
            </ul>
          </div>
        </motion.div>

        {/* Картка 2: Ваш Хелпер (Акцентна) */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -12, scale: 1.02 }}
          className="bento-card flex flex-col border-accent/50 bg-accent/5 relative overflow-hidden group shadow-2xl shadow-accent/5"
        >
          {/* Світловий ефект на фоні */}
          <div className="absolute -top-24 -right-24 h-48 w-48 bg-accent/10 blur-[60px] rounded-full group-hover:bg-accent/20 transition-colors" />

          <div className="mb-6 flex items-center justify-between relative z-10">
            <div className="bg-accent px-4 py-2 text-bg font-bold shadow-lg shadow-accent/20">
              400 грн/год
            </div>
            <div className="border border-accent px-4 py-2 text-accent text-sm font-bold">
              8 год.
            </div>
          </div>

          <h3 className="mb-2 text-2xl font-display uppercase font-bold text-accent">
            Ваш Хелпер
          </h3>
          <p className="mb-6 text-sm text-white/90 font-bold bg-accent/10 py-1 px-3 w-fit">
            Денне завдання: 3500 грн.
          </p>

          <div className="mb-8 space-y-4 relative z-10">
            {[
              "Універсальний помічник для переїздів",
              "Розбирання, збирання та пакування",
              "Монтажні роботи з інструментом",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 h-2 w-2 shrink-0 bg-accent rotate-45" />
                <p className="text-sm text-muted">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-accent/20">
            <h4 className="mb-4 text-xs uppercase tracking-widest text-accent font-bold">
              Умови
            </h4>
            <ul className="space-y-2 text-xs text-muted">
              <li className="flex justify-between">
                <span>Понаднормово:</span>{" "}
                <span className="text-accent">+450 грн/год</span>
              </li>
              <li className="flex justify-between">
                <span>Робота вночі:</span>{" "}
                <span className="text-accent">+200 грн.</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Картка 3: Вантажники */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -8 }}
          className="bento-card flex flex-col group"
        >
          <div className="mb-6 flex items-center justify-between">
            <div className="bg-accent px-4 py-2 text-bg font-bold">
              від 250 грн/год
            </div>
            <div className="border border-accent px-4 py-2 text-accent text-sm font-bold">
              на 2 год.
            </div>
          </div>
          <h3 className="mb-2 text-2xl font-display uppercase font-bold group-hover:text-accent transition-colors">
            Вантажники
          </h3>
          <p className="mb-6 text-sm text-muted">
            Мін. замовлення: 500 грн/людина.
          </p>

          <div className="mb-8 space-y-4">
            {[
              "Професійне пакування та фіксація",
              "Збірка корпусних меблів",
              "Крихкі та великогабаритні предмети",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 h-2 w-2 shrink-0 bg-accent/50" />
                <p className="text-sm text-muted">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-border/30">
            <h4 className="mb-4 text-xs uppercase tracking-widest text-accent font-bold">
              Інфо
            </h4>
            <ul className="space-y-2 text-xs text-muted">
              <li className="flex justify-between">
                <span>Підйом без ліфта:</span> <span>20 грн./п.</span>
              </li>
              <li className="flex justify-between">
                <span>Вага {">"} 80кг:</span> <span>від 10 грн./кг.</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
