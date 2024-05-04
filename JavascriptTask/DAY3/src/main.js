
//First function
//constructor function 
function Expense(amount, description, category, modeOfPayment, date){
    this.id = generateExpenseId();
    this.amount = amount;
    this.description = description;
    this.category = category;
    this.modeOfPayment = modeOfPayment;
    this.date = date;
  }
  //unique id generator function
  function generateExpenseId() {
    const uniqueId = Math.random().toString(36).substring(2, 8); 
    const expenseId = "Expense-" + uniqueId;
    return expenseId;
  }
  
  //example of usage
  const e1 = new Expense(1000, "spent on shopping", "makeup", "Upi", "02/05/2024");
  console.log(e1);
  
  
  
  