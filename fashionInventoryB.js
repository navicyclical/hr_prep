/*
This is a variation of the "Fashion Inventory" problem.

Please DO NOT paste code from before, however. Tackle each problem on its own.

It's the same inventory data structure as earlier:

var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

Now output the average cost of all shoes per designer in this format:

var expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};

Write your own unit tests.

Starter Code :
// what's a good main function name to choose?

// what does your outline look like?  don't just dive into coding and make a mess! :)
*/

function getInvValues(inventory){
  var designers = {};
  var prices = [];
  designers.price = inventory.price;
  designers.name = inventory.name;
  var designerShoes = inventory.shoes;
  designerShoes.map(function(shoe){
    prices.push(shoe.price);
  });
  designers.price = prices;
  return designers;
}

function calculateAverageShoePrice(designerInv){
  var designer = getInvValues(inventory);
  var sum = designer.prices.reduce(a, b){
    return a + b;
  }
  return sum;
}

function renderAveragePriceForDesigner(){

}
