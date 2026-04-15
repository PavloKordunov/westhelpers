"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="Контакти"
      className="border-t border-border bg-bg px-6 py-16 md:px-12 lg:px-24"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="mb-6 flex items-center gap-2">
            <span className="font-display text-xl font-extrabold tracking-[0.2em] text-accent">
              WEST
            </span>
            <span className="font-display text-xl font-extrabold tracking-[0.2em]">
              HELPERS
            </span>
          </div>
          <p className="text-sm text-muted">
            Ваш надійний партнер у світі важкої логістики. Потужність,
            швидкість, відповідальність.
          </p>
        </div>

        <div>
          <h4 className="mb-6 font-display text-sm font-bold uppercase tracking-widest">
            Послуги
          </h4>
          <ul className="space-y-4 text-sm text-muted">
            <li>
              <button
                onClick={() => scrollToSection("Послуги")}
                className="hover:text-accent"
              >
                Збірні вантажі
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("Послуги")}
                className="hover:text-accent"
              >
                Великогабаритні вантажі
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("Послуги")}
                className="hover:text-accent"
              >
                Рефрижератори
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("Послуги")}
                className="hover:text-accent"
              >
                ADR перевезення
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-display text-sm font-bold uppercase tracking-widest">
            Компанія
          </h4>
          <ul className="space-y-4 text-sm text-muted">
            <li>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-accent"
              >
                Про нас
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("Тарифи")}
                className="hover:text-accent"
              >
                Тарифи
              </button>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Кар'єра
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent">
                Новини
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-display text-sm font-bold uppercase tracking-widest">
            Контакти
          </h4>
          <ul className="space-y-4 text-sm text-muted">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-accent" /> +38 (044) 333-77-55
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-accent" /> info@westhelpers.ua
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-accent" /> м. Київ, вул.
              Промислова, 14
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between border-t border-border pt-8 text-xs text-muted md:flex-row">
        <p>© 2026 WestHelpers Logistics. Всі права захищені.</p>
        <p className="mt-4 md:mt-0">Зроблено в Україні 🇺🇦</p>
      </div>
    </footer>
  );
}
