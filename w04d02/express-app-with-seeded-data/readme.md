![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Express App with Seeded Data

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

Your task is to build an Express app, which displays data from a Mongo database. The data will be added to the database via a seeds file. Your app should have two models of your choosing, but these models should not be related (they should not be embedded or referenced).

Your app will have at least three pages, the homepage, and one page per model, rendering all instances of that model on the page using a loop in EJS.

Take this opportunity to experiment with a different CSS framework. Have a look at [Skeleton CSS](http://getskeleton.com/), [Foundation](http://foundation.zurb.com/) or [Pure CSS](https://purecss.io/), and research what each of them offer before you start.

## Exercise

### Requirements

* Using your lesson notes and the examples from today's classwork, set up your Express app.
* Remember to install `mongoose` and `bluebird`.
* Remember to install `ejs` and `express-ejs-layouts`.
* Create schemas for each of your models.
* Write your seeds file.
* Create routes to handle requests for the following: 
	* `GET` request to `/` which renders your homepage.
	* `GET` request to `/dogs` (or the name of your first model) which renders a page that loops through your first resource and displays them on the page.
	* `GET` request to `/cats` (or the name of your second model) which renders a page that loops through your second resource and displays them on the page.
	* A route that handles a `GET` request to any other address and renders a 404 page.
* Practice using partials.

### Bonus

* Make the site responsive.