import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-blue-700 tracking-tight">
          BecasMundo
        </Link>
        <div className="flex gap-6 text-sm font-medium">
          <NavLink
            to="/becas"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-700 border-b-2 border-blue-700 pb-0.5'
                : 'text-gray-500 hover:text-blue-700 transition-colors'
            }
          >
            Catálogo
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-700 border-b-2 border-blue-700 pb-0.5'
                : 'text-gray-500 hover:text-blue-700 transition-colors'
            }
          >
            Sobre el proyecto
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
