var receipe = {
title: 'Mole' ,
servings: 2,
ingredientes: ['cinnamon','cumin','cocoa']

}
console.log (receipe.title);
console.log ('Serve : ' + receipe.servings);
console.log ('Ingredientes:');
console.log(receipe.ingredientes[0]);
console.log(receipe.ingredientes[1]);
console.log(receipe.ingredientes[2]);

var books = {
  title : ['The Hobbit', 'The Lord of the Rings', 'The Jury','The Pelican Report'] ,
  author : ['J.R.R. Tolkien','John Grisham'],
  alreayRead : ['yes','no']
}

console.log (books.title[0] + 'by ' + books.author[0]);

if (books.alreayRead[0]==='yes') {
  console.log ('You already read it');}
  else {
  console.log ('You still need to read ' +  books.title[0] +
   'by ' + books.author[0]);
}
console.log (books.title[1] + 'by ' + books.author[0]);

if (books.alreayRead==='yes') {
  console.log ('You already read it');
}
  else {
  console.log ('You still need to read ' +  books.title[1] +
  'by '  + books.author[0]);
}

var movies = {
  title: ['movie a', 'movie b', 'movie c','movie d'],
  duration: [50, 90, 120, 150],
  star:['Bruno', 'Paul1', 'Paul2','Leon']
}
for (var i=0; i<= movies.title.length-1; i++) {
  console.log (movies.title[i] +', ' + movies.duration[i] + ' min ' + ' with star ' +
  movies.star[i]);
}
