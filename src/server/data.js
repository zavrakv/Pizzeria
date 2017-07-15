module.exports = {
  pizzas: getPizzas()
};

function getPizzas() {
  return [
    {id: 1, name: 'margarita', ingredients: ['basil', 'tomato', 'mozzarella'], price: 5.75},
    {id: 2, name: 'peperoni', ingredients: ['peperoni', 'tomato', 'mozzarella', 'parmejano'], price: 7.00},
    {id: 3, name: 'meat', ingredients: ['bacon', 'tomato', 'mozzarella', 'ham', 'salami'], price: 6.00},
    {id: 4, name: 'marina', ingredients: ['shrimp', 'parmejano', 'tuna', 'galric'], price: 15.75}
  ];
}
