/*
You have a fashion catalog, an inventory of items from various high-fashion designers.
Each designer has a lineup of shoes. Each shoe has a name and a price.

It looks like this:
var currentInventory = [
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

Look up all the shoes across all the designers and list them out in a flat list:
{designer name}, {shoe name}, {price}
{designer name}, {shoe name}, {price}

E.g.,
Brunello Cucinelli, tasselled black low-top lace-up, 1000
Brunello Cucinelli, tasselled green low-top lace-up, 1100
...

Write your own unit tests.

*/

// what me and phyllis worked on
function renderInventory(inventory) {
  // define a variable to list the inventory
  var shoeList = '';
  // get each designer object, loop through
  for (var i = 0; i < inventory.length; i++){
    // abstract designer name
    var designer = inventory[i].name;
    // loop over the shoes array of objects, abstract name + price
    for (var j = 0; j < inventory[i].shoes.length; j++){
      var shoe = inventory[i].shoes[j];
      var shoeName = shoe.name;
      var shoePrice = shoe.price;
      // join them together, concat onto the var from earlier
      shoeList += designer + ', ' + shoeName + ', ' + shoePrice + '\n';
    }
  }
  // return the inventory
  return shoeList;
}
// based on HR's answer

// using the name and shoe key/value pairs on the designerObject, we apply a callback via Array.map - the callback takes the shoe list, and returns each designerName, shoeName and shoePrice as a string.
function getShoesFromDesigner(designerName, listOfShoes){
  return shoeList.map(function(shoe){
    return [designerName, shoe.name, shoe.price].join(', ';)
  });
}

// using the designerObject itself, we grab the designerObject.name and each designer's shoes. We return that as a new string.
function getGoodsFromDesigner(designerObject){
  return getShoesFromDesigner(designerObject.name, designerObject.shoes).join('\n');
}

// using the inventory array of objects, we apply a callback to inventory with Array.map. This will apply the getGoodsFromDesigner function as a callback, that callback will go over the key/value pairs and return all the designer's shoes on new lines.
function listInventory(inventory){
  return inventory.map(function(designerObject){
    return getGoodsFromDesigner(designerObject)
  }).join('\n');
}


assertEqual(renderInventory(currentInventory), expected, 'inventory should match expected');

// this is HR's answer:

// use .map to apply a callback to the array of objects. We need to get the designer, name of the shoe, price of the shoe and join them with a ",". It will be an string.
function renderShoesForDesigner(designer, shoeList){
  return shoeList.map(function(shoe){
    return [designer, shoe.name, shoe.price].join(', ')
  });
}

// returns the string from the join of the shoe designer, name, and price. use
// \n to return a new line.
function renderGoodsStringForDesigner(designerObject){
  return renderShoesForDesigner(designerObject.name, designerObject.shoes).join('\n')
}

//taking the inventory object, applies the renderGoodsStringForDesigner function
// as a callback and applies to to the designer object using .map and returns a formatted
// line.
function renderInventory(inventory){
  return inventory.map(function(designerObject){
    return renderGoodsStringForDesigner(designerObject)
  }).join('\n');
}

var designerObject = currentInventory[0];

var shoesForDesigner = renderShoesForDesigner(designerObject.name, designerObject.shoes);
var actualShoeString = shoesForDesigner[0];
var expectedShoeString = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000';

var actualGoodsStringForDesigner = renderGoodsStringForDesigner(designerObject);
var expectedGoodsStringForDesigner = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050';

assertEqual(actualGoodsStringForDesigner, expectedGoodsStringForDesigner, 'should return goods for designer in proper format');

var output = renderInventory(currentInventory);
assertEqual(typeof output, 'string', 'should return a string');

var outputArray = output.split("\n");
var expectedOutputString = 'Gucci, black leather laced sneakers, 900';
assertEqual(outputArray.length, 6, 'should return six lines');
assertEqual(outputArray.pop(), expectedGoodsStringForDesigner, 'should return expected lines of output');
