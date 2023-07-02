---
marp: true
title : Marp
paginate: true
theme : aqua

class:
- invert

---

# TypeScript inlay-hint Setting으로 타입 보기

![Screenshot 2023-07-02 at 5 44 09 PM](https://github.com/YoungHaKim7/Cpp_Training/assets/67513038/08e37038-7c39-466d-81d8-0e64dbd0d7bc)

---

# VSCODE Setting JSON 으로 세팅

```json

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
  "editor.formatOnType": true
}
```

---


---