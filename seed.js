const mongoose = require('mongoose');
require('dotenv').config();
const Character = require('./models/character');

const characters = {
    WALDO: 'Waldo',
    WOOF: 'Woof',
    WILMA: 'Wilma',
    WHITEBEARD: 'Whitebeard',
    ODLAW: 'Odlaw'
}

const images = {
    1: 'waldo1',
    2: 'waldo2',
    3: 'waldo3'
}

const seedCharacters = [
  {
    name: characters.WALDO,
    image: images[1], 
    x: 1597,          
    y: 633         
  },
  {
    name: characters.WOOF,
    image: images[1],
    x: 1913,
    y: 1084
  },
  {
    name: characters.WILMA,
    image: images[1],
    x: 1088,
    y: 579
  },
  {
    name: characters.WHITEBEARD,
    image: images[1],
    x: 2384,
    y: 1508
  },
  {
    name: characters.ODLAW,
    image: images[1],
    x: 1127,
    y: 1057
  },
  {
    name: characters.WALDO,
    image: images[2],
    x: 1184,
    y: 335
  }, {
    name: "Lady burning trousers",
    image: images[2],
    x: 534,
    y: 733
  },
  {
    name: "Long man with the long tie",
    image: images[2],
    x: 2174,
    y: 1419
  },
  {
    name: "Glove attacking a man",
    image: images[2],
    x: 599,
    y: 1416
  },
  {
    name: characters.WALDO,
    image: images[3],
    x: 880,
    y: 663
  },
  {
    name: characters.WOOF,
    image: images[3],
    x: 1173,
    y: 394
  },
  {
    name: characters.WILMA,
    image: images[3],
    x: 892,
    y: 767
  }, {
    name: characters.WHITEBEARD,
    image: images[3],
    x: 1341,
    y: 983
  },
  {
    name: characters.ODLAW,
    image: images[3],
    x: 1204,
    y: 1211
  }

];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for seeding...');

    // Clear all old characters
    await Character.deleteMany({});
    console.log('Cleared existing characters.');

    // Insert the new seed data
    await Character.insertMany(seedCharacters);
    console.log('Added seed characters to the database.');

  } catch (err) {
    console.error('Seeding failed:', err);
  } finally {
    await mongoose.connection.close();
    console.log('Seeding complete. Connection closed.');
  }
};

seedDB();