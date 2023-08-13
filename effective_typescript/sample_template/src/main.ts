// ~~~~~ 1 error code ~~~~
// interface Shape {
//   getArea(): number;
// }

// class Rect implements Shape {
//   width : number;
//   height: number;
//   constructor(width, height) {
//     this.width  = width;
//     this.height = height;
//   }
// } // error code


// ~~~~~~1-1 correct code~~~~~~~~~~~~~~~`

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
// ~~~~~~end code