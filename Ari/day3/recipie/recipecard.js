//console.log('hi');

//Part 1
var favRecipe = {
  title : 'Roast chicken pizza',
  servings : 4,
  ingredients : ['Flat bread(base)', 'Tomato paste', 'Basil', 'Feta cheese', 'Roasted chicken']
}
console.log("My favorite recipe" + " :" + favRecipe.title);
console.log("Number of servings: " + favRecipe.servings);
console.log("Ingredients: ");

for ( i = 0 ; i < favRecipe.ingredients.length ; i++ ) {
  console.log("* " + favRecipe.ingredients[i]);
}
//console.log("* " + favRecipe.ingredients[0]);
//console.log("* " + favRecipe.ingredients[1]);
//console.log("* " + favRecipe.ingredients[2]);
//console.log("* " + favRecipe.ingredients[3]);
//console.log("* " + favRecipe.ingredients[4]);

/*
Part 2


var book1 = {
  title : "The Hobbit",
  author : "J.R.R. Tolkien",
  alreadyRead : false
}
var book2 = {
  title : "Winter is comming",
  author : "George R.R. Martin",
  alreadyRead : true
}
var allBooks = [book1, book2];

//iterate through the books

//for (i = 0; i < allBooks.length; i++) {
//    console.log(allBooks[i].title + " by " + allBooks[i].author);
//}

for (i = 0; i < allBooks.length; i++) {
  if (allBooks[i].alreadyRead === false) {
    ( j = "You still need to read ")
}  else {
  ( j = "You already read ")
  }
  console.log( j + allBooks[i].title + " by " + allBooks[i].author);
}
Part 3

var favMovie = {
  title : "Harry Potter",
  duration : 160, //minutes
  stars : ['Harry', 'Ronn', 'Snape', 'Dumboldore']
}

function printMovieInfo()  {
//"Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
  console.log(favMovie.title + " lasts for " + favMovie.duration + " minutes" + ". It stars : " + favMovie.stars);
}

printMovieInfo();*/
