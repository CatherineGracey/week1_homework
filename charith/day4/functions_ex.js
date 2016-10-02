console.log('Functions Exercises ready');

function calculateAge(birthYear, currentYear) {
  var ageOne = currentYear - birthYear;
  var ageTwo = ageOne + 1;

  return "You are either " + ageOne + " or " + ageTwo;
}

console.log(calculateAge(1987, 2016));
console.log(calculateAge(1991, 2012));
console.log(calculateAge(1988, 2017));

function lengths(arr) {
  var arrLengths = [];

  for (var i = 0; i < arr.length; i++) {
    arrLengths.push(arr[i].length);
  }

  return arrLengths;
}

console.log(lengths(['charith', 'asanka', 'perera']));

function transmogrifier(a, b, c) {
  return Math.pow(a * b, c);
}

console.log(transmogrifier(2, 2, 3));

function wordReverse(aWord) {
  var wordArray = aWord.split('');

  return wordArray.reverse().join('');
}

console.log(wordReverse('Charith'));

function calculateAgeAgain(birthYear, year) {
  if (birthYear < year) {
    console.log('You are ' + (year - birthYear) + '  years old' );
  }
  else if (birthYear > year) {
    console.log('You will be born in ' + (birthYear - year) + ' years');
  }
  else {
    console.log('It\'s your birth year!')
  }
}

calculateAgeAgain(1987, 2016);
calculateAgeAgain(2016, 1987);
calculateAgeAgain(2016, 2016);

function sumMul(n, m) {
  var total = 0;

  if (m < n) {
    return "INVALID";
  }

  for (var i = n; i <= m; i += n) {
    total += i;
  }

  return total;
}

console.log(sumMul(2,9));    //should return 20
console.log(sumMul(3,13));   //should return 30
console.log(sumMul(4,123));  //should return 1860
console.log(sumMul(4,-7));   //should return INVALID
