# WDI25 student

For your weekend assignment you'll be making a student for WDI25.

The student should display all of your classmates with images, and other data collected.
Keep it fun and lighthearted, and use it as an opportunity to share your contact details and headshots.

You need to create the server-side Express API _AND_ the client-side Angular App.

Use the starter code provided. There is nothing here that we have not covered over the last week, so make sure you review your lesson notes carefully. Also take some time to plan your app before you start coding. This will be good practice for your upcoming project.

**DO NOT ATTEMPT TO IMPLEMENT IMAGE UPLOAD** We will be looking into this next week!

## Requirements
- You will need two models:
  - User (for authentication and registration)
  - Student (for the students in the class)
- There should be _no embedded or referenced relationships in your models_
- A user needs to register and login if they want to amend the student data
- A user does not need to login to see the students INDEX and SHOW pages
- All forms should have error messages
- The student schema should include the following:
  - name `String` (required)
  - image `String` (required)
  - linkedIn `String` (link to the student's linkedIn profile)
  - github `String` (link to the student's github)
  - mostLikeyTo `String` (a bit of fun, something like "get drunk on melon bellinis")
- The app should be styled. You may use a CSS framework, but **do not include jQuery**

## Deliverables
- A full stack app with full CRUD actions on the Student resource
- Login / Registration capabilities

## Bonus
- Add some CSS animations and custom styling.

## Tips
- Build out the API first and test with Insomnia **before** starting the Angular App.