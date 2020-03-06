![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

## RESTful App with Authentication

### Introduction

Your task is to add authentication to the books application from the RESTful routing lesson. Take the `starter-code` and use today's lesson notes to add login, register and logout functionality, as well as securing some of the routes.

### Tasks

* Create a User model.
* Add routes to handle `GET` and `POST` requests to both `/login` and `/register`.
* Create controllers for sessions and registrations. 
* Create views for the login and register forms.
* Use `bcrypt` to hash the user's password.
* Use `express-sessions` to create a session cookie when the user logs in. 
* Use `express-flash` to show error messages to the user.
* Users should be able to see the books index and book show page when they are not logged in, but all other routes should be secure.
* Only show the 'Logout' link when the user is logged in.
* Only show the 'Log in' and 'Register' links when the user is logged out.
* There is no need to create view files for users. You don't need to render the users on the page.

### Bonus

* Add styles to the flash messages.
* Hide the 'Add Book', 'Edit' and 'Delete' links when the user is not logged in.
* Add images to the books.
