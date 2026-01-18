import { useEffect, useRef } from "react";

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
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#2D2D2D]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Entiende por qué sientes lo que sientes
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
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2D2D2D]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
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
                  <span className="text-[#8B7355] font-serif text-xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{i + 1}</span>
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
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2D2D2D]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
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
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2D2D2D]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Elige cómo quieres trabajar
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Informe escrito */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-medium text-xl text-[#2D2D2D] mb-2">Informe Escrito</h3>
                  <p className="text-[#8B7355] font-medium">Carta natal detallada</p>
                </div>
                <span className="text-2xl font-serif text-[#2D2D2D]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>50€</span>
              </div>
              <p className="text-[#5C5C5C] mb-6 leading-relaxed">
                Documento completo con el análisis de tu carta natal: personalidad, emociones, relaciones, vocación y ciclos vitales. Perfecto si prefieres leer y reflexionar a tu ritmo.
              </p>
              <a 
                href="https://buy.stripe.com/bJecMY3pL9bXaX9gVY0ZW05"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-[#8B7355] text-[#8B7355] font-medium rounded-full hover:bg-[#8B7355] hover:text-white transition-colors"
              >
                Solicitar informe
              </a>
            </div>

            {/* Sesión individual */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#8B7355] text-white text-xs px-3 py-1 rounded-full">
                Más popular
              </div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-medium text-xl text-[#2D2D2D] mb-2">Sesión Individual</h3>
                  <p className="text-[#8B7355] font-medium">90 minutos en directo</p>
                </div>
                <span className="text-2xl font-serif text-[#2D2D2D]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>120€</span>
              </div>
              <p className="text-[#5C5C5C] mb-6 leading-relaxed">
                Sesión en vídeo donde exploramos juntas tu carta natal. Puedo resolver tus dudas en tiempo real y profundizar en las áreas que más te interesen o preocupen.
              </p>
              <a 
                href="https://buy.stripe.com/5kQ7sE5xTewh7KX6hk0ZW01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#8B7355] text-white font-medium rounded-full hover:bg-[#7A6349] transition-colors"
              >
                Reservar sesión
              </a>
            </div>

            {/* Pack informe + sesión */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-medium text-xl text-[#2D2D2D] mb-2">Pack Informe + Seguimiento</h3>
                  <p className="text-[#8B7355] font-medium">Informe + sesión corta</p>
                </div>
                <span className="text-2xl font-serif text-[#2D2D2D]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>70€</span>
              </div>
              <p className="text-[#5C5C5C] mb-6 leading-relaxed">
                Recibes primero el informe escrito para leerlo con calma, y después agendamos una sesión breve para resolver dudas y profundizar en lo que más te resuene.
              </p>
              <a 
                href="https://buy.stripe.com/bJecMY3pL9bXaX9gVY0ZW05"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-[#8B7355] text-[#8B7355] font-medium rounded-full hover:bg-[#8B7355] hover:text-white transition-colors"
              >
                Elegir pack
              </a>
            </div>

            {/* Sesión 2 cartas */}
            <div className="bg-gradient-to-br from-[#F9F6F2] to-[#F5EFE8] p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all relative overflow-hidden border border-[#E8E0D5]">
              <div className="absolute top-4 right-4 bg-[#6B8E6B] text-white text-xs px-3 py-1 rounded-full">
                Precio especial
              </div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-medium text-xl text-[#2D2D2D] mb-2">Sesión 2 Cartas</h3>
                  <p className="text-[#8B7355] font-medium">Sinastría de pareja o familia</p>
                </div>
                <div className="text-right">
                  <span className="text-lg text-[#9E9E9E] line-through block">170€</span>
                  <span className="text-2xl font-serif text-[#2D2D2D]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>150€</span>
                </div>
              </div>
              <p className="text-[#5C5C5C] mb-6 leading-relaxed">
                Analizamos la compatibilidad y dinámica entre dos cartas. Ideal para parejas, relaciones padres-hijos o cualquier vínculo significativo que quieras comprender mejor.
              </p>
              <a 
                href="https://buy.stripe.com/5kQ7sE8K53RDd5hfRU0ZW06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#8B7355] text-white font-medium rounded-full hover:bg-[#7A6349] transition-colors"
              >
                Reservar sinastría
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Valores / Confianza */}
      <section className="py-24 fade-section opacity-0 translate-y-8 transition-all duration-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#8B7355] font-medium tracking-widest uppercase text-sm mb-6">Mi compromiso</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2D2D2D] mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
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
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap');
        
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

export default Index;
