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
function average(numbers){
  return sum(numbers) / numbers.length;
}

function sum(numbers){
  return numbers.reduce(function(num1, num2){
    return num1 + num2;
  });
}

//grab the price values from inventory
function getInvPrices(designerInv){
  return designerInv.shoes.map(function(shoe){
    // go through the object, apply .map with a callback on the shoes array in the designer object
    return shoe.price;
  });
}
// calculate averages and build the designer object
function calculateAveragePricePerDesigner(designerInv){
  return {
    name: designerInv.name,
    averagePrice: average(getInvPrices(designerInv))
  }
}
// return the single designer as an object of all of them
function renderDesignersWithAveragePrices(inventory){
  return {
    designers: inventory.map(calculateAveragePricePerDesigner);
  }
}

function assertEqual(actual, expected, testName){
  if (actual === expected){
    console.log("passed");
  } else {
    console.log("FAILED" + " " + testName + " expected " + expected + " , but got " + output);
  }
}

var output = renderDesignersWithAveragePrices(inventory);
var designer = inventory[0];
var expectedAveragePrice = 1025;

assertEqual(typeof output, 'object', 'should return an object');
assertEqual(getInvPrices(designer), [1000, 1100, 950, 1050], 'should return an array of values');
