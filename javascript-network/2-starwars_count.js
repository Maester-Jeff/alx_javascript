#!/usr/bin/node

const req = require('request');

const url = process.argv[2];

const characterId = 18;

req.get(url, (error, response, body) => {
    const object = JSON.parse(body);
    const wedgeAntilles = object.results.filter((film) => {
        film.characters.includes(`https://swapi-api.alx-tools.com/api/films/${characterId}`)
    })
    console.log(wedgeAntilles.length);
});
