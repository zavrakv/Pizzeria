describe('Cart service', function () {
  
  var CartService;
  var items = [
    {id: 1, name: 'margarita', ingredients: ['basil', 'tomato', 'mozzarella'], price: 5.75, img: 'http://localhost:3000/img/margarita.jpg'},
    {id: 2, name: 'peperoni', ingredients: ['peperoni', 'tomato', 'mozzarella', 'parmejano'], price: 7.00, img: 'http://localhost:3000/img/peperoni.jpg'},
    {id: 3, name: 'meat', ingredients: ['bacon', 'tomato', 'mozzarella', 'ham', 'salami'], price: 6.00, img: 'http://localhost:3000/img/meat.jpg'}
  ];
  
  beforeEach(module('app'));
  
  beforeEach(inject(function($injector) {
    CartService = $injector.get('CartService');
  }));
  
  it('should set items based on api call and return them', function () {
    CartService.setItems(items);
    var goods = CartService.getItems();
    expect(goods).toEqual(items);
  });
  
  it('should return array of items', function () {
    expect(Object.prototype.toString.call( CartService.getItems() )).toEqual('[object Array]');
  });
  
  it('should add item to cart', function () {
    CartService.addToCart(items[0]);
    CartService.addToCart(items[1]);
    expect(CartService.getCartOrder().length).toEqual(2)
  });
  
  it('should remove item from cart by id', function () {
    CartService.addToCart(items[0]);
    CartService.addToCart(items[1]);
    var remained = CartService.removeFromCart(2)[0];
    expect(remained.name).toEqual('margarita')
  });
  
  it('should properly count prices', function () {
    CartService.addToCart(items[1]);
    CartService.addToCart(items[2]);
    expect(CartService.countPrice()).toEqual(13)
  });
  
  it('should get items in cart', function () {
    CartService.addToCart(items[0]);
    CartService.addToCart(items[1]);
    CartService.addToCart(items[2]);
    expect(CartService.getCartOrder().length).toEqual(3)
  });
  
  
});