console.log('it works');

// The Recipe Card
var recipe = {
  title: 'Mole',
  serves: 2,
  ingredients: ['cinnamon', 'cumin', 'cocoa']
}

console.log(recipe.title);
console.log('Serves: ' + recipe.serves);
console.log('Ingredients:');
for (var i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}

// The Reading List
var readingList = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkein',
    alreadyRead: true
  },
  {
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkein',
    alreadyRead: false
  },
  {
    title: 'Some other book',
    author: 'Some other guy',
    alreadyRead: false
  }
];

for (var i = 0; i < readingList.length; i++) {
  if (readingList[i].alreadyRead === true) {
    console.log('You already read "' + readingList[i].title + '" by ' + readingList[i].author);
  } else {
    console.log('You still need to read "' + readingList[i].title + '" by ' + readingList[i].author);
  }
}

// The Movie Database
var movie = {
  title: 'Puff the Magic Dragon',
  duration: 30,
  stars: ['Puff', 'Jackie', 'Living Sneezes']
}

console.log(movie.title + ' lasts ' + movie.duration + ' minutes. Stars: ' + movie.stars.join(', ') + '.');
