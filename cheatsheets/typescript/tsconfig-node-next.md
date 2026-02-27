# tsconfig.json (NodeNext) — configuración recomendada

> Nota: `tsconfig.json` admite comentarios (JSONC). Si lo necesitas como JSON estricto, quítalos.

## Ejemplo base (sin comentarios)

```json
{
  "compilerOptions": {
    "rootDir": "./typescript",
    "outDir": "./scripts",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ESNext",
    "sourceMap": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noImplicitOverride": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noPropertyAccessFromIndexSignature": true,
    "strict": true,
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true
  }
}
```

## Ejemplo comentado (JSONC)

```jsonc
{
  "compilerOptions": {
    "rootDir": "./typescript", // Carpeta del código fuente (.ts)
    "outDir": "./scripts", // Carpeta de salida (JavaScript compilado)
    "module": "NodeNext", // Node ESM/CJS moderno
    "moduleResolution": "NodeNext",
    "target": "ESNext",
    "sourceMap": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```