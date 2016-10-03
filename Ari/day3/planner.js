//console.log('Yo');

var alamein = [ 'Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie' ]
// |--R--o--o--o--|
var glenWaverly = [ 'Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga' ]
// |--o--o--R--o--|
var sandringham = [ 'Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor' ]
// |--R--o--o--|
var Kooyong = (glenWaverly[4])

//creates an array of every stop with 'Richmond' duplicates removed.
/*var allStops = alamein.concat(glenWaverly, sandringham);
  allStops.splice(9, 1);
    allStops.splice(12, 1);

console.log("First, enter a station of origin from this list: " + allStops + ".");
*/
//console.log("Now, enter a destination from the same list:");
//

// the intersection of the lines is key. maybe split up the arrays before and after Richmond, for all of them,
// which results in 6 arrays. Or create new arrays for the total stops, but splicing
var originStop = 'Flinders Street'
var destinationStop = 'Hawthorn'
// var array = ['first' => 'my first thing', 'second' => 'my second thing']
// array['first']
console.log( originStop + " -----> " + destinationStop );
