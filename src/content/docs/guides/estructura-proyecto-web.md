---
title: Estructura de un proyecto web
description: "Formas de organizar un proyecto (por tipo, funcionalidad, híbrida, capas)."
---

## 1️⃣ Estructura por tipo (type-based / layer-based)

* Organiza los archivos según **su tipo o capa**: componentes, estilos, scripts, assets, etc.
* Muy común en proyectos pequeños o medianos.

```text
/src
  /components
  /pages
  /styles
  /scripts
  /assets
```

**Ventajas:** Fácil de entender al inicio. Separación clara de roles.

**Desventajas:** Cuando crece, es difícil saber qué archivos pertenecen a qué funcionalidad.

---

## 2️⃣ Estructura por funcionalidad (feature-based / domain-driven)

* Agrupa todo lo relacionado con una **función o sección** en una carpeta.
* Muy utilizada en proyectos grandes y aplicaciones SPA.

```text
/src
  /features
    /portfolio
      PortfolioSection.astro
      ProjectCard.astro
      portfolioAnimations.ts
      portfolioData.ts
    /contact
      ContactSection.astro
      ContactForm.astro
```

**Ventajas:** Todo lo de una funcionalidad está en un solo lugar. Escala mejor.

**Desventajas:** Puede haber repetición si varias funcionalidades usan componentes parecidos.

---

## 3️⃣ Estructura híbrida (combinada)

* Combina **tipo-based** y **feature-based**.
* Layouts y UI globales por tipo, secciones específicas por funcionalidad.

```text
/src
  /components/layout
    Header.astro
    Footer.astro
  /components/ui
    Button.astro
    Card.astro
  /features/portfolio
    PortfolioSection.astro
    ProjectCard.astro
```

**Ventajas:** Muy flexible. Mantiene organización global y funcional.

---

## 4️⃣ Estructura por capas (layered / clean architecture)

* Separación estricta: presentación, lógica de negocio, datos.
* Más común en aplicaciones grandes con backend complejo.

```text
/src
  /presentation   # Componentes UI
  /domain         # Lógica de negocio
  /data           # Servicios, fetch, APIs
  /infrastructure # Conexión a APIs, bases de datos
```

**Ventajas:** Claridad total de responsabilidades. Facilita testing.

**Desventajas:** Compleja para proyectos pequeños.

---

## 5️⃣ Otras nomenclaturas comunes

| Nombre            | Qué significa                                                    |
| ----------------- | ---------------------------------------------------------------- |
| **atomic design** | Divide componentes en átomos, moléculas y organismos             |
| **modular**       | Cada módulo tiene todo lo que necesita                           |
| **monorepo**      | Varios subproyectos (apps, librerías, componentes)               |

---

## 💡 Resumen rápido para un portfolio

* **Pequeño/medio:** tipo-based o híbrido.
* **Secciones con animaciones o React:** feature-based.
* **Muy grande o escalable:** híbrido con feature-based y tests por carpeta.
