var origin = prompt ('Where are you?');

var destination = prompt ('Where do you want to go?');


var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];


if (alamein.indexOf(origin) >= 0 && alamein.indexOf(destination) >= 0 ){
  var journey = alamein.slice(alamein.indexOf(origin,(1 + alamein.indexOf(destination))));
 console.log(String(journey).replace(/[ ]*,[ ]*|[ ]+/g, " -----> "));
 }
