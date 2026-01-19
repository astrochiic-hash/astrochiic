import { useEffect, useRef, useState } from "react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-[#FDFBF7] text-[#3D3832] overflow-x-hidden">
      {/* Subtle geometric background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-[400px] h-[400px] border border-[#D4C5B0]/20 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-[300px] h-[300px] border border-[#D4C5B0]/15 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#D4C5B0]/10 rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-xl border-b border-[#E8E0D4]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <img 
            src="./logo-navbar.png" 
            alt="Astrochic - Astrología Evolutiva" 
            className="h-8 sm:h-11 md:h-14 lg:h-16 w-auto"
          />
          {/* Desktop nav */}
          <a 
            href="#servicios"
            className="hidden md:inline-block px-5 py-2.5 bg-[#A6896B] text-white font-medium rounded-full hover:bg-[#8B7358] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4C5B0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDFBF7]"
          >
            Ver servicios
          </a>
          {/* Mobile hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#F5F0E8] transition-colors"
            aria-label="Menú"
          >
            <svg className="w-6 h-6 text-[#3D3832]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FDFBF7]/98 backdrop-blur-xl border-t border-[#E8E0D4]/60 px-4 py-4 space-y-3 animate-fade-down">
            <a 
              href="#enfoque"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#6B6259] hover:text-[#B8956B] transition-colors"
            >
              Mi enfoque
            </a>
            <a 
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#6B6259] hover:text-[#B8956B] transition-colors"
            >
              Servicios
            </a>
            <a 
              href="#testimonios"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#6B6259] hover:text-[#B8956B] transition-colors"
            >
              Testimonios
            </a>
            <a 
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-5 py-3 bg-[#A6896B] text-white font-medium rounded-full hover:bg-[#8B7358] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4C5B0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDFBF7]"
            >
              Contactar
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center pt-24 sm:pt-20 pb-12 sm:pb-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 animate-fade-up text-center lg:text-left">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-[#B8956B] font-medium tracking-[0.25em] uppercase text-xs sm:text-sm">
                  Astrología Evolutiva
                </p>
                <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#2A2622] font-light tracking-tight">
                  La carta natal es el <span className="italic font-normal text-[#B8956B]">mapa</span> de tu vida
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-[#6B6259] leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Tu carta natal no te dice lo que va a pasar. Te muestra quién eres, qué necesitas y por qué repites ciertos patrones.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a 
                  href="#servicios"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#A6896B] text-white font-medium rounded-full hover:bg-[#8B7358] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4C5B0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDFBF7] text-sm sm:text-base"
                >
                  Descubre mis servicios
                </a>
                <a 
                  href="#enfoque"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border border-[#3D3832]/30 text-[#3D3832] font-medium rounded-full hover:bg-[#3D3832]/5 transition-colors text-sm sm:text-base"
                >
                  Conoce mi enfoque
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center animate-fade-up animation-delay-200">
              <div className="relative">
                {/* Distinctive asymmetric organic frame with orbital elements */}
                {/* Outer orbital ring - tilted ellipse */}
                <div className="absolute -inset-10 sm:-inset-12 border border-[#D4C5B0]/25 rounded-full" style={{ transform: 'rotate(-15deg) scaleX(1.15)' }}></div>
                
                {/* Inner orbital ring - counter tilted */}
                <div className="absolute -inset-6 sm:-inset-8 border border-[#B8956B]/20 rounded-full" style={{ transform: 'rotate(25deg) scaleY(1.1)' }}></div>
                
                {/* Small orbital dot accents */}
                <div className="absolute -top-4 right-1/4 w-2 h-2 rounded-full bg-[#B8956B]/40"></div>
                <div className="absolute -bottom-6 left-1/3 w-1.5 h-1.5 rounded-full bg-[#D4C5B0]/60"></div>
                <div className="absolute top-1/4 -right-6 w-2.5 h-2.5 rounded-full bg-[#B8956B]/30"></div>
                
                {/* Asymmetric organic blob shape behind image */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-[#F5EDE4] via-[#EDE4D8] to-[#E8DDD0]"
                  style={{ 
                    borderRadius: '60% 40% 50% 70% / 55% 65% 45% 55%',
                    transform: 'scale(1.08) translate(-2%, 3%)',
                  }}
                ></div>
                
                {/* Accent line - like an astral chart arc */}
                <svg className="absolute -inset-8 sm:-inset-10 w-[calc(100%+4rem)] sm:w-[calc(100%+5rem)] h-[calc(100%+4rem)] sm:h-[calc(100%+5rem)]" viewBox="0 0 100 100" fill="none">
                  <path 
                    d="M 15 50 Q 25 15, 60 10" 
                    stroke="#B8956B" 
                    strokeWidth="0.4" 
                    strokeOpacity="0.4"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path 
                    d="M 85 55 Q 80 85, 45 92" 
                    stroke="#D4C5B0" 
                    strokeWidth="0.5" 
                    strokeOpacity="0.35"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                
                <img 
                  src="./0a8590cc-7ac8-4dc7-8454-e879f7fdfbbe.png" 
                  alt="Astrochiic - Astrología Evolutiva"
                  className="relative w-56 sm:w-72 md:w-80 lg:w-96 shadow-2xl shadow-[#C4B5A0]/30"
                  style={{ 
                    borderRadius: '55% 45% 48% 52% / 50% 55% 45% 50%',
                    clipPath: 'polygon(5% 0%, 100% 0%, 100% 95%, 0% 100%, 0% 8%)'
                  }}
                />
                
                {/* Corner accent - golden line detail */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 border-r-2 border-b-2 border-[#B8956B]/30 rounded-br-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enfoque Section */}
      <section id="enfoque" className="py-16 sm:py-24 relative fade-section opacity-0 translate-y-8 transition-all duration-700 bg-[#F8F4ED]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <p className="text-[#B8956B] font-medium tracking-[0.25em] uppercase text-xs sm:text-sm">Mi enfoque</p>
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2A2622]">
              Astrología como herramienta de autoconocimiento
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Sin predicciones vacías",
                description: "No te diré que 'Venus te traerá el amor en marzo'. Trabajo con tu carta como un mapa psicológico, no como una bola de cristal.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
                    <path strokeLinecap="round" strokeWidth="1.5" d="M12 6v6l4 2"/>
                  </svg>
                )
              },
              {
                title: "Enfoque terapéutico",
                description: "Integro la astrología con una mirada psicológica profunda. Lo que buscamos es comprensión, no entretenimiento.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeWidth="1.5" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                )
              },
              {
                title: "Herramienta práctica",
                description: "Cada sesión te da claves concretas para entender tus relaciones, tu vocación y tus ciclos emocionales.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                )
              }
            ].map((item, i) => (
              <div key={i} className="group bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E0D4] hover:border-[#D4C5B0] transition-all hover:shadow-lg hover:shadow-[#D4C5B0]/10">
                <div className="w-12 h-12 bg-[#FAF6F0] rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-[#B8956B] group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-medium text-lg sm:text-xl text-[#2A2622] mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-[#6B6259] leading-relaxed text-sm sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quién es / No es - REDESIGNED */}
      <section className="py-16 sm:py-24 relative fade-section opacity-0 translate-y-8 transition-all duration-700 bg-[#FDFBF7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <p className="text-[#B8956B] font-medium tracking-[0.25em] uppercase text-xs sm:text-sm">¿Es para ti?</p>
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2A2622]">
              Descubre si encajamos
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* SÍ es para ti */}
            <div className="bg-[#F5F9F5] p-6 sm:p-8 rounded-2xl border border-[#D4E4D4]">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-[#5A8A5A] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl sm:text-2xl text-[#2A2622]">Sí es para ti</h3>
              </div>
              <div className="space-y-4">
                {[
                  "Estás en un momento de cambio o crisis",
                  "Quieres entender tus patrones emocionales",
                  "Buscas autoconocimiento profundo",
                  "Te interesa crecer, no que te digan qué hacer",
                  "Valoras una mirada honesta y sin juicio"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-[#5A8A5A]/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#5A8A5A]/25 transition-colors">
                      <svg className="w-4 h-4 text-[#5A8A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#4A4541] text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* NO es para ti */}
            <div className="bg-[#FBF5F5] p-6 sm:p-8 rounded-2xl border border-[#E8D4D4]">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-12 h-12 bg-[#9A6B6B] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl sm:text-2xl text-[#2A2622]">No es para ti</h3>
              </div>
              <div className="space-y-4">
                {[
                  "Buscas predicciones del futuro",
                  "Quieres respuestas mágicas sin trabajo personal",
                  "Esperas que te diga qué hacer",
                  "Prefieres lo superficial y rápido",
                  "No estás lista/o para mirarte con honestidad"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-[#9A6B6B]/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#9A6B6B]/25 transition-colors">
                      <svg className="w-4 h-4 text-[#9A6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-[#4A4541] text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-16 sm:py-24 relative fade-section opacity-0 translate-y-8 transition-all duration-700 bg-[#F8F4ED]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <p className="text-[#B8956B] font-medium tracking-[0.25em] uppercase text-xs sm:text-sm">Servicios</p>
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2A2622]">
              Elige cómo quieres trabajar
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
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
              ctaLink="https://buy.stripe.com/8x2bIU8K5dsdd5hgVY0ZW00"
            />

            {/* Sesión Online 60 min - 120€ */}
            <ServiceCard
              title="Sesión Online"
              subtitle="Videollamada en directo de 60 minutos"
              price="120€"
              badge="Más popular"
              badgeColor="bg-[#B8956B]"
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
              badgeColor="bg-[#5A8A5A]"
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

      {/* Testimonios */}
      <section id="testimonios" className="py-16 sm:py-24 relative fade-section opacity-0 translate-y-8 transition-all duration-700 bg-[#FDFBF7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <p className="text-[#B8956B] font-medium tracking-[0.25em] uppercase text-xs sm:text-sm">Experiencias</p>
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2A2622]">
              Lo que dicen quienes han trabajado conmigo
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "Llevaba años sintiéndome atrapada en las mismas dinámicas de pareja sin entender por qué. La sesión con ella me dio una claridad que ninguna terapia me había dado antes. Ahora entiendo mis patrones y puedo elegir conscientemente.",
                name: "Laura M.",
                context: "Sesión de carta natal"
              },
              {
                text: "No creía mucho en la astrología hasta que vi mi carta explicada con ese enfoque psicológico. No me dijo qué iba a pasar, sino quién soy y por qué reacciono como reacciono. Muy revelador y nada esotérico.",
                name: "Marta S.",
                context: "Informe escrito"
              },
              {
                text: "Estaba en un momento de crisis laboral total, sin saber qué camino tomar. El informe de orientación profesional me ayudó a ver mis fortalezas reales y a dejar de forzarme hacia lugares que no eran para mí.",
                name: "Carolina G.",
                context: "Orientación profesional"
              },
              {
                text: "Lo que más valoro es su honestidad. No te dice lo que quieres escuchar, te dice lo que necesitas saber. Después de la sesión me sentí más en paz conmigo misma y con mis decisiones.",
                name: "Ana P.",
                context: "Sesión online"
              }
            ].map((testimonial, i) => (
              <div 
                key={i} 
                className={`bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E0D4] hover:border-[#D4C5B0] transition-all hover:shadow-lg hover:shadow-[#D4C5B0]/10 ${i === 3 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <svg className="w-8 h-8 text-[#D4C5B0] mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-[#6B6259] leading-relaxed mb-6 text-sm sm:text-base italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4C5B0] to-[#B8956B] rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#2A2622] text-sm">{testimonial.name}</p>
                    <p className="text-[#B8956B] text-xs">{testimonial.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores / Confianza */}
      <section className="py-16 sm:py-24 relative fade-section opacity-0 translate-y-8 transition-all duration-700 bg-[#F8F4ED]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <p className="text-[#B8956B] font-medium tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 sm:mb-6">Mi compromiso</p>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2A2622] mb-6 sm:mb-8">
            Honestidad por encima de todo
          </h2>
          <p className="text-base sm:text-lg text-[#6B6259] leading-relaxed mb-10 sm:mb-12 max-w-2xl mx-auto">
            No vendo magia ni promesas vacías. La astrología es una herramienta poderosa de autoconocimiento cuando se usa con rigor y respeto. Mi trabajo es acompañarte a verte con más claridad, no darte falsas certezas.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-left">
            {[
              { title: "Confidencialidad total", desc: "Todo lo que compartas conmigo queda entre nosotras. Tu carta y tu historia están a salvo.", icon: "🔒" },
              { title: "Sin juicio", desc: "La carta natal no tiene partes 'malas'. Cada aspecto tiene su luz y su sombra.", icon: "✦" },
              { title: "Enfoque humano", desc: "No eres un conjunto de aspectos astrológicos. Eres una persona compleja y única.", icon: "❋" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-[#E8E0D4]">
                <span className="text-2xl mb-3 block opacity-70">{item.icon}</span>
                <h3 className="font-medium text-[#2A2622] mb-2">{item.title}</h3>
                <p className="text-[#6B6259] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-24 relative overflow-hidden fade-section opacity-0 translate-y-8 transition-all duration-700 bg-[#FDFBF7]">
        {/* Subtle decorative circles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-64 h-64 border border-[#D4C5B0]/20 rounded-full"></div>
          <div className="absolute bottom-10 right-1/4 w-48 h-48 border border-[#D4C5B0]/15 rounded-full"></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2A2622] mb-4 sm:mb-6">
            ¿Lista para conocerte mejor?
          </h2>
          <p className="text-base sm:text-lg text-[#6B6259] mb-8 sm:mb-10 max-w-xl mx-auto">
            El primer paso hacia el autoconocimiento es atreverte a mirar. Tu carta natal tiene mucho que contarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="#servicios"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#A6896B] text-white font-medium rounded-full hover:bg-[#8B7358] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4C5B0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDFBF7] text-sm sm:text-base"
            >
              Ver servicios
            </a>
            <a 
              href="#contacto"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border border-[#3D3832]/30 text-[#3D3832] font-medium rounded-full hover:bg-[#3D3832]/5 transition-colors text-sm sm:text-base"
            >
              Escríbeme
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-16 sm:py-24 relative fade-section opacity-0 translate-y-8 transition-all duration-700 bg-[#FDFBF7]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-4 sm:space-y-6 mb-10 sm:mb-12">
            <p className="text-[#B8956B] font-medium tracking-[0.25em] uppercase text-xs sm:text-sm">Contacto</p>
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2A2622]">
              ¿Tienes alguna pregunta?
            </h2>
            <p className="text-[#6B6259] leading-relaxed max-w-md mx-auto text-sm sm:text-base">
              Si tienes dudas sobre los servicios o necesitas más información, escríbeme y te responderé lo antes posible.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 bg-[#F8F4ED] border-t border-[#E8E0D4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <img 
              src="./logo-navbar.png" 
              alt="Astrochic - Astrología Evolutiva" 
              className="h-12 sm:h-14 w-auto opacity-80"
            />
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4 sm:gap-5">
              <a 
                href="https://instagram.com/astrochiic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 sm:w-11 h-10 sm:h-11 bg-white rounded-full flex items-center justify-center hover:bg-[#3D3832] transition-colors group border border-[#E8E0D4]"
                aria-label="Instagram"
              >
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-[#6B6259] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://tiktok.com/@astrochiic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 sm:w-11 h-10 sm:h-11 bg-white rounded-full flex items-center justify-center hover:bg-[#3D3832] transition-colors group border border-[#E8E0D4]"
                aria-label="TikTok"
              >
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-[#6B6259] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@astrochiic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 sm:w-11 h-10 sm:h-11 bg-white rounded-full flex items-center justify-center hover:bg-[#3D3832] transition-colors group border border-[#E8E0D4]"
                aria-label="YouTube"
              >
                <svg className="w-4 sm:w-5 h-4 sm:h-5 text-[#6B6259] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Email */}
            <a 
              href="mailto:astrochiic@gmail.com"
              className="text-[#6B6259] hover:text-[#B8956B] transition-colors text-sm"
            >
              astrochiic@gmail.com
            </a>
            
            {/* Divider */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4C5B0] to-transparent"></div>
            
            <p className="text-[#9A958C] text-xs sm:text-sm text-center">
              © {new Date().getFullYear()} Astrochiic. Astrología Evolutiva.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        
        body {
          font-family: 'DM Sans', sans-serif;
        }
        
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
        }
        
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
        }
        
        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animate-fade-down {
          animation: fadeDown 0.3s ease-out forwards;
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

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
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
    <div className={`bg-white p-5 sm:p-7 md:p-8 rounded-2xl border ${oldPrice ? 'border-[#D4E4D4]' : 'border-[#E8E0D4]'} hover:border-[#D4C5B0] transition-all relative overflow-hidden group hover:shadow-lg hover:shadow-[#D4C5B0]/10`}>
      {badge && (
        <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 ${badgeColor} text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full font-medium`}>
          {badge}
        </div>
      )}
      
      <div className="mb-5 sm:mb-7">
        <h3 className="font-semibold text-xl sm:text-2xl md:text-[1.65rem] text-[#2A2622] mb-2 pr-20 sm:pr-24 leading-tight tracking-tight">{title}</h3>
        <p className="text-[#B8956B] font-medium text-sm sm:text-base">{subtitle}</p>
      </div>
      
      <div className="flex items-baseline gap-2 sm:gap-3 mb-5 sm:mb-7 mt-1">
        {oldPrice && (
          <span className="text-base sm:text-lg text-[#9A958C] line-through">{oldPrice}</span>
        )}
        <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#B8956B] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{price}</span>
      </div>

      {features.length > 0 && (
        <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 sm:gap-3 text-[#6B6259] text-sm sm:text-base leading-relaxed">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 text-[#B8956B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {types && (
        <div className="mb-4 sm:mb-6">
          <button
            onClick={() => setShowTypes(!showTypes)}
            className="flex items-center gap-2 text-sm sm:text-base font-medium text-[#B8956B] hover:text-[#9A7A5A] transition-colors"
          >
            <svg 
              className={`w-4 sm:w-5 h-4 sm:h-5 transition-transform ${showTypes ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            {typesLabel}
          </button>
          {showTypes && (
            <ul className="mt-3 sm:mt-4 ml-6 sm:ml-7 space-y-2 sm:space-y-2.5">
              {types.map((type, i) => (
                <li key={i} className="text-sm sm:text-base text-[#6B6259] flex items-center gap-2.5 leading-relaxed">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#D4C5B0] rounded-full flex-shrink-0"></span>
                  {type}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {packs && (
        <div className="mb-4 sm:mb-6 p-4 sm:p-5 bg-[#FAF6F0] rounded-xl border border-[#E8E0D4]">
          <p className="text-xs sm:text-sm font-medium text-[#B8956B] uppercase tracking-wide mb-3 sm:mb-4">{packsLabel}</p>
          <ul className="space-y-2 sm:space-y-2.5">
            {packs.map((pack, i) => (
              <li key={i} className="text-sm sm:text-base text-[#6B6259] flex items-center gap-2.5 leading-relaxed">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#B8956B] rounded-full flex-shrink-0"></span>
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
        className={`inline-flex items-center justify-center w-full px-5 sm:px-6 py-3 sm:py-3.5 font-medium rounded-full transition-all text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4C5B0] focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
          isPrimary 
            ? 'bg-[#A6896B] text-white hover:bg-[#8B7358]' 
            : 'border border-[#3D3832]/30 text-[#3D3832] hover:bg-[#3D3832]/5'
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

  const inputClasses = "w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-[#E8E0D4] rounded-xl text-[#3D3832] placeholder-[#9A958C] focus:outline-none focus:border-[#B8956B] focus:ring-2 focus:ring-[#B8956B]/10 transition-all text-sm sm:text-base";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor="nombre" className="block text-xs sm:text-sm font-medium text-[#6B6259] mb-1.5 sm:mb-2">
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
          <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-[#6B6259] mb-1.5 sm:mb-2">
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
        <label htmlFor="asunto" className="block text-xs sm:text-sm font-medium text-[#6B6259] mb-1.5 sm:mb-2">
          Asunto <span className="text-[#9A958C] font-normal">(opcional)</span>
        </label>
        <select
          id="asunto"
          value={formData.asunto}
          onChange={(e) => setFormData({...formData, asunto: e.target.value})}
          className={`${inputClasses} appearance-none cursor-pointer`}
          style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23B8956B' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em'}}
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
        <label htmlFor="mensaje" className="block text-xs sm:text-sm font-medium text-[#6B6259] mb-1.5 sm:mb-2">
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
        className="w-full px-6 sm:px-8 py-3.5 sm:py-4 bg-[#A6896B] text-white font-medium rounded-full hover:bg-[#8B7358] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4C5B0] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin w-4 sm:w-5 h-4 sm:h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Abriendo correo...
          </>
        ) : submitted ? (
          <>
            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            ¡Listo!
          </>
        ) : (
          <>
            Enviar mensaje
            <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>
      
      <p className="text-center text-xs sm:text-sm text-[#9A958C]">
        Al enviar se abrirá tu cliente de correo con el mensaje preparado.
      </p>
    </form>
  );
};

export default Index;
