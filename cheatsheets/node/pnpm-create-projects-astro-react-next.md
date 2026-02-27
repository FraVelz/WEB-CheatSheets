# Crear proyectos con pnpm (Astro, React, Next.js)

Comandos base para arrancar proyectos con **pnpm** en Astro, React (Vite) y Next.js.

Asume **Node.js ≥ 18** instalado. Si no tienes pnpm:

```bash
npm install -g pnpm
```

---

# 🚀 1️⃣ Crear proyecto en Astro

Framework oficial: **Astro**

### Crear proyecto

```bash
pnpm create astro@latest
```

Te hará preguntas interactivas:

* Nombre del proyecto
* Template (recomendado: minimal)
* TypeScript sí/no
* Instalar dependencias

O directamente:

```bash
pnpm create astro@latest my-astro-app
cd my-astro-app
pnpm install
```

### Iniciar servidor

```bash
pnpm dev
```

Abre:
👉 [http://localhost:4321](http://localhost:4321)

---

# ⚛️ 2️⃣ Crear proyecto en React (Vite recomendado)

Hoy en día lo más común es usar **Vite** para React.

### Crear proyecto React con Vite

```bash
pnpm create vite
```

Selecciona:

* Nombre del proyecto
* Framework: React
* Variant: TypeScript o JavaScript

O directo:

```bash
pnpm create vite my-react-app --template react
cd my-react-app
pnpm install
```

### Iniciar servidor

```bash
pnpm dev
```

Abre:
👉 [http://localhost:5173](http://localhost:5173)

---

# ⚡ 3️⃣ Crear proyecto en Next.js

Framework oficial: **Next.js**

### Crear proyecto

```bash
pnpm create next-app@latest
```

O directo:

```bash
pnpm create next-app@latest my-next-app
cd my-next-app
```

Te preguntará:

* TypeScript?
* ESLint?
* Tailwind?
* App Router?
* src directory?

### Iniciar servidor

```bash
pnpm dev
```

Abre:
👉 [http://localhost:3000](http://localhost:3000)

---

# 📦 Diferencias rápidas

| Framework    | Comando                    | Puerto | Uso ideal                      |
| ------------ | -------------------------- | ------ | ------------------------------ |
| Astro        | `pnpm create astro@latest` | 4321   | Sitios estáticos ultra rápidos |
| React (Vite) | `pnpm create vite`         | 5173   | SPA frontend                   |
| Next.js      | `pnpm create next-app`     | 3000   | Fullstack React                |

---

# 🧠 Bonus: Estructura típica

### Astro

```
src/
  pages/
  components/
```

### React (Vite)

```
src/
  App.jsx
  main.jsx
```

### Next.js (App Router)

```
app/
  page.tsx
  layout.tsx
```

---

# 🎯 Recomendación rápida

* 🔥 Landing page rápida → Astro
* ⚛️ Dashboard SPA → React + Vite
* 🚀 Fullstack serio → Next.js

---

Si quieres, puedo hacerte:

* Comparación profunda Astro vs Next vs React
* Cómo agregar Tailwind en cada uno
* Cómo configurar ESLint + Prettier
* Cómo usar pnpm workspaces con los tres juntos

¿Qué quieres hacer exactamente?
