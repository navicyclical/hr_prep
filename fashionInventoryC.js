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

function assertEqual(actual, expected, testName){
  if (actual === expected){
    console.log("passed");
  } else {
    console.log("FAILED" + " " + testName + " expected " + expected + " , but got " + actual);
  }
}

// for each member of that shoe array of objects, grab only those ones that are black
function getBlackShoes(designerName, shoeList){
  aBlackShoe = [];
  shoeList.forEach(function(shoe){
    if (shoe.name.includes('black')){
      aBlackShoe.push(designerName, shoe.name, shoe.price);
    }
  });
  return aBlackShoe;
}

// go over the designer objects, grab the designer name and the shoe array of objects
function goOverGoods(designerObject){
  return getBlackShoes(designerObject.name, designerObject.shoes);
}


// map the inventory array, apply goOverGoods and getBlackShoes as callbacks, return each shoe that is black
function renderGoodsForColor(inventory){
  return inventory.map(function(designerObject){
    return goOverGoods(designerObject);
  }).join('\n');
}

assertEqual(typeof renderGoodsForColor(inventory), 'string', 'should return a string');
assertEqual(getBlackShoes(inventory[0].name, inventory[0].shoes).length, 3, 'should be 4 members in the array');
