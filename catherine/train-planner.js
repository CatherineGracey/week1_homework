//PT PLANNER

//Melbourne Public Transport Journey Planner

//There are 3 train lines:
//The Alamein line has the following stops: Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, and Glenferrie.
//The Glen Waverly line has the following stops: Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong and Tooronga.
//The Sandringham line has the following stops: Southern Cross, Richmond, South Yarra, Prahran, and Windsor.
//All 3 train lines intersect at Richmond, but there are NO other intersection points as trains run express.

var network = {
  "Alamein": ["Flinders Street", "Southern Cross", "Flagstaff", "Melbourne Central", "Parliament",
              "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie", "Auburn",
              "Camberwell", "Riversdale", "Willison", "Hartwell", "Burwood", "Ashburton", "Alamein"],
  "Belgrave": ["Flinders Street", "Southern Cross", "Flagstaff", "Melbourne Central", "Parliament",
              "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie", "Auburn",
              "Camberwell", "East Camberwell", "Canterbury", "Chatham", "Surry Hills", "Mont Albert",
              "Box Hill", "Laburnum", "Blackburn", "Nunawading", "Mitcham", "Heatherdale", "Ringwood",
              "Heathmont", "Bayswater", "Boronia", "Ferntree Gully", "Upper Ferntree Gully", "Upwey",
              "Tecoma", "Belgrave"],
  "Cragieburn": ["Flagstaff", "Melbourne Central", "Parliament", "Flinders Street", "Southern Cross",
              "North Melbourne", "Kensington", "Newmarket", "Ascot Vale", "Moonee Ponds", "Essendon",
              "Glenbervie", "Strathmore", "Pascoe Vale", "Oak Park", "Glenroy", "Jacana", "Broadmeadows",
              "Coolaroo", "Roxburgh Park", "Cragieburn"],
  "Cranbourne": ["Flinders Street", "Southern Cross", "Flagstaff", "Melbourne Central", "Parliament",
              "Richmond", "South Yarra", "Hawksburn", "Toorak", "Armadale", "Malvern", "Caulfield",
              "Carnegie", "Murrumbeena", "Hughesdale", "Oakleigh", "Huntingdale", "Clayton", "Westall",
              "Springvale", "Sandown Park", "Noble Park", "Yarraman", "Dandenong", "Lynbrook",
              "Merinda Park", "Cranbourne"],
  "Frankston": ["Flinders Street", "Southern Cross", "Flagstaff", "Melbourne Central", "Parliament",
              "Richmond", "South Yarra", "Hawksburn", "Toorak", "Armadale", "Malvern", "Caulfield",
              "Glenhuntly", "Ormond", "McKinnon", "Bentleigh", "Patterson", "Moorabbin", "Highett",
              "Cheltenham", "Mentone", "Parkdale", "Mordialloc", "Aspendale", "Edithvale", "Chelsea",
              "Bonbeach", "Carrum", "Seaford", "Kananook", "Frankston", "Leawarra", "Baxter",
              "Somerville", "Tyabb", "Hastings", "Bittern", "Morradoo", "Crib Point", "Stony Point"],
  "Glen Waverly": ["Flinders Street", "Southern Cross", "Flagstaff", "Melbourne Central", "Parliament",
              "Richmond", "East Richmond", "Burnley", "Heyington", "Kooyong", "Tooronga", "Gardiner",
              "Glen Iris", "Darling", "East Malvern", "Holmesglen", "Jordanville", "Mount Waverley",
              "Syndal", "Glen Waverley"],
  "Hurstbridge": ["Flinders Street", "Southern Cross", "Flagstaff", "Melbourne Central", "Parliament",
              "Jolimont", "West Richmond", "North Richmond", "Collingwood", "Victoria Park", "Clifton Hill",
              "Westgarth", "Dennis", "Fairfield", "Alphington", "Darebin", "Ivanhoe", "Eaglemont",
              "Heidelburg", "Rosanna", "Macleod", "Watsonia", "Greensborough", "Montmorency", "Eltham",
              "Diamond Creek", "Wattle Glen", "Hurstbridge"],
  "Lilydale": ["Flinders Street", "Southern Cross", "Flagstaff", "Melbourne Central", "Parliament",
              "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie", "Auburn",
              "Camberwell", "East Camberwell", "Canterbury", "Chatham", "Surry Hills", "Mont Albert",
              "Box Hill", "Laburnum", "Blackburn", "Nunawading", "Mitcham", "Heatherdale", "Ringwood",
              "Ringwood East", "Croydon", "Mooroolbark", "Lilydale"],
  "Pakenham": ["Flinders Street", "Southern Cross", "Flagstaff", "Melbourne Central", "Parliament",
              "Richmond", "South Yarra", "Hawksburn", "Toorak", "Armadale", "Malvern", "Caulfield",
              "Carnegie", "Murrumbeena", "Hughesdale", "Oakleigh", "Huntingdale", "Clayton", "Westall",
              "Springvale", "Sandown Park", "Noble Park", "Yarraman", "Dandenong", "Hallam",
              "Narre Warren", "Berwick", "Beaconsfield", "Officer", "Cardinia Road", "Pakenham"],
  "Sandringham": ["Flinders Street", "Southern Cross", "Flagstaff", "Melbourne Central", "Parliament",
              "Richmond", "South Yarra", "Prahran", "Windsor", "Balaclava", "Ripponlea", "Elsternwick",
              "Gardenvale", "North Brighton", "Middle Brighton", "Brighton Beach", "Hampton", "Sandringham"],
  "South Morang": ["Flinders Street", "Southern Cross", "Flagstaff", "Melbourne Central", "Parliament",
              "Jolimont", "West Richmond", "North Richmond", "Collingwood", "Victoria Park", "Clifton Hill",
              "Rushall", "Merri", "Northcote", "Croxton", "Thornbury", "Bell", "Preston", "Regent",
              "Reservoir", "Ruthven", "Keon Park", "Thomastown", "Lalor", "Epping", "South Morang"],
  "Sunbury": ["Southern Cross", "Flinders Street", "Parliament Station", "Melbourne Central",
              "Flagstaff Station", "North Melbourne", "Footscray", "Middle Footscray", "West Footscray",
              "Tottenham", "Sunshine", "Albion Station", "Ginifer", "St Albans", "Keilor Plains",
              "Watergardens", "Diggers Rest", "Sunbury"],
  "Upfield": ["Southern Cross", "Flinders Street", "Parliament", "Melbourne Central", "Flagstaff",
              "North Melbourne", "Macaulay", "Flemington Bridge", "Royal Park", "Jewell", "Brunswick",
              "Anstey", "Moreland", "Coburg", "Batman", "Merlynston", "Fawkner", "Gowrie", "Upfield"],
  "Werribee": ["Southern Cross", "Flinders Street", "Parliament", "Melbourne Central", "Flagstaff",
              "North Melbourne", "South Kensington", "Footscray", "Seddon", "Yarraville", "Spotswood",
              "Newport", "Seaholme", "Altona", "Westona", "Laverton", "Aircraft", "Williams Landing",
              "Hoppers Crossing", "Werribee"],
  "Williamstown": ["Southern Cross", "Flinders Street", "Parliament", "Melbourne Central", "Flagstaff",
              "North Melbourne", "South Kensington", "Footscray", "Seddon", "Yarraville", "Spotswood",
              "Newport", "North Williamstown", "Williamstown Beach", "Williamstown"]
};

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
  var startLine, endLine, station1, station2, Flinders;
  var plannedRoute = document.createElement("div");
  plannedRoute.className = "route";
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
  plannedRoute.innerHTML = "<p>Origin: " + origin + "<br>Destination: " + destination + "</p>";

  if (origin !== destination){
    //If all stations are on the same track, switch them to a single line
    if (network[endLine].indexOf(origin) > -1){
      startLine = endLine;
    } else if (network[startLine].indexOf(destination) > -1){
      endLine = startLine;
    }
    plannedRoute.innerHTML += "<p>Take the " + startLine + " line.</p>";
    //Push stations to the route array
    if (startLine === endLine){
      station1 = network[startLine].indexOf(origin);
      station2 = network[endLine].indexOf(destination);
      if (station1 < station2){
        route = network[startLine].slice(station1, (station2 + 1));
      } else {
        route = network[startLine].slice(station2, (station1 + 1));
        route.reverse();
      }
      //Add route directions to the route element,
      plannedRoute.innerHTML += "<p>" + route.join(" -----> ") + "</p>";
      plannedRoute.innerHTML += "<p>" + (route.length - 1) + " stops total</p>";
    } else {//Change of line is required
      station1 = network[startLine].indexOf(origin);
      Flinders = network[startLine].indexOf("Flinders Street");
      if (station1 < Flinders){
        route = network[startLine].slice(station1, (Flinders + 1));
      } else {
        route = network[startLine].slice(Flinders, (station1 + 1));
        route.reverse();
        var routeFlipped = true;
      }
      Flinders = network[endLine].indexOf("Flinders Street");
      station2 = network[endLine].indexOf(destination);
      if (Flinders > station2 ){
        second = network[endLine].slice(station2, Flinders + 1);
        second.reverse();
        var secondFlipped = true;
      } else {
        second = network[endLine].slice(Flinders, (station2 + 1));
      }
      //Is route flipped? Currently crops the wrong end of a flipped route.
      for(var i = 0; i < route.length; i++){
        var overlap = second.indexOf(route[i]);
        if (overlap > -1){
          route = route.slice(0, i + 1);
          second = second.slice(overlap);
        }
      }
      //Add route directions to the route element,
      plannedRoute.innerHTML += "<p>" + route.join(" -----> ") + "</p>";
      plannedRoute.innerHTML += "<p>" + (route.length - 1) + " stops total</p>";
      plannedRoute.innerHTML += "<p>CHANGE LINES: Take the " + endLine + " line.</p>";
      plannedRoute.innerHTML += "<p>" + second.join(" -----> ") + "</p>";
      plannedRoute.innerHTML += "<p>" + (second.length - 1) + " stops total</p>";
    }
  }
  var routes = document.getElementById("routes")
  routes.insertBefore(plannedRoute, routes.firstChild);
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

function displayRoute(){
  var start = document.getElementById("start");
  var origin = start.value;
  if (checkStation(origin)){
    start.className = "";
  } else {
    start.className = "missing";
  }
  var end = document.getElementById("end");
  var destination = end.value;
  if (checkStation(destination)){
    end.className = "";
  } else {
    end.className = "missing";
  }
  if (checkStation(origin) && checkStation(destination)){
    calculateRoute(origin, destination);
  }
}

window.onload = function(){
  document.getElementById("show").addEventListener("click", displayRoute);
};
