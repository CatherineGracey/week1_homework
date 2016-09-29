// Wednesday 28th Lab Exercise
// Melbourne Public Transport Journey Planner

// Station data and adjacency list
var lines = ['Alamein', 'Glen Waverly', 'Sandringham'];
var railNetwork = {
  'Flinders Street': {
    lines: ['Alamein'],
    neighbours: ['Richmond']
  },
  'Richmond': {
    lines: ['Alamein', 'Glen Waverly', 'Sandringham'],
    neighbours: ['Flinders Street', 'East Richmond', 'Kooyong', 'Parliament', 'Southern Cross', 'South Yarra']
  },
  'East Richmond': {
    lines: ['Alamein'],
    neighbours: ['Richmond', 'Burnley']
  },
  'Burnley': {
    lines: ['Alamein'],
    neighbours: ['Hawthorn', 'East Richmond']
  },
  'Hawthorn': {
    lines: ['Alamein'],
    neighbours: ['Burnley', 'Glenferrie']
  },
  'Glenferrie': {
    lines: ['Alamein'],
    neighbours: ['Hawthorn']
  },
  'Flagstaff': {
    lines: ['Glen Waverly'],
    neighbours: ['Melbourne Central']
  },
  'Melbourne Central': {
    lines: ['Glen Waverly'],
    neighbours: ['Flagstaff', 'Parliament']
  },
  'Parliament': {
    lines: ['Glen Waverly'],
    neighbours: ['Melbourne Central', 'Richmond']
  },
  'Kooyong': {
    lines: ['Glen Waverly'],
    neighbours: ['Richmond', 'Tooronga']
  },
  'Tooronga': {
    lines: ['Glen Waverly'],
    neighbours: ['Kooyong']
  },
  'Southern Cross': {
    lines: ['Sandringham'],
    neighbours: ['Richmond']
  },
  'South Yarra': {
    lines: ['Sandringham'],
    neighbours: ['Richmond', 'Prahran']
  },
  'Prahran': {
    lines: ['Sandringham'],
    neighbours: ['South Yarra', 'Windsor']
  },
  'Windsor': {
    lines: ['Sandringham'],
    neighbours: ['Prahran']
  }
};

// Read and validate user input
var line = prompt('Enter train line:');
var startPoint;
var endPoint;
var solution;

if (lines.indexOf(line) === -1) {
  console.log('Line does not exist');
}
else {
  startPoint = prompt('Enter starting station:');
  if (typeof railNetwork[startPoint] === 'undefined') {
    console.log('Start station not a valid station');
  }
  else {
    endPoint = prompt('Enter destination:');
    if (typeof railNetwork[endPoint] === 'undefined') {
      console.log('End station not a valid station');
    }
    // If valid, find path between stations
    else {
      solution = findRoute(railNetwork, startPoint, endPoint);
      printResults(railNetwork, startPoint, endPoint, solution);
    }
  }
}

// Find route between start point and end point
function findRoute(network, startPoint, endPoint) {
  var visitedNodes = [];
  var tree = {};
  var stack = [];
  var solution = [];

  // Depth first search - find path from start point to end point
  stack.push(startPoint);
  while (stack.length > 0) {
    // Get next node
    var current = stack.pop();
    // Mark current as visited
    visitedNodes.push(current);

    // If end point found, create path and exit
    if (current === endPoint) {
      // Reconstruct path and end search
      solution = reconstructPath(tree, startPoint, endPoint);
      return solution;
    }

    // Else, add neighbours to stack
    var neighbours = railNetwork[current].neighbours;
    for (var i = 0; i < neighbours.length; i++) {
      if (visitedNodes.indexOf(neighbours[i]) === -1) {
        if (tree[neighbours[i]]) {
          console.log('duplicate');
        }
        tree[neighbours[i]] = current;
        stack.push(neighbours[i]);
      }
    }
  }
}

// Build path from start to end point
function reconstructPath(tree, startPoint, endPoint) {
  var solution = [];

  // Trace path back to start point
  solution.unshift(endPoint);
  var tracePoint = tree[endPoint];
  while (tracePoint !== startPoint) {
    solution.unshift(tracePoint);
    tracePoint = tree[tracePoint];
  }
  solution.unshift(tracePoint);

  return solution;
}

// Display results
function printResults(railNetwork, startPoint, endPoint, route) {
  // Print overview
  console.log('initial rail line: ' + line);
  console.log('origin: ' + startPoint);
  console.log('destination: ' + endPoint);
  console.log('');

  // Print stations along route
  var routeString = '';
  for (var i = 0; i < route.length - 1; i++) {
    routeString += route[i] + ' -----> ';

    var currentStation = railNetwork[route[i]];
    var nextStation = railNetwork[route[i + 1]];

    // Notify user of line changes
    if (nextStation.lines.indexOf(line) === -1) {
      routeString += ' [Switch to ' + nextStation.lines[0]
        + ' line] -----> ';
      line = nextStation.lines[0];
    }
  }
  routeString += route[route.length - 1];
  console.log(routeString);

  // Print statistics
  console.log('');
  console.log(route.length - 1 + ' stops total');
}
