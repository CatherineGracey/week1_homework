
// PT Planner

var origin = 'Flinders Street';
var destination = 'Glenferrie';

var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];

// What line am I on

var alameinOrigin = alamein.indexOf(origin);
var glenWaverlyOrigin = glenWaverly.indexOf(origin);
var sandringhamOrigin = sandringham.indexOf(origin);

var alameinDestination = alamein.indexOf(destination);
var glenWaverlyDestination = glenWaverly.indexOf(destination);
var sandringhamDestination = sandringham.indexOf(destination);

// Where is Richmond on the line

if (alameinOrigin !== -1) {
  var toDestinationAlamein = alamein.slice(alameinOrigin, alamein.indexOf('Richmond')+1);
} else if (glenWaverlyOrigin !== -1) {
  var toDestinationGlenWaverly = glenWaverly.slice(glenWaverlyOrigin, glenWaverly.indexOf('Richmond')+1);
} else if (sandringhamOrigin !== -1) {
  var toDestinationSandringham = sandringham.slice(sandringhamOrigin, sandringham.indexOf('Richmond')+1);
}

// Which line is the destination on

if (alameinDestination !== -1) {
  var changeOne = alamein.slice(alamein.indexOf('Richmond')+1, (alameinDestination)+1);
} else if (glenWaverlyDestination !== -1) {
  var changeTwo = glenWaverly.slice(glenWaverly.indexOf('Richmond')+1, (glenWaverlyDestination)+1);
} else if (sandringhamDestination !== -1) {
  var changeThree = sandringham.slice(sandringham.indexOf('Richmond')+1, (sandringhamDestination)+1);
}

var finalDestination = function (origin, destination) {
  if (alameinOrigin !== -1 && alameinDestination !== -1) {
    console.log(toDestinationAlamein + ' ---> stay on the same train line ---> ' + changeOne);
    console.log('Total stops = ' + (toDestinationAlamein.length + changeOne.length));
  }
  else if (glenWaverlyOrigin !== -1 && glenWaverlyDestination !== -1) {
    console.log(toDestinationGlenWaverly + ' ---> stay on the same train line ---> ' + changeTwo);
    console.log('Total stops = ' + (toDestinationGlenWaverly.length + changeTwo.length));
  }
  else if (sandringhamOrigin !== -1 && sandringhamDestination !== -1) {
    console.log(toDestinationSandringham + ' ---> stay on the same train line ---> ' + changeThree);
    console.log('Total stops = ' + (toDestinationSandringham.length + changeThree.length));
  }
  else if (alameinOrigin !== -1 && glenWaverlyDestination !== -1) {
    console.log(toDestinationAlamein + ' ---> change trains at Richmond ---> ' + changeTwo);
    console.log('Total stops = ' + (toDestinationAlamein.length + changeTwo.length));
  }
  else if (alameinOrigin !== -1 && sandringhamDestination !== -1) {
    console.log(toDestinationAlamein + ' ---> change trains at Richmond ---> ' + changeThree);
    console.log('Total stops = ' + (toDestinationAlamein.length + changeThree.length));
  }
  else if (glenWaverlyOrigin !== -1 && alameinDestination !== -1) {
    console.log(toDestinationGlenWaverly + ' ---> change trains at Richmond ---> ' + changeOne);
    console.log('Total stops = ' + (toDestinationGlenWaverly.length + changeOne.length));
  }
  else if (glenWaverlyOrigin !== -1 && sandringhamDestination !== -1) {
    console.log(toDestinationGlenWaverly + ' ---> change trains at Richmond ---> ' + changeThree);
    console.log('Total stops = ' + (toDestinationGlenWaverly.length + changeThree.length));
  }
  else if (sandringhamOrigin !== -1 && alameinDestination !== -1) {
    console.log(toDestinationSandringham + ' ---> change trains at Richmond ---> ' + changeOne);
    console.log('Total stops = ' + (toDestinationSandringham.length + changeOne.length));
  }
  else if (sandringhamOrigin !== -1 && glenWaverlyDestination !== -1) {
    console.log(toDestinationSandringham + ' ---> change trains at Richmond ---> ' + changeTwo);
    console.log('Total stops = ' + (toDestinationSandringham.length + changeTwo.length));
  }
}

finalDestination(origin, destination);
