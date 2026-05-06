import { HashRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import BecaDetail from './pages/BecaDetail'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <NavBar />
        <div className="flex-1">
          <Routes>
            <Route path="/"          element={<Home />} />
            <Route path="/becas"     element={<Catalog />} />
            <Route path="/becas/:id" element={<BecaDetail />} />
            <Route path="/sobre"     element={<About />} />
            <Route path="*"          element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  )
}
