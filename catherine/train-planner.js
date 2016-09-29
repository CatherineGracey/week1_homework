//PT PLANNER

//Melbourne Public Transport Journey Planner

//There are 3 train lines:
//The Alamein line has the following stops: Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, and Glenferrie.
//The Glen Waverly line has the following stops: Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong and Tooronga.
//The Sandringham line has the following stops: Southern Cross, Richmond, South Yarra, Prahran, and Windsor.
//All 3 train lines intersect at Richmond, but there are NO other intersection points as trains run express.

var network = {
  "Alamein": ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
  "Glen Waverly": ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"],
  "Sandringham": ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"]
}

function checkStation(station){
  for (var line in network){
    if (network[line].indexOf(station) > -1){
      return line;
    }
  }
  return false;
}

function calculateRoute(origin, destination){
  var route = [], second = [];
  var startLine, endLine, station1, station2, Richmond;

  //Validate the origin and destination stations
  startLine = checkStation(origin);
  while (!startLine){
    origin = prompt("Please enter a valid starting station.");
    startLine = checkStation(origin);
  }
  endLine = checkStation(destination);
  while (!endLine){
    destination = prompt("Please enter a valid destination station.");
    endLine = checkStation(destination);
  }

  if (origin !== destination){
    //If the user starts at Richmond, switch them to a single line
    if (origin === "Richmond"){
      startLine = endLine;
    } else if (destination === "Richmond"){
      endLine = startLine;
    }
    //Push stations to the route array
    if (startLine === endLine){
      station1 = network[startLine].indexOf(origin);
      station2 = network[endLine].indexOf(destination);
      if (station1 < station2){
        route = network[startLine].slice(station1, (station2 + 1))
      } else {
        route = network[startLine].slice(station2, (station1 + 1))
        route.reverse();
      }
    } else {
      station1 = network[startLine].indexOf(origin);
      Richmond = network[startLine].indexOf("Richmond");
      if (station1 < Richmond){
        route = network[startLine].slice(station1, (Richmond + 1));
      } else {
        route = network[startLine].slice(Richmond, (station1 + 1))
        route.reverse();
      }
      Richmond = network[endLine].indexOf("Richmond");
      station2 = network[endLine].indexOf(destination);
      route.push("CHANGE LINES");
      if (Richmond > station2 ){
        second = network[endLine].slice(station2, Richmond);
        second.reverse();
      } else {
        second = network[endLine].slice((Richmond + 1), (station2 + 1));
      }
      route = route.concat(second);
    }


  }

  console.log("Origin: " + origin);
  console.log("Destination: " + destination);
  console.log("");
  console.log(route.join(" -----> "));
  console.log("");
  if (route.indexOf("CHANGE LINES") === -1){
    console.log(route.length - 1 + " stops total");
  } else {
    console.log(route.length - 2 + " stops total");
    console.log("Change to " + endLine + " line at Richmond.")
  }

}

/*
console.log("TESTING SIMPLE CASES");
console.log("Testing Alamein line left to right");
calculateRoute("Flinders Street", "Burnley");
console.log("Testing Alamein line right to left");
calculateRoute("Glenferrie", "East Richmond");
console.log("Testing Glen Waverly line left to right");
calculateRoute("Flagstaff", "Kooyong");
console.log("Testing Glen Waverly line right to left");
calculateRoute("Tooronga", "Parliament");
console.log("Testing Sandringham line left to right");
calculateRoute("Southern Cross", "Prahran");
console.log("Testing Sandringham line right to left");
calculateRoute("Windsor", "South Yarra");
*/
/*
console.log("TESTING RICHMOND CASES");
console.log("Testing Richmond to Alamein");
calculateRoute("Richmond", "Glenferrie");
calculateRoute("Glenferrie", "Richmond");
calculateRoute("Flinders Street", "Richmond");
calculateRoute("Richmond", "Flinders Street");
console.log("Testing Richmond to Glen Waverly");
calculateRoute("Richmond", "Kooyong");
calculateRoute("Kooyong", "Richmond");
calculateRoute("Flagstaff", "Richmond");
calculateRoute("Richmond", "Flagstaff");
console.log("Testing Richmond to Sandringham");
calculateRoute("Richmond", "Windsor");
calculateRoute("Windsor", "Richmond");
calculateRoute("Southern Cross", "Richmond");
calculateRoute("Richmond", "Southern Cross");
*/
/*
console.log("TESTING MULTILINE CASES");
//Left to left, Left to right, Right to left, Right to Right
console.log("Alamein and Glen Waverly")
calculateRoute("Flinders Street", "Flagstaff");
calculateRoute("Flinders Street", "Kooyong");
calculateRoute("Glenferrie", "Flagstaff");
calculateRoute("Glenferrie", "Kooyong");
console.log("Alamein and Sandringham");
calculateRoute("Flinders Street", "Southern Cross");
calculateRoute("Flinders Street", "Windsor");
calculateRoute("Glenferrie", "Southern Cross");
calculateRoute("Glenferrie", "Windsor");
console.log("Glen Waverly and Alamein");
calculateRoute("Flagstaff", "Flinders Street");
calculateRoute("Flagstaff", "Glenferrie");
calculateRoute("Kooyong", "Flinders Street");
calculateRoute("Kooyong", "Glenferrie");
console.log("Glen Waverly and Sandringham");
calculateRoute("Flagstaff", "Southern Cross");
calculateRoute("Flagstaff", "Windsor");
calculateRoute("Kooyong", "Southern Cross");
calculateRoute("Kooyong", "Windsor");
console.log("Sandringham and Alamein");
calculateRoute("Southern Cross", "Flinders Street");
calculateRoute("Southern Cross", "Glenferrie");
calculateRoute("Prahran", "Flinders Street");
calculateRoute("Prahran", "Glenferrie");
console.log("Sandringham and Glen Waverly");
calculateRoute("Southern Cross", "Flagstaff");
calculateRoute("Southern Cross", "Kooyong");
calculateRoute("Prahran", "Flagstaff");
calculateRoute("Prahran", "Kooyong");
*/

//Write a javascript program that works out display the journey when you give it an origin and destination.
//example:
/*
origin: Melbourne Central
destination: Richmond

Melbourne Central -----> Parliament -----> Richmond

2 stops total
*/
//You may want to hard code the origin and destination for easier testing in the beginning.

//Hints:
//Consider diagramming the lines by sketching out the train lines and their stops and intersection. Think about what data structure to use to store each line and all the stops on each line.
//The key to the lab is the intersection of the lines at Richmond.

//Non-Required Bonus:

// input validation
// User must enter a line and station in the subway network
// If the user enters something else, your program should handle it
// Add additional lines
