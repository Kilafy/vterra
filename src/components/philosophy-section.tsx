import { useLanguage } from "@/components/language-context";

export default function PhilosophySection() {
  const { language } = useLanguage();
  const copy = {
    en: {
      title: "Our Beliefs",
      bullets: [
        "We provide services to take care of your business.",
        "We support brands that are transforming the world.",
        "Real Estate Solutions for a World in Motion.",
      ],
    },
    es: {
      title: "Nuestra Filosofía",
      bullets: [
        "Brindamos servicios para cuidar tu negocio.",
        "Apoyamos marcas que están transformando el mundo.",
        "Soluciones inmobiliarias para un mundo en movimiento.",
      ],
    },
  } as const;
  const c = copy[language];

  return (
    <section id="philosophy" className="py-16 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">{c.title}</h2>
        <div className="my-6 text-2xl text-gray-400">⸻</div>
        <ul className="space-y-3">
          {c.bullets.map((b, i) => (
            <li key={i} className="text-lg text-gray-700">• {b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

