// There are 3 train lines:
//
// The **Alamein** line has the following stops: Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, and Glenferrie.
// The **Glen Waverly** line has the following stops: Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong and Tooronga.
// The **Sandringham** line has the following stops: Southern Cross, Richmond, South Yarra, Prahran, and Windsor.
//
// All 3 train lines intersect at **Richmond**, but there are NO other intersection points as trains run express.
//
// Write a javascript program that works out display the journey when you give it an origin and destination.
//
// example:


var lines = [
{
  name:'alamein',
  stations:['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
},
{
  name:'sandringham',
  stations:['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
},
{
  name:'glenWaverly',
  stations:['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga']
}
]

var destination = 'Southern Cross';
var origin = 'Windsor'

console.log(lines[1].stations[2]);
console.log(lines[1].stations.slice(0,5));

function journey(){


}

// var destination =  prompt('What is your destination?');
// var origin = prompt('What is your origin?');
//
// function journey(){
//   if(destination === glenWarverly[]){
//     console.log(destination + '---> Richmond ---> ' + origin);
//   }
//
// }
//
// journey();
