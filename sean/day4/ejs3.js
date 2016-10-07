// EJS Chapter 3 - Functions
// Exercises
// Minimum

var min = function (a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// Recursion

// var isEven = function (num) {
//   if (num%2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isEven(n) {
  if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  } else if (n < 0) {
    return isEven(-n);
  } else {
    return isEven(n - 2);
  }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Bean Counting
function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == ch) {
    counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countChar("kakkerlak", "k"));

console.log(countBs("BBC"));
