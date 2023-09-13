#!/usr/bin/node

const req = require('request');

const characterId = process.argv[2];

const url = `https://swapi-api.alx-tools.com/api/films/${characterId}`;

req.get(url, (error, response, body) => {
    const object = JSON.parse(body);
    const wedgeAntilles = object.results.filter((film) => 
        film.characters.includes(url)
    );
    console.log(wedgeAntilles.length);
});
