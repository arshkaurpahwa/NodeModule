let calc=require("./calculator.js");  
/* require ka kya kaam hai??  
1. read krta hai
2. execute krta hai
3. return krta hai object [konsa object module.exports] */

console.log(calc)

/* hmne apna function bnaya object bnya usi ko use kiya  */
console.log(calc.addition(6,7))
console.log(calc.subtraction(7,6))
console.log(calc.division(7,6))
console.log(calc.multiplication(7,6))