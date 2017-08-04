/*Write a function 'transformFirstAndLast' that takes in an array, and returns an object with:
1) the first element of the array as the object's key, and
2) the last element of the array as that key's value.

Example input:
['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']

Function's return value (output):
{
  Queen : 'Beyonce'
}
*/
Do not change the input array. Assume all elements in the input array will be of type 'string'.

function transformFirstAndLast(array){
  var anObject = {};
  var aKey = array[0];
  var aValue = array[array.length - 1];
  anObject[aKey] = aValue;
  return anObject;
}

console.log(transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']));

/*
Write a function called "getAllKeys" which returns an array of all the input object's keys.
Example input:
{
  name : 'Sam',
  age : 25,
  hasPets : true
}

Function's return value (output) :
['name', 'age', 'hasPets']

Do not use "Object.keys" to solve this prompt.

Note that your function should be able to handle any object passed in it.

E.g. it should also handle an input like:
{
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
}

Function's return value (output):
['a', 'number', 'hungry', 'grammyWins']
*/

function getAllKeys(object){
  var keyArray = [];
  for (var key in object){
    keyArray.push(key);
  }
  return keyArray;
}

console.log(getAllKeys({
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
}));

/*
Write a function 'fromListToObject' which takes in an array of arrays,
and returns an object with each pair of elements in the array as a key-value pair.

Example input:
[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

Function's return value (output):
{
  make : 'Ford'
  model : 'Mustang',
  year : 1964
}

Do not change the input string.
Assume that all elements in the array will be of type 'string'.

Note that the input may have a different number of elements than the given sample.
For instance, if the input had 6 values instead of 4,
your code should flexibly accommodate that.
*/

function fromListToObject(array){
  var anObject = {};
  for (var i = 0; i < array.length; i++){
    var subArray = array[i];
    var key = subArray[0];
    var value = subArray[1];
    anObject[key] = value;
  }
  return anObject;
}

console.log(fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]));

/*
Write a function called "listAllValues" which returns an array of all the
input object's values.

Example input:
{
  name : 'Krysten',
  age : 33,
  hasPets : false
}

Function's return value (output):
['Krysten', 33, false]

Note that the input may have a different number of keys and values than the given sample.

E.g. it should also handle an input like:
{
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
}

Function's return value (output):
['a', 11, true, 1]
*/

function listAllValues(obj){
  var arrayOfValues = [];
  for (var values in obj){
    arrayOfValues.push(obj[values]);
  }
  return arrayOfValues;
}

console.log(listAllValues({
  name : 'Krysten',
  age : 33,
  hasPets : false
}));

/*

Write  a function called "convertObjectToList" which converts an object literal
into an array of arrays, like this:
Argument:
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:
[['name', 'Holly'], ['age', 35], ['role', 'producer']]

Note that your function should be able to handle ANY object like this,
not just the exact sample provided above.

E.g., it should also be able to handle this,
or any other object containing simple key-value pairs.
*/

function convertObjectToList(obj){
  var list = [];
  for (var key in obj){
    list.push([key, obj[key]]);
  }
  return list;
}
console.log(convertObjectToList({
  name: 'Holly',
  age: 35,
  role: 'producer'
}));

/*
Write a function called "getProperty".

Given an object and a key, "getProperty" returns the value of the property at the given key.

Notes:
* If there is no property at the given key, it should return undefined.

var obj = {
  key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'
*/

function getProperty(obj, key){
  for (var name in obj){
    if (key === name){
      return obj[key];
    } else {
      return undefined;
    }
  }
}

console.log(getProperty({
  name: "Sunny",
  breed: "domestic shorthair",
  age: 12
}, "age"));

/*
Write a function called "addProperty".

Given an object, and a key, "addProperty" sets a new property
on the given object with a value of true.

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true
*/

function addProperty(obj, key){
  obj.key = true;
}

var sunny = {
  name: "Sunny",
  species: "cat",
  age: 12
}

console.log(addProperty(sunny, "cat"));

/* Given a "person" object, that contains an "age" property,
"isPersonOldEnoughToDrinkAndDrive" returns whether the given person is old enough
to legally drink and drive in the United States.

Notes:
* The legal drinking age in the United States is 21.
* The legal driving age in the United States is 16.
* It is always illegal to drink and drive in the United States.

var obj = {
  age: 45
};
var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> false
*/

var person = {
  name: "Sunny",
  species: "cat",
  age: 20
}

function isPersonOldEnoughToDrinkAndDrive(person){
  if (person.age => 16){
    return false;
  }
}
console.log(isPersonOldEnoughToDrinkAndDrive(person));

// Write a function called "extend".
//
// Given two objects, "extend" adds properties from the 2nd object to the 1st object.
//
// Notes:
// * Add any keys that are not in the 1st object.
// * If the 1st object already has a given key, ignore it (do not overwrite the property value).
// * Do not modify the 2nd object at all.
//
// var obj1 = {
//   a: 1,
//   b: 2
// };
// var obj2 = {
//   b: 4,
//   c: 3
// };
//
// extend(obj1, obj2);

// console.log(obj1); // --> {a: 1, b: 2, c: 3}
// console.log(obj2); // --> {b: 4, c: 3}

function extend(obj1, obj2){
  // loop over the 2nd object
  for (var property in obj2){
    // if the property isn't found in the 1st object
    if (!obj1.hasOwnProperty(property)){
      // make a property in obj1
      obj1[property] = obj2[property];
    }
  }
  return obj1;
}


// Write a function called "removeNumbersLargerThan".
//
// Given a number and an object, "removeNumbersLargerThan"
// removes any properties whose values are numbers greater than the given number.
//
var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
// removeNumbersLargerThan(5, obj);
// console.log(obj); // --> { b: 2, c: montana}

function removeNumbersLargerThan(num, obj){
  for (var number in obj){
    if (obj[number] === NaN){
      continue;
    if (obj[number] > num){
      obj.delete(obj[number]);
      }
    }
  }
  return obj;
}
console.log(removeNumbersLargerThan(obj));


function removeNumbersLargerThan(num, obj){
  for (var number in obj){
    if (typeof obj[number] === "string"){
      continue;
    if (obj[number] > num){
      obj.delete(obj[number]);
      }
    }
  }
  return obj;
}

/*
Write a function called "removeStringValuesLongerThan".

Given an number and an object, "removeStringValuesLongerThan" removes any properties
on the given object whose values are strings longer than the given number.

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }

*/
function removeStringValuesLongerThan(num, obj){
  for (var value in obj){
    if (obj[value].length > num){
      delete obj[value];
    }
  }
  return obj;
}

/*
Write a function called "removeArrayValues".

Given an object, "removeArrayValues" removes any properties whose values are arrays.

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> {b: 2}
*/

function removeArrayValues(obj) {
  for (var value in obj){
    if (Array.isArray(obj[value]) === true){
      delete obj[value];
    }
  }
  return obj;
}

/*
var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
*/

function removeNumberValues(obj) {
  for (var value in obj){
    if (!isNaN(obj[value])){
      delete obj[value];
    }
  }
  return obj;
}

/*
Write a function called "removeStringValues".

Given an object, "removeStringValues" removes any properties on the given object whose values are strings.

var obj = {
  name: 'Sam',
  age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }
*/

function removeStringValues(obj) {
  for (var value in obj){
    if (typeof obj[value] === "string"){
      delete obj[value];
    }
  }
  return obj;
}

/*
Write a function called "convertDoubleSpaceToSingle".

Given a string, "convertDoubleSpaceToSingle" returns the passed in string,
with all the double spaces converted to single spaces.

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
*/

function convertDoubleSpaceToSingle(str) {
  var words = str.split(" ");
  var newSentence = [];
  for (var i = 0; i < words.length; i++){
    var word = words[i];
    if (word){
      newSentence.push(word);
    }
  }
  return newSentence.join(" ");
}
console.log(convertDoubleSpaceToSingle("string  with  double  spaces"));

/*
Write a function called "addToFrontOfNew".

Given an array and an element, "addToFrontOfNew"
returns a new array containing all the elements of the given array,
with the given element added to the front.

Important: It should be a NEW array instance, not the original array instance.

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); --> [1, 2]
*/

function addToFrontOfNew(arr, element) {
  var newArray = arr.slice();
  newArray.unshift(element);
  return newArray;
}

/*
Write a function called "getAllElementsButNth".

Given an array and an index, "getAllElementsButNth" returns an array with all
the elements but the nth.

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
*/

function getAllElementsButNth(array, n){
  var newArray = [];
  if (array.length === 0){
    return newArray;
  } else {
    for (var i = 0; i < array.length; i++){
      if (!i === n){
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
}

/*
Given a character and a string, "getIndexOf" returns the first position of
the given character in the given string.

Notes:
* Strings are zero indexed, meaning the first character in a string is at position 0.
* When a string contains more than one occurrence of a character,
  it should return the index of its first occurrence.
* If the character does not exist in the string, it should return -1.
* Do not use the native indexOf function in your implementation.

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2
*/
function getIndexOf(char, str) {
  for (var i = 0; i < str.length; i++){
    var letter = str[i];
    if (letter === char){
      return i;
    }
  }
  return -1;
}

/*
Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
*/


function findMinLengthOfThreeWords(word1, word2, word3){
  var words = [];
  var length = 0;
  words.push(word1, word2, word3);
  for (var i = 0; i < words.length; i++){
    var word = words[i];
    length = words[0].length;
    if (word.length > length){
      length = word.length;
    } else if (length < word.legnth){
      return length;
    }
  }
}

/*
Write a function called "getElementsThatEqual10AtProperty".

Given an object and a key, "getElementsThatEqual10AtProperty"
returns an array containing all the elements of the array located at the given key
that are equal to ten.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no elements equal to 10, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]
*/

var obj = {
  key: [1000, 10, 50, 10]
};

function getElementsThatEqual10AtProperty(obj, key){
  var elements = [];
   for (var keys in obj){
     for (var i = 0; i < obj[keys].length; i++){
       if (obj[keys][i] !== 10){
         return elements;
       } else if (obj[keys][i] === 10){
         elements.push(obj[keys][i]);
       }
     }
   }
   return elements;
 }

console.log(getElementsThatEqual10AtProperty(obj, 10));

/*
Write a function called "select".

Given an array and an object, "select" returns a new object whose properties
are those in the given object AND whose keys are present in the given array.

Notes:
* If keys are present in the given array, but are not in the given object,
it should ignore them.
* It does not modify the passed in object.


var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
*/

function select(arr, obj){
  var newObject = {};
  for (var i = 0; i < arr.length; i++){
    var element = arr[i];
    for (var key in obj){
      if (key === element){
        newObject[key] = obj[key];
      }
    }
  }
  return newObject;
}

console.log(select(arr, obj));

/*
Write a function called "getElementsLessThan100AtProperty".

Given an object and a key, "getElementsLessThan100AtProperty"
returns an array containing all the elements of the array located at the given
key that are less than 100.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no elements less than 100, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]
*/

function getElementsLessThan100AtProperty(obj, key) {
  var elements = [];
  if (![obj]key){
    return elements;
  }
   for (var i = 0; i < obj[key].length; i++){
     var element = obj[key][i];
     if (element < 100){
       elements.push(element);
     }
   }
  return elements;
}

function getElementsLessThan100AtProperty(obj, key) {
  var elements = [];
   for (var keys in obj){
     for (var i = 0; i < obj[keys].length; i++){
       if (obj[keys][i] !== 100){
         return elements;
       } else if (obj[keys][i] < 100){
         elements.push(obj[keys][i]);
       }
     }
   }
  return elements;
}

/*
Write a function called "countAllCharacters".

Given a string, "countAllCharacters" returns an object where each key is a
character in the given string.
The value of each key should be how many times each character
appeared in the given string.

Notes:
* If given an empty string, countAllCharacters should return an empty object.

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
*/

function countAllCharacters(str){
  var charCount = {};
  var characters = str.split("");
  for (var i = 0; i < characters.length; i++){
    var character = characters[i];
    if (charCount[character] === undefined){
      charCount[character] = 1;
    } else {
      charCount[character] ++;
    }
  }
  return charCount;
}
console.log(countAllCharacters('banana'));

/*


Write a function called "getElementsGreaterThan10AtProperty".

Given an object and a key, "getElementsGreaterThan10AtProperty" returns an array containing the elements within the array, located at the given key, that are greater than 10.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no elements greater than 10, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]
*/

function getElementsGreaterThan10AtProperty(obj, key){
  var elements = [];
  if (!obj[key]){
    return elements;
  }
  for (var i = 0; i < obj[key].length; i++){
    var element = obj[key][i];
    if (element > 10){
      elements.push(element);
    }
  }
  return elements;
}

function getOddLengthWordsAtProperty(obj, key) {
  var oddLength = [];
  if (obj[key].length === 0 || !obj[key]){
    return oddLength;
  } else if (!Array.isArray(obj[key])){
    return oddLength;
  }
  for (var i = 0; i < obj[key].length; i++){
    var element = obj[key][i];
    if (element.length % 2 === 1){
      oddLength.push(element);
    }
  }
  return oddLength;
}

function getLargestElementAtProperty(obj, key) {
  var largest;
  if (!obj[key] || obj[key].length === 0){
    return undefined;
  } else if (!Array.isArray(obj[key])){
    return undefined;
  } else {
    for (var i = 0; i < obj[key].length; i++){
      var currentElement = obj[key][i];
      var largest = obj[key][0];
      if (currentElement > largest){
        largest = currentElement;
      }
    }
  }
  return largest;
}


/*
Write a function called "getElementOfArrayProperty".

Given an object, a key, and a numerical index, "getElementOfArrayProperty"
returns the value of the element at the given index of the array located within
the given object at the given key.

Notes:
* If the array is empty, it should return undefined.
* If the given index is out of range of the array located at the given key,
it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'
*/

function getElementOfArrayProperty(obj, key, index) {
  if (!obj[key] || obj[key].length === 0){
    return undefined;
  } else if (!Array.isArray(obj[key])){
    return undefined;
  } else if (index > obj[key].length){
    return undefined;
  } else {
    for (var i = 0; i < obj[key].length; i++){
      var element = obj[key][i];
      if (index === i){
        return element;
      }
    }
  }
}

/*
Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of
the shortest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
*/

function getLengthOfShortestElement(arr){
  var length = 0;
  if (arr.length === 0){
    return 0;
  } else {
    for (var i = 0; i < arr.length; i++){
      var element = arr[i];
      length = arr[0].length;
      if (element.length < length){
        length = element.length;
      }
    }
  }
  return length;
}

function getLongestElement(arr) {
  var longestElement;
  if (arr.length === 0){
    return 0;
  } else {
    for (var i = 0; i < arr.length; i++){
      var currentElement = arr[i];
      var length = arr[0].length;
      if (currentElement.length > length){
        longestElement = currentElement;

      }
    }
    return longestElement;
  }
}

function getLongestElement(arr) {
  var longestElement = 0;
  if (arr.length === 0){
    return 0;
  } for (var i = 0; i < arr.length; i++){
      var currentElement = arr[i];
      var length = arr[0].length;
      if (currentElement.length > length){
        longestElement = currentElement;
      } else if (currentElement.length === length){
        return currentElement;
      }
    return longestElement;
  }
}
// the code that worked:
function getLongestElement(arr) {
var longestElement = 0;
  if (arr.length === 0){
    return 0;
  } for (var i = 0; i < arr.length; i++){
      var currentElement = arr[i];
      var length = arr[0].length;
      if (currentElement.length > longestElement.length){
        longestElement = currentElement;
      } else if (currentElement.length === length){
        longestElement = arr[0];
      }
    }
  return longestElement;
}

/*
Write a function called "findSmallestElement".

Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
*/

function findSmallestElement(arr) {
  if (arr.length === 0){
    return 0;
  }
  var smallestNumber = arr[0];
  for (var i = 0; i < arr.length; i++){
    var currentElement = arr[i];
    if (currentElement < smallestNumber){
      smallestNumber = currentElement;
    }
  }
  return smallestNumber;
}

/*
Write a function called "findShortestElement".

Given an array, "findShortestElement" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear.
* If the given array is empty, it should return an empty string.

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
*/

function findShortestElement(arr){
  if (arr.length === 0){
    return "";
  }
  var shortestElement = arr[0];
  for (var i = 0; i < arr.length; i++){
    var currentElement = arr[i];
    if (currentElement.length < shortestElement.length){
      shortestElement = currentElement;
    }
  }
  return shortestElement;
}


/*
Write a function called "getLargestElement".

Given an array, "getLargestElement" returns the largest number in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
*/

function getLargestElement(arr) {
  if (arr.length === 0){
    return 0;
  }
  var largestElement = arr[0];
  for (var i = 0; i < arr.length; i++){
    var currentElement = arr[i];
    if (currentElement > largestElement){
      largestElement = currentElement;
    }
  }
  return largestElement;
}

var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']

var obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
  if (!obj[key] || obj[key].length === 0){
    return 0;
  } else if (!Array.isArray(obj[key])){
    return 0;
  }
  var product = 0;
  for (var i = 0; i < obj[key].length; i++){
    var element = obj[key][i];
    product = product + element;
  }
  return product;
}

function sumDigits(num) {
  var sum = 0;
  var digits = num.toString().match(/-?\d/g);
  for (var i = 0; i < digits.length; i++){
    var digit = parseInt(digits[i]);
    sum += digit;
  }
  return sum;
}

/*

Write a function called "getStringLength".

Given a string, "getStringLength" returns the length of the given string.

Notes:
* Do NOT use any native 'length' methods.
* You might consider using 'substring' or 'slice' as alternatives.

var output = getStringLength('hello');
console.log(output); // --> 5

*/

function getStringLength(string){
  var i = 0;
  while (string[i] !== undefined){
    i++;
  }
  return i;
}

/*
Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear in the given array.
* Expect the given array to have values other than strings.
* If the given array is empty, it should return an empty string.
* If the given array contains no strings, it should return an empty string.

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
*/

/*
function findShortestWordAmongMixedElements(arr){
  var shortestWord = '';
  if (arr.length === 0){
    return '';
  }
  for (var i = 0; i < arr.length; i++){
    var currentElement = arr[i];
    var smallestElement = arr[0];
    if (currentElement < smallestElement){
      shortestWord = currentElement;
    } else if (typeof(currentElement) !== "string"){
      return '';
    }
  }
  return shortestWord;
}
*/

function stripNonStringValues(arr){
  return arr.filter(function(ele){
    return isNaN(ele);
  });
}

function findShortestWordAmongMixedElements(arr){
  var smallestWord = '';
  if (arr.length === 0){
    return smallestWord;
  }
  var array = stripNonStringValues(arr);
  for (var i = 0; i < array.length; i++){
    var currentElement = array[i];
    var smallestElement = array[0];
    if (currentElement.length < smallestElement.length){
      smallestWord = currentElement;
    } else {
      smallestWord = smallestElement;
    }
   }
   return smallestWord;
 }

/*

Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements"
returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
*/

function stripStrings(arr){
  return arr.filter(function(ele){
    return !isNaN(ele);
  });
}

function findSmallestNumberAmongMixedElements(arr){
  if (arr.length === 0){
    return 0;
  }
  var numbers = stripStrings(arr);
  var smallestNumber = numbers[0];
  if (numbers.length === 0){
    return 0;
  }
  for (var i = 0; i < numbers.length; i++){
    var currentNumber = numbers[i];
    if (currentNumber < smallestNumber){
      smallestNumber = currentNumber;
    }
  }
  return smallestNumber;
}

/*
Write a function called "getLongestWordOfMixedElements".

Given an array of mixed types, "getLongestWordOfMixedElements"
returns the longest string in the given array.

Notes:
* If the array is empty, it should return an empty string ("").
* If the array contains no strings; it should return an empty string.

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
*/

function stripNonStringValues(arr){
  return arr.filter(function(ele){
    return isNaN(ele);
  });
}

function getLongestWordOfMixedElements(arr){
  var words = stripNonStringValues(arr);
  if (arr.length === 0 || words.length === 0){
    return "";
  }
  var longestWord = words[0];
  for (var i = 0; i < words.length; i++){
  var currentWord = words[i];
  if (currentWord.length > longestWord.length){
    longestWord = currentWord;
      }
    }
  return longestWord;
}

/*
Write a function called "getLargestNumberAmongMixedElements".

Given any array, "getLargestNumberAmongMixedElements" returns the largest
number in the given array.

Notes:
* The array might contain values of a type other than numbers.
* If the array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
*/

function stripStrings(arr){
  return arr.filter(function(ele){
    return !isNaN(ele);
  });
}

function getLargestNumberAmongMixedElements(arr){
  var numbers = stringStrings(arr);
  if (arr.length === 0 || numbers.length === 0){
    return 0;
  }
  var largestNumber = numbers[0];
  for (var i = 0; i < numbers.length; i++){
    var currentNumber = numbers[i];
    if (currentNumber > largestNumber){
      largestNumber = currentNumber;
    }
  }
  return largestNumber;
}



function convertScoreToGrade(score) {
  var grade;
  if (score >= 90 && score <= 100){
    grade =  "A";
  } else if (score >= 80 && score <= 89){
    grade = "B";
  } else if (score >= 70 && score <= 79){
    grade = "C";
  } else if (score >= 60 && score <= 69){
    grade = "D";
  } else if (score > 0 && score <= 59){
    grade = "F";
  } else {
    grade = "INVALID SCORE";
  }
  return grade;
}

/*

Write a function called "convertScoreToGradeWithPlusAndMinus".

Given a score, "convertScoreToGradeWithPlusAndMinus" returns a
string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (59  -  0) --> 'F'
* If the given score is greater than 100 or less than 0,
it should return 'INVALID SCORE'.
* If the score is between the 0 and 2 (inclusive) of a given range,
return the letter with a '-'
* If the score is between the 8 and 9 (inclusive) of a given range,
return the letter with a '+'
* There are is no F+ and there is no F-.

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
*/

function convertScoreToGradeWithPlusAndMinus(score){
  var grade;
  if (score >= 98 && score <= 100){
    grade = "A+";
  } else if (score >= 93 && score <= 97){
    grade = "A";
  } else if (score >= 90 && score <= 92){
    grade = "A-";
  } else if (score >= 88 && score <= 89){
    grade = "B+";
  } else if (score >= 83 && score <= 87){
    grade = "B";
  } else if (score >= 80 && score <= 82){
    grade = "B-";
  } else if (score >= 78 && score <= 79){
    grade = "C+";
  } else if (score >= 73 && score <= 77){
    grade = "C";
  } else if (score >= 70 && score <= 72){
    grade = "C-";
  } else if (score >= 68 && score <= 69){
    grade = "D+";
  } else if (score >= 63 && score <= 67){
    grade = "D";
  } else if (score >= 60 && score <= 62){
    grade = "D-";
  } else if (score >= 0 && score <= 59){
    grade = "F";
  } else {
    grade = "INVALID SCORE";
  }
  return grade;
}

/*
Write a function called "computeFactorialOfN".

Given a natural number (a whole number greater than 0),
"computeFactorialOfN" returns its factorial.

var output = computeFactorialOfN(3);
console.log(output); // --> 6
*/

function computeFactorialOfN(n){
  var factorial = n
  if (n === 0 || n === 1){
    return 1;
  } else if (n > 2){
    while (n > 1){
      factorial = factorial * n;
      n--;
    }
  }
  return factorial;
}

/*

Write a function called "getLongestOfThreeWords".

Given 3 words, "getLongestOfThreeWords" returns the longest of three words.

Notes:
* If there is a tie, it should return the first word in the tie.

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'

*/

function getLongestOfThreeWords(word1, word2, word3){
  var words = [word1, word2, word3];
  var longestWord = words[0];
  for (var i = 0; i < words.length; i++){
    var word = words[i];
    if (word.length > longestWord.length){
      longestWord = word;
    }
  }
  return longestWord;
}

function getShortestOfThreeWords(word1, word2, word3){
  var words = [word1, word2, word3];
  var shortestWord = words[0];
  for (var i = 0; i < words.length; i++){
    var word = words[i];
    if (word.length < shortestWord.length){
      shortestWord = word;
    }
  }
  return shortestWord;
}

/*
Write a function called "computeCompoundInterest".

Given a principal, an interest rate, a compounding frequency,
and a time (in years), "computeCompoundInterest" returns the amount of compound
interest generated.

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.8368221341061


*/

function compoundedInterest(principal, interestRate, compoundingFrequency, timeInYears){
  var nt = compoundingFrequency * timeInYears;
  var rn = interestRate / compoundingFrequency;
  var interest = principal * (1 + Math.pow(rn, nt) ) - principal;
  return interest;
}

function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  var compoundedInterest = compoundedInterest(principal, interestRate, compoundingFrequency, timeInYears);
  var newPrincipal = principal + compoundedInterest;
  return newPrincipal;
}

/*
Write a function called "modulo".

Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

It should behave as described in the canonical documentation (MDN) for the
JavaScript remainder operator:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

Notes:
* Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
* 0 % ANYNUMBER = 0.
* ANYNUMBER % 0 = NaN.
* If either operand is NaN, then the result is NaN.
* Modulo always returns the sign of the first number.

var output = modulo(25, 4);
console.log(output); // --> 1
*/

function modulo(num1, num2) {
  var modulus = 0;
  var remainder = 0;
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  if (isNaN(num1) || isNaN(num2)){
    return NaN;
  } else if (num1 === 0){
    return 0;
  } else if (num2 === 0){
    return NaN;
  } else if (num1 > 0){
    remainder = num1 / num2;
    modulus = num1 - num2 * Math.floor(remainder);
  } else if (num1 < 0){
    remainder = num1 / num2;
    modulus = num1 + num2 / Math.floor(remainder);
  }
  return modulus;
}
console.log(modulo(25, 4));

function modulo(num1, num2) {
  if (isNaN(num1) || isNaN(num2)){
    return NaN;
  }
  var modulus = 0;
  var quotient = Math.floor(Math.abs(num1)/Math.abs(num2));
  if (num1 > 0){
    modulus = Math.abs(num1) - (Math.abs(num2) * Math.abs(quotient));
  }
  if (num < 0){
    modulus = -1 * modulus;
  }
  return modulus;
}

/*
should_return_0_when_there_is_no_remainder
No message from your teacher
Expected 1 to be 0.
More info
should_return_a_negative_number_when_the_first_number_is_negative
should_return_a_positive_number_when_the_second_number_is_negative
No message from your teacher
Expected -2 to be 1.
More info
should_return_1_when_given_1_and_2
No message from your teacher
Expected 0 to be 1.
More info
should_return_2_when_given_2_and_3
No message from your teacher
Expected 0 to be 2.
More info
should_return_0_when_given_minus_4_and_2
No message from your teacher
Expected -2 to be 0.
More info
should_return_1_point_5_when_given_5_point_5_and_2
No message from your teacher
Expected 2 to be 1.5.
More info
*/

function multiply(num1, num2) {
  var i = 0;
  var product = 0;
  if (num2 > 0){
  while (i < num2){
    product = product + num1;
    i++;
      }
    } else if (num2 < 0){
    while (i > num2){
      product = product - num1;
      i--;
    }
  }
  return product;

function computeSumBetween(num1, num2) {
  var sum = 0;
  if ((num2 > num1) || (num1 === num2)){
    return 0;
  } else {
    for (var i = num1; i < num2; i++){
      sum = sum + i;
    }
  }
  return sum;
}
console.log(computeSumBetween(1, 4));

/*
Write an assertEqual function from scratch.

It should compare actual and expected values with strict equality (not typecasting).

Examples

SUCCESS CASE

function multiplyByTwo(n) {
  return n * 2;
}
var output = multiplyByTwo(2); // returns 4
assertEqual(output, 4, 'it doubles 2 to 4');
// console output:
// passed

FAILURE CASE

function multiplyByTwo(n) {
  return (n * 2) + 1; // an incorrect implementation
}
var output = multiplyByTwo(2); // returns 5
assertEqual(output, 4, 'it doubles 2 to 4');
// console output:
// FAILED [it doubles 2 to 4] Expected "4", but got "5"

Starter Code :
function assertEqual(actual, expected, testName) {
  // your code here
}
*/

function isEven(n){
  return n % 2;
}

var output = isEven(4); //should return 0 if it's an even number

function assertEqual(output, expected, testName){
  if (output === 0){
    console.log("passed");
  } else {
    console.log("FAILED" + " " + testName + " expected " + expected + " , but got " + output);
  }
}

/*
Write an "assertArraysEqual" function from scratch.

Assume that the arrays in question contain only scalar values (i.e., simple values like strings or numbers).

Do not use JSON.stringify(), Array.join(), or any other "convert the array to a string so I can compare two strings" type of technique to implement this.

Examples

SUCCESS CASE
var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
var actual = 'broken'.split('');
assertArraysEqual(actual, expected, 'splits string into array of characters');
// console output:
// passed

FAILURE CASE
var expected = [1, 1, 2, 3, 5, 8, 13];
var actual = generateFirstNFibonaccis(7);
assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers');
// console output:
// FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"

Starter Code :
function assertArraysEqual(actual, expected, testName) {
  // your code here
}
*/

var expected = [2, 4, 6, 8, 10, 12, 14, 16, 18];
var actual = ifEven(20);

function assertArraysEqual(actual, expected, testName){
  if (actual === expected){
    console.log("passed");
  } else {
    console.log("FAILED " + "["+ testName +"]" + " Expected " + expected + ", but got " + acutal);
  }
}

/*


Write an "assertObjectsEqual" function from scratch.

Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).

It is OK to use JSON.stringify().

Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.

Examples

SUCCESS CASE

var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, 'detects that two objects are equal');
// console output:
// passed

FAILURE CASE

var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, 'detects that two objects are equal');
// console output:
// FAILED [my test] Expected {"foo":6,"bar":5}, but got {"foo":5,"bar":6}

*/

var expected = {species: "cat",
                breed: "Maine Coon"};

var actual = {species: "cat",
              breed: "Maine Coon"};
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected){
    console.log("passed");
  } else {
    console.log("FAILED " + testName + " Expected " + expected + " but got " + actual);
  }
}

/*
Write an "assertWithinRange" function from scratch.

The idea here is similar to when someone says, "Give me a number between 1 and 5".
You usually think the possible answers are "1, 2, 3, 4, or 5".  I.e., you usually don't interpret the options as being "2, 3, or 4".

Notes:
* Assume that the "actual" and "expected" arguments are always numbers (e.g., not booleans or other types that don't make sense in the context of examining a "range".)

Examples

SUCCESS CASE IN ACTUAL USE

var blackjackScore = 20;
assertWithinRange(4, 21, blackjackScore, 'blackjack score should be between 4 and 21');
// console output:
// passed

SUCCESS CASE IN ACTUAL USE

var dieRoll = 1;
assertWithinRange(1, 6, dieRoll, 'die roll should be between 1 and 6');
// console output:
// passed

FAILURE CASE IN ACTUAL USE

var price = 101;
assertWithinRange(1, 100, price, 'price should be between 1 and 100');
// console output:
// FAIL [price should be between 1 and 100] "101" not within range 1 to 100

Starter Code :
function assertWithinRange(low, high, actual, testName) {
  // your code here
}
*/

function assertWithinRange(low, high, actual, testName){
  if ((actual >= low) && (actual <= high)){
    console.log("passed");
  } else {
    console.log("FAIL " + testName + "'" + actual + "'" + " not within range " + low + " to " + high);
  }
}

function isEven(element){
  if (element % 2 === 0){
    return element;
  }
}
function every(array, callbackFunction) {
  var doesEveryElementMatch = true;
  array.forEach(function(element) {
    doesEveryElementMatch = callbackFunction(element);
  });
  return doesEveryElementMatch;
}

function assertEqual(actual, expected, testName) {
  if (actual !== expected){
    console.log("FAILED " + testName + " expected " + expected + " but got " + actual);
  } else {
    console.log("passed");
  }
}

assertEqual(every([2, 4, 6, 8, 10], isEven), 10, 'isTheLastElementTrue&Even');\


/*
Write an "assertArraysEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function to thoroughly test BOTH the functions in the provided code.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.

Starter Code :
function map(array, callbackFunction) {
  var newArray = [];
  array.forEach(function(element) {
    newArray = newArray + callbackFunction(element);
  });
  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n * n;
  });
}

function assertArraysEqual(actual, expected, testName) {
  // your code here
}
*/

// this has been coded as verbatim from hack's example, I was kinda lost on it.
function map(array, callbackFunction) {
  var newArray = [];
  array.forEach(function(element) {
    newArray.push(callbackFunction(element));
  });
  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return Math.pow(n, 3);
  });
}

function cube(n){
  return Math.pow(n, 3);
}

function assertArraysEqual(actual, expected, testName) {
  var isActualLength = actual.length === expected.length;
  // strict equality test to see if actual results are = to expected
  var areItemsEqual = actual.every(function(item, index){
    return item === expected[index];
  });
  // test to see if items in the actual array are equal to expected;
  if (isActualLength && areItemsEqual){
    console.log("Passed ");
  } else {
    console.log("FAILED " + testName + " expected " + expected + " but got " + actual);
  }
  // to see if the tests work
}

assertArraysEqual(map([1, 2, 3, 4, 5, 6], cube), [1, 8, 27, 64, 125, 216], "should cube an array");
// map needs be run with a callback, in this case cube
assertArraysEqual(cubeAll([1, 2, 3]), [1, 8, 27], 'cubeAll');

/*
Write an "assertObjectsEqual" function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function to thoroughly test the function provided.

Use categorical reasoning to consider all the useful cases.

Debug the code under test, if necessary.

Starter Code :
function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj.lastName;

  if (firstName && lastName) {
    obj.fullName = firstName + ' ' + lastName;
  }

  return obj;
}

function assertObjectsEqual(actual, expected, testName) {
  // your code here
}

*/
function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj.lastName;

  if (firstName && lastName) {
    obj.fullName = firstName + ' ' + lastName;
  }

  return obj.fullName;
}

function assertObjectsEqual(actual, expected, testName) {
  if (actual === expected){
    console.log("Passed " + testName);
  } else {
    console.log("FAILED " + testName + " expected " + expected + " but got " + actual);
  }
  return actual;
}

var aPerson = {
  firstName : "John",
  lastName : "Wayne"
};

addFullNameProp(aPerson);

assertObjectsEqual(addFullNameProp(aPerson), "John Wayne", "is there a full name");


/*
Use the skeleton provided to write a working implementation.

Notes:
* Do not leave any functions in the skeleton unused.
* Test that your implementation works.

Specifically -- your code reviewer should be able to just press the [Run] button and see convincing evidence that your code works, because of:
a) the categorical reasoning displayed by your tests
b) the line(s) of output in the console log saying "passed" coming from those tests

Starter Code :
function average(numbers) {
  // process array of numbers
}

function sum(numbers) {
}
*/

function average(numbers){
  var sum = 0;
  for (var i = 0; i <= numbers.length; i++){
    var number = numbers[i];
    sum = sum + number;
  }
  return sum / numbers.length;
}

function sum(numbers){
  // sum takes in an array
  var sum = 0
  // declare sum, set to 0
  for (var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    sum = sum + number;
    // loop through the array, add members to sum
  }
  return sum;
}

/*
Convert from a flat class list of names to an object literal decorated with an age for each student.

The ages should be randomly generated for each student, either age 10 or age 11.

Example
*/
var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];
/*
var classListWithAges = [{"name":"Joe","age":11},{"name":"Jack","age":10},
{"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
{"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
{"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
{"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
{"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
{"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
{"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
{"name":"Dora","age":10}]

Hint for testing: Given that the age for each student is random upon each run, we suggest that your tests check for age values of EITHER 10 or 11.

Starter Code :
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  // your code here
}
*/


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(array) {
  var classListWithAges = [];
  for (var i = 0; i < array.length; i++){
    var name = array[i];
    classListWithAges.push({
      "name": name,
      "age": getRandomIntInclusive(10, 11)
    });
  }
  return classListWithAges;
}

function assertEqual(actual, expected, testName){
  actual = Array.isArray(actual);
  if (Array.isArray(actual)){
    console.log("Passed");
  } else {
    console.log("FAILED " + testName + " expected " + expected + " but got " actual);
  }
}

function assertWithinRange(low, high, actual, testName){
  var inRange = low <= actual && actual <= high;
  if (inRange){
    console.log("passed " + testName);
  } else {
    console.log("FAILED " + testName + " expected " + low + " or " + high " but got " + actual);
  }
}

var aList = decorateClassListWithAges(classList);

assertEqual(aList, true, "returns an array");
aList.forEach(function(student){
  assertWithinRange(10, 11, student.age, "should return an age between 10 & 11");
});

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive.

Write and test a function that determines whether a string is an isogram.

Notes:
* Assume your input is only letters.
* Assume the empty string is an isogram.
* Ignore case.
* Follow the pseudocode exactly!

Starter Code :
function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
}
*/

function isIsogram(text){
  var stringToCheck = text.toLowerCase().split("");
  var charSet = new Set();
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  for (var i = 0; i < stringToCheck.length; i++){
    var character = stringToCheck[i];
    if (!charSet.has(character)){
      charSet.add(character);
    }
  }
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
  if (stringToCheck.length === charSet.size){
    console.log("this is a isogram");
    return true;
  } else {
    console.log("this is not an isogram");
    return false;
  }
}

function assertEqual(actual, expected, testName){
  if (actual === true){
    console.log("Passed");
  } else {
    console.log("FAILED " + testName + " expected " + expected + " but got " + actual);
  }
}

assertEqual(isIsogram("lululemon"), true, "is an isogram");
assertEqual(isIsogram("meow"), true, "is an isogram");

/*
Basic instructions

Flesh out the implementation described by this "skeleton", and test it.

More instructions

Implementation of WHAT, you say? What's the problem statement???

Well, you should be able to tell what this code is intended to do just from reading the starter "skeleton".

Assuming you find the above statement to be true upon reading the outline, well, then that illustrates the power of good outlining. You don't need a bunch of comments explaining the code. The code is effectively SELF-EXPLANATORY, even at this early, not-fully-implemented stage. This is the level of clarity that you should aim for in your own coding too.

Some notes about this skeleton

When you create such "skeletons" for your own programs, this is a good full-fledged sample to bear in mind.

Note the mixture of real "stub" code and pseudocode.

The stubs are just a few function names and a few key variable names, not whole for-loops and whatnot.

The pseudocode style we want for this purpose is at the level of precise English. It also is not describing for-loops and whatnot. It also is only inside functions. Don't pseudocode functions, just write the functions as empty stubs. That saves you precious time later, with less rewriting.

Starter Code :
function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  // Count the instances of each letter
  // Iterate all the counts and find the highest
  // Return this word's max repeat count
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  // For each word...
      var repeatCountForWord = findMaxRepeatCountInWord(word)
      //  If that max repeat count is higher than the overall max repeat count, then
      //    update maxRepeatCountOverall
      //    update wordWithMaxRepeatCount

  return wordWithMaxRepeatCount;
}
*/

function findMaxRepeatCountInWord(word) {
  var letterCount = {};
  // Break up individual words into individual letters.
  // Count the instances of each letter
  for (var i = 0; i < word.length; i++){
    var letter = word[i];
    if (!letterCount[letter]){
      letterCount[letter] = 1;
    } else {
      letterCount[letter]++;
    }
  }
  // Iterate all the counts and find the highest
  // Return this word's max repeat count
  return Math.max.apply(null, Object.values(letterCount));
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  var words = text.split(' ');
  // For each word...
  for (var i = 0; i < words.length; i++){
    var word = words[i];
    var repeatCountForWord = findMaxRepeatCountInWord(word)
    //  If that max repeat count is higher than the overall max repeat count, then
    //    update maxRepeatCountOverall
    //    update wordWithMaxRepeatCount
    if (repeatCountForWord > maxRepeatCountOverall){
      maxRepeatCountOverall = repeatCountForWord;
      wordWithMaxRepeatCount = word;
    }

  }
  return wordWithMaxRepeatCount;
}


assertEqual(findFirstWordWithMostRepeatedChars("meow, bark, purr"), "purr", "wordWithMaxRepeatCount");

/*

Accept an array of numbers that represent a phone number.
E.g., [6, 5, 0, 8, 3, 5, 9, 1, 7, 2]
Return as a string in this format: '(650) 835-9172'.

A poor implementation

function renderPhoneNumber(numbers){
  return '(' + numbers[0] + numbers[1] + numbers[2] + ') '
    + numbers[3] + numbers[4] + numbers[5] + '-'
    + numbers[6] + numbers[7] + numbers[8] + numbers[9];
}

What you should do instead


Read the object-oriented skeleton.  After you understand the flow of processing that it sketches out, fill in the implementation.

Notes:
* Do not leave any methods unused.

Starter Code :
*/

// i cheated on this, but think about how a phone number is arranged.
// base function
function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

// create a prototype over the original object, we can access the existing properties and creae new ones
PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  string += this.parenthesize(this.getAreaCode());
  string += " ";
  string += this.getExchangeCode();
  string += "-";
  string += this.getLineNumber();
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  return " " + this.slice(0, 3);
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  return " " + this.slice(3, 6);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  return " " + this.slice(6, 10);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

var phoneNumber = new PhoneNumberFormatter([9, 2, 5, 6, 8, 2, 3, 0, 3, 3]);
assertEqual(phoneNumber.render(), "(925) 682-3033", "should be a properly formatted phone number");

function luckyNumber(){
  var random = Math.random();
  return Math.round(random * 100);
}

/*
Find the longest single-word palindrome within a phrase.

The sorting implementation required by this particular implementation strategy / outline has been provided in this case, as a convenience. Study it carefully to make sure you can create custom sort functions of your own, later.

Notes:
* Use all the functions in the skeleton.
* If there are multiple longest palindromes of equal length, return the last one.
* The phrase will only contain letters (no symbols, punctuation, or numbers).
* Your palindrome detection should be case-insensitive.
*/

Starter Code :
function findLongestPalindrome(sentence) {
  var palindromes = [];
  // split sentence into words
  var words = sentence.toLowerCase().split(' ');
  // iterate words and collect the palindromes
  for (var i = 0; i < words.length; i++){
    var word = words[i];
    if (isPalindrome(word)){
      palindromes.push(word);
    }
  }
  // sort the list of palindromes by word length
  palindromes.sort(sortAscendingByLength);
  // return the largest item in the sorted list
  return longestPalindrome(palindromes);
}

function reverseString(string) {
  var reversed = "";
  for (var i = string.length - 1; i >= 0; i--){
    var character = string[i];
    reversed += character;
  }
  return reversed;
}

function isPalindrome(word) {
  var reversedWord = reverseString(word);
  if (reversedWord === word){
    return true;
  }
  return false;
}

function longestPalindrome(array){
  var longestWord = '';
  for (var i = 0; i < array.length; i++){
    var currentWord = array[i];
    var currentLength = array[0].length;
    if (currentWord.length > currentLength){
      longestWord = currentWord;
      currentLength = currentWord.length;
    }
  }
  return longestWord;
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}


assertEqual(findLongestPalindrome("ewe anna civic gillig racecar"), 'racecar', 'should return longest palindrome')

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
