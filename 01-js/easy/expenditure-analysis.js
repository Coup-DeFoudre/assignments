/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
   transactions=     {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

let transactions =     [{
  id: 1,
  timestamp: 1656076800000,
  price: 1050,
  category: 'Food',
  itemName: 'Pizza',
},{
  id: 2,
  timestamp: 1656076800001,
  price: 100,
  category: 'Food',
  itemName: 'Burger',
},{
  id: 1,
  timestamp: 1656076800002,
  price: 750,
  category: 'grocery',
  itemName: 'Pizza',
},
]
function calculateTotalSpentByCategory(transactions) {
  let categories = {};
  transactions.forEach(transaction => {
    if (categories[transaction.category]) {
      categories[transaction.category] += transaction.price;
    } else {
      categories[transaction.category] = transaction.price;
    }
  });
  let result = [];

  for (let category in categories) {
    result.push({ category, totalSpent: categories[category] });
  } 
  return result;
}

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
