# International Motors – React (Vite + TS)

Este proyecto está basado en la estructura pública de **internationalmotors.net** (Home, Modelos, Posventa, Contacto).
> Toda la información editable está en `src/content/siteContent.ts`.

## Cómo correrlo
1. Asegurate de tener **Node 18+**.
2. En una carpeta vacía, descomprimí este ZIP.
3. Instalá dependencias:
   ```bash
   npm i
   npm run dev
   ```
   Abrí el `http://localhost:5173` que te muestre Vite.

## Dónde cargar la info del cliente
Editá **`src/content/siteContent.ts`**. Ahí están:
- `marca`, `logo`, `nav`
- `hero` (título, subtítulo, CTAs, imagen)
- `modelos` (HB20, New Tucson, All‑New Staria, New Creta – podés agregar más)
- `posventa` (lista de servicios)
- `kpis` (opcional)
- `sucursales` (dirección, whatsapp, email y mapa embebido)
- `horarios` (ventas y posventa)
- `contacto` (tel, whatsapp, email, política de privacidad, y **formularioDestino**)
- `sociales` (instagram, facebook, youtube, tiktok)
- `seo` (título y descripción)

> **Formulario**: por defecto usa un `mailto:` al valor de `contacto.formularioDestino`. Si preferís backend, reemplazá por un endpoint y hacé el `fetch` ahí.

## Personalización rápida
- Colores en `src/styles.css` (variables `--brand` y `--accent`).
- Imágenes en `/public` (`logo.png`, `hero.jpg`, etc.).
- Agregá fichas técnicas por modelo usando `brochureUrl`.

## Estructura
```
src/
  content/siteContent.ts   ← ÚNICO archivo editable por el cliente
  components/…             ← Componentes simples (sin framework de UI)
  App.tsx                  ← Ensambla las secciones
  styles.css               ← Estilos mínimos
index.html
package.json
```

## Licencias y marcas
Logos, imágenes y marcas pertenecen a sus titulares. Este código es un **starter** para uso interno del cliente.
