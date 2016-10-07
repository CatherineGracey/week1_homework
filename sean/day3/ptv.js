// PT Planner
var alameinLine = {
  line: 'Alamein Line',
  station: ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferri']
}

var glenWaverlyLine = {
  line: 'Glen Waverley Line',
  station: ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooroonga']
}

var sandringhamLine = {
  line: "Sandringham Line",
  station: ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
}

var trainLines = [alameinLine, glenWaverlyLine, sandringhamLine];

var origin = prompt("From which station?");
var destination = prompt("Destination station?")

for (var i = 0; i < trainLines.length; i++) {
  for (var j = 0; j < trainLines[i].station.length; j++) {
    console.log("origin: " + origin);
    console.log("destination: " + destination);
    console.log(origin + "---->" + destination);
    console.log(trainLines[i].station[j].length + " stops total")
  }
}
