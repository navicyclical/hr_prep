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

// go over the input array, grab just the shoe name, return as an array
function getShoeNames(shoeList){
  return shoeList.map(function(shoe){
    return shoe.name;
  });
}

// find the position of the wordsin question
function findTargetWordIndex(shoeList, wordToCheck){
  var shoeNames = getShoeNames(shoeList);
  for (var i = 0; i < shoeNames.length; i++){
    var word = shoeNames[i];
    if (word === wordToCheck){
      return i;
    }
  }
}

// return an object, with nameWords and the index of the word in question
