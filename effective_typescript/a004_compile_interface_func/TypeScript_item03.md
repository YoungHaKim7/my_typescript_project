---
marp: true
title : Marp
paginate: true
theme : Gaia

class:
- invert

---

typescript 이해 
- 출처 https://hyunseob.github.io/2016/10/17/typescript-interface/

```typescript
interface Shape {
  getArea(): number;
}

class Rect implements Shape {
  width : number;
  height: number;
  constructor(width, height) {
    this.width  = width;
    this.height = height;
  }
} // error code

```

---

```bash
rc/main.ts:5:7 - error TS2420: Class 'Rect' incorrectly implements interface 'Shape'.
  Property 'getArea' is missing in type 'Rect' but required in type 'Shape'.

5 class Rect implements Shape {
        ~~~~

  src/main.ts:2:3
    2   getArea(): number;
        ~~~~~~~~~~~~~~~~~~
    'getArea' is declared here.

src/main.ts:8:15 - error TS7006: Parameter 'width' implicitly has an 'any' type.

8   constructor(width, height) {
                ~~~~~

src/main.ts:8:22 - error TS7006: Parameter 'height' implicitly has an 'any' type.

8   constructor(width, height) {
                       ~~~~~~
```


---

- error가 나도 컴파일 된 모습

```javascript
"use strict";
class Rect {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
} //
```

---

- 위의 코드에서는 Rect라는 클래스가 implements 키워드를 통하여 Shape라는 인터페이스를 구현할 것이라고 선언하는 것이다. 일단 인터페이스를 구현하기로 했으면, 해당 인터페이스에 있는 프로퍼티 및 메소드를 전부 가지거나 구현해야 한다. 여기에서는 getArea라는 메소드를 구현하지 않았으므로 에러가 발생한 모습이다.
- src/main.ts:5:7 - error TS2420: Class 'Rect' incorrectly implements interface 'Shape'.
  Property 'getArea' is missing in type 'Rect' but required in type 'Shape' 

---

- Error 난 코드 Rect 구현 안됨.

```typescript
interface Shape {
  getArea(): number;
}

class Rect implements Shape {
  width : number;
  height: number;
  constructor(width, height) {
    this.width  = width;
    this.height = height;
  }
} // error code

```

---

- Rect 구현한 코드
```typescript
interface Shape {
  getArea(): number;
}

class Rect implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

```

---

- javascript 로 잘 컴파일 된 모습

```javascript
"use strict";
class Rect {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
```

---

- 덕 타이핑(Duck typing)  이해 하기
  - 동적 타이핑 중에서 덕 타이핑이라는 것이 있다 

```typescript
class Duck {
  quack() {
    console.log('꽥!');
  }
}

class Person {
  quack() {
    console.log('나도 꽥!');
  }
}

function makeSomeNoiseWith(duck) {
  duck.quack();
}

makeSomeNoiseWith(new Duck()); // OK
makeSomeNoiseWith(new Person()); // OK

```



---

# 만약 위와 같은 상황에서 Person 클래스에 quack 메소드가 구현되어 있지 않으면 어떻게 될까? 바로 런타임 에러를 발생시키며 프로그램이 종료될 것이다. 이와 같은 런타임 에러를 방지하기 위해서 메소드를 실행시키기 전에 검사할 수도 있지만 코드가 너무 장황해져 덕 타이핑의 장점이 사라진다-
 
  - TypeScript에서는 인터페이스를 활용하면 덕 타이핑을 할 때 메소드를 검사하지 않고도 런타임 에러를 막을 수 있다. 
 
---

- Dock typing 활용한 리팩토링 코드

```typescript
interface Quackable {
  quack(): void;
}

class Duck implements Quackable {
  quack() {
    console.log('꽥!');
  }
}

class Person {
  quack() {
    console.log('나도 꽥!');
  }
}

function makeSomeNoiseWith(duck: Quackable): void {
  duck.quack();
}

makeSomeNoiseWith(new Duck()); // OK
makeSomeNoiseWith(new Person()); // OK


```

---

- Duck 클래스는 명시적으로 Quackable 인터페이스를 구현한다고 선언하였으므로 Quackable 객체만 인자로 받는 makeSomeNoiseWith에 인자로 넘겨지는 것이 이상하지 않다. 그러나 Person 클래스는 조금 이상하다. 분명 Quackable 인터페이스를 구현한다고 선언하지 않았지만 문제없이 인자로 넘어간다.

- 이게 아까 말한대로 TypeScript에서의 덕 타이핑이다. 그냥 Quackable에서 명시했던 quack 메소드만 구현되어 있다면 Quackable 객체로 보는 것이다. Person 클래스에서 quack 메소드를 제거하면 컴파일 에러가 난다. 개발자는 런타임에 메소드 검사를 하지 않고도 런타임 에러를 방지할 수 있다.

- 물론 조금 더 strict하게 타이핑을 하고 싶다면 implements 키워드를 사용하여 명시적으로 선언해주는 것도 여전히 좋은 방법이다. 참고로, Go에서도 이와 유사한 방식의 덕 타이핑을 활용할 수 있다. 이런 방식의 덕 타이핑은 구조적 타이핑(Structural typing) 이라고도 한다.

https://hyunseob.github.io/2016/10/17/typescript-interface/

---

# Interface 알아 보기(TypeScript)

https://www.typescriptlang.org/docs/handbook/declaration-files/deep-dive.html

- 공식문서에 잘 나옴

인터페이스는 클래스에서 구현부가 빠졌다고 이해하면 편하다. 즉, 어떠한 객체가 이러이러한 프로퍼티 혹은 메소드를 가진다고 선언하는 것이다. 실질적인 구현은 이를 구현한다고 선언하는 클래스에 맡긴다.

https://hyunseob.github.io/2016/10/17/typescript-interface/

---

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

---

- interface 예시(TypeScript)

```typescript

class Foo {
    x: number;
    constructor(x: number) {
        this.x = x;
    }
}
// ... elsewhere ...
interface Foo {
    y: number;
}
let a: Foo = new Foo(10); // This will create an instance of the class Foo with x = 10
a.y = 20; // This will add the property y to the instance of the class Foo
console.log(a.x + a.y); // OK

```
```bash
$ node .\interface.js
30
```

---