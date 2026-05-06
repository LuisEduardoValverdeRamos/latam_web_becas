import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-16">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">

        {/* Tres columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">

          {/* Col 1 — Marca */}
          <div>
            <p className="text-white font-bold text-lg mb-3">BecasMundo</p>
            <p className="text-sm leading-relaxed">
              Becas de posgrado internacional verificadas para profesionales latinoamericanos.
            </p>
          </div>

          {/* Col 2 — Enlaces */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Enlaces
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/becas" className="hover:text-white transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-white transition-colors">
                  Sobre el proyecto
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/LuisEduardoValverdeRamos/latam_web_becas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 — Contacto */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contacto
            </p>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-300">Luis Valverde Ramos</li>
              <li>
                <a
                  href="mailto:luis.valverde@pucp.edu.pe"
                  className="hover:text-white transition-colors"
                >
                  luis.valverde@pucp.edu.pe
                </a>
              </li>
              <li>
                <a
                  href="https://luiseduardovalverderamos.github.io/mypage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Web personal →
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Línea divisoria */}
        <div className="border-t border-slate-700 pt-6 text-center text-xs text-slate-500">
          © 2026 Luis Valverde Ramos · MVP v1.0 — Mayo 2026
        </div>

      </div>
    </footer>
  )
}
