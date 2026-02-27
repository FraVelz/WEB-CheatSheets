# `package.json`: `"type": "module"` y `"version"`

Guía rápida para entender `type: "module"` y cómo manejar la versión de tu proyecto.

---

# 1️⃣ ¿Por qué `"type": "module"`?

Eso le dice a **Node.js** cómo debe interpretar tus archivos `.js`.

Existen **2 formas de usar módulos en JavaScript**:

---

## 🔹 Forma antigua (CommonJS)

```js
const fs = require("fs")
```

Y para exportar:

```js
module.exports = algo
```

---

## 🔹 Forma moderna (ES Modules)

```js
import fs from "fs"
```

Y para exportar:

```js
export const algo = ...
```

---

Cuando en tu `package.json` pones:

```json
"type": "module"
```

Le estás diciendo a Node:

> “Voy a usar la forma moderna con `import` y `export`.”

Si no lo pones, Node usa la forma antigua (`require`).

---

### 🎯 Entonces… ¿es obligatorio?

❌ No siempre
✅ Sí si quieres usar `import` en Node sin errores

En frontend no afecta mucho porque el navegador ya usa ES Modules.

---

# 2️⃣ ¿Cada cuánto se cambia la `"version"`?

Ejemplo:

```json
"version": "1.0.0"
```

Esa versión es la versión **de tu proyecto**, no de TypeScript.

Se cambia cuando tú decides publicar una nueva versión.

---

## 📦 Cómo funciona la versión (Muy simple)

La versión tiene 3 números:

```
MAJOR.MINOR.PATCH
1.0.0
```

### 🔹 PATCH (1.0.1)

Pequeños arreglos de bugs.

### 🔹 MINOR (1.1.0)

Nueva funcionalidad sin romper lo anterior.

### 🔹 MAJOR (2.0.0)

Cambios grandes que pueden romper cosas anteriores.

---

## 🎯 Pero… si es un proyecto personal?

Si no estás publicando tu paquete en npm:

👉 No importa mucho la versión
👉 Puedes dejarla en `1.0.0` sin problema

Se vuelve importante cuando:

* Trabajas en equipo
* Publicas librerías
* Haces versiones para producción

---

# 🧠 Resumen simple

| Cosa               | Qué significa                                    |
| ------------------ | ------------------------------------------------ |
| `"type": "module"` | Permite usar `import/export` en Node             |
| `"version"`        | Número de versión de tu proyecto                 |
| ¿Cambiarla?        | Solo cuando publicas o haces cambios importantes |

---

Si quieres, dime:
¿Estás haciendo backend con Node o solo frontend con HTML + TS?

Porque ahí cambia un poco cuándo necesitas `"type": "module"`.