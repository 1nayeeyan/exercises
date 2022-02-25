let head = {
    glasses: 1
  };
  
  let table = {
    __proto__: head,
    pen: 3
  };
  
  let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
  };
  
  let pockets = {
    __proto__: bed,
    money: 2000
  };

console.log(pockets.pen);

/*
Use __proto__ to assign prototypes in a way that any property lookup will follow the path:
pockets → bed → table → head. 
For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).

Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
head.glasses as there is no need to go up the prototype chain
*/

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach: []
  };
  
  let lazy = {
    __proto__: hamster,
    stomach:[]
  };
  
  // This one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  console.log( lazy.stomach ); // apple

/*
We have two hamsters: speedy and lazy inheriting from the general hamster object.
When we feed one of them, the other one is also full. Why? How can we fix it?
*/