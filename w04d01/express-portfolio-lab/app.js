// Requires our npm module
const express = require('express');
const morgan  = require('morgan');

// Create an express app
const app = express();

// Set the view directory to /views
app.set('views', `${__dirname}/views`);

// Let's use the Express templating language
app.set('view engine', 'ejs');

// Setup public folder to serve static files
app.use(express.static(`${__dirname}/public`));

// Logging middleware
app.use(morgan());

// Homepage
app.get('/', (req, res) => {
  res.render('index', { heading: 'My Portfolio' });
});

// Sonic Maze Page
app.get('/', (req, res) => {
  res.render('index', { heading: 'Express Portfolio Lab' });
});

app.get('/project_1', (req, res) => {
  res.render('project', {
    heading: 'Sonic Maze Game',
    paragraph: 'The classic Sonic Maze game!',
    image: '/images/sonicmaze.png',
    link: 'http://afternoon-woodland-32796.herokuapp.com/'
  });
});

app.get('/project_2', (req, res) => {
  res.render('project', {
    heading: 'Project 2',
    paragraph: 'Who knows what the next project will be.',
    image: '/images/coming-soon-rotate.png'
  });
});

app.get('/project_3', (req, res) => {
  res.render('project', {
    heading: 'Project 3',
    paragraph: 'Who knows what the next project will be.',
    image: '/images/coming-soon-rotate.png'
  });
});

app.get('/project_4', (req, res) => {
  res.render('project', {
    heading: 'Project 4',
    paragraph: 'Who knows what the next project will be.',
    image: '/images/coming-soon-rotate.png'
  });
});

// about page
app.get('/about', (req, res) => {
  res.render('about', {
    heading: 'About',
    paragraph: 'Something about me.',
    link: '#'
  });
});

// contact page
app.get('/contact', (req, res) => {
  res.render('contact', {
    heading: 'Contact',
    paragraph: 'My contact details.'
  });
});

app.get('*', (req, res) => {
  res.status(404).render('404', {
    heading: '404: Not found!',
    paragraph: 'You are looking for a file that does not exist, Try the links above.'});
});

// Logging middleware
app.use((req, res, next) => {
  console.log(`In comes a ${req.method} request to ${req.url}`);
  next();
});

// Add some middleware
app.use((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world!');
});

// Start it up!
app.listen(3000, () => console.log('Express is up and running'));
