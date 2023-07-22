# TypeScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours

https://youtu.be/gieEQFIfgYc

# TypeScript Compile


```
$ tsc main.ts

```

- watch

```
tsc main.ts -w
```

# tsconfig 기본 세팅 루틴(tsc --init)

```bash
tsc --init
```

- watch

```bash
tsc -w
```

# Tailwind CSS TypeScript (1)

https://flowbite.com/docs/getting-started/typescript/

<br>


<hr>

# 강제로 format 해주기

```
$ npx prettier --write \app.ts
```

<hr>

# Effective TypeScript

https://github.com/danvk/effective-typescript

# Prettier & Eslint

https://velog.io/@das01063/VSCode%EC%97%90%EC%84%9C-ESLint%EC%99%80-Prettier-TypeScript-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

# VSCode Setting JSON

- settings.JSON
```
{
  "workbench.colorCustomizations": {
    "editorError.foreground": "#3f1010", // squiggly line
    "editorError.border": "#ffffff", // additional border under squiggly line
    "editorInlayHint.background": "#e85a5a98",
    "editorInlayHint.typeBackground": "#442b7a",

    // Overrides for specific kinds of inlay hints
    "editorInlayHint.typeForeground": "#fdb6fdf0",
    "editorInlayHint.parameterForeground": "#fdb6fdf0",
    "editorInlayHint": true
  },
  // JavaScript & TypeScript Inlayhint
  "javascript.inlayHints.enumMemberValues.enabled": true,
  "javascript.inlayHints.functionLikeReturnTypes.enabled": true,
  "javascript.inlayHints.parameterNames.enabled": "all",
  "javascript.inlayHints.parameterTypes.enabled": true,
  "javascript.inlayHints.propertyDeclarationTypes.enabled": true,
  "javascript.inlayHints.variableTypes.enabled": true, // recently
  "typescript.inlayHints.enumMemberValues.enabled": true,
  "typescript.inlayHints.functionLikeReturnTypes.enabled": true,
  "typescript.inlayHints.parameterNames.enabled": "all",
  "typescript.inlayHints.parameterTypes.enabled": true,
  "typescript.inlayHints.propertyDeclarationTypes.enabled": true,
  "typescript.inlayHints.variableTypes.enabled": true,
  // ~~~~~~~~~~~~~~

  // auto fmt & format
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
}
```
