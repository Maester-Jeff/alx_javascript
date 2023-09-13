#!/usr/bin/node

const req = require('request');

const characterId = 18;

const url = process.argv[2];

req.get(url, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }
    const movies = JSON.parse(body).results;
    const wedgeAntilles = movies.filter((movie => 
        movie.characters.includes(`https://swapi-api.alx-tools.com/api/films/${characterId}`)
    ));
    console.log(wedgeAntilles.length);
});
