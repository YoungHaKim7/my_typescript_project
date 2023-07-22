# 참고 자료

https://hyunseob.github.io/2016/10/17/typescript-interface/

# tsc --init

```bash
tsc --init
```

- watch

```bash
tsc -w
```

# interface(공식문서)

https://www.typescriptlang.org/docs/handbook/declaration-files/deep-dive.html 


- Types
  - If you’re reading this guide, you probably already roughly know what a type in TypeScript is. To be more explicit, though, a type is introduced with:

    - A type alias declaration (```type sn = number | string;```)
    - An interface declaration (```interface I { x: number[]; }```)
    - A class declaration (```class C { }```)
    - An enum declaration (```enum E { A, B, C }```)
    - An ```import``` declaration which refers to a type
    - Each of these declaration forms creates a new type name.