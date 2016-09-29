// console.log('objects');

// Part 1 - The Recipe Card

var recipes = [
    {
      title: 'Banana Coconut Tapioca Pudding',
      servings: 6,
      ingredients: ['coconut milk', 'palm sugar', 'bananas', 'tapioca pearls', 'water']
    },
    {
      title: 'Avocado Creme',
      servings: 4,
      ingredients: ['2 avocados', 'condensed milk', 'milk', 'lemon']
    }
]

// log the recipe information

// title and servings
for (var i = 0; i < recipes.length; i++) {
  console.log(recipes[i].title);
  console.log('Serves: ' + recipes[i].servings);
  // ingredients
  for (var j = 0; j < recipes[i].ingredients.length; j++) {
    console.log('• ' + recipes[i].ingredients[j]);
  }
}

// Part 2 - The Reading List

var books = [
  {
    title: 'Bad Behaviour',
    author: 'Mary Gaitskill',
    alreadyRead: true
  },
  {
    title: 'The Map and The Territory',
    author: 'Michel Houellebecq',
    alreadyRead: true
  },
  {
    title: 'Remembrance of Things Past',
    author: 'Marcel Proust',
    alreadyRead: false
  }
]

for (var i = 0; i < books.length; i++) {
  if (books[i].alreadyRead === true) {
    console.log('You already read ' + books[i].title + ' by ' + books[i] .author);
  } else {
    console.log('You still need to read ' + books[i].title + ' by ' + books[i] .author);
  }
}

// Part 3 - The Movie Database

var movies = [
  {
    title: '8 1/2',
    duration: '2 hr 18 mins',
    stars: ['Marcello Mastroianni', 'Anouk Aimee', 'Claudia Cardinale']
  },
  {
    title: 'Melancholia',
    duration: '2 hr 10 mins',
    stars: ['Kirsten Dunst', 'Charlotte Gainsbourg', 'Kiefer Sutherland']
  },
  {
    title: 'Batman',
    duration: '2 hr 6 mins',
    stars: ['Michael Keaton', 'Jack Nicholson', 'Kim Basinger']
  }
]

function printMovie() {
  for (var i = 0; i < movies.length; i++) {
    console.log(movies[i].title + ' lasts for 30 minutes. Stars: ' + movies[i].stars.join(', '));
  }
}

printMovie();
