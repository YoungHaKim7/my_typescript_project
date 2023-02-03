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
-a---        2023-02-03 오후 12:35             25 README.md

PS D:\hello_typescript> node main.js

Hello, world ! TypeScript

```

# Microsoft TypeScript Tutorials

 https://github.com/microsoft/TypeScript


# EbookFoundation (TypeScript)

https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-langs.md#typescript


# essential TypeScript

https://www.programming-books.io/essential/typescript/
