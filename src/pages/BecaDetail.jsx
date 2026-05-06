import { useParams, useNavigate } from 'react-router-dom'
import becasData from '@data/becas_seed.json'
import { CompetividadBadge, NivelBadge, ElegibilidadBadge } from '../components/Badge'
import { COBERTURA_LABELS, COBERTURA_ICONS } from '../utils/filters'

const ALL_BECAS = becasData.becas

// Strip residual citation marks and normalize "NO VERIFICADO"
const cleanText = str => str?.replace(/【[^】]+】/g, '').trim()
const normalize = v => {
  if (!v || v === '0') return null
  if (typeof v === 'string' && v.startsWith('NO VERIFICADO')) return null
  return v
}
const display = (v, fallback = '—') => normalize(v) ?? fallback

export default function BecaDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const beca = ALL_BECAS.find(b => b.id === id)

  if (!beca) return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <p className="text-5xl mb-4">🌍</p>
      <p className="text-gray-500 font-semibold mb-4">Beca no encontrada</p>
      <button onClick={() => navigate('/becas')} className="text-blue-600 hover:underline text-sm">
        ← Volver al catálogo
      </button>
    </div>
  )

  const coverageItems = beca.cobertura.filter(c => c !== 'NO VERIFICADO')

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-gray-400 hover:text-blue-700 transition-colors mb-6 flex items-center gap-1"
      >
        ← Volver
      </button>

      {/* Header card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-5">
        <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-2">
          {beca.pais_destino}
        </p>
        <h1 className="text-2xl font-bold text-gray-900 mb-1 leading-tight">
          {beca.nombre}
        </h1>
        <p className="text-gray-500 text-sm mb-5">{beca.institucion}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {beca.nivel.map(n => <NivelBadge key={n} value={n} />)}
          <CompetividadBadge value={beca.competitividad} />
          <ElegibilidadBadge value={beca.elegibilidad_nacionalidad} />
        </div>

        <div className="flex gap-3 flex-wrap">
          <a
            href={beca.url_oficial}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Sitio oficial →
          </a>
          {beca.url_requisitos !== beca.url_oficial && (
            <a
              href={beca.url_requisitos}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-300 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-lg hover:border-blue-400 transition-colors"
            >
              Requisitos
            </a>
          )}
        </div>
      </div>

      {/* Quick facts grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
        <Fact label="Deadline 2026"     value={beca.deadline_exacto_2026} fallback="Fecha por confirmar" />
        <Fact label="Período"           value={beca.deadline_periodo} />
        <Fact label="Duración"          value={beca.duracion_max} />
        <Fact label="Exp. laboral mín." value={beca.experiencia_laboral_min > 0 ? `${beca.experiencia_laboral_min} años` : 'No requerida'} />
        <Fact label="Idioma"            value={beca.idioma_requerido} />
        <Fact label="Vacantes"          value={beca.vacantes_aprox} />
      </div>

      {/* Cobertura */}
      {coverageItems.length > 0 && (
        <Section title="Cobertura incluida">
          <div className="flex flex-wrap gap-2">
            {coverageItems.map(c => (
              <div key={c} className="flex items-center gap-1.5 bg-green-50 border border-green-100 rounded-lg px-3 py-1.5 text-sm text-green-800">
                <span>{COBERTURA_ICONS[c] ?? '•'}</span>
                <span className="font-medium">{COBERTURA_LABELS[c] ?? c}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2 italic">Tipo: {beca.tipo_cobertura}</p>
        </Section>
      )}

      {/* Requisitos */}
      <Section title="Requisitos clave">
        <ul className="space-y-2">
          {beca.requisitos_clave.map((r, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-700">
              <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
              <span>{cleanText(r)}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Info adicional */}
      <Section title="Información adicional">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm">
          <InfoRow label="Admisión previa"   value={beca.requiere_admision_previa} />
          <InfoRow label="Requiere retorno"  value={beca.requiere_retorno} />
          <InfoRow label="Elegibilidad edad" value={beca.elegibilidad_edad} />
          <InfoRow label="Campos de estudio" value={beca.campos_estudio.join(', ')} />
        </div>
      </Section>

      {/* Notas */}
      {beca.notas && (
        <Section title="Notas de verificación">
          <p className="text-sm text-gray-600 leading-relaxed">
            {cleanText(beca.notas)}
          </p>
          <p className="text-xs text-gray-400 mt-3">
            Última verificación: {beca.ultima_verificacion}
          </p>
        </Section>
      )}
    </main>
  )
}

function Section({ title, children }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
      <h2 className="font-semibold text-gray-900 mb-3 text-base">{title}</h2>
      {children}
    </div>
  )
}

function Fact({ label, value, fallback = '—' }) {
  const val = normalize(value)
  const text = val ?? fallback
  const isPending = !val
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-3.5">
      <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{label}</p>
      <p className={`text-sm font-medium ${isPending ? 'text-gray-300' : 'text-gray-900'}`}>
        {cleanText(text)}
      </p>
    </div>
  )
}

function InfoRow({ label, value }) {
  const val = normalize(value)
  return (
    <div>
      <span className="text-gray-400">{label}: </span>
      <span className={val ? 'text-gray-700' : 'text-gray-300'}>
        {val ? cleanText(val) : 'Pendiente de verificación'}
      </span>
    </div>
  )
}
