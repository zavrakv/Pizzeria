const path = require('path');
module.exports = {
  pizzas: getPizzas()
};

function getPizzas() {
  return [
    {id: 1, name: 'margarita', ingredients: ['basil', 'tomato', 'mozzarella'], price: 5.75, img: 'http://localhost:3000/img/margarita.jpg'},
    {id: 2, name: 'peperoni', ingredients: ['peperoni', 'tomato', 'mozzarella', 'parmejano'], price: 7.00, img: 'http://localhost:3000/img/peperoni.jpg'},
    {id: 3, name: 'meat', ingredients: ['bacon', 'tomato', 'mozzarella', 'ham', 'salami'], price: 6.00, img: 'http://localhost:3000/img/meat.jpg'},
    {id: 4, name: 'marina', ingredients: ['shrimp', 'parmejano', 'tuna', 'galric'], price: 15.75, img: 'http://localhost:3000/img/marina.jpg'}
  ];
}
