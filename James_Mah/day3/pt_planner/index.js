var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];

var trainLineNames = ['Alamein', 'Glen Waverly', 'Sandringham'];
var trainLines = [alamein, glenWaverly, sandringham];

// var origin = 'Melbourne Central';
// var destination = 'Richmond';

var origin = 'Hawthorn';
var destination = 'Windsor';

var originLine = 0;
var originStop = 0;
var destinationLine = 0;
var destinationStop = 0;
var richmondStop = [];

var validInputs = false;

// Prompt for origin and destination lines and stops
while (validInputs === false) {
  validInputs = true;
  originLine = prompt("Which line are you getting on?");
  for (var i = 0; i < trainLineNames.length; i++) {
    if (trainLineNames.indexOf(originLine) === -1) {
      validInputs = false;
    }
  }
  origin = prompt("Which station are you getting on?");
  if (trainLineNames.indexOf(originLine) >= 0 && trainLines[trainLineNames.indexOf(originLine)].indexOf(origin) === -1) {
    validInputs = false;
  }
  destinationLine = prompt("Which line are you getting off?");
  for (var i = 0; i < trainLineNames.length; i++) {
    if (trainLineNames.indexOf(destinationLine) === -1) {
      validInputs = false;
    }
  }
  destination = prompt("Which station are you getting off?");
  if (trainLineNames.indexOf(destinationLine) >= 0 && trainLines[trainLineNames.indexOf(destinationLine)].indexOf(destination) === -1) {
    validInputs = false;
  }
  if (validInputs === false) {
    alert('ERROR: Please input again!');
  }
}

// determine the index number of the stop in the train line array
for (var i = 0; i < trainLines.length; i++){
  if (trainLines[i].indexOf(origin) != -1) {
    originStop = trainLines[i].indexOf(origin);
    //originLine = i;
  }
  if (trainLines[i].indexOf(destination) != -1) {
    destinationStop = trainLines[i].indexOf(destination);
    //destinationLine = i;
  }
  richmondStop[i] = trainLines[i].indexOf('Richmond');
}

// Determine the index number of the interchange stops
if (origin === 'Richmond') {
  originLine = destinationLine;
  originStop = trainLines[originLine].indexOf(origin);
}
else if (destination === 'Richmond') {
  destinationLine = originLine;
  destinationStop = trainLines[destinationLine].indexOf(destination);
}

// Print the header
console.log('origin: ' + origin);
console.log('destination: ' + destination);

// If the origin and destination stops are on the same line, print the journey and results
if (originLine === destinationLine) {
  if (originStop > destinationStop) {
    var tempLine = trainLines[originLine];
    tempLine.reverse;
    originStop = tempLine.length - originStop - 1;
    destinationStop = tempLine.length - destinationStop - 1;
  }
  console.log(trainLines[originLine].slice(originStop, destinationStop+1).join(' -----> '));
  console.log(destinationStop - originStop + ' stops total');
}
// If the origin and destination stops are on different lines, print the journey and results
else {
  // Determine the route for at the origin train line
  if (originStop > richmondStop[originLine]) {
    var tempLine2 = trainLines[originLine];
    tempLine2.reverse();
    originStop = tempLine2.length - originStop - 1;
    richmondStop[originLine] = tempLine2.length - richmondStop[originLine] - 1;
  }
  var route1 = trainLines[originLine].slice(originStop, richmondStop[originLine]+1);
  route1.pop();

  // Determine the route for at the destination train line
  if (richmondStop[destinationLine] > destinationLine) {
    var tempLine3 = trainLines[destinationLine];
    tempLine3.reverse();
    destinationStop = tempLine3.length - destinationStop - 1;
    richmondStop[destinationLine] = tempLine3.length - richmondStop[destinationLine] - 1;
  }
  var route2 = trainLines[destinationLine].slice(richmondStop[destinationLine], destinationStop+1);

  // print the journey and results
  console.log(route1.concat(route2).join(' -----> '));
  console.log(richmondStop[originLine] - originStop + destinationStop - richmondStop[destinationLine] + ' stops total');
}








