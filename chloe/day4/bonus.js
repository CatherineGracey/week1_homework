//age calculator
function calculateAge(birthYear, prescribedYear) {
  if (prescribedYear > birthYear) {
    console.log("You are " + (prescribedYear - birthYear) + " year(s) old");
  } else if (prescribedYear < birthYear) {
    console.log("You will be born in " + (birthYear - prescribedYear) + " years");
  } else if (birthYear == prescribedYear) {
    console.log('You were born this very year');
  }
}

//sum of multiples. Find the sum of the multiples of n i.e. less than m

function sumMul(n,m) {
  var total = 0;
  for (var i = 1; i <= m; i++) {
    if (i % n === 0) {
      total += i;
    }
  }
  if (total >= n) {
    console.log(total);
  } else if (total < n) {
    console.log("INVALID");
  }
}
