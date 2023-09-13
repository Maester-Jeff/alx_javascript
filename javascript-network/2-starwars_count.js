#!/usr/bin/node

const req = require('request');

const filmId = 18;

const url = process.argv[2];

req.get(url, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }
    const movies = JSON.parse(body);
    const wedgeAntilles = movies.results.filter((movie => 
        movie.characters.includes(`https://swapi-api.alx-tools.com/api/films/${filmId}`)
    ));
    console.log(wedgeAntilles.length);
});
