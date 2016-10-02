// Create an object to hold information on your favorite recipe.
// It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

// On separate lines (one console.log statement for each), log the recipe information so it looks like:

// The recipe card
var recipe = {
  title: 'Mole',
  serves: 2,
  ingredients: ['cinnamon', 'cumin', 'cocoa']
}

console.log(recipe.title);
console.log(recipe.serves);
for (var i = 0; i < recipe.ingredients.length; i++) {
  console.log('-' + recipe.ingredients[i]);
}


// Create an array of objects, where each object describes a book and has properties for the title (a string),
// author (a string), and alreadyRead (a boolean indicating if you read it yet).

// Iterate through the array of books. For each book, log the book title and book author like so:
// "The Hobbit by J.R.R. Tolkien". Now use an if/else statement to change the output depending on whether you
// read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien',
// and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

// The Reading List

var harryPotter = {
  title: 'Harry Potter',
  author: 'J,K Rowling',
  alreadyRead: false
}

var theHobbit = {
  title: 'The Hobbit',
  author: 'J.R.R Tolkien',
  alreadyRead: true
}

var theGirlOnTheTrain = {
  title: 'The Girl On The Train',
  author: 'Paula Hawkins',
  alreadyRead: false
}

var books = [harryPotter, theHobbit, theGirlOnTheTrain];

for (var index = 0; index < books.length; index++) {
  if (index === 0) {
    console.log(harryPotter.title + ' by ' + harryPotter.author);
  } else if (index === 1) {
    console.log(theHobbit.title + ' by ' + theHobbit.author);
  } else {
    console.log(theGirlOnTheTrain.title + ' by ' + theGirlOnTheTrain.author);
  }
};

// Create an object to store the following information about your favorite movie:
// title (a string), duration (a number), and stars (an array of strings).

// Create a function to print out the movie information like so:
// "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

// The Movie Database

var favMovie = {
  title: 'Coach Carter',
  duration: 2,
  stars: ['Samuel L Jackson', ' Channing Tatum ', ' Ashanti']
}

var coachCarter = function() {
  console.log(favMovie.title + ' lasts for ' + favMovie.duration + ' hours. Stars: ' + favMovie.stars);
}

coachCarter();
