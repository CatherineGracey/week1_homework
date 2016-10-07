// Exercises: Objects
// The Recipe Card
var recipeCard = {
  title: 'Mole',
  servings: 2,
  ingredients: ['cinnamon', 'cumin', 'cocoa']
};

console.log(recipeCard.title)

console.log("Serves: " + recipeCard.servings)

console.log("Ingredients: ")
for (var i=0; i < recipeCard.ingredients.length; i++)  {
  console.log(recipeCard.ingredients[i])
}

// The Reading List
var books = [
  {title: 'The Hobbit', author: 'J.R.R. Tolkien', alreadyRead: true},
  {title: "Ender's Game", author: 'Orson Scott Card', alreadyRead: true},
  {title: 'Temple', author: 'Matthew Reiley', alreadyRead: false}
]

for (var i = 0; i < books.length; i++) {
  if (books[i].alreadyRead === true) {
    console.log("You already read " + books[i].title + " by " + books[i].author);
  } else {
      console.log("You still need to read " + books[i].title + " by " + books[i].author);
  }
}

// The Movie Database
var movie = {title: 'Pulp Fiction', duration: 120, stars: ['John Travolta', 'Bruce Willis', 'Samual L Jackson']}

console.log(movie.title + " lasts for " + movie.duration + " minutes. Stars: " + movie.stars.join(", ") + ".");
