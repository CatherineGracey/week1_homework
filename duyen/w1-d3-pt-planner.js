// overcomplicated the problem with initial datatype selection and ran out of time

var trainLines = [
  {
    line: 'Alamein',
    stops: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'],
  },
  {
    line: 'Glen Waverly',
    stops: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']
  },
  {
    line: 'Sandringham',
    stops: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
  }
]

// user input
// var origin = prompt('Enter your origin');
// var destination = prompt('Enter your destination');

var origin = 'Prahran';
var destination = 'Flagstaff';

var intersection = 'Richmond';

var line;

// to get info
function establishLine(userInput) {
  for (var i = 0; i < trainLines.length; i++) {
    for (var j = 0; j < trainLines[i].stops.length; j++) {
      if (userInput === trainLines[i].stops[j]) {
        line = trainLines[i].line;
      }
    }
  }
  return line;
};

function establishIndex(userInput) {
  for (var i = 0; i < trainLines.length; i++) {
    index = trainLines[i].stops.indexOf(userInput);
  }
  return index;
}

// origin
var originLine = establishLine(origin);
var originIndex = establishIndex(origin);

// destination
var destinationLine = establishLine(destination);
var destinationIndex = establishLine(destination);

// intersection
var intersectionIndex = establishIndex(intersection);

// still need to access originArray and destinationArray
// could turn trainLines into array with arrays with objects.. what a mess!

// origin to intersection
var originToIndexArray = [];

// make new array from origin to intersection
  // below: referring to originArray as array

// if (originIndex > intersectionIndex) {
//   originToIndexArray = array.slice(originIndex, intersectionIndex);
// } else if (originIndex < intersectionIndex);
//   originToIndexArray = array.slice(intersectionIndex, originIndex);
// } else {
//   // originIndex = intersectionIndex so return empty array
//   return originToIndexArray;
// };


// intersection to destination
var intersectionToDestinationArray = [];

  // make new array from intersection to destination
    // referring to destinationArray as array

// if (intersectionIndex < destinationIndex) {
//   intersectionToDestinationArray = array.slice(destinationIndex, intersectionIndex);
// } else if (destinationIndex < intersectionIndex);
//   intersectionToDestinationArray = array.slice(intersectionIndex, destinationIndex);
// } else {
//   // originIndex = intersectionIndex so return empty array
//   return intersectionToDestinationArray;
// };

// turn the above into one function to pass through
// originIndex, intersectionIndex, destinationIndex


// final journey output
// var finalJourney = originToIndexArray, intersection & IndexintersectionToDestinationArray
// var finalJourneyOutput = apply concat, split, join (' -----> ') on finalJourney

// console.log('origin: ' + userOrigin);
// console.log('destination: ' + userDestination);
// console.log(finalJourneyOutput);
// console.log(finalJourney.length + ' stops total')



    // Melbourne Central -----> Parliament -----> Richmond
    //
    // 2 stops total
