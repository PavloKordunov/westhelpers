"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  return (
    <section className="relative flex h-[calc(100vh-80px)] flex-col justify-center px-6 md:px-12 lg:px-24">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-bg via-bg/80 to-transparent" />
      <div className="absolute inset-0 z-0 bg-bg/20" />

      <div className="relative z-10 max-w-5xl">
        <h1
          ref={headlineRef}
          className="mb-6 text-6xl leading-[0.9] md:text-8xl lg:text-[120px] [text-shadow:_0_4px_12px_rgba(0,0,0,0.5)]"
        >
          Логістика майбутнього. Доставка сьогодні.
        </h1>
        <p className="mb-12 max-w-2xl text-lg text-muted md:text-xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]">
          WestHelpers — ваш надійний партнер у сфері міжнародних та внутрішніх
          перевезень. Понад 12 років досвіду, власний автопарк та бездоганна
          репутація.
        </p>

        <div className="mb-12 flex flex-wrap gap-8">
          {[
            { label: "років досвіду", value: "12" },
            { label: "маршрутів", value: "340+" },
            { label: "вчасно", value: "98%" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-mono text-2xl font-bold text-accent">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={() =>
            document
              .getElementById("Тарифи")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="group flex items-center gap-3 border-b-2 border-accent pb-2 text-xl font-bold transition-all hover:gap-5"
        >
          Розрахувати вартість <ArrowRight className="text-accent" />
        </button>
      </div>

      {/* Decorative Road Lines */}
      <div className="absolute bottom-20 left-0 z-0 h-20 w-full overflow-hidden opacity-10">
        <div className="road-line top-0" style={{ animationDelay: "0s" }} />
        <div className="road-line top-1/2" style={{ animationDelay: "-4s" }} />
        <div className="road-line bottom-0" style={{ animationDelay: "-2s" }} />
      </div>
    </section>
  );
}
