function bigFlipper(string, n){
  var returnArray = [];
  for (var i = 0; i < string.length; i += n){
    var sub = string.substring(i, n);
    var reversed = sub.split('').reverse();
    returnArray.push(reversed);
  }
  return returnArray.join(',');
}

// with reduce:
function bigFlipper(str, n){
  var currentString = [];
  return str.split('').reduce(function(returnArray, char){
    currentString.unshift(char);
    if (currentString.length === n){
      returnArray.push(currentString.join(''));
    }
    return returnArray;
  }, []).join('');
}


console.log(bigFlipper('a short example', 5))
