# Nodejs 설치
- Typescript를 사용하기 전에, 먼저 Node.js를 설치해야 합니다. LTS(Long Term Support) 버전을 설치하세요.

https://nodejs.org/

# TypeScript 설치
Node.js를 설치한 후, 다음 명령어로 Typescript를 설치합니다.


```
npm install typescript --save-dev
```

# 프로젝트 초기화

- Typescript 프로젝트를 초기화하려면 다음 명령어를 실행하세요. 이 명령어는 tsconfig.json 파일을 생성합니다.

```
npx tsc --init
```

- tsconfig.json 파일을 열고 다음 설정을 추가하세요. 이 설정은 "src" 폴더에 있는 모든 TypeScript 파일을 컴파일하고, 결과를 "build" 폴더에 저장합니다.


```
{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "./build"
  }
}
```
# TypeScript 컴파일
 
- Typescript 컴파일러를 사용하려면 다음 명령어를 실행하세요.

```
npx tsc
```

- Typescript 파일의 변경사항을 실시간으로 감지하고 컴파일하려면 다음 명령어를 실행하세요.

```
npx tsc --watch
```

<hr>

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

- vim setting

https://github.com/pangloss/vim-javascript

<hr>

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

<hr>

<br>

# Helix

# helix Lsp setting

https://github.com/YoungHaKim7/rust_vim_setting/tree/main/helix_settings


# helix 세팅할 때 주의 할점 Q&A

https://github.com/helix-editor/helix/wiki/FAQ

# TypeScript 세팅

https://ar.al/2022/11/14/installing-helix-editor-language-servers/#code

```
#!/usr/bin/env bash

BINARY_HOME="${HOME}/.local/bin"
DATA_HOME="${XDG_DATA_HOME:-$HOME/.local/share}"

echo "Installing Language Servers for Helix Editor:"

# Work in a throwaway temporary directory so as not to pollute the file system.
temporaryDirectory="/tmp/helix-editor-language-server-installer"
mkdir -p "${temporaryDirectory}"
pushd "${temporaryDirectory}"

# Bash
echo "  • Bash (bash-language-server)"
npm i -g bash-language-server

# HTML, JSON, JSON schema
echo "  • HTML, JSON, and JSON schema (vscode-langservers-extracted)"
npm i -g vscode-langservers-extracted

# JavaScript (via TypeScript)
echo "  • JavaScript (typescript, typescript-language-server)"
npm install -g typescript typescript-language-server

# Markdown (via ltex-ls. Note: this has excellent features like
# spelling and grammar check but is a ~269MB download).
echo "  • Markdown (ltex-ls)"
ltexLsVersion=15.2.0
ltexLsBinaryPath="${BINARY_HOME}/ltex-ls"
ltexLsBaseFileName="ltex-ls-${ltexLsVersion}"
ltexLsFileNameWithPlatform="${ltexLsBaseFileName}-linux-x64"
ltexLsAppDirectory="${DATA_HOME}/${ltexLsBaseFileName}"
rm "${ltexLsBinaryPath}"
rm -rf "${ltexLsAppDirectory}"
wget "https://github.com/valentjn/ltex-ls/releases/download/${ltexLsVersion}/${ltexLsFileNameWithPlatform}.tar.gz"
gunzip "${ltexLsFileNameWithPlatform}.tar.gz"
tar xf "${ltexLsFileNameWithPlatform}.tar"
mv "${ltexLsBaseFileName}" "${DATA_HOME}"
ln -s "${ltexLsAppDirectory}/bin/ltex-ls" "${ltexLsBinaryPath}" 

# TOML
cargo install taplo-cli --locked --features lsp

# Clean up.
popd
rm -rf "${temporaryDirectory}"

echo "Done."
```

<hr>

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

<br>

<hr>

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

  - TypeScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
    - https://youtu.be/gieEQFIfgYc

  - essential TypeScript

    - https://www.programming-books.io/essential/typescript/
    
  - TypeScript 핸드북
  
    - https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html
   
  - TypeScript 5.0 한글 
    
    - https://velog.io/@hustle-dev/TypeScript-5.0-%EB%B2%88%EC%97%AD
    
  - todo앱 만들기 언어별 다 있음 연습하기 좋다.!
  
    - https://todomvc.com/
    
    - https://github.com/tastejs/todomvc

  - The Concise TypeScript Book: A Concise Guide to Effective Development in TypeScript. Free and Open Source.

    - https://github.com/gibbok/typescript-book

  - Typescript - 질서정연한 JavaScript 자바스크립트 개발자를 위한 Opentutorials.org

    - https://opentutorials.org/module/6309

<hr>

<hr>

# VS Code tips — Parameter type inlay hints

https://youtu.be/E71eT_bxnAI
