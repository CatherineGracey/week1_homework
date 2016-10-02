console.log("Ready");

var my_recipe = {
  title: 'Something Delicious',
  servings: 100,
  ingredients: ['sugar', 'candy', 'pizza']
}

console.log('-----MY RECIPE----')
console.log(my_recipe.title);
console.log('Serves: ' + my_recipe.servings);
console.log('Ingredients:');

for (var i = 0; i < my_recipe.ingredients.length; i++) {
  console.log(my_recipe.ingredients[i]);
}

console.log('-----------------');

var books = [
  {
    title: 'A Good Book',
    author: 'Some Dude',
    alreadyRead: false
  },
  {
    title: "An Ok Book",
    author: "Some Guy",
    alreadyRead: true
  },
  {
    title: "An Awesome Book",
    author: "Some Bloke",
    alreadyRead: false
  },
  {
    title: "An Crappy Book",
    author: "Somebody",
    alreadyRead: true
  }
]

var readOutput = "";

for (var i = 0; i < books.length; i++) {
  if(books[i].alreadyRead) {
    readOutput = 'You already read "';
  }
  else {
    readOutput = 'You still need to read "';
  }
  readOutput += books[i].title + '" by ' + books[i].author;
  console.log(readOutput);
}

console.log('-----------------');

var myMovie = {
  title: 'The Terminator 2',
  duration: 120,
  stars: ['Arnie', 'More Arnie', 'Even more arnie']
}

console.log(myMovie.title + ' lasts for ' + myMovie.duration + ' minutes. Stars: ' + myMovie.stars.join(', '));
