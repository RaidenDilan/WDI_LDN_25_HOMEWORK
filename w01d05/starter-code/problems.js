// write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// eg: hello() => "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(string='World') {
  return `Hello ${string}!`;
}

// write a function that will calculate the area of a circle, given the radius
function areaOfCircle(radius) {
  if(radius >= 0) {
    return Math.PI * radius * radius;
  }
}

// write a function to convert celcius to farenheit
function celciusToFarenheit(celcius) {
  var fahrenheit = (celcius * (9/5)) + 32;

  if ( typeof fahrenheit !== 'undefined' ) {
  return fahrenheit;
  } else {
    return 'fahrenheit not defined';
  }
}

// write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {
	n = number + "";
	return n.split("").reverse().join("");
}
// write a function to check if a word or phrase is a palindrome returning a boolean
// eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
  var re = /[\W_]/g;
  var lowRegStr = string.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
  }

// write a function that returns the letters of a word or phrase in alphabetical order case insensive
// eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string) {
  var lower = string.toLowerCase('')
  var arr = lower.split(''),
  alpha = arr.sort().join('').replace(/[^A-Z0-9]/ig, "");
  return  alpha;
}

// write a function to return the number of occurances of each letter of a string in an object case insensive
// eg. numOfOccurances('This is great') => { t: 2, h: 1, i: 2, s: 2, g: 1, r: 1, e: 1, a: 1 }
function numOfOccurances(string) {
  var temp = "This is a string.";
  var count = (temp.match(/is/g) || []).length;
}

// write a function that capitalizes the first letter of each word
// eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {
  return string.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

// write a function that returns the number of vowels in a string case insensive
// 'y' should not be considered a vowel
// eg: numOfVowels('Yellow Submarine') => 6
function numOfVowels(string) {
  var m = string.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

// write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// It should handle complex data types eg: {}, [] etc.
// eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {

}

// write a function to return a random element from an array
// eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
  // var randomElement = str[Math.floor(Math.random()*items.length)];
}

// write a function that returns the second lowest and second highest number in an array
// eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
  array.sort(function(x,y)  {
    return x-y;
  });
  var result = [];
  result.push(array[1],array[array.length-2]);
  return result;
}

// write a function that will convert a price into coins needed to make up that price
// the coins available are 1, 2, 5, 10, 20, 50, 100
// the function should use the smallest number of coins possible
// eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coins(price) {

}

// write a function that frames a string in asterisks (*)
//                             ***************
// eg: frame('Hello Kitty') => * Hello Kitty *
//                             ***************
function frame(string) {

}

// write a function to merge two arrays and remove duplicates
// eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {

}

// write a function that converts an array of strings into an array of objects, with the supplied key
// eg: arrayToObjects(["Mike", "Emily"], "name") => [{ name: "Mike" }, { name: "Emily"}]
function arrayToObjects(array, key) {
  for (var i = 0; i < array.length; i++) {
    array[i] = {key: array[i]};
  }
  return array;
}

// write a function to convert an object into an array of arrays containing key and value
// eg: objectToArray({ name: 'Will Smith', dob: '15-09-1968' }) => [['name', 'Will Smith'], ['dob', '15-09-1968']];
function objectToArray(object) {

}

// write a function which returns the number of days between two dates (as strings with format YYYY-MM-DD)
// it should not return negative numbers
// eg: daysBetween("2017-01-01", "2017-02-01") => 31; daysBetween("2017-02-01", "2017-01-01") => 31
function daysBetween(date1, date2) {

}

// write a function which returns the number of seconds between two times (in the same day)
// times should be given as strings in the format "HH:MM:SS"
// it should be able to handle 12-hour (7:35:00pm) and 24-hour (19:35:00) formats
// throw an error if the time format is wrong
function secondsBetween(time1, time2) {

}

// write a function to find the first n fibonacci numbers
// the fibonacci sequence is a series of numbers, each number is the sum of the last two
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {

}
