# Notas de Desarrollo Web — Fravelz

---

## Temario

- [Notas de Desarrollo Web — Fravelz](#notas-de-desarrollo-web--fravelz)
  - [Temario](#temario)
  - [TailwindCSS](#tailwindcss)
    - [Uso rápido (sin configuración)](#uso-rápido-sin-configuración)
    - [Configuración completa y optimizada](#configuración-completa-y-optimizada)
  - [React.js](#reactjs)
    - [Uso rápido (sin Vite)](#uso-rápido-sin-vite)
  - [Crear un proyecto completo con Vite](#crear-un-proyecto-completo-con-vite)
  - [Diferencia entre `pnpm init` y `pnpm create vite`](#diferencia-entre-pnpm-init-y-pnpm-create-vite)
  - [Optimizar el proyecto para producción](#optimizar-el-proyecto-para-producción)
  - [Resumen rápido](#resumen-rápido)
    - [1. Inicializa tu repositorio](#1-inicializa-tu-repositorio)
    - [2. Crea el primer commit (necesario para crear ramas)](#2-crea-el-primer-commit-necesario-para-crear-ramas)
    - [3. Crea la rama `desarrollo`](#3-crea-la-rama-desarrollo)
    - [4. (Opcional) Asegúrate de que la rama principal se llame `main`](#4-opcional-asegúrate-de-que-la-rama-principal-se-llame-main)
    - [5. Trabaja normalmente](#5-trabaja-normalmente)
    - [6. Fusiona cambios a `main` cuando el código esté listo para el cliente](#6-fusiona-cambios-a-main-cuando-el-código-esté-listo-para-el-cliente)
    - [7. (Opcional) Sube las ramas a GitHub o GitLab](#7-opcional-sube-las-ramas-a-github-o-gitlab)

---

## TailwindCSS

### Uso rápido (sin configuración)

Agrega este script en tu HTML para usar Tailwind de inmediato:

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

---

### Configuración completa y optimizada

1. **Inicializar el proyecto**

   ``` bash
   pnpm init
   ```

2. **Instalar dependencias**

   ``` bash
   pnpm add tailwindcss @tailwindcss/cli
   ```

3. **Crear el archivo de entrada**
   Crea `input.css` con:

   ```css
   @import "tailwindcss";
   ```

4. **Generar el CSS final**

   ``` bash
   pnpx @tailwindcss/cli -i ./input.css -o ./output.css
   ```

   o con modo observador:

   ``` bash
   npx tailwindcss -i ./input.css -o ./output.css --watch
   ```

   ``` html
   <link rel="stylesheet" href="./output.css">
   ```

**Extra:**

- [Plugin de animaciones para TailwindCSS](https://tailwindcss-animations.vercel.app/)

---

## React.js

### Uso rápido (sin Vite)

Para incluir React directamente desde un script:

```html
<script type="module" src="./script.js"></script>
```

```js
import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render('Hola Mundo con React y TailwindCSS')
```

---

## Crear un proyecto completo con Vite

1. **Inicializar proyecto**

   ``` bash
   pnpm create vite@latest
   ```

2. **Si ya lo habías creado:**

   ``` bash
   cd proyecto/
   pnpm run dev
   ```

---

## Diferencia entre `pnpm init` y `pnpm create vite`

| Comando                     | Qué hace                                              | Resultado                     |
| --------------------------- | ----------------------------------------------------- | ----------------------------- |
| `pnpm init`                 | Crea solo `package.json` vacío                        | Proyecto manual               |
| `pnpm create vite@latest`   | Crea estructura completa de Vite en una nueva carpeta | Proyecto listo                |
| `pnpm create vite@latest .` | Crea el proyecto en la carpeta actual (si está vacía) | Evita crear una nueva carpeta |

---

## Optimizar el proyecto para producción

1. **Ir al directorio del proyecto**

   ``` bash
   cd nombre-de-tu-proyecto
   ```

2. **Compilar para producción**

   ``` bash
   pnpm run build
   ```

3. **Resultado**
   Carpeta `dist/` con el código optimizado:

   ``` text
   dist/
   ├── index.html
   └── assets/
       ├── main-xxxxx.js
       └── style-yyyyy.css
   ```

4. **Probar la versión optimizada**

   ``` bash
   pnpm run preview
   ```

   → Abre [http://localhost:4173](http://localhost:4173)

5. **Subir a hosting**
   Puedes usar:

   - **Netlify**
   - **Vercel**
   - **GitHub Pages**
   - **Nginx / Apache**

---

## Resumen rápido

| Acción                      | Comando                   |
| --------------------------- | ------------------------- |
| Inicializar proyecto simple | `pnpm init`               |
| Crear proyecto con Vite     | `pnpm create vite@latest` |
| Compilar para producción    | `pnpm run build`          |
| Previsualizar compilación   | `pnpm run preview`        |
| Carpeta final optimizada    | `dist/`                   |

- `desarrollo` → es tu rama donde haces los cambios, pruebas y desarrollas nuevas características.

- `main` → es la rama “estable”, con el código ya probado y listo para entregar o desplegar.

---

### 1. Inicializa tu repositorio

Si aún no lo has hecho:

``` bash
git init
```

---

### 2. Crea el primer commit (necesario para crear ramas)

``` bash
git add .
git commit -m "Primer commit: base del proyecto"
```

---

### 3. Crea la rama `desarrollo`

``` bash
git branch desarrollo
```

Esto crea la rama, pero no te cambia a ella todavía.

Para moverte a `desarrollo`:

``` bash
git checkout desarrollo
```

Ahora estarás trabajando en la rama de desarrollo (puedes comprobarlo con `git branch`).

---

### 4. (Opcional) Asegúrate de que la rama principal se llame `main`

Si todavía tienes `master`:

``` bash
git branch -M main
```

---

### 5. Trabaja normalmente

Cada vez que hagas cambios, lo harás en `desarrollo`:

``` bash
git add .
git commit -m "Agregada nueva funcionalidad X"
```

---

### 6. Fusiona cambios a `main` cuando el código esté listo para el cliente

Cuando termines una parte estable del proyecto:

``` bash
git checkout main
git merge desarrollo
```

Esto traerá los cambios de la rama `desarrollo` a la `main`.

---

### 7. (Opcional) Sube las ramas a GitHub o GitLab

Primero conecta el repositorio remoto:

``` bash
git remote add origin https://github.com/usuario/repositorio.git
```

Luego subes ambas ramas:

``` bash
git push -u origin main
git push -u origin desarrollo
```

> **Autor:** Fravelz
