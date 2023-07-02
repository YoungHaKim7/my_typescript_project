# How to set up TypeScript with Node.js and Express

https://blog.logrocket.com/how-to-set-up-node-typescript-express/

# VSCode single to double quote automatic replace

- 강제로 format 해주기

```
$ npx prettier --write \app.ts
```

https://stackoverflow.com/questions/48864985/vscode-single-to-double-quote-automatic-replace

# Package.json


```
$ npm i express

$ npm i -D typescript prettier eslint-config-prettier eslint-plugin-prettier

```
# tsconfig.json setting

```
$ npx tsc --init
```
- 주요 기능 설명

```
{
  "compilerOptions": {
    "target": "es5",		// 컴파일 후 생성될 파일의 ECMAScript 버전
    "module": "commonjs",	// 컴파일 후 생성될 파일이 사용하는 모듈 버전
    "outDir": "dist/",		// 파일이 생성될 폴더
    "esModuleInterop": true	// 'require'와 'import' 호환
  },
  "include": ["src/*.ts"]	// 사용할 폴더 및 파일
}
```

# tsconfig ```npx eslint --inti```

```
$ npx eslint --init
You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
  @eslint/create-config
Ok to proceed? (y) y
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · standard-with-typescript
✔ What format do you want your config file to be in? · JSON
Checking peerDependencies of eslint-config-standard-with-typescript@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-config-standard-with-typescript@latest @typescript-eslint/eslint-plugin@^5.50.0 eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 eslint-plugin-promise@^6.0.0 typescript@*
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
Installing eslint-config-standard-with-typescript@latest, @typescript-eslint/eslint-plugin@^5.50.0, eslint@^8.0.1, eslint-plugin-import@^2.25.2, eslint-plugin-n@^15.0.0, eslint-plugin-promise@^6.0.0, typescript@*

added 218 packages, and audited 289 packages in 4s

91 packages are looking for funding
  run `npm fund` for details

2 moderate severity vulnerabilities

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
Successfully created .eslintrc.json file in /Users/globalyoung/Documents/test/test/rust/html_la/my_typescript_project/effective_typescript/a001_typescript_setting_eslint_prettier
```

# Prettier & Eslint

https://velog.io/@das01063/VSCode%EC%97%90%EC%84%9C-ESLint%EC%99%80-Prettier-TypeScript-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0