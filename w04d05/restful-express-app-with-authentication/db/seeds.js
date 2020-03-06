const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI);

const User = require('../models/user');
const Club = require('../models/club');

User.collection.drop();
Club.collection.drop();

User
  .create([{
    username: 'Raiden Dilan',
    email: 'raiden18@me.com',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} Users created!`);

    return Club
      .create([{
        name: 'Maddox Club',
        phone: '020 7629 8877',
        address: '3-5 Mill St, Mayfair, London W1S 2AU',
        website: 'www.maddoxclub.com',
        description: 'Since opening in 2007, Maddox Private Members Club has offered London a boutique sanctuary in which to party. Designed by interior mastermind Sammy Chams it is one of the only top members clubs that has a DJ booth within a restaurant, successfully creating a venue, where partying and dining co-exist under one roof. The glass DJ booth overlooks the ground floor restaurant, from which resident DJs provide a soundscape to compliment the gorgeous food and opulent decor. From here a stairwell leads to the subterranean nightclub where top UK and international DJs, alongside award- winning staff play host to Maddox Club Members and their guests. Maddox Club founder, Fred Moss has enjoyed a highly successful career as a Mayfair nightclub proprietor. His experience, coupled with his keen eye and ear with regards to the running and constant development of Maddox Club is key to ensuring Maddox Club members have the very best of service on all levels. The Maddox team, led by General Manager Mark Watts, relish the task of catering to the members needs and it is the personal touch that entices members to return on a weekly basis, contributing to the club’s continuing success.',
        lat: '51.5126809',
        lng: '-0.1422983',
        image1: 'http://crm.innerplace.co.uk/media/images/venues/kmaddox5jpg.jpg',
        image2: 'http://cdn.ltstatic.com/2007/April/SC871315_942long.jpg',
        image3: 'https://static.designmynight.com/uploads/2016/02/Maddox-3-optimised.jpg'
      }, {
        name: 'Aristocrat',
        phone: '020 7287 1919',
        address: '9 Swallow St, Mayfair, London W1B 4DE',
        website: 'www.aristokrat-london.com',
        description: 'Aristocrat is a discerning nightclub for those in the know. And those in the know are said to be international jet-setters, fashion icons and the art elite. Taking its place on Swallow Street, debauch cocktail fuelled nights are the order of the day, (well, night if we’re being pedantic) and will only be for a select 100 at any one time. As the name implies, they want you to feel like you’re in the house of the most honourable aristocrats. Modern street art sits next to noble baroque-era backdrops. Golden skulls will punctuate the walls, whilst ornate contemporary chandeliers hang from the bespoke copper ceilings. Sixteen bottle-serviced tables and banquettes for ten revellers will line the dancefloor, whilst the bar will be stocked with London’s finest spirits and most lavish Champagnes. There is no guest list, instead you have to get past the severe door lord, so you better start pulling in those favours now to get in with the right crowd or learn how to impress. If you are already sought after, then you might find yourself the owner of a limited edition key-fob that will automatically grant you access to Aristocrat… It’s like Willy Wonka’s golden ticket all over again.',
        lat: '51.5093524',
        lng: '-0.1375741',
        image1: 'https://s3.amazonaws.com/VenueFixer/venue_images/images/000/007/753/original/Aristocrat_VENUE_9_Nov_2016__0010.jpg?1480416274',
        image2: 'https://s3.amazonaws.com/VenueFixer/venue_images/images/000/007/756/original/Aristocrat_VENUE_9_Nov_2016__002_copy.jpg?1480416400',
        image3: 'https://s3.amazonaws.com/VenueFixer/venue_images/images/000/007/757/original/12.jpg?1480416450'
      }, {
        name: 'Drama',
        phone: '020 7208 4125',
        address: '35 Hertford St, Mayfair, London W1J 7SE',
        website: 'www.dramaparklane.com',
        description: 'Drama, formerly Whisky Mist, is the new project of the team behind Cirque le Soir. A club designed for London’s privileged class. It is located on Park Lane, a very popular area in the heart of Mayfair where you will find exclusive and luxurious hotels, restaurants and clubs that attract a number of wealthy guests. As you may know, Cirque le Soir is one of London\'s most talked about club, so we are sure Drama will be another hit in London’s nightlife scene! The club will be opening its doors soon so stay tuned for more news!',
        lat: '51.5053812',
        lng: '-0.1499175',
        image1: 'http://sfs.luxguestlist.com/cache/98959/nWNyWDthnt/kk/480_320_rsz_drama_98959.jpg',
        image2: 'http://sfs.luxguestlist.com/cache/98967/XcnBmjAxlR/fx/960_640_drama_park_lane_dancers_98967.jpg',
        image3: 'http://sfs.luxguestlist.com/cache/98966/BeQGENzDEx/ik/480_320_rsz_drama_10_98966.jpg'
      }, {
        name: 'Tape London',
        phone: '020 7659 9080',
        address: '7 Hanover Square, Mayfair, London W1S 1HU',
        website: 'www.tapelondon.com',
        description: 'Entering Tape from Hanover Square is like walking into the brass mouth of a trombone, its walls are papered with a gilded copper effect covering and a big chandelier hangs over the stairwell, resembling the horn of a gramophone player. Even from the moment you step in, it‘s clear what Tape‘s mission is - it‘s a club for people who really love music. Inspired by Dallas Austin, who produced seminal records for Madonna, Michael Jackson, Duran Duran, Rihanna and Gwen Stefani, Tape puts music first and foremost. As you enter the nightclub it‘s impossible to miss the pendant lighting laid out in a grid pattern, so it appears as if an army of trumpeters are playing down onto the club‘s dancefloor. Next to this and the edgy, neon-lit bar running along the right hand of the space, there‘s a raised stage where musicians can perform live. The room is split between two levels - on the higher one, there‘s the DJ booth, VIP tables and industrial raised podiums where go-go dancers pull shapes. The room is hotwired with a sound system from D&B Technik - which pulls no punches. Adjoining Tape is Liitle Tape, a 150 capacity private members‘ club and recording studio complete with a full-service restaurant; late night licensed bar; musical instruments available to play including a Baby Grand piano and guitars; as well as priceless musical memorabilia. Most notably, there‘s a fully equipped, sound proofed recording studio in Little Tape, designed by Munro Acoustics no less (Abbey Road, AIR Studios and The Yard).',
        lat: '51.5143945',
        lng: '-0.1449364',
        image1: 'http://sfs.luxguestlist.com/cache/102101/iHKpDPwsbN/fh/591_394_descarga_102101.jpg',
        image2: 'http://sfs.luxguestlist.com/cache/101735/dRcsxHTwRl/sw/800_600_tape_12_101735.jpg',
        image3: 'http://crm.innerplace.co.uk/media/images/venues/Tape3dancefloorjpg.jpg'
      }]);
  })
  .then((clubs) => {
    console.log(`${clubs.length} Clubs created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
