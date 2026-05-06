import { COMPETITIVIDAD_COLORS, COMPETITIVIDAD_LABELS, NIVEL_LABELS } from '../utils/filters'

export function CompetividadBadge({ value }) {
  const colorClass = COMPETITIVIDAD_COLORS[value] ?? 'bg-gray-100 text-gray-500'
  const label = COMPETITIVIDAD_LABELS[value] ?? value
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorClass}`}>
      {label}
    </span>
  )
}

export function NivelBadge({ value }) {
  return (
    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
      {NIVEL_LABELS[value] ?? value}
    </span>
  )
}

export function ElegibilidadBadge({ value }) {
  const map = {
    si:       'bg-green-100 text-green-700',
    no:       'bg-red-100 text-red-700',
    verificar:'bg-yellow-100 text-yellow-700',
  }
  const labels = {
    si:       'Elegible',
    no:       'No elegible',
    verificar:'Verificar',
  }
  const colorClass = map[value] ?? 'bg-gray-100 text-gray-500'
  const label = labels[value] ?? 'Verificar'
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorClass}`}>
      {label}
    </span>
  )
}
