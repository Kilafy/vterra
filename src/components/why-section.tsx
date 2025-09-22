import { useLanguage } from "@/components/language-context";

export default function WhySection() {
  const { language } = useLanguage();
  const copy = {
    en: {
      title: "Why we're here",
      text:
        "Business is hard enough. Endless documents, deadlines, details. That’s not where your energy belongs. Our job is simple: serve your business so you can serve your clients. Because when you’re free to focus on the meaningful work, everything changes.",
    },
    es: {
      title: "Por qué estamos aquí",
      text:
        "El negocio ya es lo suficientemente retador: documentos interminables, plazos y detalles. Tu energía no debería estar ahí. Nuestro trabajo es simple: cuidar tu negocio para que tú puedas cuidar a tus clientes. Cuando te liberas para enfocarte en lo que importa, todo cambia.",
    },
  } as const;
  const c = copy[language];

  return (
    <section id="about-why" className="py-16 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">{c.title}</h2>
        <div className="my-6 text-2xl text-gray-400">⸻</div>
        <p className="font-sans text-lg text-gray-700 leading-relaxed">{c.text}</p>
      </div>
    </section>
  );
}

