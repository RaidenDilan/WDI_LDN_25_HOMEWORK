# Express Portfolio Lab

For this lab you are required to make a simple portfolio site for yourself.

>**Note:** This is not intended to be used as your **actual** portfolio site, simply as practice for setting up an Express app using views.

## Requirements

- You should create an Express App running on port 3000
- You must use Bootstrap or other CSS framework
- You site should be responsive

## Deliverables

You should have 3 templates:

- `index.ejs`
- `project.ejs`
- `404.ejs`

The index template will display the four projects that you will have made by the end of the course.

The first project should show a screenshot of your game, and its title. The others should display placeholder text and a placeholder image.

![screen shot 2017-02-20 at 16 38 20](https://cloud.githubusercontent.com/assets/3531085/23133993/08a628d6-f78b-11e6-9394-3626e32cb33c.png)

Clicking on any of the projects should display the project page, with title, image and a short description of the project. Use placeholder text and a placeholder image for the projects that you have not yet done.

![screen shot 2017-02-20 at 16 39 09](https://cloud.githubusercontent.com/assets/3531085/23134016/2136bc8a-f78b-11e6-9453-eb6a45a9dd6a.png)

Finally you should have a 404 error page to handle any paths that do not exist on your site.

![screen shot 2017-02-20 at 16 39 44](https://cloud.githubusercontent.com/assets/3531085/23134047/36cd9078-f78b-11e6-8eb2-5d98748181a6.png)

You should end up with a file structure similar to this:

```sh
├── package.json
├── public
│   ├── css
│   │   └── style.css
│   └── images
│       ├── Hangman1.jpg
│       └── coming-soon.png
├── node_modules
├── server.js
└── views
    ├── 404.ejs
    ├── index.ejs
    └── project.ejs
```


## Bonus

- Add an about page and a contact page with links to your Github and LinkedIn profile.
- Add an extra feature of Bootstrap like cards or modals.

## Tips

Make sure you read through your lesson notes from today to remind yourself on how to link Bootstrap.

Feel free to work in pairs for this project.
