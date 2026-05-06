import { Link } from 'react-router-dom'
import { CompetividadBadge, NivelBadge, ElegibilidadBadge } from './Badge'
import { COBERTURA_ICONS } from '../utils/filters'

export default function BecaCard({ beca }) {
  const coverageItems = beca.cobertura.filter(c => c !== 'NO VERIFICADO')
  const deadlineKnown = beca.deadline_exacto_2026 && beca.deadline_exacto_2026 !== 'NO VERIFICADO'

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

      {/* Cobertura icons */}
      {coverageItems.length > 0 && (
        <div className="flex gap-2 text-base">
          {coverageItems.map(c => (
            <span key={c} title={c}>{COBERTURA_ICONS[c] ?? '•'}</span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
        <CompetividadBadge value={beca.competitividad} />
        {deadlineKnown
          ? <span className="text-xs text-gray-500 truncate ml-2">Cierre: {beca.deadline_exacto_2026}</span>
          : <span className="text-xs text-gray-300">Deadline por confirmar</span>
        }
      </div>
    </Link>
  )
}
