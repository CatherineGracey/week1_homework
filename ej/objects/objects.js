//The Recipe Card
var recipe = {
  title:'Mole',
  servings:2,
  ingredients:['cinnamon','cumin','cocoa']
};

console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);
console.log(recipe['ingredients']);

//The Reading List


// var books = {
//   'Lord of the Rings' : {
//     author : 'JRR Tolkien',
//     alreadyRead : false,
//   }
//
//   'Talented Mr Ripley' : {
//     author' : 'Patricia Highsmith',
//     'alreadyRead' : false,
//   }
//
//   'The Hobbit' : {
//     'author' : 'JRR Tolkien',
//     'alreadyRead' : true,
//   }
//
//   'Pride and Predjudice' : {
//     'author' : 'Jane Austen',
//     'alreadyRead' : true,
//   }
// }
//
// for (var i = 0; i < books.length; i++){
//   if()
//
// }


var books = [
  {
    title:'Mr Ripley',
    author:'Patricia Highsmith',
    alreadyRead:false
  },
  {
    title:'Lord of the Rings',
    author:'JRR Tolkein',
    alreadyRead:false
  },
  {
    title:'Hobbit',
    author:'JRR Tolkein',
    alreadyRead:true
  },
  {
    title:'Harry Potter',
    author:'JK Rowling',
    alreadyRead:true
  }
];

for(var i = 0; i < books.length; i++){
  console.log(books[i].title + ' by ' + books[i].author);

  if(books[i].alreadyRead === true){
    console.log('Youve already read ' + books[i].title);
  }else {
    console.log('You have not read ' + books[i].title);
  }

};

//The Movie Database
var movie = {
    title:'Grizzly Man',
    duration:90,
    stars:['Werner', 'Tim', 'Jackie']
  };

  function printMovie(){
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes. Stars: ' + movie.stars.join(' and '));
  }

printMovie();
