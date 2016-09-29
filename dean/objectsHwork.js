console.log('The Recipe Card - objects');


console.log('** The Recipe **');


var recipe = {
  title: 'Mole',
  servings: 2,
  ingredients: ['cinnamon','cumin','cocoa']
};

console.log(recipe.title);
console.log('Serves: ' + recipe.servings);
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);

console.log('** The Reading List **');

var readingList = [
  {'title': 'Lord of the Rings', 'author': 'J.R.R. Tolkien', 'alreadyRead': false},
  {'title': 'Good to Great', 'author': 'Jim Collins', 'alreadyRead': true}]

for (var index = 0; index < readingList.length; index++) {
  if (readingList[index].alreadyRead === true)
 {  console.log('You have already read \'' + readingList[index].title  + '\' by ' + readingList[index].author);
   } else {
       console.log('You still need to read \'' + readingList[index].title + '\' by ' + readingList[index].author);
    }
  }

console.log('The Movie Database - More work to do - see notes below');

var movieList = [
  {'title': "'Lord of the Rings'", 'duration': 120, 'stars': ['Joe Famous','Mary Star']},
  {'title': "'Rocky'", 'duration': 90, 'stars': ['Sylvester Stallone','Johnny Traynor']}]

for (var index = 0; index < movieList.length; index++) {
  // function printList() {
  console.log(movieList[index].title + ' lasts for ' + movieList[index].duration + ' minutes and stars ' + movieList[index].stars.join(' and ') + '.');
}


console.log('** Melbourne Public Transport Journey Planner ** - More work to be done see commented out code and work remaining to complete');
//
// var interconnectStation = 'Richmond';
//
// var alameinLine = ['Alamein','Glenferrie','Hawthorn', 'Burnley','East Richmond','Richmond','Flinders Street'];
// var glenwLine = ['Glen Waverley','Tooronga','Kooyong', 'Richmond','Parliament','Melbourne Central','Flagstaff'];
// var sandyLine = ['Sandringham','Windsor','Prahran', 'South Yarra','Richmond','Melbourne Central','Southern Cross'];
//
// var originStation = prompt('Hi, let\'s get started please enter the station name where your journey will commence');
// var destinStation = prompt('Thanks for that, next we need the name of your destination station for your trip today.');
//
//   if (alameinLine.indexOf(originStation)>=0); {
//        var originLine = alameinLine;
//        var originStation = alameinLine.indexOf(originStation);
//   } else if (glenwLine.indexOf(originStation)>=0); {
//       var originLine = glenwLine;
//       var originStation = glenwLine.indexOf(originStation);
//   } else if (sandyLine.indexOf(originStation)>=0); {
//       var originLine  = sandyLine;
//       var originStation = sandyLine.indexOf(originStation);
//   } else if (alameinLine.indexOf(originStation)>=0); {
//      var originLine = alameinLine;
//   } else if (originStation === interconnectStation); {
//     var  originLine = destinLine;
//   } else {
//     console.log('Sorry, we were not able to match that station to our list of stations in the network. Please re-enter the station you wil be leaving from.');
//   }
//
//
//   if (alameinLine.indexOf(destinStation)>=0); {
//      var deLine = alameinLine;
//      var destinStation = alameinLine.indexOf(destinStation);
//   } else if (glenwLine.indexOf(destinStation)>=0); {
//     var destinLine = glenwLine;
//     var destinStation = glenwLine.indexOf(destinStation);
//   } else if (sandyLine.indexOf(destinStation)>=0); {
//     var destinLine = sandyLine;
//     var originStation = sandyLine.indexOf(originStation);
//   } else if (alameinLine.indexOf(destiStation)>=0); {
//    var destinLine = alameinLine;
//   // } else if (destinStation === interconnectStation); {
//   //   var  destinLine = originLine;
//   } else {
//     console.log('Sorry, we were not able to match that station to our list of stations in the network. Please re-enter the station you wil be leaving from.');
//   }


// To be continued - work to finalise...
// Now we know the originStation and the destinStation along with the originLine and the destinLine
// Use if statement to determine if destinLine is different to originLine
// If journey is entirely on the same line then use the 'slice' array method with index numbers of (originStation & destinStation) as argument inputs to return / output the appropriate station names for the journey.
// If journey crosses train lines then firstly use the 'slice' array method for the originLine and the destinLine separately using index of originStation for starting point and difference between index for the interconnectStation (Richmond) and index of originStation / destinStation
// Note - you would add one to the second input argument in the slice method when doing the originStation calc this means one (not neither or both) of the train line listings will include Richmond.
// Then use concat array method to effectively combine the two arrays returned by the slice functions operation
// Then use console.log to output the final (combined) list with some appropriate fillers and formatting to make sense.
//  Note: need to further consider impact of journey being an outbound rather than inbound journey.





// alameinLine.slice()
