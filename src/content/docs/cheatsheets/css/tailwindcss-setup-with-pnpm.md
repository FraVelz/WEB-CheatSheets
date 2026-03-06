---
title: Instalar Tailwind CSS con pnpm
description: Pasos para instalar y configurar Tailwind CSS usando pnpm (PostCSS, autoprefixer).
---

# ✅ 1️⃣ Instalar dependencias

En la raíz de tu proyecto:

```bash
pnpm add -D tailwindcss postcss autoprefixer
```

Luego inicializa la configuración:

```bash
pnpm dlx tailwindcss init -p
```

Eso crea: `tailwind.config.js` y `postcss.config.js`

---

# ✅ 2️⃣ Configurar el content en tailwind.config.js

Abre `tailwind.config.js` y modifica `content` según tu estructura:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: { extend: {} },
  plugins: [],
}
```

⚠️ Importante para que Tailwind detecte las clases que usas.

---

# ✅ 3️⃣ Crear archivo CSS principal

Crea `src/style.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

# ✅ 4️⃣ Importar el CSS

En tu `main.ts`:

```ts
import './style.css'
```

---

# ✅ 5️⃣ Ejecutar el proyecto

```bash
pnpm dev
```

---

# 🧩 ¿Qué hace cada dependencia?

| Dependencia  | Para qué sirve                   |
| ------------ | -------------------------------- |
| tailwindcss  | Genera las clases                |
| postcss      | Procesa y transforma el CSS      |
| autoprefixer | Compatibilidad entre navegadores |

---

# 🔥 Si `pnpm dlx` falla

Usa:

```bash
pnpm exec tailwindcss init -p
```

O crea los archivos manualmente:

**tailwind.config.js:**

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

**postcss.config.js:**

```js
export default {
  plugins: { tailwindcss: {}, autoprefixer: {} },
}
```
