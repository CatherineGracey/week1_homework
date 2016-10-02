// Store recipe information in object
var recipe = {
  name: 'Apple pie',
  serves: 2,
  ingredients: [
    'apple',
    'sugar',
    'pastry'
  ]
};

// Store array of objects containing book details
var readingList = [
  {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    alreadyRead: false
  },
  {
    title: 'Think Like a Programmer',
    author: 'V. Anton Spraul',
    alreadyRead: true
  },
  {
    title: '1984',
    author: 'George Orwell',
    alreadyRead: false
  }
];

// Store movie data
var movie = {
  title: 'The Social Network',
  duration: 120,
  stars: [
    'Jesse Eisenberg',
    'Andrew Garfield',
    'Justin Timberlake',
    'Armie Hammer',
    'Max Minghella'
  ]
};

// Prints recipe details
function printRecipe(recipe) {
  console.log(recipe.name);
  console.log('Serves: ' + recipe.serves);
  console.log('Ingredients:');
  for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log('* ' + recipe.ingredients[i]);
  }
}

// Prints book details from list
function printReadingList(readingList) {
  for (var i = 0; i < readingList.length; i++) {
    var book = readingList[i];
    var bookInfo = '"' + book.title + '" by ' + book.author;
    if (book.alreadyRead) {
      console.log('You already read ' + bookInfo);
    }
    else {
      console.log('You still need to read ' + bookInfo);
    }
  }
}

// Prints movie details
function printMovieInfo(movie) {
  console.log(movie.title + ' lasts for '
    + movie.duration + ' minutes. '
    + 'Stars: ' + movie.stars.join(', '));
}


// Print objects from tasks 1 - 3
console.log('Recipe card');
console.log('====================');
printRecipe(recipe);
console.log();

console.log('Reading list');
console.log('====================');
printReadingList(readingList);
console.log();

console.log('Mini IMDB');
console.log('====================');
printMovieInfo(movie);
