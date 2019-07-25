// function outerFunction() {
//   let a = 13;
//   let b = 20;
//   console.log(a);
//   console.log(b);
//   function innerFunction() {
//     let c = 17;
//     let d = 25;
//     b = c + d;
//     console.log(b);
//   }
//   console.log(j);
//   innerFunction();
//   console.log(b);
//   let j = 100;
// }
// outerFunction();
// ex2
// function sum(a) {
//   return function sum2(b) {
//     return a + b;
//   };
// }
// console.log(sum(4)(5));
// ex3
// var arr = new Array(
//   { nume: "Ion", varsta: 30 },
//   { nume: "Alex", varsta: 18 },
//   { nume: "Dan", varsta: 5 },
//   { nume: "Andrei", varsta: 5 },
//   { nume: "Cristi", varsta: 44 }
// );
// function medVarsta() {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i].varsta / arr.length;
//   }
//   return sum;
// }
// console.log(medVarsta());
// ex3 v2
// var arr = new Array(
//   { nume: "Ion", varsta: 30 },
//   { nume: "Alex", varsta: 18 },
//   { nume: "Dan", varsta: 5 },
//   { nume: "Andrei", varsta: 5 },
//   { nume: "Cristi", varsta: 44 }
// );
// function medVarsta(passedArray) {
//   let sum = 0;
//   passedArray.forEach(person => {
//     sum += person.varsta;
//   });
//   return sum / passedArray.length;
// }
// console.log(medVarsta(arr));
// ex4
// let myArray = [
//   {
//     nume: "Gabi",
//     varsta: 10,
//     getNume: function() {
//       return this.nume;
//     }
//   },
//   {
//     nume: "Ion",
//     varsta: 30,
//     getNume: function() {
//       return this.nume;
//     }
//   }
// ];
// myArray.forEach(persoana => {
//   console.log(persoana.getNume());
// });
// ex 5
let calculator = {
  a: 0,
  b: 0,
  read: function() {
    this.a = Number(prompt("Add first numebr", "Add first numebr"));
    this.b = Number(prompt("Add second numebr", "Add second numebr"));
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function() {
    return this.a * this.b;
  }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
