# BecasMundo

Catálogo curado de becas internacionales de posgrado para profesionales latinoamericanos.

**→ [Ver catálogo en vivo](https://luiseduardovalverderamos.github.io/latam_web_becas/)**

---

## ¿Qué es esto?

BecasMundo nace en respuesta a la suspensión de la Beca Generación del Bicentenario en Perú (abril 2026), que dejó a 300+ profesionales sin financiamiento para posgrados en el exterior.

La oferta de becas internacionales existe — pero está fragmentada en decenas de sitios, en inglés, sin personalización para perfiles latinoamericanos. BecasMundo centraliza esa información.

## ¿Qué diferencia a BecasMundo?

Las plataformas existentes (Fastweb, ScholarshipOwl, Scholarar) están orientadas a estudiantes estadounidenses o de pregrado. En el mundo hispanohablante solo hay blogs con listados desactualizados.

Nuestro nicho es la intersección de tres cosas que nadie hace bien juntas:

1. **Solo posgrado internacional** — maestrías y doctorados en universidades top, nada de pregrado ni cursos cortos
2. **Solo becas elegibles para latinoamericanos** — verificado contra fuentes oficiales
3. **En español, con contexto local** — equivalencias de notas, requisitos de idioma, realidad de los procesos

## Estado actual

| Fase | Descripción | Estado |
|------|-------------|--------|
| Fase 0 | Investigación y posicionamiento | ✅ Completado |
| Fase 1 | MVP: catálogo curado con filtros | 🚧 En curso |
| Fase 2 | Motor de matching perfil-beca | ⏳ Pendiente |
| Fase 3 | Scraping automatizado | ⏳ Pendiente |

## Becas incluidas (28)

Chevening · Gates Cambridge · MEXT · Swiss Excellence · Stipendium Hungaricum · Commonwealth · Clarendon · Rhodes · DAAD · Erasmus Mundus · Eiffel · Fulbright · Humphrey · OEA · Vanier · Banting · NL Scholarship · Swedish Institute · Edinburgh Global · GKS Korea · Australia Awards · Manaaki NZ · CSC China · KAUST · Aga Khan · JJ/WBGSP · OFID · ADB-Japan

## Stack

- **Frontend:** React 18 + Tailwind CSS v3
- **Data:** JSON estático (MVP) → PostgreSQL en Fase 2
- **Routing:** React Router v6 con HashRouter
- **Build:** Vite 5
- **Deploy:** GitHub Pages

## Correr localmente

```bash
git clone https://github.com/LuisEduardoValverdeRamos/latam_web_becas.git
cd latam_web_becas
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Estructura del proyecto

```
├── data/
│   └── becas_seed.json      # 28 becas con schema normalizado
├── src/
│   ├── components/          # NavBar, BecaCard, FilterBar, Badge
│   ├── hooks/useBecas.js    # Filtrado reactivo
│   ├── pages/               # Home, Catalog, BecaDetail, NotFound
│   └── utils/filters.js     # Labels, colores, iconos
├── docs/
│   ├── ROADMAP.md
│   ├── DECISIONS.md         # ADRs del proyecto
│   └── SOURCES.md
└── scripts/                 # Scrapers (Fase 3)
```

## Contribuir

El proyecto está en construcción activa. Si quieres reportar un error en los datos de una beca o sugerir una beca que falta, abre un issue.

## Autor

**Luis Valverde Ramos** — luis.valverde@pucp.edu.pe
