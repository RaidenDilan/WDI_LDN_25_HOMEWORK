const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Student = require('../models/student');

mongoose.connect(dbURI);

Student.collection.drop();

const studentData = [{
  name: 'Adrian Welch',
  image: '../images/students/adrian.jpg',
  linkedIn: 'https://www.linkedin.com/in/adrian-welch-45561784/',
  gitHub: 'https://github.com/adrianwelch',
  mostLikelyTo: 'Be going out this friday/weekend'
}, {
  name: 'Alice Marshall',
  image: '../images/students/alice.jpg',
  linkedIn: 'https://www.linkedin.com/in/alice-marshall-1596419b/',
  gitHub: 'https://github.com/AliceMarshall',
  mostLikelyTo: 'Bring cakes to campus! NUM NUM NUM'
}, {
  name: 'Arrianne O`Shea',
  image: '../images/students/arrianne.jpg',
  linkedIn: 'https://www.linkedin.com/in/arrianne-o-shea-86536118/',
  gitHub: 'https://github.com/arrianne',
  mostLikelyTo: 'Give you a good laugh'
}, {
  name: 'Ben Currie',
  image: '../images/students/ben.jpg',
  linkedIn: 'https://www.linkedin.com/in/ben-currie-b31953137',
  gitHub: 'https://github.com/123THC',
  mostLikelyTo: 'Let you ride his motorbike... or maybe not!'
}, {
  name: 'Buki Thompson',
  image: '../images/students/buki.jpg',
  linkedIn: 'bukalothompson',
  gitHub: 'https://github.com/bukixo',
  mostLikelyTo: 'Know about a Meet-Up'
}, {
  name: 'Conor Heena',
  image: '../images/students/conor.jpg',
  linkedIn: 'https://www.linkedin.com/in/conorheena/',
  gitHub: 'https://github.com/heenslice',
  mostLikelyTo: 'Never shave his beard'
}, {
  name: 'Fabricio Ferreria',
  image: '../images/students/fab.jpg',
  linkedIn: 'WHAT HE DOES NOT HAVE ONE? FO REAL!?',
  gitHub: 'https://github.com/Ef-Eff',
  mostLikelyTo: 'Talk about how is he is better then Ben Currie!'
}, {
  name: 'Giacomo Brunetti',
  image: '../images/students/jack.jpg',
  linkedIn: 'https://www.linkedin.com/in/giacomo-brunetti-457062124/',
  gitHub: 'https://github.com/GiacomoBrunetti',
  mostLikelyTo: 'Be a good friend'
}, {
  name: 'Gianmaria Carrodano',
  image: '../images/students/gianmaria.jpg',
  linkedIn: 'https://www.linkedin.com/in/gianmaria-carrodano-0237a1139/',
  gitHub: 'https://github.com/James1988sp',
  mostLikelyTo: 'Coming Soon!'
}, {
  name: 'Gurvinder Singh',
  image: '../images/students/guv.jpg',
  linkedIn: 'https://www.linkedin.com/in/gurvindersinghsandhu/',
  gitHub: 'https://github.com/Microsingth',
  mostLikelyTo: 'Find you the best car licence plate! Sorry Guv!'
}, {
  name: 'Hannah Wynn Jones',
  image: '../images/students/hannah.jpg',
  linkedIn: 'https://www.linkedin.com/in/hannah-wynn-jones-21950785/',
  gitHub: 'https://github.com/hannahwynnones',
  mostLikelyTo: ''
}, {
  name: 'Huw Fernie',
  image: '../images/students/huw.jpg',
  linkedIn: 'https://www.linkedin.com/in/huw-fernie-545250137/',
  gitHub: 'https://github.com/huwfernie',
  mostLikelyTo: 'Become a great web developer in his career'
}, {
  name: 'Jake Adams',
  image: '../images/students/jake.jpg',
  linkedIn: 'https://www.linkedin.com/in/jake-adams-16b92476/',
  gitHub: 'https://github.com/jakeadamsiii',
  mostLikelyTo: 'Like my Instagram stories'
}, {
  name: 'Krisztian Groz',
  image: '../images/students/chris.jpg',
  linkedIn: 'https://www.linkedin.com/in/kriszti%C3%A1n-gr%C3%B3z-0a78a0105/',
  gitHub: 'https://github.com/KrisztianGroz',
  mostLikelyTo: 'Coming Soon!'
}, {
  name: 'Mark Davis',
  image: '../images/students/markd.jpg',
  linkedIn: 'https://www.linkedin.com/in/markjdvs/',
  gitHub: 'https://github.com/mrkjdvs',
  mostLikelyTo: 'To be a good story teller'
}, {
  name: 'Mark Sherrington',
  image: '../images/students/markS.jpg',
  linkedIn: 'https://www.linkedin.com/in/mark-sherrington/',
  gitHub: 'https://github.com/msherrington',
  mostLikelyTo: 'Get hungover!'
}, {
  name: 'Muge Ersoz',
  image: '../images/students/muge.jpg',
  linkedIn: 'https://www.linkedin.com/in/mugeersoz/',
  gitHub: 'https://github.com/mersoz',
  mostLikelyTo: 'Listen to music and sing out loud without her noticing'
}, {
  name: 'Olivia Vaughan-Fowler',
  image: '../images/students/olivia.jpg',
  linkedIn: 'https://www.linkedin.com/in/olivia-vaughan-fowler-a804813a/',
  gitHub: 'https://github.com/OliviaVF',
  mostLikelyTo: 'Own 10 leopard print shoes'
}, {
  name: 'Omar Harvey-Phillips',
  image: '../images/students/omar.jpg',
  linkedIn: 'https://www.linkedin.com/in/omarhphillips/',
  gitHub: 'https://github.com/omaotzu',
  mostLikelyTo: 'Make someone laugh!'
}, {
  name: 'Raiden Dilan',
  image: '../images/students/raiden1.jpg',
  linkedIn: 'https://www.linkedin.com/in/raiden-dilan-969791137/',
  gitHub: 'https://github.com/RaidenDilan',
  mostLikelyTo: 'Bore everyone during this presentation'
}, {
  name: 'Roman Stankiewicz',
  image: '../images/students/roman.jpg',
  linkedIn: 'https://www.linkedin.com/in/roman-stankiewicz-b94a5368/',
  gitHub: 'https://github.com/romanstan',
  mostLikelyTo: 'Have lunch for breakfast and dinner for lunch'
}, {
  name: 'Sam Domesjo',
  image: '../images/students/sam.jpg',
  linkedIn: 'https://www.linkedin.com/in/sam-domesj%C3%B6-11032b137/',
  gitHub: 'https://github.com/domesjo',
  mostLikelyTo: 'To get drunk with Melon Bellinis'
}, {
  name: 'Sam Wakefield',
  image: '../images/students/samw.jpg',
  linkedIn: 'https://www.linkedin.com/in/samwakefield/',
  gitHub: 'https://github.com/samsw69',
  mostLikelyTo: 'Have good management skills'
}, {
  name: 'Sarah Miller',
  image: '../images/students/sarah.jpg',
  linkedIn: 'https://www.linkedin.com/in/sarah-miller-3023249/',
  gitHub: 'https://github.com/sarahlikeshiny',
  mostLikelyTo: 'Have a good conversation about rocks'
}, {
  name: 'Tom Allen',
  image: '../images/students/tom.jpg',
  linkedIn: 'https://www.linkedin.com/in/thomas-allen-96600276/',
  gitHub: 'https://github.com/tjallen27',
  mostLikelyTo: 'Be cool'
}, {
  name: 'Valerio Risuleo',
  image: '../images/students/valerio.jpg',
  linkedIn: 'https://www.linkedin.com/in/valerio-risuleo/',
  gitHub: 'https://github.com/valeriorisuleo',
  mostLikelyTo: 'To make you laugh during stand-up'
}];

Student
  .create(studentData)
  .then(students => console.log(`${students.length} Students created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
