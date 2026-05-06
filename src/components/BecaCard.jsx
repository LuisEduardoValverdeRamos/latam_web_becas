import { Link } from 'react-router-dom'
import { CompetividadBadge, NivelBadge, ElegibilidadBadge } from './Badge'
import { COBERTURA_LABELS } from '../utils/filters'

function CoberturaBadge({ value }) {
  const label = COBERTURA_LABELS[value] ?? value
  return (
    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
      {label}
    </span>
  )
}

const NO_VERIFICADO = ['NO VERIFICADO', 'Fecha por confirmar']
const isUnknown = v => !v || NO_VERIFICADO.some(p => v.startsWith(p))

export default function BecaCard({ beca }) {
  const coverageItems = beca.cobertura.filter(c => c !== 'NO VERIFICADO')

  return (
    <Link
      to={`/becas/${beca.id}`}
      className="bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-300 hover:shadow-md transition-all flex flex-col gap-3 group"
    >
      {/* País + nombre */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">
            {beca.pais_destino}
          </p>
          <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-blue-700 transition-colors">
            {beca.nombre}
          </h3>
          <p className="text-xs text-gray-400 mt-0.5 truncate">{beca.institucion}</p>
        </div>
        <ElegibilidadBadge value={beca.elegibilidad_nacionalidad} />
      </div>

      {/* Niveles */}
      <div className="flex flex-wrap gap-1">
        {beca.nivel.map(n => <NivelBadge key={n} value={n} />)}
      </div>

      {/* Cobertura badges */}
      {coverageItems.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {coverageItems.map(c => <CoberturaBadge key={c} value={c} />)}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
        <CompetividadBadge value={beca.competitividad} />
        {isUnknown(beca.deadline_exacto_2026)
          ? <span className="text-xs text-gray-300">Fecha por confirmar</span>
          : <span className="text-xs text-gray-500 truncate ml-2">Cierre: {beca.deadline_exacto_2026}</span>
        }
      </div>
    </Link>
  )
}
