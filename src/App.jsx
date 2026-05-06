import { HashRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import BecaDetail from './pages/BecaDetail'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/becas"     element={<Catalog />} />
          <Route path="/becas/:id" element={<BecaDetail />} />
          <Route path="*"          element={<NotFound />} />
        </Routes>
      </div>
    </HashRouter>
  )
}
