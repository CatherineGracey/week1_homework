// Bonus exercises:
// How old will I be in 2099?

var birthYear;
var someYear;

function calculateAge(birthYear, someYear) {
  if (someYear === 2012) {
    console.log("You were born this very year!");
  } else if (someYear > birthYear) {
    console.log("You are " + (someYear - birthYear) + " year(s) old.");
  } else if (someYear < birthYear) {
    console.log("You will be born in " (birthYear - someYear) + " year(s).");
  }
}

calculateAge(2012, 2099);

// Sum of Multiples

function sumMul(n, m) {
  var sum = 0;
  if (n > 0 && m > 0) {
    for (var i = 1; i <= m; i++) {
      if (i%n === 0) {
        sum += i;
      }
    }
    return sum;
  } else {
    return "INVALID";
  }
  }

console.log(sumMul(2,9));
console.log(sumMul(3, 13));
console.log(sumMul(4, 123));
console.log(sumMul(4, -7));
