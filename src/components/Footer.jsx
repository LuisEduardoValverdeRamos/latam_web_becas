import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
        <p>
          Un proyecto de{' '}
          <span className="text-gray-600 font-medium">Luis Valverde Ramos</span>
          {' · '}
          <span className="text-gray-600">PUCP</span>
          {' · '}
          2026
        </p>
        <div className="flex gap-5">
          <Link to="/sobre" className="hover:text-blue-600 transition-colors">
            Sobre el proyecto
          </Link>
          <a
            href="https://github.com/LuisEduardoValverdeRamos/latam_web_becas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:luis.valverde@pucp.edu.pe"
            className="hover:text-blue-600 transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  )
}
