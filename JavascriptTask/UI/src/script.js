document.getElementById('expense-form').addEventListener('submit', function(e) {
  e.preventDefault();

  var user = document.getElementById('user').value;
  var expense = document.getElementById('expense').value;
  var category = document.getElementById('category').value;
  var modeOfPayment = document.getElementById('mode-of-payment').value;

  var expenseItem = {
      user: user,
      expense: expense,
      category: category,
      modeOfPayment: modeOfPayment
  };

  addExpense(expenseItem);
  document.getElementById('expense-form').reset();
});

function addExpense(expense) {
  var expenseList = document.getElementById('expense-list');

  var expenseItemElement = document.createElement('div');
  expenseItemElement.classList.add('card', 'mb-2');

  var expenseItemBody = document.createElement('div');
  expenseItemBody.classList.add('card-body');

  expenseItemBody.innerHTML = `
      <p><strong>User:</strong> ${expense.user}</p>
      <p><strong>Expense:</strong> ${expense.expense}</p>
      <p><strong>Category:</strong> ${expense.category}</p>
      <p><strong>Mode of Payment:</strong> ${expense.modeOfPayment}</p>
  `;

  expenseItemElement.appendChild(expenseItemBody);
  expenseList.appendChild(expenseItemElement);

  updateTotalExpense(expense.expense);
}

function updateTotalExpense(expenseAmount) {
  var totalExpensesElement = document.getElementById('total-expenses');
  var currentTotal = parseFloat(totalExpensesElement.textContent);
  var newTotal = currentTotal + parseFloat(expenseAmount);
  totalExpensesElement.textContent = newTotal.toFixed(2);
}
