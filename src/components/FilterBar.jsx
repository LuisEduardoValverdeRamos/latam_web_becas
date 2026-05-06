import { NIVEL_LABELS, COMPETITIVIDAD_LABELS } from '../utils/filters'

export default function FilterBar({ filters, setFilters, resetFilters, hasFilters, paisesDisponibles, total, count }) {
  const update = (key, value) => setFilters(f => ({ ...f, [key]: value }))

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-3">
      {/* Búsqueda libre */}
      <input
        type="search"
        placeholder="Buscar por nombre, institución o país..."
        value={filters.query}
        onChange={e => update('query', e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Selectores */}
      <div className="flex flex-wrap gap-2">
        <Select
          value={filters.nivel}
          onChange={v => update('nivel', v)}
          placeholder="Nivel"
          options={Object.entries(NIVEL_LABELS).map(([v, l]) => ({ value: v, label: l }))}
        />
        <Select
          value={filters.pais_destino}
          onChange={v => update('pais_destino', v)}
          placeholder="País destino"
          options={paisesDisponibles.map(p => ({ value: p, label: p }))}
        />
        <Select
          value={filters.tipo_cobertura}
          onChange={v => update('tipo_cobertura', v)}
          placeholder="Cobertura"
          options={[{ value: 'total', label: 'Total' }, { value: 'parcial', label: 'Parcial' }]}
        />
        <Select
          value={filters.competitividad}
          onChange={v => update('competitividad', v)}
          placeholder="Competitividad"
          options={Object.entries(COMPETITIVIDAD_LABELS).map(([v, l]) => ({ value: v, label: l }))}
        />

        {hasFilters && (
          <button
            onClick={resetFilters}
            className="text-sm text-blue-600 hover:text-blue-800 px-2 underline underline-offset-2"
          >
            Limpiar
          </button>
        )}
      </div>

      {/* Contador */}
      <p className="text-xs text-gray-400">
        {count === total
          ? `${total} becas`
          : `${count} de ${total} becas`}
      </p>
    </div>
  )
}

function Select({ value, onChange, placeholder, options }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
    >
      <option value="">{placeholder}</option>
      {options.map(o => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  )
}
