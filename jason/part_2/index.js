// counting 0-1 mupliply by 9 i.e create a multiplication table
for (var i = 1; i <= 10; i++) {
  // console.log(i + ' times 9 = ' + (i*9));

  for (var j = 1; j <=10; j++) {
    console.log(j + ' times ' + i + ' = ' + (i * j) );
  }
}

// vegan test (however instead of using 'prompt we using var')

var menu = ['steak', 'pork chops', 'fruit salad', 'tofurkey'];

var choice = 'steak';

if (choice === 'steak' || choice === 'pork chops') {
  console.log('meat');
} else {
  console.log('vegan');
}

// top choices
 var simpsons = ['ned', 'homer', 'bart'];
 var suffix = ['1st', '2nd', '3rd']

//console.log(simpsons[0]);


for (var index = 0; index < simpsons.length; index++) {
  console.log('my ' + suffix[index] + ' choice ' + 'is ' + simpsons[index]);
}
