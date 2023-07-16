---
marp: true
title : Marp
paginate: true
theme : Gaia

class:
- invert

---

# TypeScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours

- https://youtu.be/gieEQFIfgYc

---

# tsc --init

```bash
tree
.
├── build
│   ├── index.html
│   └── js
│       └── main.js
├── src
│   └── main.ts
└── tsconfig.json

```


---

# tsc --init 하면  tsconfig.json 나옴

- 설정하는거 내 입맛에 맞게 하면 됨.

# tsc -w 하면 실시간으로 업데이트 함.

- 수정 하면 알아서 반영됨.

---

# CSS 날로 먹기 tailwindcss

- Tailwind CSS TypeScript 

  - https://flowbite.com/docs/getting-started/typescript/

- TypeScript, Tailwind CSS를 Webpack 으로 말기 

  - https://velog.io/@milmilkim/typescript-tailwind-css%EB%A5%BC-webpack%EC%9C%BC%EB%A1%9C-%EB%A7%90%EA%B8%B0





---

# Tailwind CSS TypeScript  (1)

https://flowbite.com/docs/getting-started/typescript/



# Create a new project 

- 1. Create a new project and run the following command to create a ```package.json``` file in the root folder:

```
npm init
```

---

# Tailwind CSS TypeScript  (2)

# Install TypeScript

- 2. Run the following command to install and require TypeScript as a dependency in your ```package.json``` file:


```
npm i -D typescript
```

---

# Tailwind CSS TypeScript  (3)

- 3. Create a new ```tsconfig.json``` file by running the following command:

```
npx tsc --init
```

# 

---

# Replace the content of the tsconfig.json file using the following code:

```json
{
  "compilerOptions": {
      "lib": ["dom", "es2015"],
      "outDir": "./lib/cjs/",
      "sourceMap": true,
      "declaration": true,
      "noImplicitAny": true,
      "module": "commonjs",
      "target": "es5",
      "allowJs": true,
      "moduleResolution": "node"
  },
  "include": ["src/**/*.ts*"],
  "exclude": ["node_modules", "dist", "lib"]
}
```

---

# 실제로 해 보기

---