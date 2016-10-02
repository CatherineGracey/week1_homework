
var alamein = ['Alamein', 'Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenwaverley = ['Glen Waverley', 'Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringham = ['Sandringham', 'Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];
var trainLines = [alamein, glenwaverley, sandringham];


var origin = 'Burnley';
var destination = 'Flagstaff';


//get origin and destination
//prompt("leaving from :")

//work out if origin and destination are on the same line, which array they are in
//if so work out direction of travel
// print out requirements

for (var i = 0; i < trainLines.length; i++) {
  for (var j= 0; j < trainLines[i].length; j++) {
    if (trainLines[i][j]===origin) {
      var originLocIndex = j;
      var originLine = trainLines[i];
      console.log('Origin line ' + originLine[0]);
      console.log('stop number ' + j);
    } else if (trainLines[i][j] === destination) {
      var destLocIndex = j;
      var desLine = trainLines[i];
      console.log('Destination line ' + trainLines[i][0]);
      console.log('stop number ' + j);
}
//  }else{
  //  console.log('Origin station is not on network');
//  }
}
}
/*
if (condition1) {
    block of code to be executed if condition1 is true
} else if (condition2) {
    block of code to be executed if the condition1 is false and condition2 is true
} else {
    block of code to be executed if the condition1 is false and condition2 is false
}
*/




//if origin or dest is Richmond, then simple journey.... but find the correct Richmond (on the correct line)
/*if (origin = "Richmond") {
  originLine = desLine;

}
if (destination = 'Richmond') {
  desLine = originLine;
}
*/
/*
//checks if station is on network
if (originLocIndex === null) {
  console.log('Origin station is not on network');
}
*/
// sort this out later
//if (destLocIndex === null) {
//console.log('Destination station is not on network');
//}

//if on same line, work out direction of travel
if (originLine[0] === desLine[0]) {
  //same line, so check direction and stops

  if (originLocIndex>destLocIndex) {
//direction to city
//reverse array
// list out stations
//calculate number of stops
    var revRouteArray =  originLine.slice(destLocIndex,(originLocIndex+1));
    var routeArray = revRouteArray.reverse();

    printRoute1(routeArray);


} else if(originLocIndex<destLocIndex){
  // direction from city
  //list out stations
  //calculate number of stops
    var routeArray =  originLine.slice(originLocIndex,(destLocIndex+1));
    printRoute1(routeArray);
} else if (originLocIndex=destLocIndex) {
    console.log("Same station, try again!");
}

}

else if (originLine[0] !== desLine[0]) {
  //different line, must change at Richmond
  // get the 2 legs
  if (originLocIndex<originLine.indexOf("Richmond")) {
    var leg1 = originLine.slice(originLocIndex, originLine.indexOf("Richmond"));
} else {
  var leg1 = originLine.slice(originLine.indexOf("Richmond"), originLocIndex);
}
  if (destLocIndex < desLine.indexOf("Richmond")){
    var leg2 = desLine.slice(destLocIndex, desLine.indexOf("Richmond"));
} else {
    var leg2 = desLine.slice(desLine.indexOf("Richmond"), destLocIndex);
}
  //join the 2 bits
  var routeArray = leg1.concat(leg2)
  printRoute2(routeArray);

}



//  console.log('station is not on network');

//if not on the same line
// loop though trainLines to locate index numbers of origin and destination
// work out direction of travel
//


// if on different lines, flag to change at Richmond

// print a simple journey
function printRoute1(routeArray){
  console.log('origin: ' + routeArray[0]);
  console.log('destination: ' + routeArray[routeArray.length-1]);

  console.log(routeArray.join(' ----> '));
  console.log('number of stops - ' + (routeArray.length-1));

}


//print a complex journey
function printRoute2(routeArray) {
  console.log('origin: ' + routeArray[0]);
  console.log('destination: ' + routeArray[routeArray.length-1]);
//console.log((array.slice(start, end).concat(array2.slice(start,end))).join('---->'));
  console.log('Change at Richmond');
  console.log(routeArray.join(' ----> '));
  console.log('number of stops - ' + routeArray[routeArray.length-1]);
}
/*origin: Melbourne Central
destination: Richmond

Melbourne Central -----> Parliament -----> Richmond

2 stops total*/
