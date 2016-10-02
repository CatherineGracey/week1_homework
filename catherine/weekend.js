console.log("Weekend homework loaded.");

//a few bonus exercises:

//How old will I be in 2099?

//Philip's just turned four this year (2016) and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.
//Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more courious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.
//Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"
//"..." are to be replaced by the number, followed and proceeded by a single space.

function  calculateAge(born, year) {
  var age = year - born;
  if (age === 0){
    return "You were born this very year!"
  } else if (age > -1){
    return "You are " + age + " year(s) old";
  } else {
    return "You will be born in " + Math.abs(age) + " year(s).";
  }
}

//Sum of Multiples

//Your Job:

//Find the sum of the multiples of n i.e. less than m

function sumMul(num,mult){
  var answer = 0;
  for (var i = num; i < mult; i += num){
    answer += i;
  }
  if (answer === 0){
    return "INVALID";
  } else {
    return answer;
  }
}

//sample outputs:
console.log( sumMul(2,9) );   //should return 20
console.log( sumMul(3,13) );  //should return 30
console.log( sumMul(4,123) ); //should return 1860
console.log( sumMul(4,-7) );  //should return INVALID
