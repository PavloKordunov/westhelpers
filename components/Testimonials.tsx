"use client";

import { useRef } from "react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section className="section-padding">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-6xl">Відгуки партнерів</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {[
          {
            quote:
              "Працюємо з WestHelpers вже 3 роки. Жодного разу не підвели з термінами. Для нашого виробництва це критично важливо.",
            author: "Олександр Коваль",
            company: "CEO, Industrial Systems",
          },
          {
            quote:
              "Найкращий сервіс з перевезення негабаритних вантажів. Професійний підхід до документації та супроводу.",
            author: "Марина Петренко",
            company: "Логіст, BuildGroup",
          },
        ].map((item, i) => (
          <div key={i} className="bento-card">
            <Quote className="mb-6 text-accent opacity-50" size={40} />
            <p className="mb-8 text-xl italic leading-relaxed text-text">
              "{item.quote}"
            </p>
            <div>
              <p className="font-bold text-accent">{item.author}</p>
              <p className="text-sm text-muted">{item.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
