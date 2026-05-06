# Decisiones técnicas — BecasMundo

## ADR-001: Datos en JSON estático para MVP
- **Fecha:** 2026-05-05
- **Decisión:** Usar archivos JSON como fuente de datos en la Fase 1
- **Razón:** Permite iterar rápido sin infraestructura de backend. Migramos a DB cuando el volumen lo justifique.

## ADR-002: Posicionamiento de nicho sobre volumen
- **Fecha:** 2026-05-05
- **Decisión:** Enfocarnos exclusivamente en becas de posgrado internacional para profesionales latinoamericanos
- **Alternativa descartada:** Buscador genérico de becas (tipo Fastweb/ScholarshipOwl)
- **Razón:** Las plataformas genéricas ya existen con millones de usuarios y equipos grandes. Nuestro valor está en un nicho desatendido que conocemos de primera mano. Competir en volumen es inviable; competir en especialización es sostenible.

## ADR-003: Español como idioma principal
- **Fecha:** 2026-05-05
- **Decisión:** Toda la interfaz, contenido y tips en español
- **Razón:** Nuestro público objetivo son latinoamericanos. Las plataformas existentes están en inglés. La barrera de idioma es parte del problema que resolvemos.
