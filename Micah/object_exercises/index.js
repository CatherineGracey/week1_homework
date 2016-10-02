// The Recipe Card
//
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var recipe = {
  title : 'Guacamole',
  servings : 4,
  ingredients : [ 'Avocado',
                  'Red Onion',
                  'Parsley'
                ]
};

console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);

// The Reading List
//
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and has
// properties for the title (a string), author (a string), and alreadyRead
// (a boolean indicating if you read it yet).
//
// Iterate through the array of books. For each book, log the book title and
// book author like so: "The Hobbit by J.R.R. Tolkien". Now use an if/else
// statement to change the output depending on whether you read it yet or not.
// If you read it, log a string like 'You already read "The Hobbit" by J.R.R.
// Tolkien', and if not, log a string like 'You still need to read "The Lord of
// the Rings" by J.R.R. Tolkien.'


var books = [
  {
    title : 'Black Swan',
    author : 'Nassim Taleb',
    read : true
  },
  {
    title : 'The Lord of the Rings',
    author : 'JRR Tolkien',
    read : true
  },
  {
    title : 'The Girl with the Dragon Tatoo',
    author : 'David Fincher',
    read : false
  }
];

for (var i = 0; i < books.length; i++) {
  console.log(books[i].title + ' by ' + books[i].author);
  if (books[i].read === true) {
    console.log('You have already read this Book.');
  } else {
    console.log('You have not read this book yet.')
  }
}

// The Movie Database
//
// It's like IMDB, but much much smaller!
//
// Create an object to store the following information about your favorite
// movie: title (a string), duration (a number), and stars (an array of strings).
//
// Create a function to print out the movie information like so: "Puff the
// Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

 var favMovie = {
   title : 'All is Lost',
   duration : 125,
   stars : ['Robert Redford',
            'Guy on Radio',
            'Hand']
 };
console.log(favMovie.title + ' lasts for ' + favMovie.duration + ' minutes. Stars: ' + favMovie.stars.join(', ') + '.');
