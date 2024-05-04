
//ways to write es5 function
// Named function

function sum(n1,n2){
    return n1 + n2;
}
sum(45,66);

//immediately invoked function expression(IIFE)
var add = (function() {
    return function(a, b) {
      return a + b;
    };
  })();

//function in array
var functionsArray = [
    function(a, b) { return a + b; },
    function(a, b) { return a * b; }
];

//ways to write es6 function
//arrow function
const addition =  (n1,n2)=> {
    const result = {
        input1:n1,
        input2:n2,
        sum:n1+n2,
    }
    return result;
};
console.log(addition(20,50));

//Rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
