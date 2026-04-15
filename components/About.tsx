"use client";

import { useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="Про нас"
      ref={sectionRef}
      className="bg-surface section-padding"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-accent">
            Чому ми
          </span>
          <h2 className="mt-4 mb-8 text-4xl md:text-6xl">
            Ваш успіх — наш пріоритет
          </h2>
          <p className="mb-8 text-lg text-muted">
            Ми не просто перевозимо вантажі. Ми будуємо надійні логістичні
            ланцюжки, які дозволяють вашому бізнесу зростати.
          </p>
          <div className="space-y-6">
            {[
              {
                title: "Власний автопарк",
                desc: "Понад 40 сучасних автомобілів різної вантажопідйомності.",
              },
              {
                title: "Повна відповідальність",
                desc: "Страхування вантажів та юридичний супровід кожного рейсу.",
              },
              {
                title: "Прозорість",
                desc: "GPS-моніторинг у реальному часі та прямий зв'язок з водієм.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 h-2 w-2 shrink-0 bg-accent" />
                <div>
                  <h4 className="font-bold text-text">{item.title}</h4>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="h-full w-full border border-border bg-bg/50 p-8">
            <div className="flex h-full flex-col justify-center">
              <div className="mb-8 font-display text-8xl font-black text-accent/20">
                WEST
              </div>
              <div className="mb-8 font-display text-8xl font-black text-accent/20">
                HELPERS
              </div>
              <div className="font-mono text-sm text-muted">
                EST. 2014 · KYIV · UKRAINE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
