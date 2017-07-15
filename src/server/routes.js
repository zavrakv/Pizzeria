var router = require('express').Router();
var data = require('./data');

router.get('/pizzas', getPizzas);

module.exports = router;

function getPizzas(req, res, next) {
  res.status(200).send(data.pizzas);
}
