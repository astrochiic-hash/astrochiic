import { useEffect, useRef, useState } from "react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3D3D3D]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E4DE]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <img 
            src="./7d6dc424-f44b-45fe-aba3-c7e7048af88e.png" 
            alt="Astrochiic" 
            className="h-10 md:h-12 w-auto"
          />
          <a 
            href="#servicios"
            className="hidden md:inline-block px-5 py-2.5 bg-[#8B7355] text-white font-medium rounded-full hover:bg-[#7A6349] transition-colors"
          >
            Ver servicios
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8 animate-fade-up">
              <div className="space-y-6">
                <p className="text-[#8B7355] font-medium tracking-widest uppercase text-sm">
                  Astrología Evolutiva
                </p>
                <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#2D2D2D] font-light tracking-tight">
                  La carta natal es el <span className="italic font-normal">mapa</span> de tu vida
                </h1>
                <p className="text-lg md:text-xl text-[#5C5C5C] leading-relaxed max-w-xl">
                  Tu carta natal no te dice lo que va a pasar. Te muestra quién eres, qué necesitas y por qué repites ciertos patrones.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#servicios"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#8B7355] text-white font-medium rounded-full hover:bg-[#7A6349] transition-all hover:shadow-lg"
                >
                  Descubre mis servicios
                </a>
                <a 
                  href="#enfoque"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#8B7355] text-[#8B7355] font-medium rounded-full hover:bg-[#8B7355]/5 transition-colors"
                >
                  Conoce mi enfoque
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center animate-fade-up animation-delay-200">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#D4C4B0]/40 to-[#E8DED0]/40 rounded-[2rem] rotate-3"></div>
                <img 
                  src="./0a8590cc-7ac8-4dc7-8454-e879f7fdfbbe.png" 
                  alt="Astrochiic - Astrología Evolutiva"
                  className="relative w-72 md:w-80 lg:w-96 rounded-[1.5rem] shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enfoque Section */}
      <section id="enfoque" className="py-24 bg-[#F5F1EC] fade-section opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <p className="text-[#8B7355] font-medium tracking-widest uppercase text-sm">Mi enfoque</p>
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-[#2D2D2D]">
              Astrología como herramienta de autoconocimiento
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sin predicciones vacías",
                description: "No te diré que 'Venus te traerá el amor en marzo'. Trabajo con tu carta como un mapa psicológico, no como una bola de cristal."
              },
              {
                title: "Enfoque terapéutico",
                description: "Integro la astrología con una mirada psicológica profunda. Lo que buscamos es comprensión, no entretenimiento."
              },
              {
                title: "Herramienta práctica",
                description: "Cada sesión te da claves concretas para entender tus relaciones, tu vocación y tus ciclos emocionales."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#8B7355]/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#8B7355] section-title text-xl">{i + 1}</span>
                </div>
                <h3 className="font-medium text-xl text-[#2D2D2D] mb-3">{item.title}</h3>
                <p className="text-[#5C5C5C] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quién es / No es */}
      <section className="py-24 fade-section opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-[#2D2D2D]">
              ¿Esto es para ti?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#6B8E6B]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#6B8E6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-medium text-xl text-[#2D2D2D]">Es para ti si...</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Quieres entenderte mejor, no que te digan qué hacer",
                  "Buscas una mirada profunda, no un horóscopo",
                  "Estás en un momento de cambio o transición vital",
                  "Te interesa el por qué detrás de tus patrones",
                  "Valoras el autoconocimiento como camino de crecimiento"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5C5C5C]">
                    <span className="text-[#6B8E6B] mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#C9A485]/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#9E7B5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-medium text-xl text-[#2D2D2D]">No es para ti si...</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Buscas predicciones sobre el futuro",
                  "Quieres respuestas rápidas y superficiales",
                  "Esperas que te digan qué decisión tomar",
                  "Prefieres lo místico sin base psicológica",
                  "No estás dispuesta/o a mirarte con honestidad"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5C5C5C]">
                    <span className="text-[#9E7B5E] mt-1">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 bg-[#F5F1EC] fade-section opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <p className="text-[#8B7355] font-medium tracking-widest uppercase text-sm">Servicios</p>
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-[#2D2D2D]">
              Elige cómo quieres trabajar
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Informe Astrológico Escrito - 50€ */}
            <ServiceCard
              title="Informe Astrológico Escrito"
              subtitle="Basado en la carta natal"
              price="50€"
              features={[
                "Enfocado en bloqueos personales, temas de vida, propósito y crecimiento",
                "Entregado como PDF claro y fácil de entender"
              ]}
              types={[
                "Carta natal (también infantil)",
                "Carta dracónica",
                "Revolución Solar",
                "Tránsitos astrológicos",
                "Sinastría de pareja",
                "Orientación de salud",
                "Orientación profesional"
              ]}
              typesLabel="Tipos de informes disponibles"
              ctaText="Solicitar informe"
              ctaLink="https://buy.stripe.com/bJecMY3pL9bXaX9gVY0ZW05"
            />

            {/* Sesión Online 60 min - 120€ */}
            <ServiceCard
              title="Sesión Online"
              subtitle="Videollamada en directo de 60 minutos"
              price="120€"
              badge="Más popular"
              badgeColor="bg-[#8B7355]"
              features={[
                "Espacio para preguntas y claridad",
                "Incluye grabación de la sesión",
                "Incluye informe astrológico escrito"
              ]}
              ctaText="Reservar sesión"
              ctaLink="https://buy.stripe.com/5kQ7sE5xTewh7KX6hk0ZW01"
              isPrimary
            />

            {/* Pack de 2 Informes - 70€ */}
            <ServiceCard
              title="Pack de 2 Informes Escritos"
              subtitle="Dos análisis complementarios"
              price="70€"
              features={[]}
              packs={[
                "Carta Natal + Carta Dracónica",
                "Carta Natal + Revolución Solar"
              ]}
              packsLabel="Opciones de packs"
              ctaText="Elegir pack"
              ctaLink="https://buy.stripe.com/bJecMY3pL9bXaX9gVY0ZW05"
            />

            {/* Sesión Online de Dos Cartas - 150€ */}
            <ServiceCard
              title="Sesión Online de Dos Cartas"
              subtitle="Videollamada en directo de 90 minutos"
              price="150€"
              oldPrice="170€"
              badge="Precio especial de lanzamiento"
              badgeColor="bg-[#6B8E6B]"
              features={[
                "Espacio para preguntas y claridad",
                "Incluye grabación de la sesión",
                "Incluye informe astrológico escrito"
              ]}
              packs={[
                "Carta natal + Carta dracónica",
                "Carta natal + Revolución solar"
              ]}
              packsLabel="Opciones de cartas"
              ctaText="Reservar sesión"
              ctaLink="https://buy.stripe.com/5kQ7sE8K53RDd5hfRU0ZW06"
              isPrimary
            />
          </div>
        </div>
      </section>

      {/* Valores / Confianza */}
      <section className="py-24 fade-section opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#8B7355] font-medium tracking-widest uppercase text-sm mb-6">Mi compromiso</p>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-[#2D2D2D] mb-8">
            Honestidad por encima de todo
          </h2>
          <p className="text-lg text-[#5C5C5C] leading-relaxed mb-12 max-w-2xl mx-auto">
            No vendo magia ni promesas vacías. La astrología es una herramienta poderosa de autoconocimiento cuando se usa con rigor y respeto. Mi trabajo es acompañarte a verte con más claridad, no darte falsas certezas.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Confidencialidad total", desc: "Todo lo que compartas conmigo queda entre nosotras. Tu carta y tu historia están a salvo." },
              { title: "Sin juicio", desc: "La carta natal no tiene partes 'malas'. Cada aspecto tiene su luz y su sombra." },
              { title: "Enfoque humano", desc: "No eres un conjunto de aspectos astrológicos. Eres una persona compleja y única." }
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <h3 className="font-medium text-[#2D2D2D]">{item.title}</h3>
                <p className="text-[#5C5C5C] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-[#3D3D3D] fade-section opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            ¿Lista para conocerte mejor?
          </h2>
          <p className="text-lg text-[#B8B8B8] mb-10 max-w-xl mx-auto">
            El primer paso hacia el autoconocimiento es atreverte a mirar. Tu carta natal tiene mucho que contarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#servicios"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#D4C4B0] text-[#2D2D2D] font-medium rounded-full hover:bg-[#C9B89F] transition-colors"
            >
              Ver servicios
            </a>
            <a 
              href="mailto:hola@astrochiic.com"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#D4C4B0] text-[#D4C4B0] font-medium rounded-full hover:bg-[#D4C4B0]/10 transition-colors"
            >
              Escríbeme
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#2D2D2D]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img 
              src="./7d6dc424-f44b-45fe-aba3-c7e7048af88e.png" 
              alt="Astrochiic" 
              className="h-10 w-auto brightness-0 invert opacity-80"
            />
            <p className="text-[#9E9E9E] text-sm">
              © {new Date().getFullYear()} Astrochiic. Astrología Evolutiva.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400;1,9..40,500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
        
        .hero-title {
          font-family: 'DM Sans', sans-serif;
        }
        
        .section-title {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
        }
        
        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-section.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  subtitle: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  badgeColor?: string;
  features: string[];
  types?: string[];
  typesLabel?: string;
  packs?: string[];
  packsLabel?: string;
  ctaText: string;
  ctaLink: string;
  isPrimary?: boolean;
}

const ServiceCard = ({
  title,
  subtitle,
  price,
  oldPrice,
  badge,
  badgeColor,
  features,
  types,
  typesLabel,
  packs,
  packsLabel,
  ctaText,
  ctaLink,
  isPrimary
}: ServiceCardProps) => {
  const [showTypes, setShowTypes] = useState(false);

  return (
    <div className={`${oldPrice ? 'bg-gradient-to-br from-[#F9F6F2] to-[#F5EFE8] border border-[#E8E0D5]' : 'bg-white'} p-7 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all relative overflow-hidden`}>
      {badge && (
        <div className={`absolute top-4 right-4 ${badgeColor} text-white text-xs px-3 py-1 rounded-full font-medium`}>
          {badge}
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="font-medium text-xl text-[#2D2D2D] mb-1 pr-24">{title}</h3>
        <p className="text-[#8B7355] font-medium text-sm">{subtitle}</p>
      </div>
      
      <div className="flex items-baseline gap-2 mb-6">
        {oldPrice && (
          <span className="text-lg text-[#9E9E9E] line-through">{oldPrice}</span>
        )}
        <span className="text-3xl font-light text-[#2D2D2D]" style={{ fontFamily: "'Playfair Display', serif" }}>{price}</span>
      </div>

      {features.length > 0 && (
        <ul className="space-y-2.5 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[#5C5C5C] text-sm">
              <svg className="w-4 h-4 text-[#8B7355] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {types && (
        <div className="mb-6">
          <button
            onClick={() => setShowTypes(!showTypes)}
            className="flex items-center gap-2 text-sm font-medium text-[#8B7355] hover:text-[#7A6349] transition-colors"
          >
            <svg 
              className={`w-4 h-4 transition-transform ${showTypes ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            {typesLabel}
          </button>
          {showTypes && (
            <ul className="mt-3 ml-6 space-y-1.5">
              {types.map((type, i) => (
                <li key={i} className="text-sm text-[#5C5C5C] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#8B7355]/50 rounded-full"></span>
                  {type}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {packs && (
        <div className="mb-6 p-4 bg-[#FAF8F5] rounded-xl">
          <p className="text-xs font-medium text-[#8B7355] uppercase tracking-wide mb-3">{packsLabel}</p>
          <ul className="space-y-2">
            {packs.map((pack, i) => (
              <li key={i} className="text-sm text-[#5C5C5C] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#8B7355] rounded-full"></span>
                {pack}
              </li>
            ))}
          </ul>
        </div>
      )}

      <a 
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center w-full px-6 py-3.5 font-medium rounded-full transition-colors ${
          isPrimary 
            ? 'bg-[#8B7355] text-white hover:bg-[#7A6349]' 
            : 'border-2 border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white'
        }`}
      >
        {ctaText}
      </a>
    </div>
  );
};

export default Index;
