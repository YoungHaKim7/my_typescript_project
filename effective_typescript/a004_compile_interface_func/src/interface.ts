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
// document.write(`An example sentence with the value of a.x + a.y is: ${a.x + a.y}`); // This will write "An example sentence with the value of a.x + a.y is: 30" to the screen