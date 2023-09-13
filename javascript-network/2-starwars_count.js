#!/usr/bin/node
/*
const req = require('request');

const characterId = 18;

const url = process.argv[2];

req.get(url, (error, response, body) => {
    const object = JSON.parse(body);
    const wedgeAntilles = object.results.filter((film) => 
        film.characters.includes(`https://swapi-api.alx-tools.com/api/films/${characterId}`)
    );
    console.log(wedgeAntilles.length);
});
*/

const request = require('request');

// Check if the API URL is provided as an argument
if (process.argv.length !== 3) {
  console.error('Usage: node 2-starwars_count.js <API_URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

// Define the character ID for "Wedge Antilles"
const characterId = 18;

// Make a GET request to the Star Wars API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
    process.exit(1);
  }

  // Parse the JSON response
  const data = JSON.parse(body);

  // Filter films where "Wedge Antilles" is present
  const filmsWithWedgeAntilles = data.results.filter((film) =>
    film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
  );

  // Print the number of films
  console.log(filmsWithWedgeAntilles.length);
});
