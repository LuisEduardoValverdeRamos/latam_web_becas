# BecasMundo — Contexto del proyecto para Claude Code

Este proyecto se llama BecasMundo. Es una plataforma web que centraliza información de becas internacionales de posgrado y las alinea con el perfil del usuario (país, campo de estudio, nivel académico, idiomas, experiencia laboral, situación económica).

## Contexto
Nace en respuesta a la suspensión de la Beca Generación del Bicentenario en Perú (2026), que dejó a 300+ profesionales sin financiamiento para posgrados en el exterior. La oferta de becas internacionales está fragmentada en decenas de sitios y no existe una herramienta que haga matching inteligente entre perfil del postulante y becas disponibles.

## Fases del proyecto
- **Fase 1 (MVP):** Web con catálogo curado de 20-30 becas relevantes para perfiles latinoamericanos de posgrado. Filtros por campo, país destino, deadline, nivel (maestría/doctorado). Stack: React + Tailwind, datos en JSON estático.
- **Fase 2 (Matching):** Motor de recomendación que cruza perfil del usuario con requisitos de cada beca. Scoring de compatibilidad. El usuario llena un formulario con su perfil y recibe becas rankeadas.
- **Fase 3 (Scraping):** Automatización de la recolección de datos desde fuentes oficiales (DAAD, Chevening, Fulbright, OAS, Australia Awards, MEXT, Eiffel, etc.). Pipeline en Python/R.

## Stack tentativo
- Frontend: React + Tailwind CSS
- Data: JSON → eventualmente PostgreSQL
- Scraping: Python (BeautifulSoup/Scrapy)
- Matching: Python (scikit-learn o reglas ponderadas)
- Deploy: GitHub Pages (MVP) → Vercel/Railway después

## Público objetivo
Profesionales latinoamericanos de alto rendimiento que buscan financiamiento para posgrados en el exterior.

## Dueño del proyecto
Luis Valverde Ramos — luis.valverde@pucp.edu.pe — GitHub: LuisEduardoValverdeRamos
