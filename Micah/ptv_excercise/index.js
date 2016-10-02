

var alameinLine =
[
  'Flinders Street',
  'Richmond',
  'East Richmond',
  'Burnley',
  'Hawthorn',
  'Glenferrie'
];
// Asks the user for his Origin Station and Destination Station.
var originPrompt = prompt('Origin:');
var destinationPrompt = prompt('Destination:');

// Finds the number that coorelates with the chosen stations in the line.
var origin = alameinLine.lastIndexOf(originPrompt);
var destination = alameinLine.lastIndexOf(destinationPrompt);

// Displays in the console the names of the Origin and Destination Stations.
console.log('origin: ' + originPrompt);
console.log('destination: ' + destinationPrompt);

// If the Origin station is before the destination based on the order of the train line..
if (origin < destination) {
  // Creates the a new array with only the stations from the origin to the destination.
  var output = alameinLine.slice(origin, (destination+1));
  // Logs in the console all the train stops the user will travel, with a arrow in between each station.
  console.log(output.join(' ----> '));
  // Logs in the console the number of stops the user will travel, minus the origin station.
  console.log((output.length - 1) + ' stops total.');
  // If the Origin station is after the destination based on the order of the train line..
  }
else {
  // The train line order needs to be reversed, so a new copy of the trainline must be made.
  // This allows you to reversed the order without modifing the original train line array.
  var alameinCopy = alameinLine.concat();
  var alameinReverse = alameinCopy.reverse();
  // The new station positions (numbers) need to be determined based on the reveresed train line.
  var originReverse = alameinCopy.lastIndexOf(originPrompt);
  var destinationReverse = alameinCopy.lastIndexOf(destinationPrompt);
  // Using the new station numbers from the reversed line,
  // a new array with only the stations from the origin to the destination is created.
  var outputReverse = alameinCopy.slice(originReverse, (destinationReverse+1));
  // Logs in the console all the train stops the user will travel on the reversed line,
  // with a arrow in between each station.
  console.log(outputReverse.join(' ----> '));
  // Logs in the console the number of stops the user will travel on the reversed line,
  // minus the origin station.
  console.log((outputReverse.length - 1) + ' stops total.');

};






// var glenWaverlyLine =
// [
//   'Flagstaff',
//   'Melbourne Central',
//   'Parliament',
//   'Richmond',
//   'Kooyong',
//   'Tooronga'
// ];
//
// var sandringhamLine =
// [
//   'Southern Cross',
//   'Richmond',
//   'South Yarra', 'Prahran',
//   'Windsor'
// ];

// var trainLines =
// [
//   alameinLine,
//   glenWaverlyLine,
//   sandringhamLine
// ]
