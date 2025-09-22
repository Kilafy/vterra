import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-context";

export default function ContactCtaSection() {
  const { language } = useLanguage();
  const copy = {
    en: {
      text:
        "The choice is simple: carry the load alone, or share it with someone who’s built to help. We’re ready when you are.",
      button: "Start the Conversation",
    },
    es: {
      text:
        "La decisión es simple: llevar la carga solo, o compartirla con alguien creado para ayudarte. Estamos listos cuando tú lo estés.",
      button: "Iniciar la conversación",
    },
  } as const;
  const c = copy[language];

  return (
    <section id="cta" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border bg-black text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/10 via-transparent to-transparent" />
          <div className="relative grid grid-cols-1 lg:grid-cols-3">
            <div className="col-span-2 p-8 md:p-14">
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">{language === 'en' ? 'Ready to move forward?' : '¿Listo para avanzar?'}</h3>
              <p className="text-lg text-white/85 max-w-2xl">{c.text}</p>
            </div>
            <div className="flex items-center justify-center p-8 md:p-14">
              <a href="https://wa.me/573104591255" target="_blank" rel="noreferrer" className="w-full md:w-auto">
                <Button size="lg" className="w-full md:w-auto bg-white text-black hover:bg-white/90">
                  {c.button}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
