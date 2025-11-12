import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Button } from "./components/ui/button";
import profileImage from 'figma:asset/26d505efc6bdb94938018d496d7ee8614bb5d7e5.png';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e27] text-white relative overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Navigation */}
      <nav className="relative z-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-12 px-4 sm:px-8 py-6 text-xs tracking-widest">
        <a href="#about" className="hover:text-white/70 transition-colors">SOBRE MÍ</a>
        <a href="#projects" className="hover:text-white/70 transition-colors hidden sm:inline">PROYECTOS</a>
        <a href="#projects" className="hover:text-white/70 transition-colors sm:hidden">WORK</a>
        <div className="mx-2 sm:mx-4">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="sm:w-8 sm:h-8">
            <rect x="7" y="9" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.9"/>
            <path d="M12 15L15 18L20 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
          </svg>
        </div>
        <a href="#skills" className="hover:text-white/70 transition-colors hidden sm:inline">HABILIDADES</a>
        <a href="#skills" className="hover:text-white/70 transition-colors sm:hidden">SKILLS</a>
        <a href="#contact" className="hover:text-white/70 transition-colors">CONTACTO</a>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 py-12 sm:py-20">
        <div className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] mb-8 sm:mb-12 relative">
          <ImageWithFallback
            src={profileImage}
            alt="Espacio de trabajo del desarrollador"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-[0.15em] sm:tracking-[0.2em] mb-2 text-center font-serif">CRISTOPHER</h1>
        <h2 className="text-xl sm:text-2xl tracking-[0.15em] mb-3 text-center font-serif">GALLEGOS GARCÍA</h2>
        <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-white/60 text-center mb-4">DESARROLLADOR FRONTEND | UX/UI</p>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-white/50">
          <span>📍 Tarandacuao, Guanajuato</span>
          <span className="hidden sm:inline">•</span>
          <span>📞 417-158-69-00</span>
        </div>
      </section>

      {/* Profile/About Section */}
      <section className="relative z-10 max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="flex items-center gap-2 sm:gap-3 mb-6">
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <p className="text-[10px] sm:text-xs tracking-widest text-white/50">PERFIL</p>
        </div>
        <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
          Soy un desarrollador web en formación, con gran interés por el diseño FrontEnd y la creación de soluciones 
          digitales modernas, funcionales y pensadas para el usuario. Tengo conocimientos en JavaScript, React, Node.js 
          y Python, y me gusta seguir aprendiendo nuevas tecnologías y herramientas del entorno web. Busco mi primera 
          experiencia profesional como Desarrollador FrontEnd, donde pueda aplicar mis habilidades técnicas, colaborar 
          con un equipo creativo y aportar ideas que ayuden a construir aplicaciones innovadoras con verdadero impacto.
        </p>
      </section>

      {/* Education & Languages */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Education */}
          <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-white/10 rounded-lg p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <p className="text-[10px] sm:text-xs tracking-widest text-white/50">EDUCACIÓN</p>
            </div>
            <h3 className="text-base sm:text-lg mb-2">Universidad Tecnológica de León (UTL)</h3>
            <p className="text-xs sm:text-sm text-white/70 mb-2">Licenciatura en Ingeniería en Entornos Virtuales y Negocios Digitales</p>
            <p className="text-[10px] sm:text-xs text-white/50">2025-2026 | Actualmente cursando</p>
            <p className="text-[10px] sm:text-xs text-white/50 mt-1">Guanajuato, México</p>
          </div>

          {/* Languages */}
          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-white/10 rounded-lg p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <p className="text-[10px] sm:text-xs tracking-widest text-white/50">IDIOMAS</p>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="text-base sm:text-lg mb-1">Español</h3>
                <p className="text-xs sm:text-sm text-white/70">Lenguaje nativo</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg mb-1">Inglés</h3>
                <p className="text-xs sm:text-sm text-white/70">Nivel B1 - Intermedio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="projects" className="relative z-10 max-w-3xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          <p className="text-[10px] sm:text-xs tracking-widest text-white/50">EXPERIENCIA LABORAL</p>
        </div>

        <div className="border-l-2 border-white/20 pl-4 sm:pl-6 space-y-8">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full -ml-[1.35rem] sm:-ml-[1.6rem]"></div>
              <p className="text-[10px] sm:text-xs tracking-widest text-white/50">ABR 2024 - AGO 2024</p>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 font-serif tracking-wide">Desarrollador Web</h2>
            <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6">Margarita González Miranda</p>

            <div className="rounded-lg overflow-hidden border border-white/20 mb-4 sm:mb-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBtYW5hZ2VtZW50JTIwc3lzdGVtfGVufDF8fHx8MTc2MTc5OTA4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sistema de Gestión Escolar"
                className="w-full aspect-video object-cover"
              />
            </div>

            <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-white/90">Sistema de Gestión Escolar</h3>
            
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-white/70 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-cyan-400 mt-1">▸</span>
                <span>Desarrollé una aplicación web completa para la gestión interna del colegio, utilizando PHP (Laravel) y MySQL para el desarrollo del Back-End, alojado localmente.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 mt-1">▸</span>
                <span>Optimicé las consultas SQL para garantizar un acceso eficiente y seguro a la información.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 mt-1">▸</span>
                <span>Construí el Front-End con HTML, CSS y JavaScript, aplicando principios de usabilidad, diseño responsivo y experiencia de usuario (UX).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 mt-1">▸</span>
                <span>Gestioné de manera integral el ciclo de vida del proyecto: análisis de requerimientos, desarrollo, pruebas y despliegue.</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
              <span className="text-[10px] sm:text-xs px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded">PHP</span>
              <span className="text-[10px] sm:text-xs px-3 py-1 bg-red-500/20 border border-red-500/30 rounded">Laravel</span>
              <span className="text-[10px] sm:text-xs px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded">MySQL</span>
              <span className="text-[10px] sm:text-xs px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded">HTML/CSS</span>
              <span className="text-[10px] sm:text-xs px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded">JavaScript</span>
            </div>
          </div>
        </div>
      </section>



      {/* Skills Section */}
      <section id="skills" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <p className="text-[10px] sm:text-xs tracking-widest text-white/50">HABILIDADES TÉCNICAS</p>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 font-serif">Stack Tecnológico</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          <div className="border border-white/20 rounded px-3 sm:px-4 py-3 sm:py-4 text-center hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all group">
            <div className="text-2xl sm:text-3xl mb-2">⚛️</div>
            <p className="text-xs sm:text-sm group-hover:text-cyan-400 transition-colors">React</p>
          </div>
          <div className="border border-white/20 rounded px-3 sm:px-4 py-3 sm:py-4 text-center hover:border-green-400/40 hover:bg-green-400/5 transition-all group">
            <div className="text-2xl sm:text-3xl mb-2">🟢</div>
            <p className="text-xs sm:text-sm group-hover:text-green-400 transition-colors">Node.js</p>
          </div>
          <div className="border border-white/20 rounded px-3 sm:px-4 py-3 sm:py-4 text-center hover:border-yellow-400/40 hover:bg-yellow-400/5 transition-all group">
            <div className="text-2xl sm:text-3xl mb-2">🟨</div>
            <p className="text-xs sm:text-sm group-hover:text-yellow-400 transition-colors">JavaScript</p>
          </div>
          <div className="border border-white/20 rounded px-3 sm:px-4 py-3 sm:py-4 text-center hover:border-blue-400/40 hover:bg-blue-400/5 transition-all group">
            <div className="text-2xl sm:text-3xl mb-2">🐍</div>
            <p className="text-xs sm:text-sm group-hover:text-blue-400 transition-colors">Python</p>
          </div>
          <div className="border border-white/20 rounded px-3 sm:px-4 py-3 sm:py-4 text-center hover:border-purple-400/40 hover:bg-purple-400/5 transition-all group">
            <div className="text-2xl sm:text-3xl mb-2">🐘</div>
            <p className="text-xs sm:text-sm group-hover:text-purple-400 transition-colors">PHP</p>
          </div>
          <div className="border border-white/20 rounded px-3 sm:px-4 py-3 sm:py-4 text-center hover:border-orange-400/40 hover:bg-orange-400/5 transition-all group">
            <div className="text-2xl sm:text-3xl mb-2">☕</div>
            <p className="text-xs sm:text-sm group-hover:text-orange-400 transition-colors">Java</p>
          </div>
          <div className="border border-white/20 rounded px-3 sm:px-4 py-3 sm:py-4 text-center hover:border-indigo-400/40 hover:bg-indigo-400/5 transition-all group">
            <div className="text-2xl sm:text-3xl mb-2">💎</div>
            <p className="text-xs sm:text-sm group-hover:text-indigo-400 transition-colors">C#</p>
          </div>
          <div className="border border-white/20 rounded px-3 sm:px-4 py-3 sm:py-4 text-center hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group">
            <div className="text-2xl sm:text-3xl mb-2">🐬</div>
            <p className="text-xs sm:text-sm group-hover:text-blue-500 transition-colors">MySQL</p>
          </div>
          <div className="border border-white/20 rounded px-3 sm:px-4 py-3 sm:py-4 text-center hover:border-green-500/40 hover:bg-green-500/5 transition-all group">
            <div className="text-2xl sm:text-3xl mb-2">🟩</div>
            <p className="text-xs sm:text-sm group-hover:text-green-500 transition-colors">Excel</p>
          </div>
        </div>

        {/* Aptitudes */}
        <div className="flex items-center gap-2 sm:gap-3 mb-6">
          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
          <p className="text-[10px] sm:text-xs tracking-widest text-white/50">APTITUDES</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="flex items-start gap-3 p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10">
            <span className="text-emerald-400 text-lg">✓</span>
            <span className="text-xs sm:text-sm text-white/80">Trabajo colaborativo y comunicación efectiva</span>
          </div>
          <div className="flex items-start gap-3 p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10">
            <span className="text-emerald-400 text-lg">✓</span>
            <span className="text-xs sm:text-sm text-white/80">Pensamiento crítico y resolución de problemas</span>
          </div>
          <div className="flex items-start gap-3 p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10">
            <span className="text-emerald-400 text-lg">✓</span>
            <span className="text-xs sm:text-sm text-white/80">Planificación, enfoque y responsabilidad</span>
          </div>
          <div className="flex items-start gap-3 p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10">
            <span className="text-emerald-400 text-lg">✓</span>
            <span className="text-xs sm:text-sm text-white/80">Rendimiento óptimo bajo presión</span>
          </div>
          <div className="flex items-start gap-3 p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10">
            <span className="text-emerald-400 text-lg">✓</span>
            <span className="text-xs sm:text-sm text-white/80">Mentalidad de aprendizaje constante</span>
          </div>
          <div className="flex items-start gap-3 p-3 sm:p-4 bg-white/5 rounded-lg border border-white/10">
            <span className="text-emerald-400 text-lg">✓</span>
            <span className="text-xs sm:text-sm text-white/80">Innovación en diseño y desarrollo web</span>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer id="contact" className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 py-12 sm:py-16 border-t border-white/10 mt-12 sm:mt-20">
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <div className="w-1 h-1 bg-white/30 rounded-full"></div>
          <div className="w-1 h-1 bg-white/50 rounded-full"></div>
          <div className="w-1 h-1 bg-white/30 rounded-full"></div>
        </div>

        <div className="mb-6 sm:mb-8">
          <svg width="36" height="36" viewBox="0 0 32 32" fill="none" className="sm:w-12 sm:h-12">
            <rect x="7" y="9" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7"/>
            <path d="M12 15L15 18L20 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
          </svg>
        </div>

        <div className="flex items-center gap-5 sm:gap-6 mb-6 sm:mb-8">
          <a href="https://github.com/Cristo11-11" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="sm:w-6 sm:h-6">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/cristophergallegos4" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors" title="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="sm:w-6 sm:h-6">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:ccg504711@gmail.com" className="text-white/50 hover:text-white transition-colors" title="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-6 sm:h-6">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </a>
          <a href="tel:+524171586900" className="text-white/50 hover:text-white transition-colors" title="Teléfono">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-6 sm:h-6">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </a>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[10px] sm:text-xs tracking-widest text-white/50 mb-4 sm:mb-6">
          <a href="#about" className="hover:text-white transition-colors">Sobre Mí</a>
          <a href="#projects" className="hover:text-white transition-colors">Proyectos</a>
          <a href="#skills" className="hover:text-white transition-colors">Habilidades</a>
          <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
        </nav>

        <p className="text-[10px] sm:text-xs text-white/30 text-center">© 2025 Cristopher Gallegos García. Todos los derechos reservados.</p>
        <p className="text-[10px] text-white/20 text-center mt-2">Desarrollador Frontend | UX/UI</p>
      </footer>
    </div>
  );
}