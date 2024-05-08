
// Array of Expenses
const expenses = [
    {
      id: "e1",
      amount: 100,
      description: "Grocery",
      category: "Food",
      date: new Date("2023-05-01")
    },
    {
      id: "e2",
      amount: 50,
      description: "Gas",
      category: "Transportation",
      date: new Date("2023-05-02")
    },
    {
      id: "e3",
      amount: 75,
      description: "Electricity",
      category: "Utilities",
      date: new Date("2023-05-03")
    }
  ];
  
  // 1. Find an expense with a specific id
  function findExpenseById(id) {
    return expenses.find(expense => expense.id === id);
  }
  
  // 2. Find expenses by category and return total expense for that category
  function findExpenseByCategory(category) {
    const expensesByCategory = expenses.filter(expense => expense.category === category);
    const totalExpense = expensesByCategory.reduce((total, expense) => total + expense.amount, 0);
    return { expenses: expensesByCategory, totalExpense };
  }
  
  // 3. Update an expense by id
  function updateExpenseById(id, updateObject) {
    const expenseIndex = expenses.findIndex(expense => expense.id === id);
    if (expenseIndex !== -1) {
      const updatedExpense = { ...expenses[expenseIndex], ...updateObject };
      expenses[expenseIndex] = updatedExpense;
    }
  }
  
  // 4. Delete an expense by id
  function deleteExpenseById(id) {
    const expenseIndex = expenses.findIndex(expense => expense.id === id);
    if (expenseIndex !== -1) {
      expenses.splice(expenseIndex, 1);
    }
  }
  
  // 5. Get total expenses by date range
  function getTotalExpensesByDateRange(startDate, endDate) {
    const expensesInRange = expenses.filter(expense => {
      const expenseDate = expense.date;
      return expenseDate >= startDate && expenseDate <= endDate;
    });
    const totalExpense = expensesInRange.reduce((total, expense) => total + expense.amount, 0);
    return totalExpense;
  }
  
  // Example usage
  console.log("Find expense with id 'e2':", findExpenseById("e2"));
  console.log("Find expenses by category 'Food':", findExpenseByCategory("Food"));
  updateExpenseById("e1", { category: "Groceries" });
  console.log("Updated expenses:", expenses);
  deleteExpenseById("e3");
  console.log("Expenses after deletion:", expenses);
  const startDate = new Date("2023-05-01");
  const endDate = new Date("2023-05-03");
  console.log("Total expenses from 2023-05-01 to 2023-05-03:", getTotalExpensesByDateRange(startDate, endDate));
