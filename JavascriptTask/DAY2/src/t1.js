// how to write function in js 
// what are inputs (argument)
// what are output (return type)

function createExpenseObject(description,category,amount){
    // writing all the instruction of steps you want to perform 
    let tempExpense = {
        description: description,
        category: category,
        amount: amount,
        
    }; // empty object
    return tempExpense ;
}

let e1 = createExpenseObject("travel from station to auto");