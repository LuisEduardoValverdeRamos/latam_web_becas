import { useBecas } from '../hooks/useBecas'
import BecaCard from '../components/BecaCard'
import FilterBar from '../components/FilterBar'

export default function Catalog() {
  const { becas, filters, setFilters, resetFilters, hasFilters, total, paisesDisponibles } = useBecas()

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Catálogo de becas</h1>
        <p className="text-gray-400 text-sm mt-1">
          Becas de posgrado internacional verificadas para profesionales latinoamericanos
        </p>
      </div>

      <div className="mb-6">
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          resetFilters={resetFilters}
          hasFilters={hasFilters}
          paisesDisponibles={paisesDisponibles}
          total={total}
          count={becas.length}
        />
      </div>

      {becas.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-5xl mb-4">🔍</p>
          <p className="font-semibold text-gray-500">Sin resultados para estos filtros</p>
          <p className="text-sm mt-1">Prueba combinaciones distintas o</p>
          <button
            onClick={resetFilters}
            className="text-blue-600 text-sm mt-1 hover:underline"
          >
            limpia los filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {becas.map(beca => (
            <BecaCard key={beca.id} beca={beca} />
          ))}
        </div>
      )}
    </main>
  )
}
