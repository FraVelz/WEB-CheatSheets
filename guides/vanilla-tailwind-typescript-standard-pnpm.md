# Vanilla + Tailwind CSS + TypeScript + Standard (pnpm)

Guía para proyecto **vanilla + Tailwind + TypeScript + Standard** usando **pnpm**.

---

# 🚀 1️⃣ Inicializar proyecto

```bash
pnpm init
```

---

# 📘 2️⃣ Instalar TypeScript

```bash
pnpm add -D typescript
pnpm exec tsc --init
```

Compilar:

```bash
pnpm exec tsc
```

Modo watch:

```bash
pnpm exec tsc --watch
```

---

# 🎨 3️⃣ Instalar Tailwind CSS

```bash
pnpm add -D tailwindcss postcss autoprefixer
pnpm exec tailwindcss init -p
```

En `tailwind.config.js`:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: { extend: {} },
  plugins: []
}
```

Crear:

```
/src/styles.css
```

Con:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Agregar script en `package.json`:

```json
"scripts": {
  "build:css": "tailwindcss -i ./src/styles.css -o ./dist/output.css --watch"
}
```

Ejecutar:

```bash
pnpm run build:css
```

---

# 📏 4️⃣ Instalar Standard (para TypeScript)

```bash
pnpm add -D standard ts-standard @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Scripts:

```json
"scripts": {
  "lint": "standard",
  "lint:fix": "standard --fix"
}
```

Ejecutar:

```bash
pnpm run lint
```

---

# 🧠 Diferencia clave con pnpm

Cuando necesites ejecutar binarios locales usa:

```bash
pnpm exec <comando>
```

Ejemplo:

```bash
pnpm exec tsc
pnpm exec tailwindcss
```

---

# 🔥 Consejo importante

Si vas a usar:

* TypeScript
* Tailwind
* Linter
* Watch mode

Te conviene mucho usar:

👉 Vite

Porque con pnpm sería:

```bash
pnpm create vite
```

Y ya viene optimizado para TS + PostCSS.

---

Si quieres, dime:

👉 ¿Tu proyecto ya existe o lo estás creando desde cero?
Y te doy la estructura exacta optimizada para tu caso.
