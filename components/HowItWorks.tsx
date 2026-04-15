"use client";

import React, { useEffect, useRef } from "react";

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section className="section-padding">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl">Як це працює</h2>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="dashed-line hidden lg:block" />
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {[
            {
              step: "01",
              title: "Залишити заявку",
              desc: "Заповніть форму або зателефонуйте нам для первинної консультації.",
            },
            {
              step: "02",
              title: "Погодити маршрут",
              desc: "Ми прорахуємо оптимальний шлях та вартість вашого перевезення.",
            },
            {
              step: "03",
              title: "Вантаж доставлено",
              desc: "Ми беремо на себе всю логістику та документацію до моменту вивантаження.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-accent bg-bg font-display text-2xl font-bold text-accent">
                {item.step}
              </div>
              <h3 className="mb-4 text-2xl">{item.title}</h3>
              <p className="text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
