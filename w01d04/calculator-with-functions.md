![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

WDI
======
## Javascript Calculator (with functions)

###Learning Objectives:

- Create a calculator that takes user input using prompt
- Use functions to group code together
- Use pure javascript rather than a library

<br>
---

###Connection to a long term learning goal

WDI Students need to have a clear understanding of javascript.

<br>
---

###Before Homework

This should follow the intro to javascript lesson.

<br>
---

Javascript Calculator (with functions)
=====

## Opening
[i]: May or may not have done this calculator without functions

The point of this exercise is to group your code into functions. Try to minimise `if...else` statements as much as possible.

## Instructions

Create a calculator that takes input from the browser using [`prompt`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt). The calculator should display the results using [`alert`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert).

The calculator should do the basic arithmetic operations.

### Basic Calculator

1. Must be able to +, -, / and *
2. Must take user input using prompt
3. Must be able display the result using alert
5. Should handle floats

### Advanced Calculator

Implement the advanced calculator:

7. Functionality for 'power'
8. Functionality for 'square root'

<br>

## Bonus Tasks

Add these additional settings to the calculator.

### Mortgage Calculator:

Calculate the monthly payment when given the other variables as input.
you need `principal`, `yearly interest rate` and the `number of payments`.

- [Morgage Link 1](http://www.wikihow.com/Calculate-Mortgage-Payments)
- [Morgage Link 2](http://www.wikihow.com/Sample/Mortgage-Payment)

**Example:** £100,000.00 for-  30 years (360 months) at 6% will yield a payment of just less than £600.00 (£599.55 to be exact`

### BMI Calculator:

Calculate the BMI when given the height and weight - the user should be able to choose between the imperial and the metric system

- [BMI Link 1](http://en.wikipedia.org/wiki/Body_mass_index)
- [BMI Link 1](http://www.wikihow.com/Image:BMI.jpg)

### Trip Calculator:

This feature asks the user for four inputs; distance, fuel efficiency (mpg), cost per gallon, speed and it will give you the time and price of your journey.

**Example output:** "Your trip will take 3.5 hours and cost £255.33.""

**Note:** For every 1 MPH over 60 MPH, reduce the the MPG by 2 MPG (i.e. a car that normally gets 30 mpg would only get 28 mpg if its speed were 61 mph. Yes this gets silly at high speed where mpg goes to zero or gets negative - how will you handle this?)

<br>

## Tips: Web APIs

When writing code for the Web using JavaScript, there are a great many APIs available. Below is a list of all the interfaces (that is, types of objects) that you may be able to use while developing your Web app or site.

#### Prompt() & Alert()

The `Window.prompt()` displays a dialog with an optional message prompting the user to input some text.

The `Window.alert()` method displays an alert dialog with the optional specified content and an OK button.

```
var answer = prompt("What is 5 multipled by 2?");

if (answer == 10) {
  alert("Wow! Correct!");
} else {
  alert("Wrong!")
}
```