---
title: Conventional Commits
description: Formato de mensajes de commit (types, scope, breaking changes, ejemplos).
---

**Conventional Commits** es una convención para escribir mensajes de commit en Git de forma estructurada y estandarizada. Facilita:

* Leer el historial del proyecto
* Generar CHANGELOGs automáticamente
* Determinar versiones automáticamente (SemVer)
* Integrarse con herramientas de CI/CD

---

# 📌 Formato básico

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Ejemplo: `feat: add user login endpoint`

---

# 🔎 Partes del commit

## 1️⃣ Type (obligatorio)

| Tipo       | Significado                                |
| ---------- | ------------------------------------------ |
| `feat`     | Nueva funcionalidad                        |
| `fix`      | Corrección de bug                          |
| `docs`     | Cambios en documentación                   |
| `style`    | Cambios de formato (no lógica)             |
| `refactor` | Refactorización                            |
| `test`     | Añadir o modificar tests                   |
| `chore`    | Tareas de mantenimiento                    |
| `build`    | Cambios en build system                    |
| `ci`       | Cambios en integración continua            |
| `perf`     | Mejora de rendimiento                      |

---

## 2️⃣ Scope (opcional)

Indica la parte del sistema afectada.

```
feat(auth): add JWT validation
fix(api): handle null response
```

---

## 3️⃣ Description (obligatorio)

* Minúsculas, sin punto final
* Claro y conciso
* Presente imperativo: "add" no "added"

---

## 4️⃣ Body y Footer (opcionales)

Body: explica qué y por qué. Footer: referencias a issues, breaking changes.

```
feat: add rate limiting

This prevents API abuse by limiting requests per IP.
Closes #123
```

---

# 💥 Breaking Changes

Opción 1: `feat!: remove deprecated API`

Opción 2: Footer explícito

```
feat: update authentication flow

BREAKING CHANGE: login now requires 2FA
```

---

# 📦 Relación con SemVer

| Tipo              | Versión       |
| ----------------- | ------------- |
| `fix`             | PATCH (1.0.1) |
| `feat`            | MINOR (1.1.0) |
| `BREAKING CHANGE` | MAJOR (2.0.0) |

---

# 🧠 Buenas prácticas

* Un commit = una intención clara
* Mensajes cortos pero descriptivos
* Usa scope si el proyecto es grande
* Marca breaking changes siempre
