

//Second function

import { faker } from 'https://esm.sh/@faker-js/faker';

// Function to generate a unique id for each expense
const generateUniqueId = (config = {}) => {
  const { prefix } = config;
  if (prefix) {
    return prefix + "-" + Math.random().toString(36).substring(2);
  }
  return Math.random().toString(36).substring(2);
};

// Function to generate random expenses
const generateRandomExpenses = (numExpenses) => {
  const expenses = [];

  for (let i = 0; i < numExpenses; i++) {
    const expense = {
      id: generateUniqueId({ prefix: "exp" }),
      category: faker.helpers.arrayElement(["Food","Travel","EMI","Bills","Medical Expense","Grocery",]),//A particularly helpful method is arrayElement() which returns a random element from an array.
      description: faker.lorem.sentence(),//Module to generate random texts and words.
      amount: faker.finance.amount()//Module to generate finance and money related entries.
    };
    expenses.push(expense);
  }

  return expenses;
};

// Example usage:
const numExpenses = 20;
const randomExpenses = generateRandomExpenses(numExpenses);
console.log(randomExpenses);
