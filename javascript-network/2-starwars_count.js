#!/usr/bin/node

const req = require('request');

const url = process.argv[2];

req.get(url, (error, response, body) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    const movies = JSON.parse(body).results;
    const characterId = '18';

    const wedgeAntilles = movies.filter((movie) => {
        return movie.characters.includes(`https://swapi-api.alx-tools.com/api/films/${characterID}`)
    });
    console.log(wedgeAntilles.length);
});
