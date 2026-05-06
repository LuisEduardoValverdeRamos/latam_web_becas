import { Link } from 'react-router-dom'
import becasData from '@data/becas_seed.json'

const STATS = [
  { value: becasData.becas.length, label: 'becas curadas' },
  { value: new Set(becasData.becas.map(b => b.pais_destino)).size, label: 'países destino' },
  { value: becasData.becas.filter(b => b.tipo_cobertura?.toLowerCase().includes('total')).length, label: 'cobertura total' },
]

const DIFERENCIADORES = [
  {
    icon: '🎯',
    titulo: 'Solo posgrado internacional',
    texto: 'Maestrías y doctorados en universidades top. Sin pregrado, sin cursos cortos, sin becas locales.',
  },
  {
    icon: '🌎',
    titulo: 'Pensado para LATAM',
    texto: 'Solo becas donde latinoamericanos son elegibles. Información en español con contexto local.',
  },
  {
    icon: '✅',
    titulo: 'Verificado contra fuentes oficiales',
    texto: 'Cada campo validado directamente contra el sitio oficial de la beca. Sin intermediarios.',
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-4">
            Para profesionales latinoamericanos
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Encuentra tu beca de posgrado en el exterior
          </h1>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Catálogo curado y verificado de becas internacionales para maestrías y doctorados. En español, sin filtros genéricos, pensado para ti.
          </p>
          <Link
            to="/becas"
            className="inline-block bg-white text-blue-700 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors text-base shadow-lg"
          >
            Ver catálogo de becas →
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-800 text-white py-8 px-4">
        <div className="max-w-2xl mx-auto flex justify-center gap-16 flex-wrap">
          {STATS.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold">{s.value}</div>
              <div className="text-blue-200 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contexto */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Por qué BecasMundo?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          En abril de 2026, la suspensión de la Beca Generación del Bicentenario en Perú dejó a 300+ profesionales sin financiamiento para sus posgrados en el exterior. La oferta de becas internacionales existe, pero está fragmentada en decenas de sitios, en inglés, sin personalización para perfiles latinoamericanos.
        </p>
        <p className="text-gray-600 leading-relaxed">
          BecasMundo centraliza esa información: becas verificadas contra fuentes oficiales, información en español, con contexto para postulantes de LATAM — equivalencias de notas, requisitos de idioma, realidad de los procesos de selección.
        </p>
      </section>

      {/* Diferenciadores */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-8">
            Lo que nos diferencia
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {DIFERENCIADORES.map(d => (
              <div key={d.titulo} className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{d.titulo}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{d.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 px-4 text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Empieza a explorar</h2>
        <p className="text-gray-500 mb-8">
          Filtra por nivel, país destino, tipo de cobertura y más.
        </p>
        <Link
          to="/becas"
          className="inline-block bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-blue-800 transition-colors shadow"
        >
          Explorar {becasData.becas.length} becas →
        </Link>
      </section>
    </main>
  )
}
