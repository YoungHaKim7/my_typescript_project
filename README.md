# vim/neovim LSP seting

## Install & In your vim/neovim, run command:

```
// coc install
:CocInstall coc-tsserver


// TSInstall LspInstall
:TSInstall typescript

:LspInstall typescript-language-server
```

https://github.com/neoclide/coc-tsserver

<br>

# my_typescript_project

Installing

- For the latest stable version:

```
npm install -g typescript

```

<br>

- For our nightly builds:

```
npm install -g typescript@next
```

# Hello World TypeScript

main.ts
```
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    greet(): string {
        return this.greeting;
    }
};

let greeter = new Greeter("Hello, world ! TypeScript");
console.log(greeter.greet());

```

## install & typescript compile

```
PS D:\hello_typescript> npm install -g typescript

added 1 package, and audited 2 packages in 3s

found 0 vulnerabilities
PS D:\hello_typescript> ls

    Directory: D:\hello_typescript

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---        2023-02-03 오후 12:35             25 main.ts
-a---        2023-02-03 오후 12:35             25 README.md


PS D:\hello_typescript> tsc main.ts

PS D:\hello_typescript> ls

    Directory: D:\hello_typescript

Mode                 LastWriteTime         Length Name

-a---        2023-02-03 오후 12:48            321 main.js
-a---        2023-02-03 오후 12:48            274 main.ts
-a---        2023-02-03 오후 12:46             25 README.md

PS D:\hello_typescript> node main.js

Hello, world ! TypeScript

```

# TypeScript 공식 문서 모음 & Tutorial 자료 모음

  - TypeScriptlang 공식 핸드북 영문 버젼 English Version.

    - https://www.typescriptlang.org/docs/handbook/intro.html

  - TypeScriptlang 영문버젼 번역본(출처 : Nomad Coders)

    - https://vriz.notion.site/TypeScript-Handbook-45b1bc86f2ed4886b393a5586fcf2a31

  - TypeScript Design-Patterns (출처 : Nomad Coders)

    - https://refactoring.guru/design-patterns/typescript

  -  Microsoft TypeScript Tutorials

     - https://github.com/microsoft/TypeScript


  - EbookFoundation (TypeScript)(무료)

    - https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#typescript


  - essential TypeScript

    - https://www.programming-books.io/essential/typescript/
    
  - TypeScript 핸드북
  
    - https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html
    
  - todo앱 만들기 언어별 다 있음 연습하기 좋다.!
  
    - https://todomvc.com/
