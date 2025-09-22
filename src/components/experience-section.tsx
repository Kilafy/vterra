import { useLanguage } from "@/components/language-context";

export default function ExperienceSection() {
  const { language } = useLanguage();
  const copy = {
    en: {
      title: "Live the Vterra Experience",
      text:
        "Working with us is not another vendor relationship. It’s partnership. It feels like having someone who actually sees your brand the way you do—someone who sweats the details, so you don’t have to. Elegant, precise, boutique. Your business deserves that kind of care.",
    },
    es: {
      title: "Vive la Experiencia Vterra",
      text:
        "Trabajar con nosotros no es una relación más con un proveedor. Es una alianza. Se siente como tener a alguien que ve tu marca como tú—alguien que cuida los detalles para que tú no tengas que hacerlo. Elegante, preciso, boutique. Tu negocio merece ese nivel de cuidado.",
    },
  } as const;
  const c = copy[language];

  return (
    <section id="experience" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">{c.title}</h2>
        <div className="my-6 text-2xl text-gray-400">⸻</div>
        <p className="font-sans text-lg text-gray-700 leading-relaxed">{c.text}</p>
      </div>
    </section>
  );
}

