/*
This is a variation of the "Fashion Inventory" problem.

Please DO NOT paste code from before, however. Tackle each problem on its own.

It's the same inventory data structure:

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

The task now is to find all the laced shoes. Output shoe names that contain "lace" in them, and indicate which word contains "lace".

The output format should be structured like this:

[
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
]

Assert the validity of the values and structure of your output.
*/

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
   return shoe.name.split(" ");
 });
}

// find the position of the words in question
function findTargetWordIndex(shoeList, wordToCheck){
  var shoeNames = getShoeNames(shoeList);
  shoeNames.forEach(function(name){
    return name.indexOf(wordToCheck);
  });
}

// return an object, with nameWords and the index of the word in question
function findInventory(inventory){
  return {
    nameWords: getShoeNames(shoeList),
    targetWordIndex: findTargetWordIndex(shoeList, word)
  };
}
