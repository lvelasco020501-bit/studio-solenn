# Studio Solenn — sitio web

Sitio estático (HTML/CSS/JS, sin build). Todo lo publicable vive en `site/`.

- **Editar servicios, precios u horario:** `site/content.js`
- **Textos y secciones:** `site/index.html`
- **Estilos:** `site/styles.css` (paleta tomada del menú 2026)
- **Fotos:** `scripts/grade.py source graded` aplica la misma gradación de color a todas las fotos de `source/`.

Ver en local:

    python3 -m http.server 4321 --directory site

Publicar: conectar el repo a Cloudflare Pages o Netlify con carpeta de salida `site` y sin comando de build.
