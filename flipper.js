function flipper(string){
  var chars = string.split('');
  for (var i = 0; i < chars.length; i += 2){
    var first = chars[i];
    var second = chars[i + 1];
    console.log(second);
    chars[i] = second;
    chars[i + 1] = first;
  }
  return chars.join('');
}

// tests:
console.log(flipper('test'));

/*
another way to solve this is via bitwise operators:
chars[i] ^= chars[i + 1];
