"use client";

import React, { useEffect, useRef } from "react";
import {
  Package,
  Truck,
  ShieldAlert,
  Thermometer,
  Car,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="Послуги" ref={sectionRef} className="section-padding">
      <div className="mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-accent">
          Спеціалізація
        </span>
        <h2 className="mt-4 text-4xl md:text-6xl">Що ми перевозимо</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-10">
        {/* Large Card */}
        <div className="bento-card lg:col-span-6">
          <Package className="mb-6 h-12 w-12 text-accent" />
          <h3 className="mb-4 text-3xl">Збірні вантажі</h3>
          <p className="mb-8 max-w-md text-muted">
            Оптимальне рішення для невеликих партій товару. Формуємо вантажі
            щодня для швидкої доставки.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("Тарифи")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2 font-bold text-accent"
          >
            Детальніше <ArrowRight size={16} />
          </button>
        </div>

        {/* Small Cards Column */}
        <div className="flex flex-col gap-6 lg:col-span-4">
          <div className="bento-card flex-1">
            <Truck className="mb-4 h-8 w-8 text-accent" />
            <h3 className="mb-2 text-xl">Великогабаритні вантажі</h3>
            <p className="text-sm text-muted">
              Перевезення техніки та конструкцій будь-якої складності.
            </p>
          </div>
          <div className="bento-card flex-1">
            <ShieldAlert className="mb-4 h-8 w-8 text-accent" />
            <h3 className="mb-2 text-xl">Небезпечні вантажі (ADR)</h3>
            <p className="text-sm text-muted">
              Сертифікований транспорт та водії для перевезення небезпечних
              речовин.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="bento-card lg:col-span-3">
          <Thermometer className="mb-4 h-8 w-8 text-accent" />
          <h3 className="mb-2 text-xl">Рефрижератори</h3>
          <p className="text-sm text-muted">
            Підтримка температурного режиму від -25°C до +25°C.
          </p>
        </div>
        <div className="bento-card lg:col-span-4">
          <Car className="mb-4 h-8 w-8 text-accent" />
          <h3 className="mb-2 text-xl">Авто на платформах</h3>
          <p className="text-sm text-muted">
            Перевезення легкових та комерційних авто по Україні та Європі.
          </p>
        </div>
        <div className="bento-card lg:col-span-3">
          <Zap className="mb-4 h-8 w-8 text-accent" />
          <h3 className="mb-2 text-xl">Express доставка</h3>
          <p className="text-sm text-muted">
            Максимально швидка доставка "від дверей до дверей".
          </p>
        </div>
      </div>
    </section>
  );
}
