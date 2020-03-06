// get the first number from the user (with a prompt)
 var firstNum = Number(prompt('What is the first number?'));
// get the operator from the user (with a prompt)
 var operator = prompt('What operator would you like to use - a(dd), m(ultiply), s(subtract), d(ivide), p(ow), r(oot)?');

// function for squareroot
while (operator === 'r') {
  function root(firstNum) {
    return (Math.sqrt(firstNum));
  } alert(Math.sqrt(firstNum));
  break;
}

// get last number from the user (with a prompt)
var secondNum = Number(prompt('What is the second number?'));

// create 4 functions (add, subtract, devide, multiply)
 while (operator === 'a') {
  function add (firstNum, secondNum) {
    return (firstNum + secondNum);
  } alert(add(firstNum, secondNum));
  break;
}
while (operator === 's') {
function subtract (firstNum, secondNum) {
  return (firstNum - secondNum);
} alert(subtract(firstNum, secondNum));
break;
}
while (operator === 'm') {
  function multiply (firstNum, secondNum) {
    return (firstNum * secondNum);
  } alert(multiply(firstNum, secondNum));
  break;
}
while (operator === 'd') {
  function devide (firstNum, secondNum) {
    return (firstNum / secondNum);
  } alert(devide(firstNum, secondNum));
  break;
}
while (operator === 'p') {
  function pow(firstNum, secondNum) {
    return (Math.pow(firstNum, secondNum));
  } alert(Math.pow(firstNum, secondNum));
  break;
}

switch(operator === 'a') {
  case '+':
    alert(firstNum + secondNum);
    break;
}
// var m;
// var p;
// var i = 6.0 / 100 / 12;
// var n = 30 * 12;
//
//
// function monthlyPayment(p, n, i) {
//   return p * i * n;
//   // return p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
// }

// while (operator === 'p') {
//   function pow (firstNum, secondNum) {
//     return (firstNum, secondNum);
//   } alert(pow(math.pow(firstNum, secondNum));
//   break;
// }


// if (operator === 's' ) {
//   console.log(firstNum * secondNum);
// } else if (operator === 'd') {
//   console.log(firstNum / secondNum);
// } else if (operator === 'm') {
//   console.log(firstNum - secondNum);
// } else if (operator === 'a') {
//   console.log(firstNum + secondNum));
// }

// decide which function to use depending on the operator

// call the function, passing the numbers as arguements

// alert the user of the answer


// const calcType = prompt('Which calculator would you like to use? (b)asic (a)dvanced');
//
// if(calcType === 'b') {
//   const firstNum = parseFloat(prompt('What is the first number?'));
//   const secondNum = parseFloat(prompt('What is the second number?'));
//   const operator = prompt('What is the operator number?');
//
//   switch(operator) {
//     case '+':
//       alert(firstNum + secondNum);
//       break;
//     case '-':
//       alert(firstNum - secondNum);
//       break;
//     case '/':
//       alert(firstNum / secondNum);
//       break;
//     case '*':
//       alert(firstNum * secondNum);
//       break;
//   }
// } else if(calcType === 'a') {
//   // do some advanced shit...
// }

// const myShoppingList = [
//   { item: 'toothpaste', qty: 1, brands: ['Colgate', 'Arm & Hammer'] },
//   { item: 'eggs', qty: 6 }
// ];
//
// myShoppingList.addBrand = function(item, brand) {
//   const itemToAddTo = this.filter(function(object) {
//     return object.item === item;
//   })[0];
//   itemToAddTo.brands.push(brand);
// };
//
// myShoppingList.addBrand('toothpaste', 'Sensodyne');
// console.log(myShoppingList);
