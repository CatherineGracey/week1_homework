//Melbourne public transport planner

// creating a two dimensional arrays
var vicTrains = [
  ['Flinders street', 'Richmond', 'East richmond', 'Burnley', 'Hawthorn'],
  ['Flagstaff', 'Melbourne Central', 'Parliament','Richmond', 'Kooyong', 'Tooronga'],
  ['Southern Cross', 'Richmond','South Yarra', 'Prahan', 'Windsor']
]

// setting some variable
var origin;

var destination;

var stops = [];

// origin = vicTrains[2][0];
// destination = vicTrains[0][3]
// console.log(origin.length);

for (var i = 0; i < vicTrains[i][j].length; i++) {
  if ( origin === vicTrains[i][j] ) {
    stops.push(vicTrains[i][j+1]);
  }
}


console.log(origin);
console.log(destination);
console.log(stops);


// console.log(vicTrains[1][3]);
// console.log(vicTrains[0].indexOf('Richmond'));
// console.log(vicTrains[1].indexOf('Richmond'));
// console.log(vicTrains[2].indexOf('Richmond'));
