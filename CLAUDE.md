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

## Público objetivo refinado
Profesional latinoamericano, 22-35 años, con título universitario, alto rendimiento académico, recursos limitados, que busca maestría o doctorado fully-funded en universidades top del mundo. Perfil tipo: egresado de universidad pública o privada de prestigio en LATAM, con experiencia laboral o de investigación, que necesita financiamiento externo para estudiar en el exterior.

## Análisis competitivo

**Plataformas anglosajonas (pregrado, mercado US):**
- Fastweb: 1.5M becas, matching por perfil, pero 100% enfocado en estudiantes americanos y pregrado
- ScholarshipOwl: 10K+ becas, matching por GPA/major/background, 12M usuarios, mismo nicho US
- Scholarships.com, Bold.org, Scholly: variantes del mismo modelo
- Ninguna sirve para un profesional latinoamericano buscando posgrado internacional

**Plataforma más cercana a nosotros:**
- Scholarar (scholarar.com): startup EdTech, matching con IA, cubre pregrado a doctorado internacional. 31K descargas, rating 4.4. PERO: cobertura débil para LATAM (muestra "no scholarships" para varios países), mejores features son premium, datos no siempre actualizados

**Mundo hispanohablante:**
- BecasParaLatinos.com, BecasSinFronteras, BecasyConvocatorias.org: blogs/directorios tipo WordPress con listados de posts. Sin filtros inteligentes, sin matching, sin personalización. Información dispersa y no siempre verificada.

**Conclusión: nuestro gap es la intersección de tres cosas que nadie hace bien juntas:**
1. Foco exclusivo en POSGRADO INTERNACIONAL para perfiles LATINOAMERICANOS
2. Matching inteligente real (no solo filtros, sino scoring de compatibilidad)
3. Información curada, verificada y actualizada EN ESPAÑOL

## Posicionamiento

BecasMundo NO es un buscador genérico de becas. Es la herramienta especializada para profesionales latinoamericanos que buscan becas de posgrado en el exterior. Competimos en nicho, no en volumen.

Contexto de lanzamiento: la suspensión de la Beca Generación del Bicentenario en Perú (abril 2026) dejó a 300+ profesionales sin financiamiento. Hay demanda real e inmediata.

## Diferenciadores clave para el MVP
- Solo becas de posgrado (maestría y doctorado) en universidades top
- Solo becas donde latinoamericanos son elegibles (verificado)
- Información en español con tips contextualizados (equivalencias de notas, pruebas de idioma, etc.)
- Deadlines verificados contra fuentes oficiales
- Scoring de compatibilidad perfil-beca (Fase 2)

## Dueño del proyecto
Luis Valverde Ramos — luis.valverde@pucp.edu.pe — GitHub: LuisEduardoValverdeRamos
