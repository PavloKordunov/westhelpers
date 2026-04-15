"use client";

import { useRef } from "react";

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="Тарифи"
      ref={sectionRef}
      className="bg-surface section-padding"
    >
      <div className="mb-16 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-accent">
          Прайс-лист
        </span>
        <h2 className="mt-4 text-4xl md:text-6xl">Наші Тарифи</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Vehicle 1 */}
        <div className="bento-card flex flex-col">
          <div className="mb-6 flex items-center justify-between">
            <div className="bg-accent px-4 py-2 text-bg font-bold">
              від 750 грн/год
            </div>
            <div className="border border-accent px-4 py-2 text-accent text-sm font-bold">
              на 2 год.
            </div>
          </div>
          <h3 className="mb-2 text-2xl">VW Crafter (14м³)</h3>
          <p className="mb-6 text-sm text-muted">
            Мінімальне замовлення: 1500 грн.
          </p>

          <div className="mb-8 space-y-3">
            {[
              { label: "Довжина", value: "4.3 м." },
              { label: "Висота", value: "1.9 м." },
              { label: "Ширина", value: "1.7 м." },
              { label: "Об'єм кузова", value: "14 куб." },
              { label: "Вантажопідйомність", value: "1.5 т." },
            ].map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between border-b border-border pb-2 text-sm"
              >
                <span className="text-muted">{spec.label}:</span>
                <span className="font-bold">{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <h4 className="mb-4 text-xs uppercase tracking-widest text-accent">
              Додаткова інформація
            </h4>
            <ul className="space-y-2 text-xs text-muted">
              <li className="flex justify-between">
                <span>Подача авто:</span> <span>до 30 хв.</span>
              </li>
              <li className="flex justify-between">
                <span>Область:</span> <span>від 20 грн./км.</span>
              </li>
              <li className="flex justify-between">
                <span>Додаткова точка:</span> <span>100 грн.</span>
              </li>
              <li className="flex justify-between">
                <span>Робота у нічний час:</span> <span>+200 грн.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Vehicle 2 */}
        <div className="bento-card flex flex-col border-accent/50 bg-accent/5">
          <div className="mb-6 flex items-center justify-between">
            <div className="bg-accent px-4 py-2 text-bg font-bold">
              1250 грн/год
            </div>
            <div className="border border-accent px-4 py-2 text-accent text-sm font-bold">
              на 2 год.
            </div>
          </div>
          <h3 className="mb-2 text-2xl">Renault Master (20м³)</h3>
          <p className="mb-6 text-sm text-muted">
            Мінімальне замовлення: 2500 грн.
          </p>

          <div className="mb-8 space-y-3">
            {[
              { label: "Довжина", value: "4.2 м." },
              { label: "Висота", value: "2.4 м." },
              { label: "Ширина", value: "2.2 м." },
              { label: "Об'єм кузова", value: "20 куб." },
              { label: "Вантажопідйомність", value: "2 т." },
            ].map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between border-b border-border pb-2 text-sm"
              >
                <span className="text-muted">{spec.label}:</span>
                <span className="font-bold">{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <h4 className="mb-4 text-xs uppercase tracking-widest text-accent">
              Додаткова інформація
            </h4>
            <ul className="space-y-2 text-xs text-muted">
              <li className="flex justify-between">
                <span>Подача авто:</span> <span>до 30 хв.</span>
              </li>
              <li className="flex justify-between">
                <span>Область:</span> <span>від 25 грн./км.</span>
              </li>
              <li className="flex justify-between">
                <span>Додаткова точка:</span> <span>200 грн.</span>
              </li>
              <li className="flex justify-between">
                <span>Робота у нічний час:</span> <span>+250 грн.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Movers */}
        <div className="bento-card flex flex-col">
          <div className="mb-6 flex items-center justify-between">
            <div className="bg-accent px-4 py-2 text-bg font-bold">
              від 500 грн/год
            </div>
            <div className="border border-accent px-4 py-2 text-accent text-sm font-bold">
              на 2 год.
            </div>
          </div>
          <h3 className="mb-2 text-2xl">Послуги вантажників</h3>
          <p className="mb-6 text-sm text-muted">
            Мінімальне замовлення: 1000 грн.
          </p>

          <div className="mb-8 space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1 h-2 w-2 shrink-0 bg-accent" />
              <p className="text-sm text-muted">
                Професійне пакування та фіксація вантажу в кузові.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 h-2 w-2 shrink-0 bg-accent" />
              <p className="text-sm text-muted">
                Збірка та розбірка корпусних меблів будь-якої складності.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 h-2 w-2 shrink-0 bg-accent" />
              <p className="text-sm text-muted">
                Робота з крихкими та великогабаритними предметами.
              </p>
            </div>
          </div>

          <div className="mt-auto pt-6">
            <h4 className="mb-4 text-xs uppercase tracking-widest text-accent">
              Додаткова інформація
            </h4>
            <ul className="space-y-2 text-xs text-muted">
              <li className="flex justify-between">
                <span>Підйом без ліфта:</span> <span>20 грн./п.</span>
              </li>
              <li className="flex justify-between">
                <span>Вага {">"} 80кг:</span> <span>від 10 грн./кг.</span>
              </li>
              <li className="flex justify-between">
                <span>Збір меблів:</span> <span>від 500 грн.</span>
              </li>
              <li className="flex justify-between">
                <span>Доніс понад 20м:</span> <span>25 грн.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
