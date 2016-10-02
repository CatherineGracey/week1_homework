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

//Eloquent JavaScript Exercises

//Minimum

//The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.

// Your code here.

function min(num1, num2){
  if (num1 < num2){
    return num1;
  } else {
    return num2;
  }
}

console.log(min(0, 10));  // → 0
console.log(min(0, -10));  // → -10

//Recursion

//We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
//  Zero is even.
//  One is odd.
//  For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

function isEven(num){
  if (num === 0){
    return true;
  } else if (Math.abs(num) === 1){
    return false;
  } else {
    return isEven(Math.abs(num - 2));
  }
}

console.log(isEven(50)); // → true
console.log(isEven(75)); // → false
console.log(isEven(-1)); // → ??

//Bean counting

//You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its length with "s".length. The returned value will be a string containing only one character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.
//Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

function countBs(str){
  var count = 0;
  for (var i = 0; i < str.length; i++){
    if (str[i] === "B"){
      count++;
    }
  }
  return count;
}

//Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

function countChar(str, char){
  var count = 0;
  for (var i = 0; i < str.length; i++){
    if (str[i] === char){
      count++;
    }
  }
  return count;
}

console.log(countBs("BBC")); // → 2
console.log(countChar("kakkerlak", "k")); // → 4
