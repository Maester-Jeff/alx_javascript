#!/usr/bin/node

const req = require('request');

const id = process.argv[2];

const url = '${https://swapi-api.alx-tools.com/api/films/}${id}'

req.get(url, function (body) {
        const object = JSON.parse(body);
        console.log(object.title)
    })

