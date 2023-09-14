#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];


const url = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(url, (error, response, body) => {
    const movieData = JSON.parse(body);
    const characterNames = movieData.characters;

    if (characterNames.length === 0) {
      console.log('No characters found for this movie.');
    } else {
      console.log('Characters in the movie:');
      characterNames.forEach((characterName) => {
        request(characterName, (charError, charResponse, charBody) => {
            const characterData = JSON.parse(charBody);
            console.log(characterData.name);
          }
        );
        });
    }});
