import { Link } from 'react-router-dom'

const PROXIMAMENTE = [
  'Motor de matching: ingresa tu perfil y te recomendamos las becas más compatibles',
  'Alertas de deadlines por correo',
  'Guías de postulación por beca',
]

export default function About() {
  return (
    <main className="bg-white">

      {/* Hero strip */}
      <section className="border-b border-gray-100 py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Sobre el proyecto
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            BecasMundo
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Un catálogo curado de becas internacionales de posgrado para profesionales latinoamericanos. Verificado, en español, sin paywalls.
          </p>
        </div>
      </section>

      {/* El problema */}
      <section className="py-14 px-4 border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            El problema
          </h2>
          <p className="text-gray-700 leading-relaxed text-[1.05rem]">
            En abril de 2026, el gobierno peruano suspendió la Beca Generación del Bicentenario, dejando a más de 300 profesionales sin financiamiento para posgrados en el exterior. Pero el problema es más amplio: la oferta de becas internacionales está fragmentada en decenas de sitios, en inglés, con requisitos difíciles de comparar y deadlines fáciles de perder. No existía una herramienta en español que centralizara esta información para profesionales latinoamericanos.
          </p>
        </div>
      </section>

      {/* Qué es */}
      <section className="py-14 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            Qué es BecasMundo
          </h2>
          <p className="text-gray-700 leading-relaxed text-[1.05rem] mb-6">
            BecasMundo es un catálogo curado de becas internacionales de posgrado, verificado contra fuentes oficiales y diseñado específicamente para profesionales latinoamericanos.
          </p>
          <p className="text-gray-700 leading-relaxed text-[1.05rem]">
            Nuestro objetivo es que ningún talento de la región deje de postular a una beca por falta de información accesible.
          </p>
          <div className="mt-8">
            <Link
              to="/becas"
              className="inline-block bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Ver catálogo →
            </Link>
          </div>
        </div>
      </section>

      {/* Quién está detrás */}
      <section className="py-14 px-4 border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Quién está detrás
          </h2>
          <div className="flex gap-5 items-start">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg flex-shrink-0">
              LV
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-base">Luis Valverde Ramos</p>
              <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                Politólogo (PUCP), investigador en la Liga Peruana de Debate Escolar, campeón nacional de debate interuniversitario 2025. Actualmente basado en Piura, Perú.
              </p>
              <div className="flex flex-col gap-1.5 mt-4">
                <a
                  href="mailto:luis.valverde@pucp.edu.pe"
                  className="text-sm text-blue-600 hover:underline"
                >
                  luis.valverde@pucp.edu.pe
                </a>
                <a
                  href="https://github.com/LuisEduardoValverdeRamos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  github.com/LuisEduardoValverdeRamos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estado del proyecto */}
      <section className="py-14 px-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            Estado del proyecto
          </h2>
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-sm font-medium text-gray-700">MVP activo — mayo 2026</span>
          </div>
          <p className="text-gray-700 leading-relaxed text-[1.05rem]">
            Este es un Producto Mínimo Viable lanzado en mayo de 2026. El catálogo cubre 28 becas verificadas manualmente contra fuentes oficiales. La información se actualiza progresivamente. Si encuentras un error o quieres sugerir una beca, escríbeme a{' '}
            <a href="mailto:luis.valverde@pucp.edu.pe" className="text-blue-600 hover:underline">
              luis.valverde@pucp.edu.pe
            </a>
            .
          </p>
        </div>
      </section>

      {/* Próximamente */}
      <section className="py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Próximamente
          </h2>
          <ul className="space-y-4">
            {PROXIMAMENTE.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="mt-1 w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  )
}
