# Effective TypeScript

https://github.com/danvk/effective-typescript

# Prettier & Eslint


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