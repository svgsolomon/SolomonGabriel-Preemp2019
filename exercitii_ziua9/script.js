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
var arr = new Array(
  { nume: "Ion", varsta: 30 },
  { nume: "Alex", varsta: 18 },
  { nume: "Dan", varsta: 5 },
  { nume: "Andrei", varsta: 5 },
  { nume: "Cristi", varsta: 44 }
);
function medVarsta() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].varsta / arr.length;
  }
  return sum;
}
console.log(medVarsta());
