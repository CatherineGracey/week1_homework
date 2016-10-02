

//create object containing recipe parts
//title (a string), servings (a number), and ingredients (an array of strings).
var myRecipes=
{
  title: 'Lentil Soup',
  servings: 4,
  ingredients: ['lentils', 'onion', 'carrot', 'celery', 'tomato puree', 'vegemite']
};


//On separate lines (one console.log statement for each), log the recipe information so it looks like:
console.log('Recipe : ' + myRecipes.title);
console.log('Number of servings : ' + myRecipes.servings);
console.log('Ingredients :');
for (i=0; i < myRecipes.ingredients.length; i++){

console.log(myRecipes.ingredients[i]);
}



//Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
var greatBooks =
 [{
  title: 'Far from the Madding crowd',
  author: 'Thomas Hardy',
  alreadyRead: true
},
{
 title: 'Nicholas Nickelby',
 author: 'Charles Dickens',
 alreadyRead: false
},
{
 title: 'Romeo and Juliet',
 author: 'William Shakespeare',
 alreadyRead:true
}
]


//Iterate through the array of books. For each book, log the book title and book author like so:
//"The Hobbit by J.R.R. Tolkien".
//Now use an if/else statement to change the output depending on whether you read it yet or not.
//If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not,
//log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

for (var i = 0; i < greatBooks.length; i++) {
console.log(greatBooks[i].title + ' by '+ greatBooks[i].author);
if  (greatBooks[i].alreadyRead === true) {
    console.log('You have already read ' + greatBooks[i].title);
  } else {
    console.log('You may like to read ' + greatBooks[i].title);

  }
}

//Create an object to store the following information about your favorite movie: title (a string),
//duration (a number), and stars (an array of strings).

//Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for
//30 minutes. Stars: Puff, Jackie, Living Sneezes."

var favMovie = {
  title: 'Hunt for the Wilderpeople',
  duration: 120,
  stars: ['Sam Neill', 'Miss Trunchbowl', 'Kiwi kid']
}

var printIt = function(){
console.log(favMovie.title + ' lasts for ' + favMovie.duration + ' mins. It stars: ' + favMovie.stars.join(', '));
}

printIt();
