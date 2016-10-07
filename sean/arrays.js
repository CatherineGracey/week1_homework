var movies = ["Inception", "Pulp Fiction", "The Dark Knight"]

for (var i = 0; i < movies.length; i += 1) {
  console.log("My #1 choice is " + movies[i]);
}

for (var i = 0; i < movies.length; i += 1) {
  if (i === 0) {
    console.log("My 1st choice, " + movies[i]);
  } else if (i === 1) {
    console.log("My 2nd choice, " + movies[i]);
  } else {
    console.log("My 3rd choice, " + movies[i]);
  }
}

// solutions
// top choices
//
// var simpsons = ['ned', 'homer', 'bart'];
//
// console.log(simpsons[0])
// console.log(simpsons[1])
//
// for (var i = 0; i < simpsons.length; i++) {
//   console.log(simpsons[i]);
// }
//
// var suffix = ['1st, 2nd', '3rd'];
//
// for (var i = 0; i < simpsons.length; i++) {
//   console.log('my' + suffix[i] + ' choice is ' + simpsons[i]);
// }
