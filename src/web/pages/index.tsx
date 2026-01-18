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
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#D4C4B0] text-[#D4C4B0] font-medium rounded-full hover:bg-[#D4C4B0]/10 transition-colors"
            >
              Escríbeme
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-24 bg-[#FAF8F5] fade-section opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center space-y-6 mb-12">
            <p className="text-[#8B7355] font-medium tracking-widest uppercase text-sm">Contacto</p>
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-[#2D2D2D]">
              ¿Tienes alguna pregunta?
            </h2>
            <p className="text-[#5C5C5C] leading-relaxed max-w-md mx-auto">
              Si tienes dudas sobre los servicios o necesitas más información, escríbeme y te responderé lo antes posible.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#2D2D2D]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center gap-8">
            <img 
              src="./7d6dc424-f44b-45fe-aba3-c7e7048af88e.png" 
              alt="Astrochiic" 
              className="h-12 w-auto brightness-0 invert opacity-90"
            />
            
            {/* Social Media Links */}
            <div className="flex items-center gap-5">
              <a 
                href="https://instagram.com/astrochiic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 bg-[#3D3D3D] rounded-full flex items-center justify-center hover:bg-[#4D4D4D] transition-colors group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-[#D4C4B0] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://tiktok.com/@astrochiic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 bg-[#3D3D3D] rounded-full flex items-center justify-center hover:bg-[#4D4D4D] transition-colors group"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 text-[#D4C4B0] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@astrochiic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 bg-[#3D3D3D] rounded-full flex items-center justify-center hover:bg-[#4D4D4D] transition-colors group"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-[#D4C4B0] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Email */}
            <a 
              href="mailto:astrochiic@gmail.com"
              className="text-[#D4C4B0] hover:text-white transition-colors text-sm"
            >
              astrochiic@gmail.com
            </a>
            
            {/* Divider */}
            <div className="w-24 h-px bg-[#4D4D4D]"></div>
            
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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const subject = formData.asunto 
      ? `Contacto Astrochiic: ${formData.asunto}` 
      : 'Contacto desde la web de Astrochiic';
    
    const body = `Nombre: ${formData.nombre}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMensaje:%0D%0A${formData.mensaje}`;
    
    window.location.href = `mailto:astrochiic@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  const inputClasses = "w-full px-5 py-4 bg-white border border-[#E8E4DE] rounded-xl text-[#3D3D3D] placeholder-[#A8A8A8] focus:outline-none focus:border-[#8B7355] focus:ring-2 focus:ring-[#8B7355]/10 transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-[#5C5C5C] mb-2">
            Nombre *
          </label>
          <input
            type="text"
            id="nombre"
            required
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={(e) => setFormData({...formData, nombre: e.target.value})}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#5C5C5C] mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="tu@email.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className={inputClasses}
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="asunto" className="block text-sm font-medium text-[#5C5C5C] mb-2">
          Asunto <span className="text-[#A8A8A8] font-normal">(opcional)</span>
        </label>
        <select
          id="asunto"
          value={formData.asunto}
          onChange={(e) => setFormData({...formData, asunto: e.target.value})}
          className={`${inputClasses} appearance-none cursor-pointer`}
          style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%238B7355' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em'}}
        >
          <option value="">Selecciona un tema...</option>
          <option value="Informe Astrológico">Informe Astrológico Escrito</option>
          <option value="Sesión Online 60min">Sesión Online (60 min)</option>
          <option value="Pack 2 Informes">Pack de 2 Informes</option>
          <option value="Sesión 2 Cartas">Sesión Online de Dos Cartas</option>
          <option value="Consulta general">Consulta general</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-[#5C5C5C] mb-2">
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          required
          rows={5}
          placeholder="Cuéntame en qué puedo ayudarte..."
          value={formData.mensaje}
          onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
          className={`${inputClasses} resize-none`}
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-[#8B7355] text-white font-medium rounded-full hover:bg-[#7A6349] transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Abriendo correo...
          </>
        ) : submitted ? (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            ¡Listo!
          </>
        ) : (
          <>
            Enviar mensaje
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>
      
      <p className="text-center text-sm text-[#9E9E9E]">
        Al enviar se abrirá tu cliente de correo con el mensaje preparado.
      </p>
    </form>
  );
};

export default Index;
