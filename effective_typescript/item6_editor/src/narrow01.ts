// https://www.typescriptlang.org/docs/handbook/2/narrowing.html 

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
 
function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    console.log("swimswim")
    animal;
      
// (parameter) animal: Fish | Human
  } else {
    animal;
      
// (parameter) animal: Bird | Human
  }
}

const fish = { swim: () => console.log("swimswim") };
console.log(move(fish));