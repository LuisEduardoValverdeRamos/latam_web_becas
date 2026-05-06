import { useMemo, useState } from 'react'
import becasData from '@data/becas_seed.json'

const ALL_BECAS = becasData.becas

const INITIAL_FILTERS = {
  query:           '',
  nivel:           '',
  pais_destino:    '',
  tipo_cobertura:  '',
  competitividad:  '',
}

export function useBecas() {
  const [filters, setFilters] = useState(INITIAL_FILTERS)

  const becas = useMemo(() => {
    return ALL_BECAS.filter(beca => {
      if (filters.query) {
        const q = filters.query.toLowerCase()
        const haystack = [beca.nombre, beca.institucion, beca.pais_destino].join(' ').toLowerCase()
        if (!haystack.includes(q)) return false
      }
      if (filters.nivel && !beca.nivel.includes(filters.nivel)) return false
      if (filters.pais_destino && beca.pais_destino !== filters.pais_destino) return false
      if (filters.tipo_cobertura && !beca.tipo_cobertura.toLowerCase().includes(filters.tipo_cobertura)) return false
      if (filters.competitividad && beca.competitividad !== filters.competitividad) return false
      return true
    })
  }, [filters])

  const paisesDisponibles = useMemo(() => {
    return [...new Set(ALL_BECAS.map(b => b.pais_destino))].sort()
  }, [])

  const resetFilters = () => setFilters(INITIAL_FILTERS)
  const hasFilters = Object.values(filters).some(v => v !== '')

  return {
    becas,
    filters,
    setFilters,
    resetFilters,
    hasFilters,
    total: ALL_BECAS.length,
    paisesDisponibles,
  }
}
