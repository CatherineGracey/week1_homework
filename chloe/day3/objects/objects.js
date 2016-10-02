var favouriteRecipe = {
  title: "Mole",
  servings: "Serves 2",
  subtitle: 'Ingredients',
  ingredients: ['cinnamon','cumin','cocoa']
}

console.log(favouriteRecipe.title)
console.log(favouriteRecipe.servings)
console.log(favouriteRecipe.subtitle)
console.log(favouriteRecipe.ingredients[0])
console.log(favouriteRecipe.ingredients[1])
console.log(favouriteRecipe.ingredients[2])


var theThreeLittlePigs = {
  title: 'The 3 LIL PIGS',
  description: "What does the big bad wolf do!",
  author: "The Small Nice Wolf",
  alreadyRead: 'No'
}

var Goldilocks = {
  title: 'Goldilocks',
  description: "Friend or foe? Read to find out!",
  author: 'Papa Bear',
  alreadyRead: 'Yes'
}

var snowWhite = {
  title: 'Snow White and the Seven Dwarves',
  description: "Is snow white a princess or a liar?!",
  author: "The Neglected Dwarf",
  alreadyRead: 'Yes'
}


var readingList = [theThreeLittlePigs, Goldilocks, snowWhite];

for (var i = 0; i < readingList.length; i++) {
  if (readingList[i].alreadyRead === 'Yes') {
    console.log("You've already read " + readingList[i].title + " by " + readingList[i].author);
  } else {
    console.log("You still need need to read " + readingList[i].title + " by " + readingList[i].author);
  }
}

var favouriteMovie = {
  title: "The Usual Suspects",
  duration: "106",
  stars: ["Kevin Spacey, Gabriel Byrne, Chazz Palminteri"],
}

console.log(favouriteMovie.title + " lasts for " + favouriteMovie.duration + " minutes. Stars: " + favouriteMovie.stars);
