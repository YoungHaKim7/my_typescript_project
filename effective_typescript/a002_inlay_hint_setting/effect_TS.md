---
marp: true
title : Marp
paginate: true
theme : Gaia

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

# VSCode single to double quote automatic replace

- 강제로 format 해주기

```
$ npx prettier --write \app.ts
```

---

# toUpperCase 기능 이해하기

  - lib.es5.d.ts
```typescript

interface String {
    /** Returns a string representation of a string. */
    /** Converts all the alphabetic characters in a string to uppercase. */
    toUpperCase(): string;
}

declare var String: StringConstructor;

interface StringConstructor {
    new(value?: any): String;
    (value?: any): string;
    readonly prototype: String;
    fromCharCode(...codes: number[]): string;
}
```

- 다음장 interface 이해하기  ~~~~~~~~`

---

https://medium.com/humanscape-tech/type-vs-interface-%EC%96%B8%EC%A0%9C-%EC%96%B4%EB%96%BB%EA%B2%8C-f36499b0de50

- TypeScript 팀의 의도
TypeScript 팀은 개방-폐쇄 원칙에 따라 확장에 열려있는 JavaScript 객체의 동작 방식과 비슷하게 연결하도록 Interface를 설계했습니다.

그래서 TypeScript 팀은 가능한 Type Alias보단 Interface를 사용하고, 합 타입 혹은 튜플 타입을 반드시 써야 되는 상황이면 Type Alias를 사용하도록 권장하고 있습니다.

정리
필자의 입장
저는 Interface를 주로 사용하고 있습니다. 가능한 TypeScript 팀이 권장하는 방향으로 사용하시기를 권하나, 그렇지 않은 상황에선 아래 두 가지를 권해드립니다.

팀 레벨 혹은 프로젝트 레벨에서 지정한 컨벤션에 따라 일관성 있게 사용하기
외부에 공개할 API는 Interface 사용하기 (선언 병합을 위해)
출처
https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases
https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c

---

# StackOverFlow

When use a interface or class in Typescript [duplicate]

https://stackoverflow.com/questions/51716808/when-use-a-interface-or-class-in-typescript

---

가장 기본적으로 클래스는 본질적으로 객체 팩토리 (예: 객체가 어떻게 생겼는지에 대한 청사진)인 반면 인터페이스는 유형 검사 에만 사용되는 구조입니다 .

클래스에는 개체를 만드는 데 도움이 되는 초기화된 속성과 메서드가 있을 수 있지만 인터페이스는 본질적으로 개체가 가질 수 있는 속성과 유형을 정의합니다.

설명한 시나리오에서는 인터페이스 를 사용하여 UserLogin 유형을 설정합니다.

- At it's most basic, a class is essentially an object factory (ie. a blueprint of what an object is supposed to look like and then implemented), whereas an interface is a structure used solely for type-checking.

- While a class may have initialized properties and methods to help create objects, an interface essentially defines the properties and type an object can have.

- In the scenario you described, one would use the interface to set the type for UserLogin.

---

# 질문한 코드

```typescript
export interface UserLogin {
  email: string;
  password: string;
}
//OR
export class UserLogin {
  email: string;
  password: string;
}
```

---
