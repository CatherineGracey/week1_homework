var recipes = {
  name: 'Mole',
  servings: 2 ,
  ingredients: ['cinnamon','cumin','cocoa']
}

console.log(recipes.name);
console.log(recipes.servings);
for (var i = 0; i < recipes.ingredients.length; i++) {
  console.log(recipes.ingredients[i]);
}



// The reading list

var books = [{ title: "The Hobbit", author: "J.R.R. Tolkien",alreadyRead: true},
             { title: "The Hunger Game", author: "Suzanne Collins",alreadyRead: true},
             { title: "The Kite Runner", author: "Khaled Hosseini",alreadyRead: true},
             { title: "The Book Thief", author: "Markus Zusak",alreadyRead: false},
             { title: "Life of Pi", author: "Yann Martel",alreadyRead: false}];

for (var i = 0; i < books.length; i++) {
  var book = books[i];
  if (book.alreadyRead === true){
    console.log('You already read "'
    + book.title
    +'" by "'
    + book.author
    + '".');
  }else {
    console.log('You still need to read "'
    + book.title
    +'" by "'
    + book.author
    + '".');
  }
}

// the movie

var movies = {title: "Mad Max - Fury Road",
              duration: "120",
              stars:["Tom Hardy ","Charlize Theron "]};

function describeMovie(movie){
  console.log(movie.title + " lasts for " + movie.duration + " minutes. Stars: " + movie.stars + ".");

}
describeMovie(movies);
