"use client";

export default function CTA() {
  return (
    <section className="mx-6 mb-24 overflow-hidden rounded-3xl bg-accent md:mx-12 lg:mx-24">
      <div className="flex flex-col items-center justify-between gap-12 px-8 py-16 text-center lg:flex-row lg:px-24 lg:text-left">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-4xl text-white md:text-6xl">
            Готові довірити вантаж?
          </h2>
          <p className="text-lg text-white/80">
            Отримайте розрахунок вартості протягом 15 хвилин
          </p>
        </div>
        <button
          onClick={() =>
            document
              .getElementById("Контакти")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="whitespace-nowrap bg-bg px-12 py-6 text-lg font-bold uppercase tracking-widest text-white transition-transform hover:scale-105"
        >
          Зв'язатися з нами
        </button>
      </div>
    </section>
  );
}
