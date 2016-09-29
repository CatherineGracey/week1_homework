console.log('PT Ready');

var alemein = {
  name: 'Alemein',
  stops: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorne']
}

var glenwav = {
  name: 'Glen Waverly',
  stops: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong']
}

var sandringham = {
  name: 'Sandringham',
  stops: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
}

var validStops = alemein.stops.concat(glenwav.stops, sandringham.stops);

do {
    var origin = prompt("From where?");
} while(validStops.indexOf(origin) === -1);

do {
    var destination = prompt("To Where?");
} while(validStops.indexOf(destination) === -1);

var originLine;
var destinationLine;
var stopCount = 0;

if (alemein.stops.indexOf(origin) !== -1) {
  originLine = alemein;
}
else if (glenwav.stops.indexOf(origin) !== -1 ) {
  originLine = glenwav
}
else {
  originLine = sandringham;
}

if (alemein.stops.indexOf(destination) !== -1) {
  destinationLine = alemein;
}
else if (glenwav.stops.indexOf(destination) !== -1 ) {
  destinationLine = glenwav
}
else {
  destinationLine = sandringham;
}

console.log('Start on line: ' + originLine.name);
console.log("******");

if (originLine === destinationLine) {
  if (originLine.stops.indexOf(origin) !== -1 && originLine.stops.indexOf(destination) !== -1) {
    var originIndex = originLine.stops.indexOf(origin);
    var destinationIndex = originLine.stops.indexOf(destination);

    if (destinationIndex > originIndex) {
      for (var i = originIndex; i <= destinationIndex; i++) {
        console.log(originLine.stops[i]);
        stopCount++;
      }
    }
    else {
      for (var i = originIndex; i >= destinationIndex; i--) {
        console.log(originLine.stops[i]);
        stopCount++;
      }
    }
  }
}
else {

  var indexOfRichmond = originLine.stops.indexOf('Richmond');
  var originIndex = originLine.stops.indexOf(origin);

  if (indexOfRichmond > originIndex) {
    for (var i = originIndex; i <= indexOfRichmond; i++) {
      console.log(originLine.stops[i]);
      stopCount++;
    }
  }
  else {
    for (var i = originIndex; i >= indexOfRichmond; i--) {
      console.log(originLine.stops[i]);
      stopCount++;
    }
  }

  console.log('******');
  console.log ('Switch to ' + destinationLine.name);
  console.log('******');

  indexOfRichmond = destinationLine.stops.indexOf('Richmond');
  var destinationIndex = destinationLine.stops.indexOf(destination);

  if (indexOfRichmond < destinationIndex) {
    for (var i = indexOfRichmond + 1; i <= destinationIndex; i++) {
      console.log(destinationLine.stops[i]);
      stopCount++;
    }
  }
  else {
    for (var i = indexOfRichmond - 1; i >= destinationIndex; i--) {
      console.log(destinationLine.stops[i]);
      stopCount++;
    }
  }

}

console.log("-------------")
console.log("Total Stops: " + stopCount);
