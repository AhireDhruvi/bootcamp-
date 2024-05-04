// Create a function that takes input as an object and return the structure of the input object. 
// Example input 
// const person = {  name: "Some name" , age : 20} 

// Expected output 
// const personStructure = {  name: "String" , age : "Number"} 

// This can be solved in two parts 
// 1. First consider input that has single level of nesting 
// 2. Second stage can have object with any level of nesting.

function getObjectStructure(obj) {
    const structure = {};
    
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        structure[key] = typeof obj[key];
      }
    }
    
    return structure;
  };
  // Example input
  const person = { name: "Some name", age: 30 };
  
  // Call the function
  const personStructure = getObjectStructure(person);
  console.log(personStructure);