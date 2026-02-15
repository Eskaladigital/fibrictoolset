# Fibric Toolset — Website

Sitio web oficial de **Fibric Toolset**, el primer sistema de ropa y prendas basado en curvas para Houdini. Construido con Next.js 14, TypeScript y React 18.

---

## Requisitos previos

- **Node.js** 18.17 o superior — [Descargar](https://nodejs.org/)
- **npm** (incluido con Node.js) o **yarn** / **pnpm**
- Un editor de código (VS Code recomendado)

Para verificar que tienes Node instalado:

```bash
node -v
npm -v
```

---

## Instalación y puesta en marcha

```bash
# 1. Abrir terminal en la carpeta del proyecto
cd fibric-site

# 2. Instalar dependencias
npm install

# 3. Arrancar servidor de desarrollo
npm run dev
```

El sitio estará disponible en **http://localhost:3000**

---

## Comandos disponibles

| Comando           | Descripción                                      |
|-------------------|--------------------------------------------------|
| `npm run dev`     | Arranca el servidor de desarrollo (hot reload)    |
| `npm run build`   | Genera la build optimizada para producción        |
| `npm run start`   | Arranca el servidor con la build de producción    |

---

## Estructura del proyecto

```
fibric-site/
├── public/                        # Archivos estáticos (imágenes, vídeos, favicon...)
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Layout raíz (Navbar + Footer en todas las páginas)
│   │   ├── globals.css            # Estilos globales y sistema de diseño
│   │   ├── page.tsx               # Página HOME (/)
│   │   ├── buy/
│   │   │   └── page.tsx           # Página BUY (/buy)
│   │   ├── about/
│   │   │   └── page.tsx           # Página ABOUT US (/about)
│   │   ├── documentation/
│   │   │   └── page.tsx           # Página DOCUMENTATION (/documentation)
│   │   ├── contact/
│   │   │   └── page.tsx           # Página CONTACT (/contact)
│   │   └── faq/
│   │       └── page.tsx           # Página FAQ (/faq)
│   └── components/
│       ├── Navbar.tsx             # Barra de navegación (desktop + hamburguesa móvil)
│       └── Footer.tsx             # Pie de página con enlaces
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

---

## Páginas y rutas

| Ruta               | Página          | Descripción                                                              |
|--------------------|-----------------|--------------------------------------------------------------------------|
| `/`                | Home            | Hero full-screen, vídeo intro, 6 features, showcase Leena, Husk, FMX    |
| `/buy`             | Buy             | 4 planes de licencia (Trial, Indie, Core, Studio) con enlaces a Gumroad  |
| `/about`           | About Us        | Historia del proyecto y perfiles del equipo (Pepe Buendía, Agustín González) |
| `/documentation`   | Documentation   | Acceso a la documentación externa, curso Fibric Essentials (18 lecciones) |
| `/contact`         | Contact         | Formulario de contacto completo + email directo                          |
| `/faq`             | FAQ             | 6 preguntas frecuentes con acordeón interactivo                         |

Todas las páginas comparten el mismo **Navbar** (con navegación activa resaltada y menú hamburguesa en móvil) y **Footer**.

---

## Stack tecnológico

| Tecnología        | Versión   | Uso                                           |
|-------------------|-----------|-----------------------------------------------|
| Next.js           | 14.x      | Framework React con App Router y SSR           |
| React             | 18.x      | Librería UI                                    |
| TypeScript        | 5.x       | Tipado estático                                |
| Google Fonts      | —         | Bebas Neue (display), Archivo (body), Lora (serif) |

Sin dependencias externas de CSS (ni Tailwind, ni styled-components). Todo el estilado se gestiona con `globals.css` + estilos inline en componentes.

---

## Sistema de diseño

El diseño sigue el estilo **"Elite Hybrid"** — un tema oscuro premium con acentos cálidos:

### Paleta de colores

| Variable          | Valor                          | Uso                      |
|-------------------|--------------------------------|--------------------------|
| `--bg`            | `#0a0a0a`                      | Fondo principal          |
| `--surface`       | `#141414`                      | Fondo de tarjetas/hover  |
| `--white`         | `#f5f5f5`                      | Texto principal          |
| `--gray`          | `#888`                         | Texto secundario         |
| `--gold`          | `#d4a853`                      | Acento primario (dorado) |
| `--accent`        | `#e84c3d`                      | Acento secundario (rojo) |
| `--border`        | `rgba(255, 255, 255, 0.08)`    | Bordes sutiles           |

### Tipografía

- **Bebas Neue** — Títulos y elementos display (headings, hero, pricing cards)
- **Archivo** — Cuerpo de texto, navegación, botones (pesos 300–900)
- **Lora** — Detalles en itálica/serif (subtítulos showcase)

### Componentes de diseño

- Gradientes de fondo radiales (dorado + rojo sutil)
- Grid pattern de fondo con líneas finas
- Tarjetas con borde que revela gradiente en hover
- Números de feature que pasan de invisibles a gradiente dorado-rojo
- Botones con gradiente invertido en hover vía pseudo-elemento
- Badges tipo "POPULAR" posicionados con transform

---

## Responsive

El sitio está completamente adaptado para:

- **Desktop** (> 1024px) — Layouts completos, grids de 3-4 columnas
- **Tablet** (768px – 1024px) — Grids reducidos a 2 columnas, showcase en una columna
- **Móvil** (< 768px) — Una columna, menú hamburguesa con overlay full-screen

---

## Personalización

### Cambiar colores

Edita las variables CSS en `src/app/globals.css`:

```css
:root {
  --gold: #d4a853;    /* Cambia el acento dorado */
  --accent: #e84c3d;  /* Cambia el acento rojo */
  --bg: #0a0a0a;      /* Cambia el fondo */
}
```

### Añadir imágenes

Coloca archivos en la carpeta `public/` y referéncialos como:

```tsx
<img src="/mi-imagen.jpg" alt="descripción" />
```

### Añadir una nueva página

1. Crea una carpeta dentro de `src/app/` con el nombre de la ruta (ej: `src/app/gallery/`)
2. Crea un archivo `page.tsx` dentro
3. Añade el enlace en `Navbar.tsx` y `Footer.tsx`

---

## Despliegue en producción

### Opción 1: Vercel (recomendado para Next.js)

1. Sube el proyecto a un repositorio Git (GitHub, GitLab...)
2. Importa el repositorio en [vercel.com](https://vercel.com)
3. Vercel detecta Next.js automáticamente y despliega

### Opción 2: Servidor propio / VPS

```bash
npm run build
npm run start
# El servidor escucha en el puerto 3000 por defecto
# Usa un reverse proxy (nginx, caddy) para servir en el puerto 80/443
```

### Opción 3: Export estático

Si no necesitas funcionalidades de servidor, puedes generar HTML estático añadiendo en `next.config.js`:

```js
const nextConfig = {
  output: 'export',
};
```

Y luego:

```bash
npm run build
# Los archivos estáticos estarán en la carpeta /out
```

---

## Enlaces externos configurados

| Destino                       | Usado en           |
|-------------------------------|--------------------|
| Gumroad (compra licencias)    | Home, Buy          |
| Gumroad (asset Leena gratis)  | Home               |
| YouTube (Husk demo)           | Home               |
| Google Sites (documentación)  | Documentation      |
| LinkedIn / YouTube (Pepe)     | About Us           |
| LinkedIn / ArtStation (Agustín)| About Us          |
| SideFX                        | Home (FMX badge)   |
| FMX                           | Home (FMX badge)   |

---

## Licencia

© 2026 Fibric Toolset. Todos los derechos reservados.
