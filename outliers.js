// ES6, will not work in some browsers
function outliers(numStr){
  var numbers = numStr.split(' ');
  var evenOdd = {};
  for (var i = 0; i < numbers.length; i++){
    var num = +numbers[i];
    var type;
    if (num % 2){
      type = 'even';
    } else {
      type = 'odd';
    }
    if (evenOdd.hasOwnProperty(type)){
        evenOdd[type] = false;
      } else {
        evenOdd[type] = i + 1;
      }
    }
    var odd = !!evenOdd.odd;
    var even = !!evenOdd.even;
  if (odd ^ even){
    if(odd){
      return evenOdd.odd;
    } else {
      return evenOdd.even;
    }
  };
  return 'no outliers'
}
console.log(outliers("2 7 2"));
