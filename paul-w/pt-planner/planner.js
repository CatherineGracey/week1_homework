// Define rail network as an array of objects.
var railNetwork = [
  {
    name: 'Alamein',
    stations: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
  },
  {
    name: 'Glen Waverly',
    stations: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']
  },
  {
    name: 'Sandringham',
    stations: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
  },
  {
    name: 'Frankston',
    stations: ['Southern Cross', 'Flinders Street', 'Richmond', 'Toorak', 'Malvern', 'Bentley', 'Cheltenham']
  }
];

// Get input for origin and create variables for line and station index.
var origin = prompt('Enter origin station.');
var originLine;
var originIndex;

// Find which line station is on, and its index, prompt if station not found.
while(true) {
  for (var i = 0; i < railNetwork.length; i++) {
    if (railNetwork[i].stations.indexOf(origin) !== -1) {
      originLine = railNetwork[i];
      originIndex = railNetwork[i].stations.indexOf(origin);
    }
  }
  if (originLine !== undefined) {
    break;
  } else {
    origin = prompt('No such station, please try again.');
  }
}

// Get destination input and create variables for line and station index.
var dest = prompt('Enter destination station.');
var destLine;
var destIndex;

// Find which line station is on, and its index, prompt if station not found.
while(true) {
  for (var i = 0; i < railNetwork.length; i++) {
    if (railNetwork[i].stations.indexOf(dest) !== -1) {
      destLine = railNetwork[i];
      destIndex = railNetwork[i].stations.indexOf(dest);
    }
  }
  if (destLine !== undefined) {
    break;
  } else {
   dest = prompt('No such station, please try again.'); 
  }
}

// Display origin and destination.
console.log('origin: ' + origin);
console.log('destination: ' + dest);

// Empty array to store final route.
var route = [];

// Find route. Begin by checking if stations are on the same line.
if (originLine === destLine) {
  // If so, check whether moving forwards or backwards through array.
  if (originIndex < destIndex) {
    // If forwards, add stations between origin and destination to array.
    route = originLine.stations.slice(originIndex, destIndex+1);
  } else {
    // If backwards, add stations between destination and origin to array, then reverse order.
    route = originLine.stations.slice(destIndex, originIndex+1);
    route.reverse();
  }
  // Display journey.
  console.log(route.join(' -> '));
  console.log(route.length-1 + ' stop(s) total.');
} else {
  // If origin and destination on different lines, find index of changeover station (Richmond) on each line.
  var originChange = originLine.stations.indexOf('Richmond');
  var destChange = destLine.stations.indexOf('Richmond');
  // Check if first leg of journey is moving forwards or backwards through array.
  if (originIndex < originChange) {
    // If forwards, add stations between origin and changeover to array, and add note to change line. 
    route = originLine.stations.slice(originIndex, originChange+1);
    route.push('*Change to ' + destLine.name + ' line*');
    // Then check whether second leg is forwards or backwards.
    if (destChange < destIndex) {
      // If forwards, add stations between changeover and destination to array.
      route = route.concat(destLine.stations.slice(destChange+1, destIndex+1));
    } else {
      // If backwards, add stations between destination and changeover to local array, then reverse order, then add to global array.
      var destRoute = destLine.stations.slice(destIndex, destChange);
      destRoute.reverse();
      route = route.concat(destRoute);
    }
  } else {
    // If first leg is backwards, add stations between changeover and origin to array, then reverse order, and add note to change line.
    route = originLine.stations.slice(originChange, originIndex+1);
    route.reverse();
    route.push('*Change to ' + destLine.name + ' line*');
    // Check if second leg is forwards or backwards.
    if (destChange < destIndex) {
      // If forwards, add stations between changeover and destination to array.
      route = route.concat(destLine.stations.slice(destChange+1, destIndex+1));
    } else {
      // If backwards, add stations between destination and changeover to local array, then reverse order, then add to global array.
      var destRoute = destLine.stations.slice(destIndex, destChange);
      destRoute.reverse();
      route = route.concat(destRoute);
    }
  }
  // Display journey (removing 2 from length to account for origin and changeover message).
  console.log(route.join(' -> '));
  console.log(route.length-2 + ' stop(s) total.');
}
