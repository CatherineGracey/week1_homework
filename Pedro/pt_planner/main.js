// lines is a array of objects containing name(string) and stations(array of strings)
var lines = [ { name: 'Alamain',
                stations:['Flinders Street',
                          'Richmond',
                          'East Richmond',
                          'Burnley',
                          'Hawthorn',
                          'Glenferrie']},
              { name: 'GlenWaverly',
                stations:['Flagstaff',
                          'Melbourne Central',
                          'Parliament',
                          'Richmond',
                          'Kooyong',
                          'Tooronga']},
               { name: 'Sandringham',
                 stations:['Southern Cross',
                           'Richmond',
                           'South Yarra',
                           'Prahran',
                           'Windsor']}];

var rich = "Richmond";
var originLine ;
var origin ;
var destinationLine ;
var destination ;
var originData = { lineIndex: null,
                   name: null,
                   stationIndex: null,
                   connectionIndex: null };
var destinationData = { lineIndex: null,
                        name: null,
                        stationIndex: null,
                        connectionIndex: null};

      // ----------------Still under development ----------------------

function inputStationOrig() {
  var i = 1
  for (var y = 0; y < lines[i].stations.length; i++) {
    var listStationOrig = document.getElementById('station-origin');
    var createOption = document.createElement('option');
    createOption.value = y;
    createOption.innerHTML = (lines[i].stations[y]);
    listStationOrig.appendChild(createOption);
  }
}
function inputLineDest() {
  for (var i = 0; i < lines.length; i++) {
    var listLineDest = document.getElementById('line-destination');
    var createOption = document.createElement('option');
    createOption.value = i;
    createOption.innerHTML = (lines[i].name);
    listLineOrig.appendChild(createOption);
  }
}
function inputStationDest() {
  for (var i = 0; i < lines.length; i++) {
    var listStationDest = document.getElementById('station-destination');
    var createOption = document.createElement('option');
    createOption.value = i;
    createOption.innerHTML = (lines[i].name);
    listLineOrig.appendChild(createOption);
  }
}
inputLineOrig();
// inputStationOrig();
// inputLineDest();
// inputStationDest();
// --------------------------------------------------------------
  //   for (var i = 0; i < lines.length; i++) {
  //     document.write('<select><option value=1>value1</option></select>');
  //
  //     "<option value=" + lines[i].name + ">"+ lines[i].name + "</option>"
  //   }
  // )

 // find origin line
  for (var i = 0; i < lines.length; i++) {
    var lineTest = lines[i];
    x = lineTest.stations.indexOf(origin);
    if (x >= 0) { // if 'x' is a valid index of origin, give values to originData
      originData.lineIndex = i;
      originData.name = lineTest.name;
      originData.stationIndex = x;
      originData.connectionIndex = lineTest.stations.indexOf(rich);
      break;
    }
  }

  // Find destination line
  for (var y = 0; y < lines.length; y++) {
    var lineTest = lines[y]
    z = lineTest.stations.indexOf(destination);
    if (z >= 0) { // if 'z' is a valid index of destination, give values to destinationData
      destinationData.lineIndex = y;
      destinationData.name = lineTest.name;
      destinationData.stationIndex = z;
      destinationData.connectionIndex = lineTest.stations.indexOf(rich);
      break;
    }
  }

    function printStations(value,value2){
      var totalStops = 0;
      // print value 1 (Origin Line)
      if (value.stationIndex > value.connectionIndex){// if index of origin > connection
        for (var i = value.stationIndex; i >= value.connectionIndex; i--) {
          if (i === value.connectionIndex) { // if it is time to change platform
            console.log(lines[value.lineIndex].stations[i] + ' ***(Change platform)**-> ');
            totalStops++;
          }else { // do not need to change platform
            console.log(lines[value.lineIndex].stations[i] + ' --> ');
            totalStops++;
          }
        }
      }else{ // index of origin < connection
        for (var i = value.stationIndex; i <= value.connectionIndex; i++) {

          if (i === value.connectionIndex) { // if it is time to change platform
            console.log(lines[value.lineIndex].stations[i] + ' ***(Change platform)**-> ');
            totalStops++;
          }else { // do not need to change platform
            console.log(lines[value.lineIndex].stations[i] + ' --> ');
            totalStops++;
          }
        }
      }

      // print value 2 (Destination Line)
      if (value2.connectionIndex < value2.stationIndex){ // if index of connection < destination
        for (var w = value2.connectionIndex + 1; w <= value2.stationIndex; w++) {
          if (w === value2.stationIndex) { // if it is the last station
            console.log(lines[value2.lineIndex].stations[w]);
            totalStops++;
          }else { // not the last station
            console.log(lines[value2.lineIndex].stations[w] + ' --> ');
            totalStops++;
          }
        }
      }else{ //index of connection > destination
        for (var w = value2.connectionIndex -1; w > value2.stationIndex; w--) {
          if (w === value2.stationIndex) { // if it is the last station
            console.log(lines[value2.lineIndex].stations[w]);
            totalStops++;
          }else { // not the last station
            console.log(lines[value2.lineIndex].stations[w] + ' --> ');
            totalStops++;
          }
        }
      }
      console.log('Total Stops: ' + (totalStops - 1)); // Total Stops from origin to dest.
    }

    function inputLineOrig() {
      for (var i = 0; i < lines.length; i++) {
        var listLineOrig = document.getElementById('line-origin');
        console.log(listLineOrig);
        // var createOption = document.createElement('option');
        // createOption.value = i;
        // createOption.innerHTML = (lines[i].name);
        // listLineOrig.appendChild(createOption);
      }
    }
